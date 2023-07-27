import { BASE_FONT } from '../../constants/pageFonts';

function JobSuggest({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${BASE_FONT.className} flex flex-col items-center justify-center min-h-[42rem] py-5 lg:py-0`}
    >
      <div className="grid-cols-1 px-4 md:grid md:gap-7 md:px-7 bg lg:gap-0">
        <div className="flex flex-col mt-10 lg:mt-4">
          <div className="flex flex-row flex-wrap items-center justify-center pt-6 lg:pt-0 h-44 lg:h-28 lg:justify-between">
            <p className="mx-2 text-3xl font-bold md:text-4xl lg:mx-0 lg:text-5xl">
              المزيد من الوظائف المفتوحة
            </p>
            <button className="h-16 text-lg hover:border-white transition duration-300 border border-black cursor-pointer mt-5 lg:mt-0 w-[min(90%,16rem)] rounded-[4rem] hover:text-white hover:scale-105 hover:bg-emerald-500">
              تصفح الوظائف المفتوحة
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr] lg:gap-20 md:grid py-10 mt-6 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSuggest;
