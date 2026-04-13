import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

/* ─── all translations ─── */
const content = {
  ka: {
    metaTitle: "ლიცენზიების გადმოტანა | ITC Georgia",
    metaDesc: "გადმოიტანეთ არსებული ლიცენზიები ITC Georgia-ზე მარტივად — შეფერხების გარეშე, მონაცემების დაკარგვის გარეშე.",
    heroLabel: "ლიცენზიების ტრანსფერი",
    heroTitle: "ლიცენზიების გადმოტანა",
    heroSubtitle: "მარტივი და სწრაფი პროცესი — გადმოიტანეთ არსებული ლიცენზიები ადგილობრივ პარტნიორთან შეფერხების გარეშე.",
    howItWorks: "როგორ მუშაობს პროცესი",
    steps: [
      { title: "დაგვიკავშირდით", desc: "გაიარეთ უფასო კონსულტაცია — შეაფასეთ არსებული ლიცენზიები და საჭიროებები." },
      { title: "ლიცენზიების შეფასება", desc: "ჩვენი გუნდი განიხილავს თქვენს მიმდინარე გამოწერებს და შემოგთავაზებთ ოპტიმალურ გეგმას." },
      { title: "ავტორიზაცია", desc: "თქვენ ადასტურებთ ტრანსფერს ვენდორის პორტალზე — Microsoft Partner Center, AWS ან Google Admin Console." },
      { title: "ტრანსფერის დასრულება", desc: "პროცესი სრულდება 1-3 სამუშაო დღეში — სერვისი არ წყდება." },
      { title: "ადგილობრივი მხარდაჭერა", desc: "ისარგებლეთ ლარში ანგარიშსწორებით, დღგ-ს ინვოისით და ქართულენოვანი მხარდაჭერით." },
    ],
    msTitle: "Microsoft ლიცენზიების ტრანსფერი",
    msPoints: [
      "ტრანსფერი მოითხოვს მხოლოდ ბმულის დადასტურებას",
      "კლიენტი იღებს ელ-ფოსტას/ბმულს, აჭერს დადასტურებას - მზადაა",
      "სერვისი არ წყდება, მონაცემები არ იკარგება",
      "ყველა არსებული ლიცენზია, მომხმარებელი და მონაცემი უცვლელი რჩება",
    ],
    awsTitle: "AWS ანგარიშის ტრანსფერი",
    awsPoints: [
      "არსებული AWS ანგარიშის მიბმა ITC Georgia-ზე ბილინგისთვის",
      "ან ახალი ანგარიშის შექმნა ITC Georgia-ს ორგანიზაციაში",
      "არსებული რესურსები უცვლელი რჩება",
    ],
    googleTitle: "Google Workspace ტრანსფერი",
    googlePoints: [
      "მარტივი პროცესი Admin Console-ის მეშვეობით",
      "რესელერის ცვლილება — არა მონაცემების მიგრაცია",
      "ყველა მომხმარებელი და მონაცემი უცვლელია",
    ],
    benefitsTitle: "გადმოტანის უპირატესობები",
    benefits: ["ლარში ანგარიშსწორება", "დღგ-ს ჩათვლით ინვოისი", "ადგილობრივი მხარდაჭერა", "კორპორატიული ფასდაკლებები"],
    faqTitle: "ხშირად დასმული კითხვები",
    faqs: [
      { q: "დაიკარგება რაიმე მონაცემი?", a: "არა. ტრანსფერი არ მოიცავს მონაცემების მიგრაციას — ყველაფერი უცვლელი რჩება." },
      { q: "იქნება სერვისის შეფერხება?", a: "არა. პროცესი მიმდინარეობს ფონურ რეჟიმში და სერვისი არ წყდება." },
      { q: "რამდენ ხანს გრძელდება პროცესი?", a: "ჩვეულებრივ 1-3 სამუშაო დღე, ვენდორის მიხედვით." },
      { q: "რაიმეს შეცვლა მჭირდება ჩემს მხარეს?", a: "მხოლოდ ტრანსფერის დადასტურება — დანარჩენს ჩვენ მოვაგვარებთ." },
    ],
    ctaTitle: "დაიწყეთ გადმოტანა",
    ctaSubtitle: "დაგვიკავშირდით და ჩვენ მოვაგვარებთ ყველაფერს თქვენთვის.",
    ctaContact: "დაგვიკავშირდით",
    ctaServices: "სერვისების ნახვა",
  },
  en: {
    metaTitle: "Transfer Your Licenses | ITC Georgia",
    metaDesc: "Transfer your existing licenses to ITC Georgia easily — no downtime, no data loss, seamless process.",
    heroLabel: "License Transfer",
    heroTitle: "Transfer Your Licenses",
    heroSubtitle: "Simple, fast process to switch to a local partner — no downtime, no hassle.",
    howItWorks: "How It Works",
    steps: [
      { title: "Contact Us", desc: "Schedule a free consultation — assess your current licenses and needs." },
      { title: "License Review", desc: "Our team reviews your current subscriptions and proposes an optimal plan." },
      { title: "Authorization", desc: "You confirm the transfer via the vendor portal — Microsoft Partner Center, AWS, or Google Admin Console." },
      { title: "Transfer Completes", desc: "The process completes in 1-3 business days — no service interruption." },
      { title: "Local Support", desc: "Enjoy GEL billing, VAT invoices, and local Georgian-language support." },
    ],
    msTitle: "Microsoft CSP License Transfer",
    msPoints: [
      "Transfer requires just a link approval",
      "The client receives an email/link, clicks approve — done",
      "No downtime, no data loss, no service interruption",
      "All existing licenses, users, and data remain unchanged",
    ],
    awsTitle: "AWS Account Transfer",
    awsPoints: [
      "Link existing AWS account to ITC Georgia for billing",
      "Or create a new account under ITC Georgia's organization",
      "Existing resources remain untouched",
    ],
    googleTitle: "Google Workspace Transfer",
    googlePoints: [
      "Simple process via Admin Console",
      "Reseller change — not a data migration",
      "All users and data remain unchanged",
    ],
    benefitsTitle: "Benefits of Switching",
    benefits: ["GEL billing", "VAT-inclusive invoices", "Local support in your language", "Corporate volume discounts"],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Will I lose any data?", a: "No. The transfer does not involve data migration — everything remains unchanged." },
      { q: "Will there be downtime?", a: "No. The process happens in the background with zero service interruption." },
      { q: "How long does it take?", a: "Typically 1-3 business days, depending on the vendor." },
      { q: "Do I need to change anything on my side?", a: "Just approve the transfer request — we handle the rest." },
    ],
    ctaTitle: "Start Your Transfer",
    ctaSubtitle: "Contact us and we'll handle everything for you.",
    ctaContact: "Contact Us",
    ctaServices: "View Services",
  },
  ru: {
    metaTitle: "Перенос лицензий | ITC Georgia",
    metaDesc: "Перенесите существующие лицензии в ITC Georgia — без простоев, без потери данных, бесшовный процесс.",
    heroLabel: "Перенос лицензий",
    heroTitle: "Перенесите ваши лицензии",
    heroSubtitle: "Простой и быстрый процесс перехода к локальному партнёру — без простоев и лишних хлопот.",
    howItWorks: "Как это работает",
    steps: [
      { title: "Свяжитесь с нами", desc: "Запишитесь на бесплатную консультацию — оцените текущие лицензии и потребности." },
      { title: "Анализ лицензий", desc: "Наша команда проанализирует ваши текущие подписки и предложит оптимальный план." },
      { title: "Авторизация", desc: "Вы подтверждаете перенос через портал вендора — Microsoft Partner Center, AWS или Google Admin Console." },
      { title: "Завершение переноса", desc: "Процесс завершается за 1–3 рабочих дня — без прерывания сервиса." },
      { title: "Локальная поддержка", desc: "Получите расчёты в лари, счета с НДС и поддержку на грузинском языке." },
    ],
    msTitle: "Перенос лицензий Microsoft CSP",
    msPoints: [
      "Перенос требует лишь подтверждения по ссылке",
      "Клиент получает письмо/ссылку, нажимает подтвердить — готово",
      "Без простоев, без потери данных, без прерывания сервиса",
      "Все существующие лицензии, пользователи и данные остаются без изменений",
    ],
    awsTitle: "Перенос учётной записи AWS",
    awsPoints: [
      "Привязка существующей учётной записи AWS к ITC Georgia для биллинга",
      "Или создание новой учётной записи в организации ITC Georgia",
      "Существующие ресурсы остаются нетронутыми",
    ],
    googleTitle: "Перенос Google Workspace",
    googlePoints: [
      "Простой процесс через Admin Console",
      "Смена реселлера — не миграция данных",
      "Все пользователи и данные остаются без изменений",
    ],
    benefitsTitle: "Преимущества перехода",
    benefits: ["Расчёты в лари", "Счета с включённым НДС", "Локальная поддержка на вашем языке", "Корпоративные объёмные скидки"],
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      { q: "Потеряю ли я данные?", a: "Нет. Перенос не включает миграцию данных — всё остаётся без изменений." },
      { q: "Будет ли простой?", a: "Нет. Процесс происходит в фоновом режиме без прерывания сервиса." },
      { q: "Сколько времени это занимает?", a: "Обычно 1–3 рабочих дня, в зависимости от вендора." },
      { q: "Нужно ли мне что-то менять?", a: "Просто подтвердите запрос на перенос — остальное мы берём на себя." },
    ],
    ctaTitle: "Начните перенос",
    ctaSubtitle: "Свяжитесь с нами, и мы позаботимся обо всём.",
    ctaContact: "Связаться с нами",
    ctaServices: "Смотреть сервисы",
  },
  uk: {
    metaTitle: "Перенесення ліцензій | ITC Georgia",
    metaDesc: "Перенесіть наявні ліцензії до ITC Georgia — без простоїв, без втрати даних, безперебійний процес.",
    heroLabel: "Перенесення ліцензій",
    heroTitle: "Перенесіть ваші ліцензії",
    heroSubtitle: "Простий і швидкий процес переходу до локального партнера — без простоїв і зайвих клопотів.",
    howItWorks: "Як це працює",
    steps: [
      { title: "Зв'яжіться з нами", desc: "Запишіться на безкоштовну консультацію — оцініть поточні ліцензії та потреби." },
      { title: "Аналіз ліцензій", desc: "Наша команда проаналізує ваші поточні підписки і запропонує оптимальний план." },
      { title: "Авторизація", desc: "Ви підтверджуєте перенесення через портал вендора — Microsoft Partner Center, AWS або Google Admin Console." },
      { title: "Завершення перенесення", desc: "Процес завершується за 1–3 робочих дні — без переривання сервісу." },
      { title: "Локальна підтримка", desc: "Отримайте розрахунки в ларі, рахунки з ПДВ та підтримку грузинською мовою." },
    ],
    msTitle: "Перенесення ліцензій Microsoft CSP",
    msPoints: [
      "Перенесення потребує лише підтвердження за посиланням",
      "Клієнт отримує лист/посилання, натискає підтвердити — готово",
      "Без простоїв, без втрати даних, без переривання сервісу",
      "Усі наявні ліцензії, користувачі та дані залишаються без змін",
    ],
    awsTitle: "Перенесення облікового запису AWS",
    awsPoints: [
      "Прив'язка наявного облікового запису AWS до ITC Georgia для білінгу",
      "Або створення нового облікового запису в організації ITC Georgia",
      "Наявні ресурси залишаються недоторканими",
    ],
    googleTitle: "Перенесення Google Workspace",
    googlePoints: [
      "Простий процес через Admin Console",
      "Зміна реселера — не міграція даних",
      "Усі користувачі та дані залишаються без змін",
    ],
    benefitsTitle: "Переваги переходу",
    benefits: ["Розрахунки в ларі", "Рахунки з включеним ПДВ", "Локальна підтримка вашою мовою", "Корпоративні об'ємні знижки"],
    faqTitle: "Поширені запитання",
    faqs: [
      { q: "Чи втрачу я дані?", a: "Ні. Перенесення не включає міграцію даних — все залишається без змін." },
      { q: "Чи буде простій?", a: "Ні. Процес відбувається у фоновому режимі без переривання сервісу." },
      { q: "Скільки часу це займає?", a: "Зазвичай 1–3 робочих дні, залежно від вендора." },
      { q: "Чи потрібно мені щось змінювати?", a: "Просто підтвердіть запит на перенесення — решту ми візьмемо на себе." },
    ],
    ctaTitle: "Розпочніть перенесення",
    ctaSubtitle: "Зв'яжіться з нами, і ми подбаємо про все.",
    ctaContact: "Зв'язатися з нами",
    ctaServices: "Переглянути сервіси",
  },
  tr: {
    metaTitle: "Lisans Transferi | ITC Georgia",
    metaDesc: "Mevcut lisanslarınızı ITC Georgia'ya kolayca transfer edin — kesinti yok, veri kaybı yok, sorunsuz süreç.",
    heroLabel: "Lisans Transferi",
    heroTitle: "Lisanslarınızı Transfer Edin",
    heroSubtitle: "Yerel bir ortağa geçiş için basit ve hızlı süreç — kesinti yok, sorun yok.",
    howItWorks: "Nasıl Çalışır",
    steps: [
      { title: "Bize Ulaşın", desc: "Ücretsiz danışmanlık randevusu alın — mevcut lisanslarınızı ve ihtiyaçlarınızı değerlendirin." },
      { title: "Lisans İncelemesi", desc: "Ekibimiz mevcut aboneliklerinizi inceler ve optimal bir plan önerir." },
      { title: "Yetkilendirme", desc: "Transferi satıcı portalı üzerinden onaylarsınız — Microsoft Partner Center, AWS veya Google Admin Console." },
      { title: "Transfer Tamamlanır", desc: "Süreç 1–3 iş günü içinde tamamlanır — hizmet kesintisi olmaz." },
      { title: "Yerel Destek", desc: "GEL faturalandırma, KDV dahil faturalar ve yerel Gürcüce destek avantajlarından yararlanın." },
    ],
    msTitle: "Microsoft CSP Lisans Transferi",
    msPoints: [
      "Transfer yalnızca bir bağlantı onayı gerektirir",
      "Müşteri e-posta/bağlantı alır, onayla'ya tıklar — tamamdır",
      "Kesinti yok, veri kaybı yok, hizmet kesintisi yok",
      "Tüm mevcut lisanslar, kullanıcılar ve veriler değişmeden kalır",
    ],
    awsTitle: "AWS Hesap Transferi",
    awsPoints: [
      "Mevcut AWS hesabını faturalandırma için ITC Georgia'ya bağlayın",
      "Veya ITC Georgia organizasyonu altında yeni bir hesap oluşturun",
      "Mevcut kaynaklar dokunulmadan kalır",
    ],
    googleTitle: "Google Workspace Transferi",
    googlePoints: [
      "Admin Console üzerinden basit süreç",
      "Bayi değişikliği — veri taşıma değil",
      "Tüm kullanıcılar ve veriler değişmeden kalır",
    ],
    benefitsTitle: "Geçiş Avantajları",
    benefits: ["GEL faturalandırma", "KDV dahil faturalar", "Kendi dilinizde yerel destek", "Kurumsal hacim indirimleri"],
    faqTitle: "Sıkça Sorulan Sorular",
    faqs: [
      { q: "Veri kaybı olur mu?", a: "Hayır. Transfer veri taşıma içermez — her şey değişmeden kalır." },
      { q: "Kesinti olur mu?", a: "Hayır. Süreç arka planda sıfır hizmet kesintisiyle gerçekleşir." },
      { q: "Ne kadar sürer?", a: "Genellikle satıcıya bağlı olarak 1–3 iş günü." },
      { q: "Benim tarafımda bir şey değiştirmem gerekir mi?", a: "Sadece transfer talebini onaylayın — gerisini biz hallederiz." },
    ],
    ctaTitle: "Transferinizi Başlatın",
    ctaSubtitle: "Bize ulaşın, her şeyi sizin için halledelim.",
    ctaContact: "Bize Ulaşın",
    ctaServices: "Hizmetleri Görüntüle",
  },
  hy: {
    metaTitle: "Լիցենզիաների փոխանցում | ITC Georgia",
    metaDesc: "Փոխանցեք ձեր առկա լիցենզիաները ITC Georgia — անխափան առանց դադարի, առանց տվյալների կորստի.",
    heroLabel: "Լիցենզիաների փոխանցում",
    heroTitle: "Փոխանցեք ձեր լիցենզիաները",
    heroSubtitle: "Պարզ և արագ գործընթաց՝ տեղական գործընկերոջին անցնելու համար — անխափան առանց խնդիրների.",
    howItWorks: "Ինճպես է աշխատում",
    steps: [
      { title: "Կապվեք մեզ", desc: "Պատվիրեք անվճար խորհրդատվություն — գնահատեք ձեր առկա լիցենզիաներն ու կարիքները." },
      { title: "Լիցենզիաների վերլուծում", desc: "Մեր թիմը վերլուծում է ձեր ընթացիկ բաժանորդագրությունները և առաջարկում է օպտիմալ պլան." },
      { title: "Թույլտվություն", desc: "Դուք հաստատում եք փոխանցումը վենդորի պորտալով — Microsoft Partner Center, AWS կամ Google Admin Console." },
      { title: "Փոխանցման ավարտ", desc: "Գործընթացը ավարտվում է 1–3 աշխատանքային օրվա ընթացքում — ծառայությունը չի ընդհատվում." },
      { title: "Տեղական աջակցություն", desc: "Օգտվեք GEL հաշվարկումից, ԱԱՀ հաշվարագրերից և վրացերենալեզվով աջակցությունից." },
    ],
    msTitle: "Microsoft CSP լիցենզիաների փոխանցում",
    msPoints: [
      "Փոխանցման համար անհրաժեշտ է միայն հղման հաստատումը",
      "Հաճախորդը ստանում է նամակ/հղում, սեղմում է հաստատել — պատրաստ է",
      "Անխափան չկա, տվյալների կորուստ չկա, ծառայության ընդհատում չկա",
      "Բոլոր առկա լիցենզիաները, օգտագործողները և տվյալները մնում են անփոփոխ",
    ],
    awsTitle: "AWS հաշվի փոխանցում",
    awsPoints: [
      "Կապեք առկա AWS հաշիվը ITC Georgia-ին հաշվարկման համար",
      "Կամ ստեղծեք նոր հաշիվ ITC Georgia-ի կազմակերպությունում",
      "Առկա ռեսուրսները մնում են անձեռնելի",
    ],
    googleTitle: "Google Workspace փոխանցում",
    googlePoints: [
      "Պարզ գործընթաց Admin Console-ի միջոցով",
      "Վերավաճառողի փոփոխություն — ոչ թե տվյալների միգրացիա",
      "Բոլոր օգտագործողները և տվյալները մնում են անփոփոխ",
    ],
    benefitsTitle: "Անցման առավելությունները",
    benefits: ["GEL հաշվարկում", "ԱԱՀ ներառյալ հաշվարագրեր", "Տեղական աջակցություն ձեր լեզվով", "Կորպորատիվ ծավալային զեղչեր"],
    faqTitle: "Հաճախ տրվող հարցեր",
    faqs: [
      { q: "Կկորցնե՞մ տվյալները՟", a: "Ոչ։ Փոխանցումը չի ներառում տվյալների միգրացիա — ամեն ինչ մնում է անփոփոխ։" },
      { q: "Կլինի՞ դադար՟", a: "Ոչ։ Գործընթացը կատարվում է հետնային ռեժիմում՝ առանց ծառայության ընդհատման։" },
      { q: "Ինճքան ժամանակ է պահանջվում՟", a: "Սովորաբար 1–3 աշխատանքային օր՝ կախված վենդորից։" },
      { q: "Ինճ-որ փոխել պետք է իմ կողմից՟", a: "Պարզապես հաստատեք փոխանցման հարցումը — մնացածը մենք կկարգավորենք։" },
    ],
    ctaTitle: "Սկսեք փոխանցումը",
    ctaSubtitle: "Կապվեք մեզ և մենք կկարգավորենք ամեն ինչ։",
    ctaContact: "Կապվեք մեզ",
    ctaServices: "Վերատեսեք ծառայությունները",
  },
  az: {
    metaTitle: "Lisenziyaların Transferi | ITC Georgia",
    metaDesc: "Mövcud lisenziyalarınızı ITC Georgia-ya asanlıqla transfer edin — dayanma yoxdur, məlumat itkisi yoxdur.",
    heroLabel: "Lisenziya Transferi",
    heroTitle: "Lisenziyalarınızı Transfer Edin",
    heroSubtitle: "Yerli tərəfdaşa keçid üçün sadə və sürətli proses — dayanma yoxdur, narahatlıq yoxdur.",
    howItWorks: "Necə İşləyir",
    steps: [
      { title: "Bizimlə Əlaqə", desc: "Pulsuz konsultasiya üçün qeydiyyatdan keçin — mövcud lisenziyalarınızı və ehtiyaclarınızı qiymətləndirin." },
      { title: "Lisenziya İcmalı", desc: "Komandamız mövcud abunəliklərinizi nəzərdən keçirir və optimal plan təklif edir." },
      { title: "İcazə", desc: "Transferi vendor portalı vasitəsilə təsdiqləyirsiniz — Microsoft Partner Center, AWS və ya Google Admin Console." },
      { title: "Transfer Tamamlanır", desc: "Proses 1–3 iş günü ərzində tamamlanır — xidmət kəsilməsi olmur." },
      { title: "Yerli Dəstək", desc: "GEL hesablaşması, ƏDV daxil fakturalar və yerli Gürcü dilində dəstəkdən yararlanın." },
    ],
    msTitle: "Microsoft CSP Lisenziya Transferi",
    msPoints: [
      "Transfer yalnız link təsdiqləməsi tələb edir",
      "Müştəri e-poçt/link alır, təsdiqləyir — hazırdır",
      "Dayanma yoxdur, məlumat itkisi yoxdur, xidmət kəsilməsi yoxdur",
      "Bütün mövcud lisenziyalar, istifadəçilər və məlumatlar dəyişməz qalır",
    ],
    awsTitle: "AWS Hesab Transferi",
    awsPoints: [
      "Mövcud AWS hesabını hesablaşma üçün ITC Georgia-ya bağlayın",
      "Və ya ITC Georgia təşkilatı altında yeni hesab yaradın",
      "Mövcud resurslar toxunulmaz qalır",
    ],
    googleTitle: "Google Workspace Transferi",
    googlePoints: [
      "Admin Console vasitəsilə sadə proses",
      "Reseller dəyişikliyi — məlumat miqrasiyası deyil",
      "Bütün istifadəçilər və məlumatlar dəyişməz qalır",
    ],
    benefitsTitle: "Keçid Üstünlükləri",
    benefits: ["GEL hesablaşması", "ƏDV daxil fakturalar", "Öz dilinizdə yerli dəstək", "Korporativ həcm endirimləri"],
    faqTitle: "Tez-tez Verilən Suallar",
    faqs: [
      { q: "Məlumat itirəcəyəm?", a: "Xeyr. Transfer məlumat miqrasiyası daxil etmir — hər şey dəyişməz qalır." },
      { q: "Dayanma olacaq?", a: "Xeyr. Proses arxa planda sıfır xidmət kəsilməsi ilə baş verir." },
      { q: "Nə qədər vaxt aparır?", a: "Adətən vendordan asılı olaraq 1–3 iş günü." },
      { q: "Mənim tərəfimdə nəsə dəyişmək lazımdır?", a: "Sadəcə transfer sorğusunu təsdiqləyin — qalanını biz həll edirik." },
    ],
    ctaTitle: "Transferinizə Başlayın",
    ctaSubtitle: "Bizimlə əlaqə saxlayın, hər şeyi sizin üçün həll edək.",
    ctaContact: "Bizimlə Əlaqə",
    ctaServices: "Xidmətlərə Baxın",
  },
  hi: {
    metaTitle: "लाइसेंस ट्रांसफर | ITC Georgia",
    metaDesc: "अपने मौजूदा लाइसेंस आसानी से ITC Georgia में ट्रांसफर करें — कोई डाउनटाइम नहीं, कोई डेटा हानि नहीं।",
    heroLabel: "लाइसेंस ट्रांसफर",
    heroTitle: "अपने लाइसेंस ट्रांसफर करें",
    heroSubtitle: "स्थानीय पार्टनर पर स्विच करने की सरल और तेज़ प्रक्रिया — कोई डाउनटाइम नहीं, कोई परेशानी नहीं।",
    howItWorks: "यह कैसे काम करता है",
    steps: [
      { title: "हमसे संपर्क करें", desc: "निःशुल्क परामर्श शेड्यूल करें — अपने वर्तमान लाइसेंस और आवश्यकताओं का आकलन करें।" },
      { title: "लाइसेंस समीक्षा", desc: "हमारी टीम आपकी वर्तमान सदस्यताओं की समीक्षा करती है और एक इष्टतम योजना प्रस्तावित करती है।" },
      { title: "प्राधिकरण", desc: "आप वेंडर पोर्टल के माध्यम से ट्रांसफर की पुष्टि करते हैं — Microsoft Partner Center, AWS, या Google Admin Console।" },
      { title: "ट्रांसफर पूर्ण", desc: "प्रक्रिया 1–3 कार्यदिवसों में पूरी होती है — कोई सेवा बाधा नहीं।" },
      { title: "स्थानीय सहायता", desc: "GEL बिलिंग, VAT चालान और स्थानीय जॉर्जियाई भाषा सहायता का लाभ उठाएं।" },
    ],
    msTitle: "Microsoft CSP लाइसेंस ट्रांसफर",
    msPoints: [
      "ट्रांसफर के लिए केवल एक लिंक स्वीकृति आवश्यक है",
      "क्लाइंट को ईमेल/लिंक प्राप्त होता है, स्वीकृति पर क्लिक करें — हो गया",
      "कोई डाउनटाइम नहीं, कोई डेटा हानि नहीं, कोई सेवा बाधा नहीं",
      "सभी मौजूदा लाइसेंस, उपयोगकर्ता और डेटा अपरिवर्तित रहते हैं",
    ],
    awsTitle: "AWS खाता ट्रांसफर",
    awsPoints: [
      "बिलिंग के लिए मौजूदा AWS खाते को ITC Georgia से लिंक करें",
      "या ITC Georgia के संगठन के तहत नया खाता बनाएं",
      "मौजूदा संसाधन अछूते रहते हैं",
    ],
    googleTitle: "Google Workspace ट्रांसफर",
    googlePoints: [
      "Admin Console के माध्यम से सरल प्रक्रिया",
      "रीसेलर परिवर्तन — डेटा माइग्रेशन नहीं",
      "सभी उपयोगकर्ता और डेटा अपरिवर्तित रहते हैं",
    ],
    benefitsTitle: "स्विच करने के लाभ",
    benefits: ["GEL बिलिंग", "VAT-सहित चालान", "आपकी भाषा में स्थानीय सहायता", "कॉर्पोरेट वॉल्यूम छूट"],
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      { q: "क्या मेरा डेटा खो जाएगा?", a: "नहीं। ट्रांसफर में डेटा माइग्रेशन शामिल नहीं है — सब कुछ अपरिवर्तित रहता है।" },
      { q: "क्या डाउनटाइम होगा?", a: "नहीं। प्रक्रिया बैकग्राउंड में बिना किसी सेवा बाधा के होती है।" },
      { q: "इसमें कितना समय लगता है?", a: "आमतौर पर वेंडर के आधार पर 1–3 कार्यदिवस।" },
      { q: "क्या मुझे अपनी तरफ से कुछ बदलना होगा?", a: "बस ट्रांसफर अनुरोध को स्वीकृत करें — बाकी हम संभालते हैं।" },
    ],
    ctaTitle: "अपना ट्रांसफर शुरू करें",
    ctaSubtitle: "हमसे संपर्क करें और हम सब कुछ आपके लिए संभालेंगे।",
    ctaContact: "हमसे संपर्क करें",
    ctaServices: "सेवाएं देखें",
  },
  fa: {
    metaTitle: "انتقال مجوزها | ITC Georgia",
    metaDesc: "مجوزهای موجود خود را به آسانی به ITC Georgia منتقل کنید — بدون خرابی، بدون از دست دادن داده.",
    heroLabel: "انتقال مجوز",
    heroTitle: "مجوزهای خود را منتقل کنید",
    heroSubtitle: "فرآیند ساده و سریع برای تغییر به شریک محلی — بدون خرابی، بدون دردسر.",
    howItWorks: "چگونه کار می‌کند",
    steps: [
      { title: "با ما تماس بگیرید", desc: "یک مشاوره رایگان رزرو کنید — مجوزها و نیازهای فعلی خود را ارزیابی کنید." },
      { title: "بررسی مجوز", desc: "تیم ما اشتراک‌های فعلی شما را بررسی می‌کند و یک طرح بهینه پیشنهاد می‌دهد." },
      { title: "تأیید انتقال", desc: "شما انتقال را از طریق پورتال فروشنده تأیید می‌کنید — Microsoft Partner Center، AWS یا Google Admin Console." },
      { title: "تکمیل انتقال", desc: "فرآیند در ۱ تا ۳ روز کاری تکمیل می‌شود — بدون وقفه در سرویس." },
      { title: "پشتیبانی محلی", desc: "از صورتحساب GEL، فاکتورهای شامل VAT و پشتیبانی به زبان گرجی بهره‌مند شوید." },
    ],
    msTitle: "انتقال مجوز Microsoft CSP",
    msPoints: [
      "انتقال فقط نیاز به تأیید یک لینک دارد",
      "مشتری ایمیل/لینک دریافت می‌کند، تأیید را کلیک می‌کند — انجام شد",
      "بدون خرابی، بدون از دست دادن داده، بدون وقفه در سرویس",
      "همه مجوزها، کاربران و داده‌های موجود بدون تغییر باقی می‌مانند",
    ],
    awsTitle: "انتقال حساب AWS",
    awsPoints: [
      "حساب AWS موجود را برای صورتحساب به ITC Georgia متصل کنید",
      "یا یک حساب جدید تحت سازمان ITC Georgia ایجاد کنید",
      "منابع موجود دست‌نخورده باقی می‌مانند",
    ],
    googleTitle: "انتقال Google Workspace",
    googlePoints: [
      "فرآیند ساده از طریق Admin Console",
      "تغییر فروشنده — نه مهاجرت داده",
      "همه کاربران و داده‌ها بدون تغییر باقی می‌مانند",
    ],
    benefitsTitle: "مزایای تغییر",
    benefits: ["صورتحساب GEL", "فاکتورهای شامل VAT", "پشتیبانی محلی به زبان شما", "تخفیف‌های حجمی شرکتی"],
    faqTitle: "سوالات متداول",
    faqs: [
      { q: "آیا داده‌ای از دست خواهم داد؟", a: "خیر. انتقال شامل مهاجرت داده نمی‌شود — همه چیز بدون تغییر باقی می‌ماند." },
      { q: "آیا خرابی وجود خواهد داشت؟", a: "خیر. فرآیند در پس‌زمینه و بدون هیچ وقفه‌ای در سرویس انجام می‌شود." },
      { q: "چقدر طول می‌کشد؟", a: "معمولاً ۱ تا ۳ روز کاری، بسته به فروشنده." },
      { q: "آیا نیاز است چیزی در سمت من تغییر کند؟", a: "فقط درخواست انتقال را تأیید کنید — ما بقیه کارها را انجام می‌دهیم." },
    ],
    ctaTitle: "انتقال خود را شروع کنید",
    ctaSubtitle: "با ما تماس بگیرید و ما همه چیز را برای شما انجام می‌دهیم.",
    ctaContact: "تماس با ما",
    ctaServices: "مشاهده خدمات",
  },
  ar: {
    metaTitle: "نقل التراخيص | ITC Georgia",
    metaDesc: "انقل تراخيصك الحالية إلى ITC Georgia بسهولة — بدون توقف، بدون فقدان بيانات، عملية سلسة.",
    heroLabel: "نقل التراخيص",
    heroTitle: "انقل تراخيصك",
    heroSubtitle: "عملية بسيطة وسريعة للتحول إلى شريك محلي — بدون توقف، بدون متاعب.",
    howItWorks: "كيف تعمل العملية",
    steps: [
      { title: "تواصل معنا", desc: "حدد موعداً لاستشارة مجانية — قيّم تراخيصك واحتياجاتك الحالية." },
      { title: "مراجعة التراخيص", desc: "يراجع فريقنا اشتراكاتك الحالية ويقترح خطة مثالية." },
      { title: "التفويض", desc: "تؤكد النقل عبر بوابة المورد — Microsoft Partner Center أو AWS أو Google Admin Console." },
      { title: "اكتمال النقل", desc: "تكتمل العملية خلال ١–٣ أيام عمل — بدون انقطاع في الخدمة." },
      { title: "الدعم المحلي", desc: "استمتع بالفوترة بالـ GEL وفواتير شاملة لضريبة القيمة المضافة ودعم باللغة الجورجية." },
    ],
    msTitle: "نقل تراخيص Microsoft CSP",
    msPoints: [
      "النقل يتطلب فقط الموافقة على رابط",
      "يتلقى العميل بريداً إلكترونياً/رابطاً، ينقر على الموافقة — تم",
      "بدون توقف، بدون فقدان بيانات، بدون انقطاع في الخدمة",
      "جميع التراخيص والمستخدمين والبيانات الحالية تبقى دون تغيير",
    ],
    awsTitle: "نقل حساب AWS",
    awsPoints: [
      "ربط حساب AWS الحالي بـ ITC Georgia للفوترة",
      "أو إنشاء حساب جديد تحت مؤسسة ITC Georgia",
      "الموارد الحالية تبقى كما هي",
    ],
    googleTitle: "نقل Google Workspace",
    googlePoints: [
      "عملية بسيطة عبر Admin Console",
      "تغيير الموزع — وليس ترحيل البيانات",
      "جميع المستخدمين والبيانات تبقى دون تغيير",
    ],
    benefitsTitle: "مزايا التحول",
    benefits: ["الفوترة بالـ GEL", "فواتير شاملة لضريبة القيمة المضافة", "دعم محلي بلغتك", "خصومات الحجم للشركات"],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "هل سأفقد أي بيانات؟", a: "لا. النقل لا يتضمن ترحيل بيانات — كل شيء يبقى دون تغيير." },
      { q: "هل سيكون هناك توقف؟", a: "لا. تتم العملية في الخلفية بدون أي انقطاع في الخدمة." },
      { q: "كم يستغرق الأمر؟", a: "عادة ١–٣ أيام عمل، حسب المورد." },
      { q: "هل أحتاج لتغيير أي شيء من جانبي؟", a: "فقط وافق على طلب النقل — نحن نتولى الباقي." },
    ],
    ctaTitle: "ابدأ عملية النقل",
    ctaSubtitle: "تواصل معنا وسنتولى كل شيء من أجلك.",
    ctaContact: "تواصل معنا",
    ctaServices: "عرض الخدمات",
  },
};

