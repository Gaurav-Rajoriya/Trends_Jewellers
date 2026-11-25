export interface EnquiryValues {
  name: string;
  phone: string;
  email: string;
  necklaceSlug: string;
  message: string;
}
export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  const digits = v.phone.replace(/[\s\-().]/g, '');
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (!/^\+?\d{7,15}$/.test(digits)) e.phone = 'Enter a valid phone number (7 to 15 digits, optional + prefix).';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.necklaceSlug) e.necklaceSlug = 'Please select a necklace, or choose General enquiry.';
  if (v.message.length > 1000) e.message = 'Please keep your message under 1000 characters.';
  return e;
}
