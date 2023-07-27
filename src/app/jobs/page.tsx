import Hero from '../components/Hero';
import JobDesc from '../components/jobs/JobDesc';
import JobSuggest from '../components/jobs/JobSuggest';
import Jobinfo from '../components/jobs/JobInfo';
import Contact from '../components/Contact';

export default function page() {
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
          title="Senior Backend Developer"
          desc=" من ذوي الخبرة · 5-7 سنوات من الخبرة · تكنولوجيا المعلومات / تطوير
        البرمجيات · الهندسة - الاتصالات / التكنولوجيا · صافي · الإطار
        الصافي"
          date="2019 أغسطس
        6"
        />
      </JobSuggest>
      <Contact />
    </>
  );
}
