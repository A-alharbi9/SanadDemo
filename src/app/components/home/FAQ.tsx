import {
  BASE_BUTTON_COLOR,
  BUTTON_HOVER_COLOR,
} from '@/app/constants/pageColors';
import { BASE_FONT, BASE_FONT_LIGHT } from '@/app/constants/pageFonts';
import React from 'react';

function FAQ() {
  return (
    <div
      className={`flex flex-col items-center justify-center lg:min-h-[50rem] xl:min-h-[45rem] ${BASE_FONT.className}`}
    >
      <div className="flex flex-col items-center justify-around min-h-[110rem] lg:min-h-[80rem] xl:min-h-[40rem]">
        <div className="text-center lg:w-[60rem]">
          <p className="text-4xl lg:text-5xl font-bold h-[4rem]">
            الأسئلة الشائعة
          </p>
          <p className="text-xl lg:text-base w-full lg:mt-4">
            ﻧﺴﻌﺪ ﺑﺘﻮاﺻﻠﻚ ﻣﻌﻨﺎ ﻟﻠﺈﺟﺎﺑﺔ ﻋﻠﻰ ﺟﻤﻴﻊ اﺳﺘﻔﺴﺎراﺗﻚ واﻗﺘﺮاﺣﺎﺗﻚ
          </p>
        </div>
        <div className="flex flex-col items-center justify-around md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 lg:gap-10 mt-4 lg:mt-10 w-[90%] lg:w-[95%] xl:w-[75rem] min-h-[85rem] md:min-h-[50rem] xl:min-h-[30rem]">
          <div className="flex flex-col items-center justify-center bg-slate-100 lg:h-[27rem] xl:w-[24.5rem] rounded-t-[3rem] rounded-br-[3rem] mb-4 lg:mb-0">
            <div className="flex flex-col items-center justify-evenly h-[29rem] md:h-[27rem] lg:h-[20rem] w-[90%]">
              <p className="text-3xl lg:text-2xl font-bold w-[95%]">
                ما هي الصكوك؟
              </p>
              <p className="text-lg w-[90%] lg:w-[95%] text-slate-500">
                الصكوك أوراق مالية متوافقة مع الشريعة الإسلامية تمثل حصة مشاعة
                في ملكية أصل ما سواء كان مشروعًا منجزًا أو قيد الإنشاء أو
                استثماراً معيناً أو أصولاً غير مالية، أو منافع، أو خدمات أو
                مزيجاً من ذلك كله. تصدرها جهات معينة لتطوير مشاريع محددة وتلتزم
                الجهة المصدرة لهذه الصكوك بتوزيع أرباح نقدية بشكل دوري لحملة
                الصكوك وإعادة رأس المال في مدة محددة.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-slate-100 lg:h-[27rem] xl:w-[24.5rem] rounded-t-[3rem] rounded-br-[3rem] mb-4 lg:mb-0">
            <div className="flex flex-col items-center justify-evenly lg:justify-around h-[29rem] md:h-[27rem] lg:h-[20rem] w-[90%]">
              <p className=" text-3xl lg:text-2xl font-bold w-[95%]">
                ما الذي يميز الصكوك عن غيرها من الأدوات الاستثمارية؟
              </p>
              <p className="text-lg w-[90%] lg:w-[95%] text-slate-500">
                تمثل الصكوك حصة شائعة في ملكية أصول أو منافع أو خدمات يتعين
                توفيرها، ولا تمثل ديناً على مصدرها لحاملي الصكوك، بل تصدر على
                أساس عقد شرعي وتأخذ حكمه. بالإضافة إلى أنها وثائق تصدر باسم
                مالكها بفئات متساوية القيمة وتصدر وتتداول حسب الضوابط الشرعية
                الإسلامية.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-100 lg:h-[27rem] xl:w-[24.5rem] rounded-t-[3rem] rounded-br-[3rem] mb-4 lg:mb-0">
            <div className="flex flex-col items-center justify-evenly lg:justify-around h-[29rem] md:h-[27rem] lg:h-[20rem] w-[90%]">
              <p className=" text-3xl lg:text-2xl font-bold w-[95%]">
                ما هي المنشأة ذات الغرض الخاص؟
              </p>
              <p className="text-lg w-[90%] lg:w-[95%] text-slate-500">
                هي كل منشأة حاصلة على ترخيص من هيئة السوق المالية بموجب القواعد
                المنظمة للمنشآت ذات الأغراض الخاصة لإصدار أدوات الدين أو الوحدات
                الاستثمارية، وتتمتع بالذمة المالية والشخصية الاعتبارية المستقلة،
                وتنتهي المنشأة بانتهاء الغرض الذي أسست من أجله وفق القواعد
                والأحكام التي تصدرها الهيئة.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <button
            className={`bg-[${BASE_BUTTON_COLOR}] ${BUTTON_HOVER_COLOR} w-52 md:w-40 h-14 rounded-[2rem] text-white`}
          >
            اقرأ المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
