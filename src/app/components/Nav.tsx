function Nav() {
  return (
    <div className="py-3 bg-blue-700">
      <nav className="flex justify-around w-screen py-2">
        <div>
          <img
            src="../assets/white_logo.svg"
            alt="Sanad_logo"
            className="w-full text-white "
          />
        </div>
        <div className="flex flex-col py-3 text-white ">
          <ul className="flex items-center">
            <li className="mx-2.5">
              <button>من نحن</button>
            </li>
            <li className="mx-2.5">
              <button>مستثمر</button>
            </li>
            <li className="mx-2.5">
              <button>تمويل المنشأت</button>
            </li>
            <li className="mx-2.5">
              <button>تواصل معنا</button>
            </li>
            <li className="mx-2.5">
              <button>الأسئلة الشائعة</button>
            </li>
            <button className="px-2 py-2 text-slate-100 bg-emerald-500 rounded-2xl">
              تسجيل الدخول
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
