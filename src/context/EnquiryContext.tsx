import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import EnquiryModal from '../components/products/EnquiryModal';

interface EnquiryState {
  isOpen: boolean;
  /** slug of the preselected necklace, or '' for a general enquiry */
  slug: string;
  nonce: number;
}

interface EnquiryContextValue {
  openEnquiry: (slug?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<EnquiryState>({ isOpen: false, slug: '', nonce: 0 });
  const openEnquiry = useCallback((slug = '') => setState((s) => ({ isOpen: true, slug, nonce: s.nonce + 1 })), []);
  const closeEnquiry = useCallback(() => setState((s) => ({ ...s, isOpen: false })), []);
  const value = useMemo(() => ({ openEnquiry, closeEnquiry }), [openEnquiry, closeEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal key={state.nonce} open={state.isOpen} slug={state.slug} onClose={closeEnquiry} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextValue {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside EnquiryProvider');
  return ctx;
}
