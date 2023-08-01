import Contact from './components/Contact';
import Certification from './components/home/Certification';
import Hero from './components/home/Hero';
import HowWeWork from './components/home/HowWeWork';
import InvestJoin from './components/home/InvestJoin';
import InvestOpportunity from './components/home/InvestOpportunity';

export default function Home() {
  return (
    <>
      <Hero />
      <InvestOpportunity />
      <InvestJoin />
      <HowWeWork />
      <Certification />
      <Contact />
    </>
  );
}
