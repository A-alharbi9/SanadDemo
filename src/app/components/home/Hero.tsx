'use client';

import { useInView } from 'react-intersection-observer';
import {
  BASE_BG_COLOR,
  BASE_BUTTON_COLOR,
  BUTTON_HOVER_COLOR,
} from '../../constants/pageColors';
import { BASE_FONT, BASE_FONT_MEDIUM } from '../../constants/pageFonts';

function Hero() {
  const { ref, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      className={`${BASE_FONT.className} relative flex justify-center bg-[${BASE_BG_COLOR}] h-[37rem] lg:h-[38rem] rounded-br-[6rem] lg:rounded-br-[12rem] overflow-x-hidden`}
    >
      <img
        src="../assets/shape_group_two.svg"
        alt="shape_group_two"
        className="absolute scale-125 -rotate-45 w-28 left-7 lg:left-12 bottom-20 lg:bottom-32 opacity-40 lg:opacity-100"
      />
      <img
        src="../assets/shape_group_one.svg"
        alt="shape_group_one"
        className="absolute -rotate-45 transform scale-x-[-1] -right-40 top-28 opacity-40 lg:opacity-100"
      />
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center text-white h-[90%] lg:h-[90%] z-10 transition duration-200 ${
          entry?.isIntersecting ? 'opacity-100 scale-100' : 'opacity-50 scale-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center h-[30rem] lg:h-full">
          <h1
            className={`${BASE_FONT_MEDIUM} text-5xl md:text-6xl lg:text-[4rem]/[5rem] text- w-[min(90%,40rem)] font-medium`}
          >
            تمويل المنشأت من خلال حلول تمويلية سريعة
          </h1>
          <p
            className={`${BASE_FONT.className} w-[90%] md:w-[60%] lg:w-[55%] lg:text-lg py-2 my-2 text-center text-[#D0E1FF] opacity-95 font-light`}
          >
            مول منشأتك أو استثمر من خلال طرح الفرص الاستثمارية
          </p>

          <div className="flex flex-col h-28 lg:h-20 md:flex-row justify-around lg:justify-center items-center w-[min(70%,35rem)] mt-5">
            <button className="h-16 lg:ml-6 text-center border w-[min(90%,12rem)] border-white border-solid lg:text-lg transition duration-300 hover:scale-105 hover:bg-slate-200 hover:text-black rounded-[4rem] tracking-[0.05rem]">
              مستثمر
            </button>
            <button
              className={`text-center mt-4 md:mt-0 h-16 w-[min(90%,12rem)] bg-[${BASE_BUTTON_COLOR}] ${BUTTON_HOVER_COLOR} lg:text-lg hover:text-white transition duration-300 hover:scale-105 rounded-[4rem]`}
            >
              تمويل المنشأت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
