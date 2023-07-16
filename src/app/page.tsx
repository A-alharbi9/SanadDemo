import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import JobDesc from './components/JobDesc';
import Jobinfo from './components/JobInfo';
import JobSuggest from './components/JobSuggest';

export default function Home() {
  return (
    <>
      <Hero />
      <JobDesc />
      <JobSuggest>
        <Jobinfo
          type="دوام كامل"
          title="
              مطور تطبيقات الهاتف المحمول"
          desc=" 
              من ذوي الخبرة · 3-5 سنوات من الخبرة · تكنولوجيا المعلومات / تطوير
              البرمجيات · الهندسة - الاتصالات / التكنولوجيا · تطوير المحمول ·
              أندرويد"
          date="2019 أغسطس
              6"
        />
        <Jobinfo
          type="دوام كامل"
          title="Senior sus engineer"
          desc=" من ذوي الخبرة · 5-7 سنوات من الخبرة · تكنولوجيا المعلومات / تطوير
        البرمجيات · الهندسة - الاتصالات / التكنولوجيا · صافي · الإطار
        الصافي"
          date="2019 أغسطس
        6"
        />
      </JobSuggest>
      <Contact />
      <Footer />
    </>
  );
}
