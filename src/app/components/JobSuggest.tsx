import { HiOutlineArrowLeft } from 'react-icons/hi';

function JobSuggest() {
  return (
    <div className="flex flex-col items-center justify-around h-[42rem]">
      <div className="flex justify-between w-[70rem]">
        <p className="text-5xl font-bold">المزيد من الوظائف المفتوحة</p>
        <button className="border border-black h-[3.4rem] w-52 rounded-3xl cursor-pointer">
          تصفح الوظائف المفتوحة
        </button>
      </div>
      <div className="flex justify-around w-[90rem]">
        <div className="flex flex-col items-center justify-around rounded-t-[3rem] rounded-br-[3rem] h-80 w-[38rem] bg-slate-50">
          <div className="w-[80%] text-right">
            <p className="font-semibold text-blue-600">دوام كامل</p>
            <p className="my-3 text-2xl font-bold">
              مطور تطبيقات الهاتف المحمول
            </p>

            <p className=" text-slate-700">
              من ذوي الخبرة · 3-5 سنوات من الخبرة · تكنولوجيا المعلومات / تطوير
              البرمجيات · الهندسة - الاتصالات / التكنولوجيا · تطوير المحمول ·
              أندرويد
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="font-semibold ">2017 27 أغسطس</p>
              <HiOutlineArrowLeft size={40} className="text-blue-400 " />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-t-[3rem] rounded-br-[3rem] h-80 w-[38rem] bg-slate-50">
          <div className="w-[80%] text-right">
            <p className="font-semibold text-blue-600">دوام كامل</p>
            <p className="my-3 text-2xl font-bold">Senior Backend Developer </p>

            <p className=" text-slate-700">
              من ذوي الخبرة · 5-7 سنوات من الخبرة · تكنولوجيا المعلومات / تطوير
              البرمجيات · الهندسة - الاتصالات / التكنولوجيا · صافي · الإطار
              الصافي
            </p>

            <div className="flex items-center justify-between mt-3">
              <p className="font-semibold ">2017 27 أغسطس</p>
              <HiOutlineArrowLeft size={40} className="text-blue-400 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSuggest;
