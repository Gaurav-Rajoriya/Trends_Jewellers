import { useRef } from 'react';
import { AnimatedHeading } from '../components/common/SectionHeading';
import NecklaceGrid from '../components/products/NecklaceGrid';
import EnquiryCTA from '../components/home/EnquiryCTA';
import { necklaces } from '../data/necklaces';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';

export default function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref);
  useSeo({
    title: 'Luxury Diamond Necklaces Collection | TRENDS JEWELLERS',
    description:
      'Browse the TRENDS JEWELLERS collection of elegant diamond necklace designs: pendants, tennis necklaces, chokers and statement sets. Enquire about any design.',
    path: '/collections/diamond-necklaces',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Diamond Necklaces',
      description: 'Diamond necklace designs by TRENDS JEWELLERS.',
    },
  });
  return (
    <div ref={ref}>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            The Collection
          </p>
          <AnimatedHeading as="h1" text="The Art of Diamond Necklaces" />
          <p className="lead" data-reveal>
            Explore an elegant selection of diamond necklaces designed to bring brilliance, sophistication and timeless beauty to every occasion.
          </p>
        </div>
      </header>
      <section className="section section-tight" aria-label="All diamond necklaces">
        <div className="wrap">
          <NecklaceGrid items={necklaces} />
        </div>
      </section>
      <EnquiryCTA />
    </div>
  );
}
