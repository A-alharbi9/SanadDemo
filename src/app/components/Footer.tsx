function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around text-white bg-[#001943] min-h-[50rem] lg:min-h-[40rem] ">
      <div className="flex flex-col items-start w-[80%] lg:w-[90%]">
        <div className="flex flex-col lg:flex-row justify-between w-full h-[37rem] lg:w-[85%] px-2">
          <div className="flex flex-col justify-around w-full lg:justify-center lg:w-auto">
            <p className="mb-10 font-bold lg:text-xl">الصفحات</p>
            <div className="flex justify-between text-lg lg:gap-x-[23rem] lg:h-[18rem]">
              <ul className="flex flex-col justify-around lg:text-lg text-[#D0E1FF] opacity-95">
                <li>
                  <button className="cursor-pointer">الصفحة الرئيسية</button>
                </li>
                <li>
                  <button className="cursor-pointer">من نحن</button>
                </li>
                <li>
                  <button className="cursor-pointer">مستثمر</button>
                </li>
                <li>
                  <button className="cursor-pointer">طالب تمويل</button>
                </li>
                <li>
                  <button className="cursor-pointer">تواصل معنا</button>
                </li>
                <li>
                  <button className="cursor-pointer">الأسئلة الشائعة</button>
                </li>
                <li>
                  <button className="cursor-pointer">التسجيل</button>
                </li>
              </ul>
              <ul className="flex flex-col justify-around lg:text-lg text-[#D0E1FF] opacity-95">
                <li>
                  <button className="cursor-pointer ">تسجيل الدخول</button>
                </li>
                <li>
                  <button className="cursor-pointer ">ابدأ الاستثمار</button>
                </li>
                <li>
                  <button className="cursor-pointer ">الوظائف</button>
                </li>
                <li>
                  <button className="cursor-pointer ">مهنة واحدة</button>
                </li>
                <li>
                  <button className="cursor-pointer ">مركز المساعدة</button>
                </li>
                <li>
                  <button className="cursor-pointer ">فريق العمل</button>
                </li>
                <li>
                  <button className="cursor-pointer ">الشروط والاحكام</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:justify-center">
            <p className="mb-5 text-xl font-bold">تابعنا</p>
            <div className="flex flex-col justify-around text-lg text-[#D0E1FF] py-1 opacity-95">
              <button className="flex my-2">
                <img src="../assets/Facebook_logo.svg" alt="Facebook_logo" />
                <p className="mr-2">Facebook</p>
              </button>
              <button className="flex my-2">
                <img src="../assets/Twitter_logo.svg" alt="Twitter_logo" />
                <p className="mr-2">Twitter</p>
              </button>
              <button className="flex my-2">
                <img src="../assets/Instagram_logo.svg" alt="Instagram_logo" />
                <p className="mr-2">Instagram</p>
              </button>
              <button className="flex my-2">
                <img src="../assets/LinkedIn_logo.svg" alt="LinkedIn_logo" />
                <p className="mr-2">LinkedIn</p>
              </button>
              <button className="flex my-2">
                <img src="../assets/YouTube_logo.svg" alt="YouTube_logo" />
                <p className="mr-2">YouTube</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center overflow-hidden">
        <div className="border-b border-[#253C64] w-[90%] pb-5">
          <p className="text-[#D0E1FF] text-xs lg:text-base opacity-95">
            الاستثمار أداء عالية المخاطر قد يتعرض لها المستثمرين تتعثر الجهة
            طالبة لتمويل عند سداد التزاماتها أو فقدان راس مال المستثمر، لذا تعمل
            سند المالية على الحد من هذه المخاطر عبر الدارسة المفصلة والدقيقة
            لمنشأت طالبة التمويل قبل طرحها للمستثمرين ، لا تتحمل شركة سند
            المالية أو شركائها أو موظفيها مسؤولية أي نوع من الخسائر المالية.
          </p>
        </div>
        <div className="flex flex-row items-center justify-around mb-2 w-[95%] lg:w-[90%] py-2">
          <div className="">
            <img
              src="../assets/white_logo.svg"
              alt="logo"
              className="w-36 lg:w-52 "
            />
          </div>
          <div className="flex items-center lg:justify-center lg:w-auto">
            <img
              src="../assets/review_bureau.svg"
              alt="review_bureau_logo"
              className="w-10 h-10 lg:w-14 lg:h-20 "
            />
            <img
              src="../assets/CMA.svg"
              alt="CMA_logo"
              className="mt-2 mr-4 lg:w-[15rem] w-48 lg:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-20">
          <p className="text-base text-[#B3BBD0] mx-2 lg:mx-0">
            Copyright &copy; Sanad Capital Company
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
