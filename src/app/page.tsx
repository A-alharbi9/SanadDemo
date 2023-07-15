import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import JobDesc from './components/JobDesc';
import JobSuggest from './components/JobSuggest';

export default function Home() {
  return (
    <>
      <Hero />
      <JobDesc />
      <JobSuggest />
      <Contact />
      <Footer />
    </>
  );
}
