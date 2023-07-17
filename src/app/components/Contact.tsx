function Contact() {
  return (
    <div className="bg-[#001943] lg:rounded-tl-[12.5rem] h-[40rem]">
      <div className="relative flex flex-col justify-center items-start bg-[#0249AC] lg:rounded-tl-[12.5rem] rounded-br-[12.5rem] h-[37rem] px-4 overflow-hidden z-10">
        <img
          src="../assets/shape_rect.svg"
          alt="shape_rect"
          className="absolute left-0 top-24"
        />
        <img
          src="../assets/shape_group_one.svg"
          alt="shape_group_one"
          className="absolute -bottom-5 left-20"
        />
        <img
          src="../assets/shape_group_two.svg"
          alt="shape_group_two"
          className=" absolute bottom-32 left-[29rem]"
        />
        <div className="flex justify-center items-center lg:w-[50%] mx-3 lg:mx-5 z-10">
          <div className="flex flex-col items-start px-4 text-white">
            <p className="mb-4 text-4xl lg:text-5xl/[5rem] font-semibold w-[80%] lg:w-[90%]">
              اتصل بنا اليوم للحصول على استشارة مجانية
            </p>
            <div className="flex justify-start mt-[2.5rem]">
              <button className=" text-center font-bold h-16 w-44 lg:ml-4 bg-[#4BB6AE] hover:bg-emerald-400 lg:text-lg hover:text-white transition duration-300 hover:scale-105 rounded-[4rem]">
                تواصل معنا
              </button>
              <button className="mr h-16 text-center font-bold border border-white border-solid lg:text-lg transition duration-300 hover:scale-105 w-44 hover:bg-slate-200 hover:text-black rounded-[4rem]">
                خدماتنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
