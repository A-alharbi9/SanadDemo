'use client';

import {
  BASE_BUTTON_COLOR,
  BUTTON_HOVER_COLOR,
} from '@/app/constants/pageColors';
import { BASE_FONT } from '@/app/constants/pageFonts';
import { useEffect, useState } from 'react';
import { BiSolidBarChartAlt2, BiSolidDollarCircle } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';

function HowWeWork() {
  const [heightStep, setHeightStep] = useState(0);

  const { entry, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    let time = setInterval(() => {
      setHeightStep((prev): number => {
        if (prev > 80) {
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[125rem] lg:min-h-[95rem] lg:mt-44">
      <div
        className={`flex flex-col justify-between items-center min-h-[54rem] ${BASE_FONT.className}`}
      >
        <div className="flex flex-col items-center w-[min(90%,70rem)]">
          <p className=" text-5xl lg:text-6xl font-bold">كيف نعمل؟</p>
          <p className="my-12 text-center text-2xl w-[min(90%,53rem)]">
            تقوم سند المالية بدور الوساطة المالية بين المستثمرين (حملة صكوك) من
            جهة ، والمنشأت الصغيرة والمتوسطة (طالبي التمويل) من جهة أخرى.
          </p>
          <div className="flex justify-between w-[min(95%,25rem)] h-full">
            <button className="flex items-center justify-center lg:mr-3 text-lg transition duration-300 h-14 w-44 rounded-t-3xl rounded-br-3xl bg-slate-100 hover:bg-black hover:text-white">
              <BiSolidBarChartAlt2 className="ml-2" />
              مستثمر
            </button>
            <button className="flex items-center justify-center text-lg mr-5 lg:mr-0 transition duration-300 w-44 h-14 rounded-t-3xl rounded-br-3xl bg-slate-100 hover:bg-black hover:text-white">
              <BiSolidDollarCircle className="ml-2" />
              طالب تمويل
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[min(95%,80rem)] h-[85rem] lg:h-[65rem] xl:h-[70rem]">
          <div className="flex flex-col lg:flex-row lg:justify-between w-[min(95%,70rem)]">
            <div className="flex flex-col justify-center lg:justify-between w-[min(90%,30rem)] h-[35rem] lg:h-[19rem]">
              <p
                className={` text-5xl lg:text-5xl/[4rem] font-bold ${BASE_FONT}`}
              >
                نحرص على منحك تجربة تمويل واستثمار متكاملة
              </p>
              <div>
                <p className=" mt-5 lg:mt-0 py-2 mb-2 text-2xl lg:w-[30rem]">
                  منصة الكترونية مصرحة من هيئة السوق المالية، ضِمن مُختبر
                  التقنية المالية.
                </p>
                <button
                  className={`h-16 w-[min(90%,11rem)] text-xl rounded-[4rem] text-white bg-[${BASE_BUTTON_COLOR}] ${BUTTON_HOVER_COLOR}`}
                >
                  تواصل معنا
                </button>
              </div>
            </div>
            <div
              className="relative flex h-[45rem] transition duration-[5s] items-center"
              ref={ref}
            >
              <div
                className={`absolute top-0 right-[0.9rem] lg:right-[4.5%] delay-200 lg:delay-100 ${
                  entry?.isIntersecting ? `opacity-100` : 'opacity-0'
                }  w-[1px] transition duration-700 bg-[#B8C2D4]`}
                style={{
                  height: `${entry?.isIntersecting ? heightStep + '%' : '0'}`,
                }}
              ></div>
              <div className="flex flex-col justify-between w-[min(90%,30rem)] h-[45rem] lg:h-[45rem]">
                <div
                  className={`flex lg:w-80 h-[10rem] transition duration-500  ${
                    entry?.isIntersecting
                      ? `opdscity-100 translate-x-0`
                      : 'opacity-0 translate-x-16'
                  }`}
                >
                  <div className="h-8 w-8 rounded-[50%] bg-[#4BB6AE] ml-5"></div>
                  <div className="flex flex-col justify-between">
                    <p className="text-6xl text-[#4BB6AE]">01</p>
                    <p className=" text-3xl lg:text-2xl font-bold">
                      مبلغ استثماري بالحد الأدنى
                    </p>
                    <p className=" text-xl lg:text-sm ">
                      الحد الأدنى الاستثماري 1000 ر,س
                    </p>
                  </div>
                </div>
                <div
                  className={`flex lg:w-80 h-[10rem] transition duration-500 delay-100  ${
                    entry?.isIntersecting
                      ? `opdscity-100 translate-x-0`
                      : 'opacity-0 translate-x-16'
                  }`}
                >
                  <div className="h-8 w-8 rounded-[50%] bg-[#4BB6AE] ml-5"></div>
                  <div className="flex flex-col justify-between">
                    <p className="text-6xl text-[#4BB6AE]">02</p>
                    <p className=" text-3xl lg:text-2xl font-bold">
                      حساب استثماري رقمي
                    </p>
                    <p className=" text-xl lg:text-sm ">
                      أداء رقمي وتجربة مستخدم عالية
                    </p>
                  </div>
                </div>
                <div
                  className={`flex lg:w-80 h-[10rem] transition duration-500 delay-150  ${
                    entry?.isIntersecting
                      ? `opdscity-100 translate-x-0`
                      : 'opacity-0 translate-x-16'
                  }`}
                >
                  <div className="h-8 w-8 rounded-[50%] bg-[#4BB6AE] ml-5"></div>
                  <div className="flex flex-col justify-between">
                    <p className="text-6xl text-[#4BB6AE]">03</p>
                    <p className=" text-3xl lg:text-2xl font-bold">
                      توزيعات دورية للأرباح
                    </p>
                    <p className=" text-xl lg:text-sm ">
                      توزيعات دورية شهرية - نصف سنوية - سنوي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
