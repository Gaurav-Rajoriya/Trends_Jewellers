import Img from '../common/Img';
import { AnimatedHeading } from '../common/SectionHeading';
import { useEnquiry } from '../../context/EnquiryContext';

export default function EnquiryCTA() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="enquiry-cta" aria-label="Make an enquiry">
      <div className="cta-bg" data-parallax>
        <Img name="macroTwo" alt="" sizes="100vw" widths={[800, 1280, 1920]} />
      </div>
      <div className="cta-shade" />
      <div className="wrap cta-inner">
        <AnimatedHeading text="Find the necklace that speaks to you." />
        <p data-reveal>Explore our diamond necklace collection and connect with our team for personalised assistance.</p>
        <button type="button" className="btn btn-solid" data-reveal onClick={() => openEnquiry()}>
          <span>Make an Enquiry</span>
        </button>
      </div>
    </section>
  );
}
