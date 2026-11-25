import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { necklaces } from '../../data/necklaces';
import { validateEnquiry, type EnquiryErrors, type EnquiryValues } from '../../services/validation';
import { EnquiryError, submitEnquiry } from '../../services/enquiry';

type Status = 'idle' | 'submitting' | 'success' | 'error';
const GENERAL = 'general';
const MIN_FILL_MS = 2500;

interface Props {
  /** Preselected necklace slug (from a product page or an "Enquire Now" button). */
  defaultSlug?: string;
  idPrefix?: string;
}

export default function EnquiryForm({ defaultSlug = '', idPrefix = 'enq' }: Props) {
  const [values, setValues] = useState<EnquiryValues>({ name: '', phone: '', email: '', necklaceSlug: defaultSlug || GENERAL, message: '' });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const locked = useRef(false);
  const openedAt = useRef(Date.now());

  useEffect(() => setValues((v) => ({ ...v, necklaceSlug: defaultSlug || GENERAL })), [defaultSlug]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof EnquiryValues]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (locked.current) return; // prevents duplicate submissions
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`${idPrefix}-${first}`)?.focus();
      return;
    }
    // Spam protection: hidden honeypot field and a minimum fill time. Add server-side checks too (see README).
    if (honeypot || Date.now() - openedAt.current < MIN_FILL_MS) {
      setServerError('We could not submit your enquiry. Please wait a moment and try again.');
      setStatus('error');
      return;
    }
    locked.current = true;
    setStatus('submitting');
    setServerError('');
    const selected = necklaces.find((n) => n.slug === values.necklaceSlug);
    try {
      await submitEnquiry({
        name: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        necklace: selected ? selected.name : 'General enquiry',
        necklaceSlug: values.necklaceSlug,
        message: values.message.trim(),
        pageUrl: window.location.href,
        honey: honeypot,
      });
      setStatus('success');
    } catch (err) {
      setServerError(err instanceof EnquiryError ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    } finally {
      locked.current = false;
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h3>Thank you, {values.name.trim().split(' ')[0]}.</h3>
        <p>Your enquiry has been sent. Our team will get back to you using the details you shared.</p>
        <button
          type="button"
          className="link-underline"
          onClick={() => {
            setValues({ name: '', phone: '', email: '', necklaceSlug: GENERAL, message: '' });
            openedAt.current = Date.now();
            setStatus('idle');
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (key: keyof EnquiryValues) => ({
    id: `${idPrefix}-${key}`,
    name: key,
    value: values[key],
    onChange,
    'aria-invalid': Boolean(errors[key]),
    'aria-describedby': errors[key] ? `${idPrefix}-${key}-err` : undefined,
  });
  const err = (key: keyof EnquiryValues) =>
    errors[key] ? (
      <span className="field-error" id={`${idPrefix}-${key}-err`} role="alert">
        {errors[key]}
      </span>
    ) : null;

  return (
    <form className="enquiry-form" onSubmit={onSubmit} noValidate>
      <label htmlFor={`${idPrefix}-name`}>
        Full Name
        <input {...field('name')} type="text" autoComplete="name" required />
        {err('name')}
      </label>
      <div className="form-row">
        <label htmlFor={`${idPrefix}-phone`}>
          Phone Number
          <input {...field('phone')} type="tel" autoComplete="tel" inputMode="tel" required />
          {err('phone')}
        </label>
        <label htmlFor={`${idPrefix}-email`}>
          Email Address
          <input {...field('email')} type="email" autoComplete="email" required />
          {err('email')}
        </label>
      </div>
      <label htmlFor={`${idPrefix}-necklaceSlug`}>
        Selected Necklace
        <select {...field('necklaceSlug')} required>
          <option value={GENERAL}>General enquiry</option>
          {necklaces.map((n) => (
            <option key={n.slug} value={n.slug}>
              {n.name}
            </option>
          ))}
        </select>
        {err('necklaceSlug')}
      </label>
      <label htmlFor={`${idPrefix}-message`}>
        Message
        <textarea {...field('message')} rows={4} maxLength={1000} placeholder="Tell us what you are looking for (optional)" />
        {err('message')}
      </label>
      <div className="hp-field" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {serverError}
        </p>
      )}
      <button type="submit" className="btn btn-solid" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
        <span>{status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}</span>
      </button>
    </form>
  );
}
