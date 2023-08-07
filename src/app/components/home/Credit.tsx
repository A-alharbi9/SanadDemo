import { BASE_FONT_LIGHT, BASE_FONT_MEDIUM } from '../../constants/pageFonts';

function Credit() {
  return (
    <div
      className={`${BASE_FONT_MEDIUM.className} rounded-tl-[6.5rem] lg:rounded-tl-[12.5rem] h-[40rem]`}
    >
      <div className="flex flex-col justify-center items-center rounded-tl-[6.5rem] lg:rounded-tl-[12.5rem] rounded-br-[6rem] lg:rounded-br-[6rem] h-[37rem] px-4 overflow-hidden bg-[#0249AC] z-10 lg:w-full">
        <div className="z-10 flex flex-col items-center justify-center lg:justify-start mx-3 lg:items-start lg:mx-5 w-[min(90%,78rem)]">
          <div className="flex flex-col items-center justify-around lg:justify-between text-center text-white lg:text-right lg:px-4 lg:items-start w-[min(80%,35rem)] h-[16rem] lg:h-[12rem]">
            <p className="text-6xl w-[min(100%,35rem)]">الائتمان</p>
            <div
              className={`flex flex-col min-h-80 mt-5 lg:mt-0 lg:h-28 md:flex-row justify-around lg:justify-start text-center lg:text-right items-center w-[min(95%,85rem)] ${BASE_FONT_LIGHT.className}`}
            >
              <p className="text-xl lg:text-xl">
                كجزء رئيسي جميع الفرص الاستثمارية يتم تقييم المخاطر ودراستها من
                قبل فريق ائتماني سند المالية، قبل الموافقة على طلب المنشأت
                للتمويل نضعها في عمليات التقييم الائتمانية طبقا لمعاير سند
                المالية
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;
