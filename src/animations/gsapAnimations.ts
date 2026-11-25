import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cinematic hero: slow image settle, staggered headline lines, supporting copy. */
export function heroIntro(scope: HTMLElement): void {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.fromTo(scope.querySelector('.hero-bg'), { scale: 1.14 }, { scale: 1, duration: 2.6, ease: 'power2.out' }, 0)
    .from(scope.querySelectorAll('.hero-line > span'), { yPercent: 115, duration: 1.4, stagger: 0.12 }, 0.25)
    .from(scope.querySelectorAll('.hero-fade'), { y: 24, opacity: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' }, 0.9);

  gsap.to(scope.querySelector('.hero-bg'), {
    yPercent: 9,
    ease: 'none',
    scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom top', scrub: true },
  });
}

/** Campaign slide text entrance. */
export function slideTextIn(slide: Element | null): void {
  if (!slide) return;
  gsap.fromTo(
    slide.querySelectorAll('.slide-text > *'),
    { y: 34, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, delay: 0.35, ease: 'power3.out', overwrite: true },
  );
}

/** Product gallery: soft crossfade + slight scale when the photograph changes. */
export function galleryTransition(img: HTMLElement | null, swap: () => void): void {
  if (!img || prefersReducedMotion()) {
    swap();
    return;
  }
  gsap.to(img, {
    opacity: 0,
    duration: 0.28,
    ease: 'power1.in',
    onComplete: () => {
      swap();
      gsap.fromTo(img, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' });
    },
  });
}

/** Page curtain wipe + content fade between routes. */
export function pageEnter(curtain: HTMLElement | null, content: HTMLElement | null): gsap.core.Timeline {
  return gsap
    .timeline()
    .fromTo(curtain, { yPercent: 0 }, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' })
    .fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.25);
}
