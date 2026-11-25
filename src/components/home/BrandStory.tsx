import { Link } from 'react-router-dom';
import Img from '../common/Img';
import SectionHeading from '../common/SectionHeading';

export default function BrandStory() {
  return (
    <section className="section section-graphite" aria-label="Brand story">
      <div className="wrap split split-reverse">
        <div>
          <SectionHeading eyebrow="Our Story" title="More Than Jewellery. A Lasting Expression of Elegance." />
          <p className="body-copy" data-reveal>
            TRENDS JEWELLERS celebrates the enduring beauty of diamond necklaces through timeless design and thoughtful detailing. We believe fine jewellery
            is personal: a piece chosen for how it feels to wear as much as for how it looks.
          </p>
          <p className="body-copy" data-reveal>
            Whether it marks a special occasion or simply an ordinary day made better, a diamond necklace is a quiet way of saying who you are.
          </p>
          <Link to="/about" className="btn" data-reveal>
            <span>Read Our Story</span>
          </Link>
        </div>
        <div className="split-media" data-clip data-parallax>
          <Img name="emeraldQueenBridal" alt="Fine gold necklace styled elegantly" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
