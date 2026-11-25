import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import NecklaceGrid from '../products/NecklaceGrid';
import { featuredSlugs, necklaces } from '../../data/necklaces';

export default function FeaturedNecklaces() {
  const items = featuredSlugs.map((s) => necklaces.find((n) => n.slug === s)!).filter(Boolean);
  return (
    <section className="section" aria-label="Featured diamond necklaces">
      <div className="wrap">
        <div className="heading-row">
          <SectionHeading eyebrow="Featured" title="Featured Diamond Necklaces" text="A selection of designs chosen for their line, light and presence." />
          <Link to="/collections/diamond-necklaces" className="link-underline" data-reveal>
            View the full collection
          </Link>
        </div>
        <NecklaceGrid items={items} columns={4} />
      </div>
    </section>
  );
}
