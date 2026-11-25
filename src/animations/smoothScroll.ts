import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Smooth scrolling synced with ScrollTrigger. Skipped entirely for reduced-motion users. */
export function initSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => undefined;
  lenis = new Lenis({ lerp: 0.09 });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

export const scrollToTop = (): void => {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
};

export const setScrollLocked = (locked: boolean): void => {
  document.body.style.overflow = locked ? 'hidden' : '';
  if (lenis) (locked ? lenis.stop() : lenis.start());
};
