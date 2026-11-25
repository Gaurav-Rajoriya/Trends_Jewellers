
import { useRef } from 'react';
import { AnimatedHeading } from '../components/common/SectionHeading';
import EnquiryForm from '../components/products/EnquiryForm';
import { site } from '../config/site';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollAnimations(ref);

  useSeo({
    title: 'Contact & Enquiries | TRENDS JEWELLERS',
    description:
      'Contact TRENDS JEWELLERS for jewellery enquiries. Our team will assist you personally.',
    path: '/contact',
  });

  const { phone, email, address } = site.contact;

  return (
    <div ref={ref}>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Contact
          </p>

          <AnimatedHeading
            as="h1"
            text="Let's Find Your Perfect Diamond Necklace."
          />

          <p className="lead" data-reveal>
            Tell us which necklace caught your eye, or simply what you
            are looking for. Our team will respond personally.
          </p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="wrap contact-layout">

          {/* Left: Enquiry Form */}
          <div data-reveal>
            <EnquiryForm idPrefix="contact" />
          </div>

          {/* Right: Contact Information */}
          <aside
            className="contact-details"
            data-reveal
            aria-label="Contact information"
          >
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>We'd Love to Hear From You.</h2>

            <p className="contact-intro">
              Have questions about our collections or need assistance?
              Get in touch with our team. We're always happy to help.
            </p>

            {address && (
              <div className="contact-info-item">
                <span className="contact-icon">⌖</span>
                <div>
                  <h3>Our Location</h3>
                  <p>{address}</p>
                </div>
              </div>
            )}

            {phone && (
              <div className="contact-info-item">
                <span className="contact-icon">✆</span>
                <div>
                  <h3>Phone Number</h3>
                  <p>{phone}</p>
                </div>
              </div>
            )}

            {email && (
              <div className="contact-info-item">
                <span className="contact-icon">✉</span>
                <div>
                  <h3>Email Address</h3>
                  <p>{email}</p>
                </div>
              </div>
            )}

            <div className="contact-note">
              <p>WHERE ELEGANCE MEETS ETERNITY</p>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
