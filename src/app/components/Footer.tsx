function Footer() {
  return (
    <footer className="flex flex-col justify-around text-white bg-blue-700 h-[30rem] pb-4">
      <div className="flex flex-col items-center">
        <div className="flex w-[80%]">
          <div className="flex flex-col flex-grow-[3]">
            <p className="mb-4 font-bold">الصفحات</p>
            <div className="flex font-light">
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
              <ul className="flex-1 ">
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
          <div className="flex-1 ">
            <p className="mb-5 font-bold">تابعنا</p>
            <div className="font-light ">
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
      <div className="flex justify-center text-center">
        <p className="w-[78rem] font-light">
          الاستثمار أداء عالية المخاطر قد يتعرض لها المستثمرين تتعثر الجهة طالبة
          لتمويل عند سداد التزاماتها أو فقدان راس مال المستثمر، لذا تعمل سند
          المالية على الحد من هذه المخاطر عبر الدارسة المفصلة والدقيقة لمنشأت
          طالبة التمويل قبل طرحها للمستثمرين ، لا تتحمل شركة سند المالية أو
          شركائها أو موظفيها مسؤولية أي نوع من الخسائر المالية.
        </p>
      </div>
      <div className="flex items-center justify-around ">
        <div>
          <img src="../assets/white_logo.svg" alt="logo" className="w-full" />
        </div>
        Copyright &copy; Sanad Capital Company
        <div className="flex">
          <img src="../assets/review_bureau.svg" alt="review_bureau_logo" />
          <img src="../assets/CMA.svg" alt="CMA_logo" className="mr-2" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
