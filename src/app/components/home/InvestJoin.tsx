import { BASE_BG_COLOR } from '@/app/constants/pageColors';
import { BASE_FONT, BASE_FONT_LIGHT } from '@/app/constants/pageFonts';

function InvestJoin() {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[${BASE_BG_COLOR}] h-[120rem] lg:h-[70rem] ${BASE_FONT.className} rounded-tl-[8rem] lg:rounded-tl-[13.5rem] rounded-br-[8rem] lg:rounded-br-[13.5rem] overflow-hidden`}
    >
      <div className="relative flex flex-col lg:flex-row justify-evenly lg:justify-between items-center text-white w-[min(95%,80rem)] h-[105rem] lg:max-h-[40rem]">
        <img
          className=" absolute -top-[17%] lg:-top-[80%] left-[10%] lg:left-[5%] 2xl:-left-[35%] scale-[2] rotate-45 h-[48rem] w-[11rem] opacity-30 lg:opacity-100"
          src="../assets/shape_group_one.svg"
          alt=""
        />
        <img
          className=" absolute top-[38%] md:top-[38rem] lg:top-[20rem] left-[70%] md:left-[35rem] lg:left-[42rem] scale-[1] -rotate-[50deg] h-[48rem] w-[11rem] opacity-30 lg:opacity-100"
          src="../assets/shape_group_two.svg"
          alt=""
        />
        <div className="w-[min(95%,30rem)] lg:h-[18rem] mb-2 z-10">
          <p className=" text-5xl md:text-7xl lg:text-[3rem] xl:text-[3.5rem] font-bold mb-4">
            استثمر من مكانك
          </p>
          <div>
            <p
              className={`${BASE_FONT_LIGHT.className} text-xl w-[90%] lg:text-2xl font-light`}
            >
              نحن شركة مرخصة من هيئة السوق المالية بالخدمات المالية نتيح
              للمستثمرين الدخول في فرص استثمارية محلية بخطوات سهلة عبر منصة آمنة
              بعمليات مؤتمنة وتضمن الدّقة.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-around items-center flex-wrap lg:h-[38rem] lg:w-[50rem] xl:w-[45rem] z-10">
          <div className="flex flex-col items-center justify-center bg-[#063C88] h-[18rem] lg:h-[17rem] lg:w-[18rem] xl:w-[20rem] mb-8 lg:mb-0 rounded-t-[3rem] rounded-br-[3rem] text-center">
            <p className="font-bold text-5xl lg:text-[2.5rem] mb-1">
              الأرباح دورية
            </p>
            <p className={`${BASE_FONT_LIGHT.className} w-[80%] text-xl`}>
              توزيع الأرباح بشكل شهري و نصف سنوي و سنوي
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#063C88] h-[18rem] lg:h-[17rem] lg:w-[18rem] xl:w-[20rem]  mb-8 lg:mb-0 rounded-t-[3rem] rounded-bl-[3rem] text-center">
            <p className="font-bold text-5xl lg:text-[2.5rem] mb-1">
              تنوع الفرص
            </p>
            <p className={`${BASE_FONT_LIGHT.className} w-[80%] text-xl`}>
              تنوع الفرص المطروحة أداء جيد لمحفظة الاستثمارية
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#063C88] h-[18rem] lg:h-[17rem] lg:w-[18rem] xl:w-[20rem] mb-8 lg:mb-0 rounded-tr-[3rem] rounded-b-[3rem] text-center z-10">
            <p className="font-bold text-5xl lg:text-[2.5rem] mb-1">
              تجربة رقمية
            </p>
            <p className={`${BASE_FONT_LIGHT.className} w-[80%] text-xl`}>
              جميع المعاملات بشكل رقمي و إدارة تقديم الطلبات
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#063C88] h-[18rem] lg:h-[17rem] lg:w-[18rem] xl:w-[20rem] mb-8 lg:mb-0 rounded-b-[3rem] rounded-tl-[3rem] text-center">
            <p className="font-bold text-5xl lg:text-[2.5rem] mb-1">
              تمويل مرتفع{' '}
            </p>
            <p className={`${BASE_FONT_LIGHT.className} w-[80%] text-xl`}>
              يصل لـ 30 مليون ريال، ويتم الرد في غضون 5 أيام عمل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestJoin;
