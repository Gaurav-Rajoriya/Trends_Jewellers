
import { useEffect, useState } from 'react';
import { IMAGE_IDS, type ImageKey } from '../../data/images';

interface Props {
  name: ImageKey;
  alt: string;
  sizes?: string;
  eager?: boolean;
  widths?: number[];
  className?: string;
}

/** Responsive local photograph with error handling. */
export default function Img({
  name,
  alt,
  sizes = '100vw',
  eager,
  className
}: Props) {
  const [failed, setFailed] = useState(false);

  const image = IMAGE_IDS[name];

  useEffect(() => {
    setFailed(false);
  }, [name]);

  return (
    <img
      className={className}
      src={image}
      alt={alt}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      style={failed ? { opacity: 0 } : undefined}
    />
  );
}
