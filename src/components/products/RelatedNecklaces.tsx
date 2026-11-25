import NecklaceGrid from './NecklaceGrid';
import { AnimatedHeading } from '../common/SectionHeading';
import { relatedNecklaces } from '../../data/necklaces';

export default function RelatedNecklaces({ slug }: { slug: string }) {
  return (
    <section className="section section-dark" aria-label="Related designs">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow" data-reveal>
            More from the collection
          </p>
          <AnimatedHeading text="Related Designs" />
        </div>
        <NecklaceGrid items={relatedNecklaces(slug)} />
      </div>
    </section>
  );
}
