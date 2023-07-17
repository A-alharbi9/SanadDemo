function Nav() {
  return (
    <div className="py-3 bg-[#0249AC]">
      <nav className="flex items-center justify-around w-full py-2">
        <div>
          <button className="cursor-pointer ">
            <img
              src="../assets/white_logo.svg"
              alt="Sanad_logo"
              className="w-full text-white "
            />
          </button>
        </div>
        <div className="flex-col hidden py-3 text-white lg:flex ">
          <ul className="flex items-center">
            <li className="mx-4">
              <a
                href="/"
                className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium"
              >
                من نحن
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/"
                className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium"
              >
                مستثمر
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/"
                className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium"
              >
                تمويل المنشأت
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/"
                className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium"
              >
                تواصل معنا
              </a>
            </li>
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                الأسئلة الشائعة
              </button>
            </li>
            <button className="w-36 h-12 text-slate-100 bg-[#4BB6AE] hover:bg-emerald-400 rounded-[5.5rem] hover:scale-105">
              تسجيل الدخول
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
