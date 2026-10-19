import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedGallerySection } from '../components/home/FeaturedGallerySection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBanner } from '../components/home/CtaBanner';
import { RoofingProject, RoofingService } from '../types';

interface HomePageProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onNavigate: (path: string) => void;
  onSelectProject: (p: RoofingProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onNavigate,
  onSelectProject
}) => {
  return (
    <div className="w-full">
      <HeroSection
        onOpenQuote={() => onOpenQuote()}
        onExploreProjects={() => onNavigate('/gallery')}
      />

      <TrustSection />

      <ServicesSection
        onSelectService={(s) => {
          onNavigate('/services');
        }}
        onOpenQuote={(title) => onOpenQuote(title)}
        onViewAllServices={() => onNavigate('/services')}
      />

      <FeaturedGallerySection
        onSelectProject={onSelectProject}
        onViewAllProjects={() => onNavigate('/gallery')}
      />

      <WhyChooseSection onOpenQuote={() => onOpenQuote()} />

      <ProcessSection onOpenQuote={() => onOpenQuote()} />

      <FaqSection onOpenQuote={() => onOpenQuote()} />

      <CtaBanner onOpenQuote={() => onOpenQuote()} />
    </div>
  );
};
