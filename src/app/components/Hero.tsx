function Hero() {
  return (
    <div className="relative flex justify-center bg-blue-700 h-[40rem] rounded-br-[12rem] overflow-x-hidden">
      <img
        src="../assets/shape_group_two.svg"
        alt="shape_group_two"
        className="absolute -rotate-45 left-9 bottom-16"
      />
      <img
        src="../assets/shape_group_one.svg"
        alt="shape_group_one"
        className="absolute -right-40 transform scale-x-[-1] -rotate-45 top-28"
      />
      <div className="flex flex-col items-center justify-around text-white">
        <div className="flex flex-col items-center justify-around text-center h-96">
          <h1 className="text-6xl w-[35rem]">UI/UX and Product Designer</h1>
          <p className=" w-[55%] py-2 my-2 text-center font-light">
            تساعد استراتيجيات العلامات التجارية المبهجة من الناحية الجمالية على
            الوصول بفعالية إلى المزيد من العملاء. كما أنهم يضمنون أن الرحلة
            الشاملة مع منتجاتهم أو خدماتهم تلبي النتائج المرجوة.
          </p>

          <button className="w-40 h-16 text-xl rounded-full bg-emerald-500 hover:bg-emerald-400">
            تقدم الآن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
