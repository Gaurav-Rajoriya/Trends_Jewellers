import { useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/products/ProductGallery';
import ProductInformation from '../components/products/ProductInformation';
import RelatedNecklaces from '../components/products/RelatedNecklaces';
import NotFound from './NotFound';
import { getNecklace } from '../data/necklaces';
import { imageUrl } from '../data/images';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';
import { site } from '../config/site';

export default function NecklaceDetails() {
  const { slug } = useParams();
  const necklace = getNecklace(slug);
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref, [slug]);

  // Structured data uses only facts we actually have: no price, offers, ratings, carat or certification.
  const jsonLd = useMemo(
    () =>
      necklace
        ? {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: necklace.name,
            description: necklace.description,
            image: necklace.images.map((i) => imageUrl(i.key)),
            category: 'Diamond Necklace',
            brand: { '@type': 'Brand', name: site.name },
            url: `${site.url}/products/${necklace.slug}`,
          }
        : undefined,
    [necklace],
  );

  useSeo({
    title: necklace ? `${necklace.name} | Diamond Necklace | TRENDS JEWELLERS` : 'Necklace not found | TRENDS JEWELLERS',
    description: necklace ? necklace.metaDescription : 'This necklace could not be found.',
    path: necklace ? `/products/${necklace.slug}` : '/products',
    image: necklace ? imageUrl(necklace.images[0].key) : undefined,
    jsonLd,
    noindex: !necklace,
  });

  if (!necklace) return <NotFound />;

  return (
    <div ref={ref} key={necklace.slug}>
      <section className="product-page">
        <div className="wrap product-layout">
          <ProductGallery necklace={necklace} />
          <ProductInformation necklace={necklace} />
        </div>
      </section>
      <RelatedNecklaces slug={necklace.slug} />
    </div>
  );
}
