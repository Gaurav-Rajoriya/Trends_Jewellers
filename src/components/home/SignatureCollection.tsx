import { Link } from 'react-router-dom';
import Img from '../common/Img';
import SectionHeading, { AnimatedHeading } from '../common/SectionHeading';
import { useEnquiry } from '../../context/EnquiryContext';
import { necklaces, signatureSlugs } from '../../data/necklaces';

export default function SignatureCollection() {
  const { openEnquiry } = useEnquiry();

  const items = signatureSlugs
    .map((s) => necklaces.find((n) => n.slug === s)!)
    .filter(Boolean);

  return (
    <section className="section section-ivory" aria-label="Signature collection">
      <div className="wrap">
        <SectionHeading
          eyebrow="Signature Collection"
          title="Designs That Define the House"
          text="Three necklaces, three ways of wearing light."
        />

        <div className="editorial-list">
          {items.map((n, i) => (
            <article
              key={n.slug}
              className={`editorial-row ${i % 2 ? 'is-reversed' : ''}`}
            >
              <Link
                to={`/products/${n.slug}`}
                className="editorial-media"
                data-clip
                data-parallax
                aria-label={`View details: ${n.name}`}
              >
                <Img
                  name={n.images[1].key}
                  alt={n.images[1].alt}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Link>

              <div className="editorial-copy">
                <p className="eyebrow" data-reveal>
                  {n.collection}
                </p>

                <AnimatedHeading as="h3" text={n.name} />

                <p data-reveal>{n.inspiration}</p>
                <p data-reveal>{n.description}</p>

                <div className="card-actions" data-reveal>
                  <Link to={`/products/${n.slug}`} className="link-underline">
                    View Details
                  </Link>

                  <button
                    type="button"
                    className="link-underline"
                    onClick={() => openEnquiry(n.slug)}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}