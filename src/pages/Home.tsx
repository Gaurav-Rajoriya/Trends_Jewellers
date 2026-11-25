import { useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedNecklaces from '../components/home/FeaturedNecklaces';
import CampaignSlider from '../components/home/CampaignSlider';
import SignatureCollection from '../components/home/SignatureCollection';
import CraftsmanshipSection from '../components/home/CraftsmanshipSection';
import BrandStory from '../components/home/BrandStory';
import WhySection from '../components/home/WhySection';
import EnquiryCTA from '../components/home/EnquiryCTA';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useSeo } from '../hooks/useSeo';
import { imageUrl } from '../data/images';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimations(ref);
  useSeo({
    title: 'TRENDS JEWELLERS | Luxury Diamond Necklaces',
    description:
      'Explore luxury diamond necklaces from TRENDS JEWELLERS: solitaire, pendant, statement and tennis designs. Browse the collection and make an enquiry.',
    path: '/',
    image: imageUrl('hero'),
  });
  return (
    <div ref={ref}>
      <HeroSection />
      <FeaturedNecklaces />
      <CampaignSlider />
      <SignatureCollection />
      <CraftsmanshipSection />
      <BrandStory />
      <WhySection />
      <EnquiryCTA />
    </div>
  );
}
