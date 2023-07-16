function JobDesc() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  justify-between items-center w-[90%] lg:w-[80%] h-[35rem] lg:h-[26rem] border-b border-slate-200">
        <p className="w-5 text-2xl font-bold lg:text-4xl">موجز الوظيفة</p>
        <div className="w-[60%]">
          <p>
            نحن نبحث عن مصمم UI / UX لتحويل برنامجنا إلى منتجات سهلة الاستخدام
            لعملائنا. تتضمن مسؤوليات UI / UX Designer جمع متطلبات المستخدم
            وتصميم العناصر الرسومية وبناء مكونات التنقل. لتكون ناجحًا في هذا
            الدور ، يجب أن تكون لديك خبرة في برامج التصميم وأدوات الهيكل الشبكي.
            إذا كان لديك أيضًا مجموعة من مشاريع التصميم الاحترافية التي تتضمن
            العمل مع تطبيقات الويب / الهاتف المحمول ، فنحن نرغب في مقابلتك. في
            النهاية ، ستنشئ ميزات وظيفية وجذابة تلبي احتياجات عملائنا وتساعدنا
            على تنمية قاعدة عملائنا.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%] lg:w-[80%] h-[55rem] lg:h-[24rem] border-b border-slate-200">
        <p className="text-xl font-bold lg:text-4xl">المسؤوليات</p>
        <div className="w-[60%]">
          <ul className="list-disc">
            <li>
              جمع وتقييم متطلبات المستخدم بالتعاون مع مديري المنتج والمهندسين
            </li>

            <li>
              توضيح أفكار التصميم باستخدام القصص المصورة وتدفق العمليات وخرائط
              المواقع
            </li>
            <li>
              تصميم عناصر واجهة المستخدم الرسومية ، مثل القوائم وعلامات التبويب
              وعناصر واجهة المستخدم
            </li>
            <li>إنشاء أزرار التنقل في الصفحة وحقول البحث</li>
            <li>
              قم بتطوير نماذج ونماذج أولية لواجهة المستخدم توضح بوضوح كيفية عمل
              المواقع وشكلها
            </li>
            <li>(مثل الصور والرسومات والجداول ) إنشاء تصميمات رسومية أصلية</li>
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
      <div className="flex  justify-between items-center w-[90%] lg:w-[80%] h-[35rem] lg:h-[24rem] border-b border-slate-200">
        <p className="text-2xl font-bold lg:text-4xl">المتطلبات والمهارات</p>
        <div className="flex-col w-[60%]">
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
              مهارات جيدة في إدارة الوقت بكالوريوس في التصميم أو علوم الكمبيوتر
              أو مجال ذي صلة
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDesc;
