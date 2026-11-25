import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trigger = (el: Element, start = 'top 88%') => ({ trigger: el, start, once: true });

/**
 * Wires scroll animations to data attributes inside the current scope (call inside gsap.context):
 *  [data-words]    staggered word-by-word heading reveal
 *  [data-reveal]   fade + rise
 *  [data-stagger]  staggered reveal of direct children
 *  [data-clip]     image clip reveal with inner scale settle
 *  [data-parallax] subtle image parallax (desktop only)
 * Returns a cleanup for the matchMedia-scoped parallax.
 */
export function initScrollAnimations(): () => void {
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach((h) => {
    gsap.from(h.querySelectorAll('.word-inner'), {
      yPercent: 115,
      duration: 1.15,
      ease: 'expo.out',
      stagger: 0.07,
      scrollTrigger: trigger(h, 'top 90%'),
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, { y: 32, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: trigger(el, 'top 90%') });
  });

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((el) => {
    gsap.from(el.children, {
      y: 36,
      opacity: 0,
      duration: 1,
      stagger: 0.13,
      ease: 'power3.out',
      scrollTrigger: trigger(el, 'top 88%'),
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 1.4, ease: 'power3.inOut', scrollTrigger: trigger(el) },
    );
    const img = el.querySelector('img');
    if (img) gsap.from(img, { scale: 1.18, duration: 1.8, ease: 'power2.out', scrollTrigger: trigger(el) });
  });

  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const img = el.querySelector('img');
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -6 },
        { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    });
  });

  window.setTimeout(() => ScrollTrigger.refresh(), 600);
  return () => mm.revert();
}
