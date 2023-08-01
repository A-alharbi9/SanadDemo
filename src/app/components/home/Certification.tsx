import { BASE_FONT } from '@/app/constants/pageFonts';
import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

function Certification() {
  return (
    <div className="flex flex-col justify-between items-center">
      <div
        className={`${BASE_FONT.className} flex flex-col items-center justify-center min-h-[42rem] py-5 lg:py-0 w-[min(95%,80rem)]`}
      >
        <div className="flex flex-col md:flex-row flex-wrap items-center pt-6 lg:pt-0 h-44 lg:h-28 justify-between w-[20rem] md:w-[40rem] lg:w-[60rem] xl:w-[75rem]">
          <p className="mx-2 text-4xl font-bold md:text-4xl lg:mx-0 lg:text-6xl">
            الشهادات و الترخيص
          </p>
          <button className="h-16 text-lg hover:border-white transition duration-300 border border-black cursor-pointer mt-5 lg:mt-0 w-[min(90%,16rem)] rounded-[4rem] hover:text-white hover:scale-105 hover:bg-emerald-500">
            تصفح جميع الاعتمادات
          </button>
        </div>
        <div className="md:grid-cols-[1fr,1fr] lg:gap-20 md:grid py-10 px-2 lg:px-0 mt-6 w-[90%] md:w-full">
          <div className="flex flex-col justify-around h-[43rem] scale-90 group hover:scale-95 transition duration-300 cursor-pointer">
            <img
              src="../assets/review_bureau_two.svg"
              alt="review_bureau_two"
              className="rounded-t-3xl rounded-br-3xl h-[25rem]"
            />
            <p className="text-3xl lg:text-4xl font-bold group-hover:text-green-500">
              معتمد من دار المراجعة الشرعية
            </p>
            <div>
              <p className="lg:text-xl w-[95%]">
                يعتبر الالتزام بأحكام الشريعة الإسلامية شرط أساسي في جميع
                المعاملات والعمليات التي نقوم بها في سند المالية.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold lg:text-lg">
                تعّرف على لجنتنا الشرعية
              </p>
              <HiOutlineArrowLeft
                size={40}
                className="text-blue-300 transition duration-500 cursor-pointer group-hover:text-blue-500 group-hover:-translate-x-2 scale-90 group-hover:scale-100 "
              />
            </div>
          </div>
          <div className="flex flex-col justify-around h-[43rem] scale-90 group hover:scale-95 transition duration-300 cursor-pointer">
            <img
              src="../assets/CMA_two.svg"
              alt="CMA_two"
              className="rounded-t-3xl rounded-br-3xl h-[25rem]"
            />
            <p className="text-3xl lg:text-4xl font-bold group-hover:text-green-500">
              معتمد من هيئة السوق المالية
            </p>
            <div>
              <p className="lg:text-xl w-[95%]">
                حصلت سند المالية على تصريح من هيئة السوق المالية بطرح أدوات
                الدين والاستثمار فيها كأدوات للتمويل والاستثمار.
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="font-semibold lg:text-lg">تعّرف على ترخيص الهيئة</p>
              <HiOutlineArrowLeft
                size={40}
                className="text-blue-300 transition duration-500 cursor-pointer group-hover:text-blue-500 group-hover:-translate-x-2 group-hover:scale-105 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
