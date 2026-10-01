import React from 'react';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { AboutSrashti } from '../components/AboutSrashti';
import { ServicesSection } from '../components/ServicesSection';
import { TarotExperience } from '../components/TarotExperience';
import { PricingSection } from '../components/PricingSection';
import { ShopSection } from '../components/ShopSection';
import { VisualBreak } from '../components/VisualBreak';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstagramSection } from '../components/InstagramSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onBookClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onBookClick }) => {
  return (
    <main className="w-full overflow-hidden">
      <Hero onBookClick={onBookClick} />
      <StatsStrip />
      <AboutSrashti onBookClick={onBookClick} />
      <ServicesSection onBookClick={onBookClick} />
      <TarotExperience onBookClick={onBookClick} />
      <PricingSection onBookClick={onBookClick} />
      <ShopSection isFullCatalogPage={false} />
      <VisualBreak />
      <TestimonialsSection />
      <InstagramSection />
      <FAQSection />
      <FinalCTA onBookClick={onBookClick} />
    </main>
  );
};
