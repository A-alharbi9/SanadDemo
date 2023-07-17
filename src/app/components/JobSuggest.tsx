function JobSuggest({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-around min-h-[42rem] py-5">
      <div className="flex flex-col w-[90%] mt-10">
        <div className="flex flex-col justify-between pt-6 lg:items-center lg:flex-row lg:w-full ">
          <p className="text-2xl font-bold lg:text-5xl">
            المزيد من الوظائف المفتوحة
          </p>
          <button className="h-16 text-lg mt-10 transition duration-300 border border-black cursor-pointer lg:mt-0 w-60 rounded-[4rem] hover:text-white hover:scale-105 hover:bg-emerald-500">
            تصفح الوظائف المفتوحة
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center lg:w-full">
        <div className=" flex flex-col lg:flex-row lg:justify-between w-[90%] lg:w-[90%] py-10 mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default JobSuggest;
