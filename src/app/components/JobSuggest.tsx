function JobSuggest({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-around min-h-[42rem] py-5">
      <div className="flex flex-col mt-10">
        <div className="flex justify-between w-[70rem] pt-6 ">
          <p className="text-5xl font-bold">المزيد من الوظائف المفتوحة</p>
          <button className="border border-black h-[3.4rem] w-52 rounded-3xl cursor-pointer hover:text-white hover:bg-slate-700 transition duration-200">
            تصفح الوظائف المفتوحة
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" flex justify-around w-[90%] flex-wrap py-10 mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default JobSuggest;
