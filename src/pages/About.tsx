import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Img from '../components/common/Img';
import { AnimatedHeading } from '../components/common/SectionHeading';
import EnquiryCTA from '../components/home/EnquiryCTA';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';
import { imageUrl } from '../data/images';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref);
  useSeo({
    title: 'Our Story | TRENDS JEWELLERS',
    description: 'TRENDS JEWELLERS celebrates the enduring beauty of diamond necklaces through elegant designs, thoughtful detailing and timeless aesthetics.',
    path: '/about',
    image: imageUrl('presentation'),
  });
  return (
    <div ref={ref}>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Our Story
          </p>
          <AnimatedHeading as="h1" text="Where Elegance Meets Eternity" />
          <p className="lead" data-reveal>
            TRENDS JEWELLERS celebrates the enduring beauty of diamond necklaces through elegant designs, thoughtful detailing and timeless aesthetics.
          </p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="wrap split">
          <div className="split-media" data-clip data-parallax>
            <Img name="presentation" alt="Diamond jewellery presented in a luxury box" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div>
            <AnimatedHeading text="Timeless by Intention" />
            <p className="body-copy" data-reveal>
              Every necklace tells a story of individuality, beauty and personal expression. Our focus is the diamond necklace: a piece that frames the face,
              catches the light and stays with its owner through the moments that matter.
            </p>
            <p className="body-copy" data-reveal>
              We choose designs for their proportion and restraint. A necklace should feel like it belongs to the wearer, not the other way round.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap split split-reverse">
          <div>
            <AnimatedHeading text="The Beauty of the Diamond" />
            <p className="body-copy" data-reveal>
              A diamond is at its best when it is allowed to do what it does naturally: gather light and give it back. The settings and silhouettes we favour
              are designed to support that, never to compete with it.
            </p>
            <p className="body-copy" data-reveal>
              From a single pendant resting at the collarbone to a statement set made for a formal evening, each design is a different way of wearing the same
              idea.
            </p>
          </div>
          <div className="split-media" data-clip data-parallax>
            <Img name="macroOne" alt="Close-up of brilliant faceted diamonds" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap values" data-stagger>
          <div>
            <h3>Personal Expression</h3>
            <p>Jewellery is personal. We help you find a necklace that feels like yours.</p>
          </div>
          <div>
            <h3>Special Occasions</h3>
            <p>Weddings, anniversaries, celebrations and gifts deserve a piece with meaning.</p>
          </div>
          <div>
            <h3>Personalised Assistance</h3>
            <p>
              Tell us what you are looking for through our <Link to="/contact" className="link-inline">enquiry form</Link> and our team will guide you.
            </p>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </div>
  );
}
