function Hero() {
  return (
    <div className="flex justify-center bg-blue-700 h-[40rem] rounded-br-[12rem]">
      <div className="flex flex-col items-center justify-around text-white">
        <div className="flex flex-col items-center justify-around text-center h-96">
          <h1 className="text-6xl w-[35rem]">UI/UX and Product Designer</h1>
          <p className=" w-[55%] py-2 my-2 text-center font-light">
            تساعد استراتيجيات العلامات التجارية المبهجة من الناحية الجمالية على
            الوصول بفعالية إلى المزيد من العملاء. كما أنهم يضمنون أن الرحلة
            الشاملة مع منتجاتهم أو خدماتهم تلبي النتائج المرجوة
          </p>

          <button className="w-40 h-16 text-xl rounded-full bg-emerald-500">
            تقدم الآن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
