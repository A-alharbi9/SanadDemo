function Contact() {
  return (
    <div className="bg-blue-700 lg:rounded-tl-[7rem] h-[42rem]">
      <div className="relative flex flex-col justify-center items-start bg-blue-600 lg:rounded-tl-[7rem] rounded-br-[7rem] h-[35rem] px-4 overflow-hidden z-10">
        <img
          src="../assets/shape_rect.svg"
          alt="shape_rect"
          className="absolute left-0 hidden lg:block top-24"
        />
        <img
          src="../assets/shape_group_one.svg"
          alt="shape_group_one"
          className="absolute hidden lg:block -bottom-5 left-20"
        />
        <img
          src="../assets/shape_group_two.svg"
          alt="shape_group_two"
          className="hidden lg:block absolute bottom-32 left-[29rem]"
        />
        <div className="flex justify-center lg:w-[45rem] mx-3 lg:mx-7">
          <div className="flex flex-col items-center px-4 text-white lg:items-start">
            <p className="mb-4 text-4xl font-semibold lg:w-[80%]">
              اتصل بنا اليوم للحصول على استشارة مجانية
            </p>
            <div className="flex justify-center mt-4">
              <button className="h-12 ml-3 text-center border border-white border-solid w-28 hover:bg-slate-200 hover:text-black rounded-3xl">
                خدماتنا
              </button>
              <button className="h-12 text-center w-28 bg-emerald-500 hover:bg-emerald-400 rounded-3xl">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
