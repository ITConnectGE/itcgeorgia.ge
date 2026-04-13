import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

/* ─── translations ─── */
const content = {
  ka: {
    metaTitle: "კორპორატიული შეთავაზება | ITC Georgia",
    metaDesc: "სპეციალური კორპორატიული ფასები, მოცულობითი ფასდაკლებები და პერსონალიზებული ლიცენზირების პაკეტები ორგანიზაციებისთვის.",
    heroLabel: "კორპორატიული",
    heroTitle: "კორპორატიული შეთავაზება",
    heroSubtitle: "სპეციალური ფასები და პირობები ორგანიზაციებისთვის — მოცულობითი ფასდაკლებები, პერსონალური მხარდაჭერა და მოქნილი ანგარიშსწორება.",
    whyTitle: "რატომ ITC Georgia?",
    valueProps: [
      "ვაწარმოებთ მოლაპარაკებებს ვენდორებთან თქვენი სახელით",
      "მოცულობითი ფასდაკლებები დიდი შეკვეთებისთვის",
      "ინდივიდუალური ლიცენზირების პაკეტები",
      "მრავალწლიანი ხელშეკრულების უპირატესობები",
      "დედიკატებული ანგარიშის მენეჯერი",
    ],
    tiersTitle: "შეთავაზების პაკეტები",
    tiers: [
      {
        name: "სტანდარტი",
        range: "5-49 მომხმარებელი",
        features: ["სტანდარტული რესელერის ფასები", "L1 მხარდაჭერა", "ლარში ანგარიშსწორება", "დღგ-ს ჩათვლით ინვოისი"],
        highlight: false,
      },
      {
        name: "ბიზნესი",
        range: "50-249 მომხმარებელი",
        features: ["მოცულობითი ფასდაკლებები", "პრიორიტეტული მხარდაჭერა", "დედიკატებული საკონტაქტო პირი", "ლარში ანგარიშსწორება", "დღგ-ს ჩათვლით ინვოისი"],
        highlight: true,
      },
      {
        name: "ენტერპრაისი",
        range: "250+ მომხმარებელი",
        features: ["ინდივიდუალური ფასები", "SLA ხელშეკრულება", "მიგრაცია ფასში შედის", "ანგარიშის მენეჯერი", "ლარში ანგარიშსწორება", "დღგ-ს ჩათვლით ინვოისი"],
        highlight: false,
      },
    ],
    requestOffer: "შეთავაზების მოთხოვნა",
    negotiateTitle: "რაზე შეგვიძლია მოლაპარაკება",
    negotiateItems: [
      "Microsoft CSP ფასების დონეები",
      "AWS commitment ფასდაკლებები (Savings Plans, Reserved Instances)",
      "Google Workspace წლიური commitment ფასები",
      "მრავალპროდუქტიანი პაკეტები",
    ],
    ctaTitle: "მოითხოვეთ კორპორატიული შეთავაზება",
    ctaSubtitle: "დაგვიკავშირდით და მიიღეთ თქვენს ორგანიზაციაზე მორგებული შეთავაზება.",
    ctaContact: "დაგვიკავშირდით",
    ctaServices: "სერვისების ნახვა",
  },
  en: {
    metaTitle: "Corporate Offers | ITC Georgia",
    metaDesc: "Special corporate pricing, volume discounts, and custom licensing bundles for organizations.",
    heroLabel: "Corporate",
    heroTitle: "Corporate Offers",
    heroSubtitle: "Special pricing and terms for organizations — volume discounts, dedicated support, and flexible billing.",
    whyTitle: "Why ITC Georgia?",
    valueProps: [
      "We negotiate with vendors on your behalf",
      "Volume discounts for larger orders",
      "Custom licensing bundles",
      "Multi-year agreement benefits",
      "Dedicated account management",
    ],
    tiersTitle: "Offer Tiers",
    tiers: [
      {
        name: "Standard",
        range: "5-49 users",
        features: ["Standard reseller pricing", "L1 support", "GEL billing", "VAT-inclusive invoices"],
        highlight: false,
      },
      {
        name: "Business",
        range: "50-249 users",
        features: ["Volume discounts", "Priority support", "Dedicated contact person", "GEL billing", "VAT-inclusive invoices"],
        highlight: true,
      },
      {
        name: "Enterprise",
        range: "250+ users",
        features: ["Custom pricing", "SLA agreement", "Migration included", "Account manager", "GEL billing", "VAT-inclusive invoices"],
        highlight: false,
      },
    ],
    requestOffer: "Request Offer",
    negotiateTitle: "What We Can Negotiate",
    negotiateItems: [
      "Microsoft CSP pricing tiers",
      "AWS commitment discounts (Savings Plans, Reserved Instances)",
      "Google Workspace annual commitment pricing",
      "Multi-product bundles",
    ],
    ctaTitle: "Request a Corporate Offer",
    ctaSubtitle: "Contact us and receive a tailored offer for your organization.",
    ctaContact: "Contact Us",
    ctaServices: "View Services",
  },
  ru: {
    metaTitle: "Корпоративное предложение | ITC Georgia",
    metaDesc: "Специальные корпоративные цены, объёмные скидки и персонализированные пакеты лицензирования для организаций.",
    heroLabel: "Корпоративное",
    heroTitle: "Корпоративное предложение",
    heroSubtitle: "Специальные цены и условия для организаций — объёмные скидки, выделенная поддержка и гибкий биллинг.",
    whyTitle: "Почему ITC Georgia?",
    valueProps: [
      "Мы ведём переговоры с вендорами от вашего имени",
      "Объёмные скидки для крупных заказов",
      "Индивидуальные пакеты лицензирования",
      "Преимущества многолетних контрактов",
      "Выделенный менеджер по работе с клиентами",
    ],
    tiersTitle: "Пакеты предложений",
    tiers: [
      {
        name: "Стандарт",
        range: "5–49 пользователей",
        features: ["Стандартные реселлерские цены", "Поддержка L1", "Расчёты в лари", "Счета с включённым НДС"],
        highlight: false,
      },
      {
        name: "Бизнес",
        range: "50–249 пользователей",
        features: ["Объёмные скидки", "Приоритетная поддержка", "Выделенное контактное лицо", "Расчёты в лари", "Счета с включённым НДС"],
        highlight: true,
      },
      {
        name: "Энтерпрайз",
        range: "250+ пользователей",
        features: ["Индивидуальные цены", "SLA-соглашение", "Миграция включена", "Менеджер по работе с клиентами", "Расчёты в лари", "Счета с включённым НДС"],
        highlight: false,
      },
    ],
    requestOffer: "Запросить предложение",
    negotiateTitle: "О чём мы можем договориться",
    negotiateItems: [
      "Ценовые уровни Microsoft CSP",
      "Скидки по обязательствам AWS (Savings Plans, Reserved Instances)",
      "Годовые цены Google Workspace по обязательствам",
      "Мультипродуктовые пакеты",
    ],
    ctaTitle: "Запросите корпоративное предложение",
    ctaSubtitle: "Свяжитесь с нами и получите предложение, адаптированное для вашей организации.",
    ctaContact: "Связаться с нами",
    ctaServices: "Смотреть сервисы",
  },
  uk: {
    metaTitle: "Корпоративна пропозиція | ITC Georgia",
    metaDesc: "Спеціальні корпоративні ціни, об'ємні знижки та персоналізовані пакети ліцензування для організацій.",
    heroLabel: "Корпоративне",
    heroTitle: "Корпоративна пропозиція",
    heroSubtitle: "Спеціальні ціни та умови для організацій — об'ємні знижки, виділена підтримка та гнучкий білінг.",
    whyTitle: "Чому ITC Georgia?",
    valueProps: [
      "Ми ведемо переговори з вендорами від вашого імені",
      "Об'ємні знижки для великих замовлень",
      "Індивідуальні пакети ліцензування",
      "Переваги багаторічних контрактів",
      "Виділений менеджер по роботі з клієнтами",
    ],
    tiersTitle: "Пакети пропозицій",
    tiers: [
      {
        name: "Стандарт",
        range: "5–49 користувачів",
        features: ["Стандартні реселерські ціни", "Підтримка L1", "Розрахунки в ларі", "Рахунки з включеним ПДВ"],
        highlight: false,
      },
      {
        name: "Бізнес",
        range: "50–249 користувачів",
        features: ["Об'ємні знижки", "Пріоритетна підтримка", "Виділена контактна особа", "Розрахунки в ларі", "Рахунки з включеним ПДВ"],
        highlight: true,
      },
      {
        name: "Ентерпрайз",
        range: "250+ користувачів",
        features: ["Індивідуальні ціни", "SLA-угода", "Міграція включена", "Менеджер по роботі з клієнтами", "Розрахунки в ларі", "Рахунки з включеним ПДВ"],
        highlight: false,
      },
    ],
    requestOffer: "Запитати пропозицію",
    negotiateTitle: "Про що ми можемо домовитися",
    negotiateItems: [
      "Цінові рівні Microsoft CSP",
      "Знижки за зобов'язаннями AWS (Savings Plans, Reserved Instances)",
      "Річні ціни Google Workspace за зобов'язаннями",
      "Мультипродуктові пакети",
    ],
    ctaTitle: "Запитайте корпоративну пропозицію",
    ctaSubtitle: "Зв'яжіться з нами та отримайте пропозицію, адаптовану для вашої організації.",
    ctaContact: "Зв'язатися з нами",
    ctaServices: "Переглянути сервіси",
  },
  tr: {
    metaTitle: "Kurumsal Teklifler | ITC Georgia",
    metaDesc: "Organizasyonlar için özel kurumsal fiyatlandırma, hacim indirimleri ve özel lisanslama paketleri.",
    heroLabel: "Kurumsal",
    heroTitle: "Kurumsal Teklifler",
    heroSubtitle: "Organizasyonlar için özel fiyatlandırma ve koşullar — hacim indirimleri, özel destek ve esnek faturalandırma.",
    whyTitle: "Neden ITC Georgia?",
    valueProps: [
      "Sizin adınıza satıcılarla müzakere ediyoruz",
      "Büyük siparişler için hacim indirimleri",
      "Özel lisanslama paketleri",
      "Çok yıllık anlaşma avantajları",
      "Özel hesap yönetimi",
    ],
    tiersTitle: "Teklif Paketleri",
    tiers: [
      {
        name: "Standart",
        range: "5–49 kullanıcı",
        features: ["Standart bayi fiyatlandırması", "L1 destek", "GEL faturalandırma", "KDV dahil faturalar"],
        highlight: false,
      },
      {
        name: "Business",
        range: "50–249 kullanıcı",
        features: ["Hacim indirimleri", "Öncelikli destek", "Özel iletişim kişisi", "GEL faturalandırma", "KDV dahil faturalar"],
        highlight: true,
      },
      {
        name: "Enterprise",
        range: "250+ kullanıcı",
        features: ["Özel fiyatlandırma", "SLA anlaşması", "Geçiş dahil", "Hesap yöneticisi", "GEL faturalandırma", "KDV dahil faturalar"],
        highlight: false,
      },
    ],
    requestOffer: "Teklif Talep Et",
    negotiateTitle: "Neler Üzerine Müzakere Edebiliriz",
    negotiateItems: [
      "Microsoft CSP fiyatlandırma seviyeleri",
      "AWS taahhüt indirimleri (Savings Plans, Reserved Instances)",
      "Google Workspace yıllık taahhüt fiyatlandırması",
      "Çoklu ürün paketleri",
    ],
    ctaTitle: "Kurumsal Teklif Talep Edin",
    ctaSubtitle: "Bize ulaşın ve organizasyonunuz için özel bir teklif alın.",
    ctaContact: "Bize Ulaşın",
    ctaServices: "Hizmetleri Görüntüle",
  },
  hy: {
    metaTitle: "Կորպորատիվ առաջարկ | ITC Georgia",
    metaDesc: "Հատուկ կորպորատիվ գներ, ծավալային զեղչեր և հարմարեցված լիցենզավորման փաթեթներ կազմակերպությունների համար.",
    heroLabel: "Կորպորատիվ",
    heroTitle: "Կորպորատիվ առաջարկ",
    heroSubtitle: "Հատուկ գներ և պայմաններ կազմակերպությունների համար — ծավալային զեղչեր, նվիրված աջակցություն և ճկուն հաշվարկում.",
    whyTitle: "Ինչու ITC Georgia?",
    valueProps: [
      "Մենք բանակցություններ ենք վարում վենդորների հետ ձեր անունից",
      "Ծավալային զեղչեր մեծ պատվերների համար",
      "Հատուկ լիցենզավորման փաթեթներ",
      "Բազմամյա պայմանագրի առավելություններ",
      "Նվիրված հաշվի կառավարում",
    ],
    tiersTitle: "Առաջարկի փաթեթներ",
    tiers: [
      {
        name: "Ստանդարտ",
        range: "5–49 օգտագործող",
        features: ["Ստանդարտ վերավաճառողի գներ", "L1 աջակցություն", "GEL հաշվարկում", "ԱԱՀ ներառյալ հաշվարագրեր"],
        highlight: false,
      },
      {
        name: "Բիզնես",
        range: "50–249 օգտագործող",
        features: ["Ծավալային զեղչեր", "Առաջնային աջակցություն", "Նվիրված կապի անձ", "GEL հաշվարկում", "ԱԱՀ ներառյալ հաշվարագրեր"],
        highlight: true,
      },
      {
        name: "Էնտերպրայզ",
        range: "250+ օգտագործող",
        features: ["Հատուկ գներ", "SLA պայմանագիր", "Միգրացիան ներառված է", "Հաշվի կառավարիչ", "GEL հաշվարկում", "ԱԱՀ ներառյալ հաշվարագրեր"],
        highlight: false,
      },
    ],
    requestOffer: "Պահանջել առաջարկ",
    negotiateTitle: "Ինճի մասին կարող ենք բանակցել",
    negotiateItems: [
      "Microsoft CSP գնային մակարդակներ",
      "AWS պարտավորության զեղչեր (Savings Plans, Reserved Instances)",
      "Google Workspace տարեկան պարտավորության գներ",
      "Բազմապրոդուկտային փաթեթներ",
    ],
    ctaTitle: "Պահանջեք կորպորատիվ առաջարկ",
    ctaSubtitle: "Կապվեք մեզ և ստացեք ձեր կազմակերպությանը համապատասխան առաջարկ.",
    ctaContact: "Կապվեք մեզ",
    ctaServices: "Վերատեսեք ծառայությունները",
  },
  az: {
    metaTitle: "Korporativ Təkliflər | ITC Georgia",
    metaDesc: "Təşkilatlar üçün xüsusi korporativ qiymətlər, həcm endirimləri və fərdi lisenziyalaşdırma paketləri.",
    heroLabel: "Korporativ",
    heroTitle: "Korporativ Təkliflər",
    heroSubtitle: "Təşkilatlar üçün xüsusi qiymətlər və şərtlər — həcm endirimləri, xüsusi dəstək və çevik hesablaşma.",
    whyTitle: "Niyə ITC Georgia?",
    valueProps: [
      "Sizin adınıza vendorlarla danışıqlar aparırıq",
      "Böyük sifarişlər üçün həcm endirimləri",
      "Fərdi lisenziyalaşdırma paketləri",
      "Çoxillik müqavilə üstünlükləri",
      "Xüsusi hesab meneceri",
    ],
    tiersTitle: "Təklif Paketləri",
    tiers: [
      {
        name: "Standart",
        range: "5–49 istifadəçi",
        features: ["Standart reseller qiymətləri", "L1 dəstək", "GEL hesablaşması", "ƏDV daxil fakturalar"],
        highlight: false,
      },
      {
        name: "Biznes",
        range: "50–249 istifadəçi",
        features: ["Həcm endirimləri", "Prioritet dəstək", "Xüsusi əlaqə şəxsi", "GEL hesablaşması", "ƏDV daxil fakturalar"],
        highlight: true,
      },
      {
        name: "Enterprise",
        range: "250+ istifadəçi",
        features: ["Fərdi qiymətlər", "SLA müqaviləsi", "Miqrasiya daxildir", "Hesab meneceri", "GEL hesablaşması", "ƏDV daxil fakturalar"],
        highlight: false,
      },
    ],
    requestOffer: "Təklif Sorğusu",
    negotiateTitle: "Nələr Haqqında Danışa Bilərik",
    negotiateItems: [
      "Microsoft CSP qiymət səviyyələri",
      "AWS öhdəlik endirimləri (Savings Plans, Reserved Instances)",
      "Google Workspace illik öhdəlik qiymətləri",
      "Çox məhsullu paketlər",
    ],
    ctaTitle: "Korporativ Təklif Sorğusu Göndərin",
    ctaSubtitle: "Bizimlə əlaqə saxlayın və təşkilatınız üçün xüsusi təklif alın.",
    ctaContact: "Bizimlə Əlaqə",
    ctaServices: "Xidmətlərə Baxın",
  },
  hi: {
    metaTitle: "कॉर्पोरेट ऑफर | ITC Georgia",
    metaDesc: "संगठनों के लिए विशेष कॉर्पोरेट मूल्य निर्धारण, वॉल्यूम छूट और कस्टम लाइसेंसिंग बंडल।",
    heroLabel: "कॉर्पोरेट",
    heroTitle: "कॉर्पोरेट ऑफर",
    heroSubtitle: "संगठनों के लिए विशेष मूल्य निर्धारण और शर्तें — वॉल्यूम छूट, समर्पित सहायता और लचीला बिलिंग।",
    whyTitle: "ITC Georgia क्यों?",
    valueProps: [
      "हम आपकी ओर से वेंडरों के साथ बातचीत करते हैं",
      "बड़े ऑर्डर के लिए वॉल्यूम छूट",
      "कस्टम लाइसेंसिंग बंडल",
      "बहु-वर्षीय अनुबंध के लाभ",
      "समर्पित अकाउंट मैनेजमेंट",
    ],
    tiersTitle: "ऑफर पैकेज",
    tiers: [
      {
        name: "स्टैंडर्ड",
        range: "5–49 उपयोगकर्ता",
        features: ["मानक रीसेलर मूल्य निर्धारण", "L1 सहायता", "GEL बिलिंग", "VAT-सहित चालान"],
        highlight: false,
      },
      {
        name: "बिजनेस",
        range: "50–249 उपयोगकर्ता",
        features: ["वॉल्यूम छूट", "प्राथमिकता सहायता", "समर्पित संपर्क व्यक्ति", "GEL बिलिंग", "VAT-सहित चालान"],
        highlight: true,
      },
      {
        name: "एंटरप्राइज",
        range: "250+ उपयोगकर्ता",
        features: ["कस्टम मूल्य निर्धारण", "SLA अनुबंध", "माइग्रेशन शामिल", "अकाउंट मैनेजर", "GEL बिलिंग", "VAT-सहित चालान"],
        highlight: false,
      },
    ],
    requestOffer: "ऑफर का अनुरोध करें",
    negotiateTitle: "हम किन विषयों पर बातचीत कर सकते हैं",
    negotiateItems: [
      "Microsoft CSP मूल्य निर्धारण स्तर",
      "AWS प्रतिबद्धता छूट (Savings Plans, Reserved Instances)",
      "Google Workspace वार्षिक प्रतिबद्धता मूल्य निर्धारण",
      "मल्टी-प्रोडक्ट बंडल",
    ],
    ctaTitle: "कॉर्पोरेट ऑफर का अनुरोध करें",
    ctaSubtitle: "हमसे संपर्क करें और अपने संगठन के लिए अनुकूलित ऑफर प्राप्त करें।",
    ctaContact: "हमसे संपर्क करें",
    ctaServices: "सेवाएं देखें",
  },
  fa: {
    metaTitle: "پیشنهادات سازمانی | ITC Georgia",
    metaDesc: "قیمت‌گذاری ویژه سازمانی، تخفیف‌های حجمی و بسته‌های سفارشی مجوز برای سازمان‌ها.",
    heroLabel: "سازمانی",
    heroTitle: "پیشنهادات سازمانی",
    heroSubtitle: "قیمت‌گذاری و شرایط ویژه برای سازمان‌ها — تخفیف‌های حجمی، پشتیبانی اختصاصی و صورتحساب انعطاف‌پذیر.",
    whyTitle: "چرا ITC Georgia؟",
    valueProps: [
      "ما از طرف شما با فروشندگان مذاکره می‌کنیم",
      "تخفیف‌های حجمی برای سفارش‌های بزرگ",
      "بسته‌های سفارشی مجوز",
      "مزایای قرارداد چندساله",
      "مدیریت حساب اختصاصی",
    ],
    tiersTitle: "بسته‌های پیشنهادی",
    tiers: [
      {
        name: "استاندارد",
        range: "۵–۴۹ کاربر",
        features: ["قیمت‌گذاری استاندارد نمایندگی", "پشتیبانی L1", "صورتحساب GEL", "فاکتورهای شامل VAT"],
        highlight: false,
      },
      {
        name: "بیزینس",
        range: "۵۰–۲۴۹ کاربر",
        features: ["تخفیف‌های حجمی", "پشتیبانی اولویت‌دار", "شخص تماس اختصاصی", "صورتحساب GEL", "فاکتورهای شامل VAT"],
        highlight: true,
      },
      {
        name: "اینترپرایز",
        range: "+۲۵۰ کاربر",
        features: ["قیمت‌گذاری سفارشی", "قرارداد SLA", "مهاجرت شامل است", "مدیر حساب", "صورتحساب GEL", "فاکتورهای شامل VAT"],
        highlight: false,
      },
    ],
    requestOffer: "درخواست پیشنهاد",
    negotiateTitle: "درباره چه مواردی می‌توانیم مذاکره کنیم",
    negotiateItems: [
      "سطوح قیمت‌گذاری Microsoft CSP",
      "تخفیف‌های تعهدی AWS (Savings Plans, Reserved Instances)",
      "قیمت‌گذاری تعهد سالانه Google Workspace",
      "بسته‌های چند محصولی",
    ],
    ctaTitle: "پیشنهاد سازمانی درخواست کنید",
    ctaSubtitle: "با ما تماس بگیرید و پیشنهاد متناسب با سازمان خود دریافت کنید.",
    ctaContact: "تماس با ما",
    ctaServices: "مشاهده خدمات",
  },
  ar: {
    metaTitle: "العروض المؤسسية | ITC Georgia",
    metaDesc: "أسعار مؤسسية خاصة، خصومات الحجم وباقات ترخيص مخصصة للمؤسسات.",
    heroLabel: "مؤسسي",
    heroTitle: "العروض المؤسسية",
    heroSubtitle: "أسعار وشروط خاصة للمؤسسات — خصومات الحجم، دعم مخصص وفوترة مرنة.",
    whyTitle: "لماذا ITC Georgia؟",
    valueProps: [
      "نتفاوض مع الموردين نيابةً عنك",
      "خصومات الحجم للطلبات الكبيرة",
      "باقات ترخيص مخصصة",
      "مزايا الاتفاقيات متعددة السنوات",
      "إدارة حساب مخصصة",
    ],
    tiersTitle: "مستويات العروض",
    tiers: [
      {
        name: "القياسي",
        range: "٥–٤٩ مستخدم",
        features: ["أسعار الموزع القياسية", "دعم L1", "فوترة GEL", "فواتير شاملة ضريبة القيمة المضافة"],
        highlight: false,
      },
      {
        name: "الأعمال",
        range: "٥٠–٢٤٩ مستخدم",
        features: ["خصومات الحجم", "دعم ذو أولوية", "شخص اتصال مخصص", "فوترة GEL", "فواتير شاملة ضريبة القيمة المضافة"],
        highlight: true,
      },
      {
        name: "المؤسسات",
        range: "+٢٥٠ مستخدم",
        features: ["أسعار مخصصة", "اتفاقية SLA", "الترحيل مشمول", "مدير حساب", "فوترة GEL", "فواتير شاملة ضريبة القيمة المضافة"],
        highlight: false,
      },
    ],
    requestOffer: "طلب عرض",
    negotiateTitle: "ما يمكننا التفاوض بشأنه",
    negotiateItems: [
      "مستويات تسعير Microsoft CSP",
      "خصومات التزام AWS (Savings Plans, Reserved Instances)",
      "تسعير الالتزام السنوي لـ Google Workspace",
      "باقات متعددة المنتجات",
    ],
    ctaTitle: "اطلب عرضاً مؤسسياً",
    ctaSubtitle: "تواصل معنا واحصل على عرض مصمم خصيصاً لمؤسستك.",
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

/* ─── tiny helper ─── */
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

export default async function CorporatePage({
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

      {/* Value Proposition */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
            {c.whyTitle}
          </h2>
          <ul className="space-y-3">
            {c.valueProps.map((vp, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-700"
              >
                <Check />
                {vp}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-10 text-center">
            {c.tiersTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 flex flex-col ${
                  tier.highlight
                    ? "bg-navy-900 text-white ring-2 ring-azure-600"
                    : "bg-white border border-slate-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    tier.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-xs mt-1 mb-5 ${
                    tier.highlight ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {tier.range}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.highlight ? "text-azure-400" : "text-azure-600"
                        }`}
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
                      <span
                        className={
                          tier.highlight ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`${p}/contact`}
                    className={`block text-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      tier.highlight
                        ? "bg-white text-navy-900 hover:bg-slate-100"
                        : "bg-navy-900 text-white hover:bg-navy-800"
                    }`}
                  >
                    {c.requestOffer}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we can negotiate */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
            {c.negotiateTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.negotiateItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-5"
              >
                <Check />
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
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
