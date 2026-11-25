const env = import.meta.env;

/** Central business config. Contact and social values appear on the site ONLY when set in .env. */
export const site = {
  name: 'TRENDS JEWELLERS',
  tagline: 'Where Elegance Meets Eternity',
  url: (env.VITE_SITE_URL || '').replace(/\/$/, '') || window.location.origin,
  /** FormSubmit.co target: the receiving email address, or the random token FormSubmit gives you (keeps the email hidden). */
  formSubmitId: env.VITE_FORMSUBMIT_ID || '',
  contact: {
    phone: env.VITE_CONTACT_PHONE || '',
    email: env.VITE_CONTACT_EMAIL || '',
    address: env.VITE_CONTACT_ADDRESS || '',
  },
  social: [
    { label: 'Instagram', href: env.VITE_SOCIAL_INSTAGRAM || '' },
    { label: 'Facebook', href: env.VITE_SOCIAL_FACEBOOK || '' },
    { label: 'Pinterest', href: env.VITE_SOCIAL_PINTEREST || '' },
  ].filter((s) => s.href),
};
