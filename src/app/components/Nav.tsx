function Nav() {
  return (
    <div className="py-3 bg-blue-700">
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
        <div className="flex flex-col py-3 text-white ">
          <ul className="flex items-center">
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                من نحن
              </button>
            </li>
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                مستثمر
              </button>
            </li>
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                تمويل المنشأت
              </button>
            </li>
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                تواصل معنا
              </button>
            </li>
            <li className="mx-4">
              <button className="transition duration-300 text-slate-200 hover:text-slate-50 hover:font-medium">
                الأسئلة الشائعة
              </button>
            </li>
            <button className="px-2 py-2 text-slate-100 bg-emerald-500 hover:bg-emerald-400 rounded-2xl">
              تسجيل الدخول
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
