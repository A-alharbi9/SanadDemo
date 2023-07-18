function JobSuggest({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-around min-h-[42rem] py-5">
      <div className="flex flex-col mt-10 w-[90%]">
        <div className="flex flex-row flex-wrap items-center justify-between pt-6 h-44 lg:h-28 lg:justify-around lg:full">
          <p className="mx-2 text-3xl font-bold md:text-4xl lg:mx-0 lg:text-5xl">
            المزيد من الوظائف المفتوحة
          </p>
          <button className="h-16 text-lg transition duration-300 border border-black cursor-pointer lg:mt-0 w-60 rounded-[4rem] hover:text-white hover:scale-105 hover:bg-emerald-500">
            تصفح الوظائف المفتوحة
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center lg:w-[90%]">
        <div className=" flex flex-col lg:flex-row lg:flex-wrap lg:justify-between w-[90%] lg:w-[90%] py-10 mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default JobSuggest;
