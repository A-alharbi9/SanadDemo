function Hero() {
  return (
    <div className="relative flex justify-center bg-[#0249AC] h-[37rem] lg:h-[38rem] rounded-br-[6rem] lg:rounded-br-[12rem] overflow-x-hidden">
      <img
        src="../assets/shape_group_two.svg"
        alt="shape_group_two"
        className="absolute -rotate-45 lg:block left-9 bottom-16"
      />
      <img
        src="../assets/shape_group_one.svg"
        alt="shape_group_one"
        className="absolute -right-40 transform scale-x-[-1] -rotate-45 top-28"
      />
      <div className="flex flex-col items-center justify-around text-white h-[90%] z-10">
        <div className="flex flex-col items-center justify-around lg:justify-between text-center h-[30rem] lg:h-96">
          <div className="flex flex-col items-center justify-center w-24 h-14 bg-[#4BB6AE] rounded-t-3xl rounded-br-3xl">
            <p className="h-full mt-2 text-xl">تصميم</p>
          </div>
          <h1 className="text-6xl w-[95%] lg:w-[35rem] font-semibold">
            UI/UX and Product Designer
          </h1>
          <p className=" w-[90%] lg:w-[55%] py-2 my-2 text-center font-light">
            تساعد استراتيجيات العلامات التجارية المبهجة من الناحية الجمالية على
            الوصول بفعالية إلى المزيد من العملاء. كما أنهم يضمنون أن الرحلة
            الشاملة مع منتجاتهم أو خدماتهم تلبي النتائج المرجوة.
          </p>

          <button className="w-40 h-16 text-xl font-bold text-center rounded-full bg-[#4BB6AE] hover:bg-emerald-400 transition duration-300 hover:scale-105">
            تقدم الآن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
