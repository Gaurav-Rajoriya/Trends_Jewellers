import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { pageEnter, prefersReducedMotion } from '../../animations/gsapAnimations';
import { scrollToTop } from '../../animations/smoothScroll';

/** Curtain wipe + content fade on every route change. The first load is handled by the hero intro. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const curtain = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    scrollToTop();
    if (first.current) {
      first.current = false;
      return;
    }
    if (prefersReducedMotion()) return;
    const tl = pageEnter(curtain.current, content.current);
    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <>
      <div ref={curtain} className="page-curtain" aria-hidden="true" />
      <div ref={content}>{children}</div>
    </>
  );
}
