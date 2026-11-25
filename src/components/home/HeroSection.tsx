
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Img from '../common/Img';
import { heroIntro, prefersReducedMotion } from '../../animations/gsapAnimations';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const ctx = gsap.context(
      () => heroIntro(ref.current as HTMLElement),
      ref.current
    );

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="hero" aria-label="Introduction">

      {/* Local Hero Background Image */}
      <div className="hero-bg">
        <Img
          name="hero"
          alt="Model wearing an elegant diamond necklace"
          eager
          sizes="100vw"
        />
      </div>

      <div className="hero-shade" />

      <div className="wrap hero-content">

        <h1 aria-label="The eternal beauty of diamonds">
          <span className="hero-line" aria-hidden="true">
            <span>The Eternal</span>
          </span>

          <span className="hero-line" aria-hidden="true">
            <span>Beauty of</span>
          </span>

          <span className="hero-line gold" aria-hidden="true">
            <span>Diamonds</span>
          </span>
        </h1>

        <p className="hero-fade hero-copy">
          Discover a world of exceptional diamond necklaces,
          where timeless elegance meets extraordinary design.
        </p>

        <div className="hero-fade cta-row">
          <Link to="/collections" className="btn btn-solid">
            <span>Explore Collection</span>
          </Link>

          <Link to="/about" className="btn">
            <span>Discover Our Story</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
