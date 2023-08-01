'use client';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import {
  BASE_BG_COLOR,
  BASE_BUTTON_COLOR,
  BUTTON_HOVER_COLOR,
} from '@/app/constants/pageColors';
import { BASE_FONT, BASE_FONT_LIGHT } from '@/app/constants/pageFonts';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function InvestOpportunity() {
  return (
    <div className="flex flex-col items-center justify-around lg:mx-2 h-[60rem] lg:min-h-[70rem]">
      <div className="flex flex-col items-center justify-around min-h-[48rem] w-[min(100%,75rem)]">
        <div className="flex flex-col lg:flex-row justify-between items-center h-[15rem] lg:h-[12rem] w-[min(95%,80rem)]">
          <div className="">
            <h3
              className={`text-[${BASE_FONT}] text-4xl lg:text-6xl font-semibold mb-5`}
            >
              اﻟﻔﺮص اﻟﺎﺳﺘﺜﻤﺎرﻳﺔ
            </h3>
            <p className={`text-[${BASE_FONT_LIGHT}] w-[90%] text-lg`}>
              أﺣﺪث اﻟﻔﺮص اﻟﺘﻲ ﺗﻢ اﻃﻠﺎﻗﻬﺎ ﻓﻲ اﻟﻤﻨﺼﺔ
            </p>
          </div>
          <div className="flex justify-around w-[95%] sm:w-[70%] lg:w-48">
            <button
              className={`flex flex-col items-center justify-center h-20 w-20 rounded-[70%] text-[#001943] hover:text-slate-50 ${BUTTON_HOVER_COLOR} transition duration-200 rounded-3xl bg-[#D0E1FF] text-2xl`}
              id="prevBtn"
            >
              <FaArrowRight size={30} />
            </button>
            <button
              className={`flex flex-col items-center justify-center h-20 w-20 rounded-[70%] text-[#0045bb] hover:text-slate-50 ${BUTTON_HOVER_COLOR} transition duration-200 rounded-3xl bg-[#D0E1FF] text-2xl`}
              id="nextBtn"
            >
              <FaArrowLeft size={30} />
            </button>
          </div>
        </div>
        <div className="flex justify-center w-[min(90%,90rem)] min-h-[30rem]">
          <Swiper
            keyboard={{
              enabled: true,
            }}
            speed={1500}
            slidesPerView={1}
            navigation={{
              nextEl: '#nextBtn',
              prevEl: '#prevBtn',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Keyboard, Navigation]}
            className="min-h-[35rem] lg:h-[33rem] mt-5"
          >
            <SwiperSlide className="lg:h-[20rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`flex flex-col items-center justify-center min-h-[28rem] lg:h-[25rem]  snap-start md:mx-4 py-3 bg-[${BASE_BG_COLOR}] text-white rounded-t-3xl rounded-br-3xl`}
                >
                  <div className="flex flex-col items-center justify-around h-[90%] w-[90%]">
                    <div className="flex justify-start w-full">
                      <span className="mr-[10%] my-1 text-center align-middle bg-[#22C55E] rounded-t-2xl rounded-br-2xl w-20 md:w-24 h-9 md:h-12">
                        <p className="mt-1 md:mt-1.5 md:text-lg">متاح</p>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full min-h-[60%] py-2">
                      <div className="my-2 text-center md:my-0 md:mb-3">
                        <p className="text-2xl font-bold">
                          شراء منتجات ذات استخدام الواحد
                        </p>
                      </div>
                      <div className="mt-2 w-[90%]">
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between w-full  items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>حجم البرنامج</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مبلغ التمويل</p>
                          <p>30,000.000 ر.س </p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>مدة التمويل</p>
                          <p>قصير الأجل</p>
                        </span>
                        <span className="flex flex-col lg:flex-row justify-center md:justify-between items-center my-2 lg:my-0.5 text-[#D8E3F8]">
                          <p>تاريخ الطرح</p>
                          <p>31-05-2023</p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[90%] h-1 rounded-[3rem] bg-[#F4F0FF] mt-2">
                      <div className="w-[80%] h-1 rounded-r-[3rem] bg-[#4BB6AE]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <button
            className={`bg-[${BASE_BUTTON_COLOR}] ${BUTTON_HOVER_COLOR} w-40 h-14 rounded-[2rem] text-white`}
          >
            استثمر
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvestOpportunity;
