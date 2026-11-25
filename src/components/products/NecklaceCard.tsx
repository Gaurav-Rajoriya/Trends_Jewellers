import { Link } from 'react-router-dom';
import Img from '../common/Img';
import { useEnquiry } from '../../context/EnquiryContext';
import type { Necklace } from '../../data/necklaces';

export default function NecklaceCard({ necklace, sizes = '(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw' }: { necklace: Necklace; sizes?: string }) {
  const { openEnquiry } = useEnquiry();
  const to = `/products/${necklace.slug}`;
  return (
    <article className="necklace-card">
      <Link to={to} className="card-media" aria-label={`View details: ${necklace.name}`}>
        <Img name={necklace.images[0].key} alt={necklace.images[0].alt} sizes={sizes} />
      </Link>
      <p className="card-collection">{necklace.collection}</p>
      <h3>
        <Link to={to}>{necklace.name}</Link>
      </h3>
      <p className="card-desc">{necklace.shortDescription}</p>
      <div className="card-actions">
        <Link to={to} className="link-underline">
          View Details
        </Link>
        <button type="button" className="link-underline" onClick={() => openEnquiry(necklace.slug)}>
          Enquire Now
        </button>
      </div>
    </article>
  );
}
