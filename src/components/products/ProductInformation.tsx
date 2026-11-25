import { Link } from 'react-router-dom';
import { AnimatedHeading } from '../common/SectionHeading';
import { useEnquiry } from '../../context/EnquiryContext';
import type { Necklace } from '../../data/necklaces';

export default function ProductInformation({ necklace }: { necklace: Necklace }) {
  const { openEnquiry } = useEnquiry();
  return (
    <div className="product-info">
      <p className="eyebrow" data-reveal>
        {necklace.collection}
      </p>
      <AnimatedHeading as="h1" text={necklace.name} className="product-title" />
      <p className="lead" data-reveal>
        {necklace.description}
      </p>

      <dl className="spec-list" data-reveal>
        {necklace.specs.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="info-block" data-reveal>
        <h2>Design Inspiration</h2>
        <p>{necklace.inspiration}</p>
      </div>
      <div className="info-block" data-reveal>
        <h2>Styling Suggestions</h2>
        <ul>
          {necklace.styling.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="product-cta" data-reveal>
        <button type="button" className="btn btn-solid" onClick={() => openEnquiry(necklace.slug)}>
          <span>Enquire About This Necklace</span>
        </button>
        <Link to="/collections/diamond-necklaces" className="link-underline">
          Back to the collection
        </Link>
      </div>
    </div>
  );
}
