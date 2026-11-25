import { site } from '../config/site';

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  necklace: string;
  necklaceSlug: string;
  message: string;
  pageUrl: string;
  /** Honeypot value; FormSubmit silently drops submissions where this is non-empty. */
  honey: string;
}

export class EnquiryError extends Error {
  constructor(public code: 'not-configured' | 'network' | 'server' | 'timeout', message: string) {
    super(message);
  }
}

/**
 * Sends the enquiry through FormSubmit.co (AJAX endpoint).
 * Resolves ONLY when FormSubmit confirms success. With no VITE_FORMSUBMIT_ID it rejects,
 * so the UI never shows success for an enquiry that was not delivered.
 */
export async function submitEnquiry(p: EnquiryPayload): Promise<void> {
  if (!site.formSubmitId) {
    console.warn('[enquiry] VITE_FORMSUBMIT_ID is not set. See README.md.');
    throw new EnquiryError('not-configured', 'Our enquiry service is not connected yet. Please try again later.');
  }
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.formSubmitId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New enquiry: ${p.necklace} (${p.name})`,
        _template: 'table',
        _captcha: 'false',
        _honey: p.honey,
        Name: p.name,
        Phone: p.phone,
        email: p.email,
        Necklace: p.necklace,
        Message: p.message || '(no message)',
        Page: p.pageUrl,
      }),
      signal: controller.signal,
    });
    const data = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
    const ok = res.ok && (data?.success === true || data?.success === 'true');
    if (!ok) throw new EnquiryError('server', 'We could not send your enquiry. Please try again in a moment.');
  } catch (err) {
    if (err instanceof EnquiryError) throw err;
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new EnquiryError('timeout', 'The request took too long. Please check your connection and try again.');
    }
    throw new EnquiryError('network', 'We could not reach our server. Please check your connection and try again.');
  } finally {
    window.clearTimeout(timer);
  }
}
