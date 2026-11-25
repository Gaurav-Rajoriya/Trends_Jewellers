import { useEffect, useRef } from 'react';
import EnquiryForm from './EnquiryForm';
import { setScrollLocked } from '../../animations/smoothScroll';

interface Props {
  open: boolean;
  slug: string;
  onClose: () => void;
}

export default function EnquiryModal({ open, slug, onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement as HTMLElement | null;
    setScrollLocked(true);
    const t = window.setTimeout(() => panel.current?.querySelector<HTMLElement>('input, select, textarea')?.focus(), 80);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>('button, input:not([tabindex="-1"]), select, textarea, a[href]');
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) (e.preventDefault(), last.focus());
      else if (!e.shiftKey && document.activeElement === last) (e.preventDefault(), first.focus());
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      setScrollLocked(false);
      opener.current?.focus();
    };
  }, [open, onClose]);

  return (
    <div className={`modal ${open ? 'is-open' : ''}`} aria-hidden={!open} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={panel} className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
        <button type="button" className="modal-close" aria-label="Close enquiry form" onClick={onClose}>
          ×
        </button>
        <p className="eyebrow">Enquiry</p>
        <h2 id="enquiry-modal-title">Enquire About a Diamond Necklace</h2>
        {open && <EnquiryForm defaultSlug={slug} idPrefix="modal" />}
      </div>
    </div>
  );
}
