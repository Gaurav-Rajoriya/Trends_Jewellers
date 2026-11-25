export interface NavItem {
  label: string;
  to: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/about' },
  { label: 'Collections', to: '/collections' },
  // { label: 'Diamond Necklaces', to: '/collections/diamond-necklaces' },
  { label: 'Contact', to: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/about' },
  { label: 'Collections', to: '/collections' },
  { label: 'Contact', to: '/contact' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms and Conditions', to: '/terms' },
];

export function isNavActive(to: string, pathname: string): boolean {
  if (to === '/') return pathname === '/';
  if (to === '/collections') return pathname === '/collections';
  if (to === '/collections/diamond-necklaces') return pathname.startsWith('/collections/diamond-necklaces') || pathname.startsWith('/products');
  return pathname.startsWith(to);
}
