import Header from '@/src/components/home/Header';
import HeroSection from '@/src/components/home/HeroSection';
import TrustBadges from '@/src/components/home/TrustBadges';
import StepsSection from '@/src/components/home/StepsSection';
import ScienceSection from '@/src/components/home/ScienceSection';
import TestimonialsSection from '@/src/components/home/TestimonialsSection';
import CtaSection from '@/src/components/home/CtaSection';
import Footer from '@/src/components/home/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <HeroSection />
      <TrustBadges />
      <StepsSection />
      <ScienceSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
