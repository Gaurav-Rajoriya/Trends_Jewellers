import { useRef } from 'react';
import { AnimatedHeading } from '../components/common/SectionHeading';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';

export default function Terms() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref);
  useSeo({ title: 'Terms and Conditions | TRENDS JEWELLERS', description: 'Terms of use for the TRENDS JEWELLERS diamond necklace showcase and enquiry website.', path: '/terms' });
  return (
    <div ref={ref}>
      <header className="page-head">
        <div className="wrap">
          <AnimatedHeading as="h1" text="Terms and Conditions" />
        </div>
      </header>
      <section className="section section-tight">
        <div className="wrap legal">
          <h2>About this website</h2>
          <p>This website showcases the diamond necklace designs of TRENDS JEWELLERS and lets you send us an enquiry. It is not an online store and no purchase can be made through it.</p>
          <h2>Product information</h2>
          <p>Descriptions and photographs are provided for presentation. Diamond, metal and size details, availability and pricing are confirmed directly with our team when you enquire.</p>
          <h2>Enquiries</h2>
          <p>Submitting an enquiry does not create an obligation to purchase or a guarantee of availability. Please provide accurate contact details so that we can reach you.</p>
          <h2>Intellectual property</h2>
          <p>The TRENDS JEWELLERS name, logo, text and design of this website may not be copied or reused without permission.</p>
          <h2>Changes</h2>
          <p>We may update these terms and the content of this website from time to time. Continued use of the website means you accept the updated terms.</p>
        </div>
      </section>
    </div>
  );
}
