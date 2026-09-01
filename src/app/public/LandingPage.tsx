import { HeaderPublic } from '@/components/public/HeaderPublic';
import { HeroSection } from '@/components/public/HeroSection';
import { ClientsSection } from '@/components/public/ClientsSection';
import { AboutSection } from '@/components/public/AboutSection';
//import { NewsletterSection } from '@/components/public/NewsletterSection';
import { FooterPublic } from '@/components/public/FooterPublic';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30 font-sans">
      <HeaderPublic />

      <main>
        <HeroSection />

        <ClientsSection />

        <AboutSection />
      </main>

      <FooterPublic />
    </div>
  );
};
