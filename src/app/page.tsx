import Contact from './components/Contact';
import Certification from './components/home/Certification';
import Credit from './components/home/Credit';
import FAQ from './components/home/FAQ';
import Hero from './components/home/Hero';
import HowWeWork from './components/home/HowWeWork';
import InvestJoin from './components/home/InvestJoin';
import InvestOpportunity from './components/home/InvestOpportunity';
import OurPartners from './components/home/OurPartners';

export default function Home() {
  return (
    <>
      <Hero />
      <InvestOpportunity />
      <InvestJoin />
      <HowWeWork />
      <Certification />
      <FAQ />
      <Credit />
      <OurPartners />
      <Contact />
    </>
  );
}
