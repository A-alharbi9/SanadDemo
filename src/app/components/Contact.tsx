import { BASE_BUTTON_COLOR, BUTTON_HOVER_COLOR } from '../constants/pageColors';
import { BASE_FONT, BASE_FONT_MEDIUM } from '../constants/pageFonts';

function Contact() {
  return (
    <div
      className={`${BASE_FONT_MEDIUM.className} bg-[#001943] rounded-tl-[6.5rem] lg:rounded-tl-[12.5rem] h-[40rem]`}
    >
      <div className="flex flex-col justify-center lg:items-center rounded-tl-[6.5rem] lg:rounded-tl-[12.5rem] rounded-br-[6rem] lg:rounded-br-[6rem] h-[37rem] px-4 overflow-hidden bg-[#0249AC] z-10 lg:w-full">
        <div className="w-[min(100%,80rem)]">
          <div className="z-10 flex flex-col items-center justify-center mx-3 lg:items-start lg:mx-5">
            <div className="flex flex-col items-center justify-center text-center text-white items- lg:text-right lg:px-4 lg:items-start w-[min(80%,35rem)]">
              <p className="mb-4 text-[min(2rem+1vw,3rem)] w-[min(100%,35rem)] font-">
                اتصل بنا اليوم للحصول على استشارة مجانية
              </p>
              <div className="flex flex-col h-40 md:flex-row justify-around lg:justify-start items-center w-[min(85%,85rem)] mt-2 lg:mt-[2.5rem]">
                <button
                  className={`text-center h-16 lg:ml-6 w-[min(90%,12rem)] bg-[${BASE_BUTTON_COLOR}] ${BUTTON_HOVER_COLOR} lg:text-lg hover:text-white transition duration-300 hover:scale-105 rounded-[4rem]`}
                >
                  تواصل معنا
                </button>
                <button className="h-16 text-center border w-[min(90%,12rem)] border-white border-solid lg:text-lg transition duration-300 hover:scale-105 hover:bg-slate-200 hover:text-black rounded-[4rem] tracking-[0.15rem]">
                  خدماتنا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
