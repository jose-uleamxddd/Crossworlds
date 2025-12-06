import Navigation from '@/components/navigation';
import Hero from '@/components/sections/hero';
import GetInvolved from '@/components/sections/get-involved';
import CallToAction from '@/components/sections/cta';
import StatementOfFaith from '@/components/sections/statement-of-faith';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <GetInvolved />
      <CallToAction />
      <StatementOfFaith />
      <Footer />
    </main>
  );
}