type LangKey = keyof typeof content;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const c = content[lang as LangKey] || content.en;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
  };
}

/* ─── tiny helpers ─── */
function Check() {
  return (
    <svg
      className="w-4 h-4 text-azure-600 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-azure-600 text-white text-sm font-semibold shrink-0">
      {n}
    </span>
  );
}

export default async function TransferPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;
  const c = content[lang as LangKey] || content.en;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {c.heroLabel}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {c.heroTitle}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {c.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-10">
            {c.howItWorks}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.steps.map((step, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <StepNumber n={i + 1} />
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft CSP Transfer */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 space-y-16">
          {/* Microsoft */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              Microsoft CSP
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              {c.msTitle}
            </h2>
            <ul className="space-y-3">
              {c.msPoints.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <Check />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* AWS */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              Amazon Web Services
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              {c.awsTitle}
            </h2>
            <ul className="space-y-3">
              {c.awsPoints.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <Check />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Google */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              Google Workspace
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              {c.googleTitle}
            </h2>
            <ul className="space-y-3">
              {c.googlePoints.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <Check />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits of switching */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
            {c.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-5"
              >
                <Check />
                <span className="text-sm font-medium text-slate-800">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-10">
            {c.faqTitle}
          </h2>
          <div className="space-y-6">
            {c.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {c.ctaTitle}
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            {c.ctaSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${p}/contact`}
              className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              {c.ctaContact}
            </Link>
            <Link
              href={`${p}/services`}
              className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              {c.ctaServices}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
