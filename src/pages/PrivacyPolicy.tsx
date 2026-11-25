import { useRef } from 'react';
import { AnimatedHeading } from '../components/common/SectionHeading';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';
import { site } from '../config/site';

export default function PrivacyPolicy() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref);
  useSeo({ title: 'Privacy Policy | TRENDS JEWELLERS', description: 'How TRENDS JEWELLERS handles the personal information shared through its enquiry form.', path: '/privacy-policy' });
  return (
    <div ref={ref}>
      <header className="page-head">
        <div className="wrap">
          <AnimatedHeading as="h1" text="Privacy Policy" />
        </div>
      </header>
      <section className="section section-tight">
        <div className="wrap legal">
          <h2>Information we collect</h2>
          <p>When you submit an enquiry we collect your name, phone number, email address, the necklace you are enquiring about and any message you choose to write.</p>
          <h2>How we use it</h2>
          <p>We use this information only to respond to your enquiry and to assist you with the necklace you are interested in. We do not sell your personal information.</p>
          <h2>Sharing</h2>
          <p>
            Your enquiry is delivered to our team through the email or form service we use to receive messages. That service processes the information only to deliver it to us.
          </p>
          <h2>Retention</h2>
          <p>We keep enquiry details for as long as needed to deal with your request and our related correspondence.</p>
          <h2>Your choices</h2>
          <p>You may ask us to correct or delete the information you have shared with us at any time.{site.contact.email ? <> Write to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</> : ' Contact us through the enquiry form.'}</p>
          <h2>Cookies and analytics</h2>
          <p>This website does not use advertising cookies. If analytics tools are added in future, this policy will be updated.</p>
        </div>
      </section>
    </div>
  );
}
