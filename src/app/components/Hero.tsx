import { BASE_FONT, BASE_FONT_LIGHT } from '../constants/pageFonts';

function Hero() {
  return (
    <div
      className={`${BASE_FONT.className} relative flex justify-center bg-[#0249AC] h-[37rem] lg:h-[38rem] rounded-br-[6rem] lg:rounded-br-[12rem] overflow-x-hidden`}
    >
      <img
        src="../assets/shape_group_two.svg"
        alt="shape_group_two"
        className="absolute scale-125 -rotate-45 w-28 left-7 lg:left-12 bottom-20 lg:bottom-32 opacity-40 lg:opacity-100"
      />
      <img
        src="../assets/shape_group_one.svg"
        alt="shape_group_one"
        className="absolute -rotate-45 transform scale-x-[-1] -right-40 top-28 opacity-40 lg:opacity-100"
      />
      <div className="flex flex-col items-center justify-around text-white h-[90%] lg:h-[85%] z-10">
        <div className="flex flex-col items-center justify-around text-center h-[30rem] lg:h-[85%]">
          <div className="flex flex-col items-center justify-center w-24 h-14 bg-[#4BB6AE] rounded-t-3xl rounded-br-3xl">
            <p className="h-full mt-3 text-xl">تصميم</p>
          </div>
          <h1 className=" text-5xl md:text-6xl lg:text-[4.5rem]/[5rem] text- w-[min(95%,40rem)] font-semibold">
            UI/UX and Product Designer
          </h1>
          <p
            className={`${BASE_FONT.className} w-[90%] md:w-[60%] lg:w-[55%] lg:text-lg py-2 my-2 text-center text-[#D0E1FF] opacity-95 font-light`}
          >
            تساعد استراتيجيات العلامات التجارية المبهجة من الناحية الجمالية على
            الوصول بفعالية إلى المزيد من العملاء. كما أنهم يضمنون أن الرحلة
            الشاملة مع منتجاتهم أو خدماتهم تلبي النتائج المرجوة.
          </p>

          <button className="w-[min(90%,11rem)] h-20 text-xl font-bold text-center rounded-full bg-[#4BB6AE] hover:bg-emerald-400 transition duration-300 hover:scale-105">
            تقدم الآن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
