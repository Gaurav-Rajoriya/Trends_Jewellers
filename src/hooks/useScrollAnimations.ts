import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { initScrollAnimations } from '../animations/scrollAnimations';
import { prefersReducedMotion } from '../animations/gsapAnimations';

/** Applies the data-attribute scroll animations to everything inside `ref`. */
export function useScrollAnimations(ref: RefObject<HTMLElement>, deps: unknown[] = []) {
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    let cleanup: () => void = () => undefined;
    const ctx = gsap.context(() => {
      cleanup = initScrollAnimations();
    }, ref.current);
    return () => {
      cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
