function Footer() {
  return (
    <footer className="flex flex-col justify-around text-white bg-blue-700 h-[50rem] lg:h-[30rem] pb-4">
      <div className="flex flex-col items-center">
        <div className="flex w-[80%]">
          <div className="flex flex-col flex-grow-[3]">
            <p className="mb-4 font-bold">الصفحات</p>
            <div className="flex text-sm font-light lg:text-base">
              <ul className="flex-1">
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
              <ul className="flex-1">
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
          <div className="flex-1">
            <p className="mb-5 font-bold">تابعنا</p>
            <div className="text-sm font-light lg:text-base">
              <button className="flex my-3">
                <img src="../assets/Facebook_logo.svg" alt="Facebook_logo" />
                <p className="mr-2">Facebook</p>
              </button>
              <button className="flex my-3">
                <img src="../assets/Twitter_logo.svg" alt="Twitter_logo" />
                <p className="mr-2">Twitter</p>
              </button>
              <button className="flex my-3">
                <img src="../assets/Instagram_logo.svg" alt="Instagram_logo" />
                <p className="mr-2">Instagram</p>
              </button>
              <button className="flex my-3">
                <img src="../assets/LinkedIn_logo.svg" alt="LinkedIn_logo" />
                <p className="mr-2">LinkedIn</p>
              </button>
              <button className="flex my-3">
                <img src="../assets/YouTube_logo.svg" alt="YouTube_logo" />
                <p className="mr-2">YouTube</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center lg:mt-6">
        <p className=" w-[90%] lg:w-[78rem] font-light">
          الاستثمار أداء عالية المخاطر قد يتعرض لها المستثمرين تتعثر الجهة طالبة
          لتمويل عند سداد التزاماتها أو فقدان راس مال المستثمر، لذا تعمل سند
          المالية على الحد من هذه المخاطر عبر الدارسة المفصلة والدقيقة لمنشأت
          طالبة التمويل قبل طرحها للمستثمرين ، لا تتحمل شركة سند المالية أو
          شركائها أو موظفيها مسؤولية أي نوع من الخسائر المالية.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-around h-52 lg:h-72 w-[95%]">
        <div>
          <img
            src="../assets/white_logo.svg"
            alt="logo"
            className="w-36 lg:w-[90%]"
          />
        </div>
        <p className="text-sm">Copyright &copy; Sanad Capital Company</p>
        <div className="flex items-center justify-around lg:justify-center w-[45%] lg:w-auto mt-3 lg:mt-0">
          <img
            src="../assets/review_bureau.svg"
            alt="review_bureau_logo"
            className="w-12 h-12 lg:w-10 lg:h-10"
          />
          <img
            src="../assets/CMA.svg"
            alt="CMA_logo"
            className="mt-2 mr-4 lg:w-[10rem] lg:mr-2 w-52 lg:mt-0"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
