import { useRef, useState, type MouseEvent } from 'react';
import Img from '../common/Img';
import { galleryTransition } from '../../animations/gsapAnimations';
import type { Necklace } from '../../data/necklaces';

export default function ProductGallery({ necklace }: { necklace: Necklace }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const current = necklace.images[index];

  const select = (i: number) => {
    if (i === index) return;
    setZoom(false);
    galleryTransition(mainRef.current?.querySelector('img') ?? null, () => setIndex(i));
  };

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const img = e.currentTarget.querySelector<HTMLElement>('.zoom-layer');
    if (img) img.style.transformOrigin = `${((e.clientX - box.left) / box.width) * 100}% ${((e.clientY - box.top) / box.height) * 100}%`;
  };

  return (
    <div className="product-gallery">
      <div
        ref={mainRef}
        className={`gallery-main ${zoom ? 'is-zoomed' : ''}`}
        data-clip
        onMouseMove={move}
        onClick={(e) => {
          move(e as unknown as MouseEvent<HTMLDivElement>);
          setZoom((z) => !z);
        }}
        role="button"
        tabIndex={0}
        aria-label={zoom ? 'Zoom out of photograph' : 'Zoom into photograph'}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setZoom((z) => !z))}
      >
        <div className="zoom-layer">
          <Img name={current.key} alt={current.alt} eager sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
      </div>
      <div className="gallery-thumbs" role="group" aria-label="Product photographs">
        {necklace.images.map((im, i) => (
          <button key={im.key} type="button" aria-pressed={i === index} aria-label={`Show photograph ${i + 1}`} onClick={() => select(i)}>
            <Img name={im.key} alt="" widths={[200, 400]} sizes="96px" />
          </button>
        ))}
      </div>
    </div>
  );
}
