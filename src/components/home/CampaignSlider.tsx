import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Img from '../common/Img';
import { prefersReducedMotion, slideTextIn } from '../../animations/gsapAnimations';
import type { ImageKey } from '../../data/images';

const slides: { image: ImageKey; title: string; text: string; alt: string }[] = [
  { image: 'editorial', title: 'Light, Framed', text: 'Necklaces that let the diamond lead.', alt: 'Diamond necklace in an editorial campaign photograph' },
  { image: 'rectangularPendant', title: 'Evenings, Elevated', text: 'Statement pieces for the moments that matter.', alt: 'Statement diamond necklace set for formal evenings' },
  { image: 'hero', title: 'Layer With Intent', text: 'Chains and pendants made to be worn together.', alt: 'Layered diamond tennis necklace with a moon pendant' },
  { image: 'tennis', title: 'Close, Precise, Striking', text: 'Chokers that frame the neckline with quiet confidence.', alt: 'Choker necklace worn with off-the-shoulder styling' },
];

export default function CampaignSlider() {
  const swiper = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);
  const reduced = prefersReducedMotion();

  return (
    <section className="campaign" aria-roledescription="carousel" aria-label="Diamond necklace campaigns" data-reveal>
      <Swiper
        modules={[Autoplay, EffectFade, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        loop
        autoplay={reduced ? false : { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={(s) => {
          swiper.current = s;
          slideTextIn(s.slides[s.activeIndex]);
        }}
        onSlideChange={(s) => {
          setActive(s.realIndex);
          if (!reduced) slideTextIn(s.slides[s.activeIndex]);
        }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.title} aria-label={`${i + 1} of ${slides.length}`}>
            <div className="slide-img">
              <Img name={s.image} alt={s.alt} sizes="100vw" widths={[800, 1280, 1920]} />
            </div>
            <div className="slide-shade" />
            <div className="wrap slide-wrap">
              <div className="slide-text">
                <p className="eyebrow">Campaign {String(i + 1).padStart(2, '0')}</p>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <Link to="/collections" className="btn btn-solid">
                  <span>Explore Collection</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slide-controls">
        <span aria-live="polite">
          {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <button type="button" aria-label="Previous campaign" onClick={() => swiper.current?.slidePrev()}>
          ←
        </button>
        <button type="button" aria-label="Next campaign" onClick={() => swiper.current?.slideNext()}>
          →
        </button>
      </div>
    </section>
  );
}
