import { BASE_FONT } from '../../constants/pageFonts';

function JobDesc() {
  return (
    <div
      className={`${BASE_FONT.className} flex flex-col items-center justify-center mt-7 lg:mt-24`}
    >
      <div className="mt-10 px-4 md:px-7 lg:max-w-[80rem]">
        <div className="md:grid-cols-[1fr,1.5fr] lg:grid-cols-[1fr,1.4fr] md:grid px-4">
          <p className="mb-3 text-3xl font-bold lg:text-5xl xl:text-4xl">
            موجز الوظيفة
          </p>
          <div className="px-1 py-5 sm:py-3 lg:py-0">
            <p className="text-[1.1rem]/[1.8rem] text-slate-800">
              نحن نبحث عن مصمم UI / UX لتحويل برنامجنا إلى منتجات سهلة الاستخدام
              لعملائنا. تتضمن مسؤوليات UI / UX Designer جمع متطلبات المستخدم
              وتصميم العناصر الرسومية وبناء مكونات التنقل. لتكون ناجحًا في هذا
              الدور ، يجب أن تكون لديك خبرة في برامج التصميم وأدوات الهيكل
              الشبكي. إذا كان لديك أيضًا مجموعة من مشاريع التصميم الاحترافية
              التي تتضمن العمل مع تطبيقات الويب / الهاتف المحمول ، فنحن نرغب في
              مقابلتك. في النهاية ، ستنشئ ميزات وظيفية وجذابة تلبي احتياجات
              عملائنا وتساعدنا على تنمية قاعدة عملائنا.
            </p>
          </div>
        </div>
        <div className="w-full h-2 px-4 pb-3 my-[min(10%,3.5rem)] border-b border-[#5D6A83] opacity-30"></div>
        <div className="md:grid-cols-[1fr,1.5fr] md:grid md:gap-7 pb-3 px-4">
          <p className="mb-3 text-3xl font-bold lg:text-5xl xl:text-4xl">
            المسؤوليات
          </p>
          <div className="px-1 py-5 sm:py-3 lg:py-0">
            <ul className="list-disc">
              <li>
                جمع وتقييم متطلبات المستخدم بالتعاون مع مديري المنتج والمهندسين
              </li>

              <li>
                توضيح أفكار التصميم باستخدام القصص المصورة وتدفق العمليات وخرائط
                المواقع
              </li>
              <li>
                تصميم عناصر واجهة المستخدم الرسومية ، مثل القوائم وعلامات
                التبويب وعناصر واجهة المستخدم
              </li>
              <li>إنشاء أزرار التنقل في الصفحة وحقول البحث</li>
              <li>
                قم بتطوير نماذج ونماذج أولية لواجهة المستخدم توضح بوضوح كيفية
                عمل المواقع وشكلها
              </li>
              <li>
                (مثل الصور والرسومات والجداول ) إنشاء تصميمات رسومية أصلية
              </li>
              <li>
                قم بإعداد وتقديم المسودات الأولية للفرق الداخلية وأصحاب المصلحة
                الرئيسيين
              </li>
              <li>(مثل الاستجابة) UX تحديد واستكشاف مشكلات</li>
              <li>إجراء تعديلات التخطيط بناءً على ملاحظات المستخدم</li>
              <li>الالتزام بمعايير النمط على الخطوط والألوان والصور</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-2 px-4 pb-3 my-[min(10%,3.5rem)] border-b border-[#5D6A83] opacity-30"></div>
        <div className="md:grid-cols-[1fr,1.5fr] md:grid md:gap-7 pb-3 px-4">
          <p className="mb-3 text-3xl font-bold lg:text-5xl xl:text-4xl">
            المتطلبات والمهارات
          </p>
          <div className="px-1 py-5 sm:py-3 lg:py-0">
            <ul className="list-disc">
              <li>خبرة عمل مثبتة كمصمم UI / UX أو دور مماثل</li>
              <li>حافظة مشاريع التصميم</li>
              <li>معرفة أدوات الهيكل الشبكي (مثل Wireframe.cc و InVision)</li>
              <li>
                معرفة حديثة ببرامج التصميم مثل Adobe Illustrator و Photoshop
              </li>
              <li>
                روح الفريق؛ مهارات اتصال قوية للتعاون مع مختلف أصحاب المصلحة
              </li>
              <li>
                مهارات جيدة في إدارة الوقت بكالوريوس في التصميم أو علوم
                الكمبيوتر أو مجال ذي صلة
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-2 px-4 pb-3 my-[min(10%,3.5rem)] border-b border-[#5D6A83] opacity-30"></div>
      </div>
    </div>
  );
}

export default JobDesc;
