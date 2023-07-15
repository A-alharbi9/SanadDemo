function Footer() {
  return (
    <footer className="relative flex flex-col justify-around text-white bg-blue-700 h-[30rem] pb-2">
      <div className="absolute w-screen bg-blue-700 h-28 -top-24">
        <span></span>
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex">
          <div className="flex flex-col px-2 py-2  w-[40rem]">
            <p className="mb-4 font-bold">الصفحات</p>
            <div className="flex ">
              <ul className="flex-1 mx-4">
                <li>الصفحة الرئيسية</li>
                <li>من نحن</li>
                <li>مستثمر</li>
                <li>طالب تمويل</li>
                <li>تواصل معنا</li>
                <li>الأسئلة الشائعة</li>
                <li>التسجيل</li>
              </ul>
              <ul className="flex-1 ">
                <li>تسجيل الدخول</li>
                <li>ابدأ الاستثمار</li>
                <li>الوظائف</li>
                <li>مهنة واحدة</li>
                <li>مركز المساعدة</li>
                <li>فريق العمل</li>
                <li>الشروط والاحكام</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-5 font-bold">تابعنا</p>
            <div className="flex my-3">
              <img src="../assets/Facebook_logo.svg" alt="Facebook_logo" />
              <p className="mr-2">Facebook</p>
            </div>
            <div className="flex my-3">
              <img src="../assets/Twitter_logo.svg" alt="Twitter_logo" />
              <p className="mr-2">Twitter</p>
            </div>
            <div className="flex my-3">
              <img src="../assets/Instagram_logo.svg" alt="Instagram_logo" />
              <p className="mr-2">Instagram</p>
            </div>
            <div className="flex my-3">
              <img src="../assets/LinkedIn_logo.svg" alt="LinkedIn_logo" />
              <p className="mr-2">LinkedIn</p>
            </div>
            <div className="flex my-3">
              <img src="../assets/YouTube_logo.svg" alt="YouTube_logo" />
              <p className="mr-2">YouTube</p>
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
