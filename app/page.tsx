import Navigation from '@/components/navigation';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import CallToAction from '@/components/sections/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
