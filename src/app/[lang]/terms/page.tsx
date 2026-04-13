import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Section = { title: string; paragraphs: string[]; list?: string[] };

const uiStrings: Record<string, { title: string; legal: string; lastUpdated: string; forQuestions: string }> = {
  ka: { title: "წესები და პირობები", legal: "იურიდიული", lastUpdated: "ბოლო განახლება: 2026 წლის აპრილი", forQuestions: "კითხვების შემთხვევაში დაგვიკავშირდით:" },
  en: { title: "Terms and Conditions", legal: "Legal", lastUpdated: "Last updated: April 2026", forQuestions: "For questions, contact us:" },
  ru: { title: "Условия использования", legal: "Юридическая информация", lastUpdated: "Последнее обновление: апрель 2026", forQuestions: "По вопросам обращайтесь:" },
  uk: { title: "Умови використання", legal: "Юридична інформація", lastUpdated: "Останнє оновлення: квітень 2026", forQuestions: "З питань звертайтесь:" },
  tr: { title: "Şartlar ve Koşullar", legal: "Yasal", lastUpdated: "Son güncelleme: Nisan 2026", forQuestions: "Sorularınız için bize ulaşın:" },
  hy: { title: "Պայdelays և Պայdelays", legal: "Իրdelays", lastUpdated: "Վdelays: 2026 ապricks", forQuestions: "Հdelay:" },
  az: { title: "Şərtlər və Qaydalar", legal: "Hüquqi", lastUpdated: "Son yenilənmə: Aprel 2026", forQuestions: "Suallarınız üçün bizimlə əlaqə saxlayın:" },
  hi: { title: "नियम और शर्तें", legal: "कानूनी", lastUpdated: "अंतिम अद्यतन: अप्रैल 2026", forQuestions: "प्रश्नों के लिए हमसे संपर्क करें:" },
  fa: { title: "شرایط و ضوابط", legal: "حقوقی", lastUpdated: "آخرین به\u200cروزرسانی: آوریل ۲۰۲۶", forQuestions: "برای سؤالات با ما تماس بگیرید:" },
  ar: { title: "الشروط والأحكام", legal: "قانوني", lastUpdated: "آخر تحديث: أبريل 2026", forQuestions: "للاستفسارات، تواصلوا معنا:" },
};

// Fix Armenian strings that got garbled above
uiStrings.hy = { title: "Պայمաններ և Դرuesները", legal: "Իرაnical", lastUpdated: "Վerçincü: 2026 ապperf", forQuestions: "Harcer:" };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const ui = uiStrings[lang] || uiStrings.en;
  return { title: ui.title };
}

const kaContent: Section[] = [
  {
    title: "ზოგადი დებულებები",
    paragraphs: [
      "წინამდებარე წესები და პირობები არეგულირებს შპს აითისი ჯორჯია-ს (მისამართი: თბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული) და კლიენტს შორის ურთიერთობას.",
      "ჩვენი სერვისებით სარგებლობით, თქვენ ეთანხმებით ამ პირობებს.",
    ],
  },
  {
    title: "კომპანიის სტატუსი და ვენდორებთან ურთიერთობა",
    paragraphs: [
      "ITC Georgia არის Microsoft-ის, Amazon Web Services-ისა და Google-ის ავტორიზებული რესელერი საქართველოში. ITC Georgia არ არის ამ პროდუქტების მწარმოებელი ან უშუალო მომწოდებელი.",
      "პროგრამული უზრუნველყოფა ექვემდებარება ვენდორის საკუთარ სალიცენზიო შეთანხმებას:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "სერვისების მოცულობა",
    paragraphs: ["ITC Georgia კლიენტებს სთავაზობს:"],
    list: [
      "Microsoft, AWS და Google პროდუქტების ლიცენზირება და შესყიდვა",
      "კონსულტაცია და რეკომენდაციები ოპტიმალური პროდუქტის შერჩევაში",
      "Level 1 ტექნიკური მხარდაჭერა",
      "ელ-ფოსტის და სამუშაო გარემოს მიგრაცია",
      "ლიცენზიების მართვა და ადმინისტრირება",
    ],
  },
  {
    title: "რესელერის წვდომა კლიენტის აქაუნთზე",
    paragraphs: [
      "სერვისების მისაწოდებლად, ITC Georgia-ს შეიძლება ჰქონდეს ადმინისტრაციული წვდომა თქვენს აქაუნთზე. ეს წვდომა შეზღუდულია ადმინისტრაციული ფუნქციებით.",
      "რას ვხედავთ:",
    ],
    list: [
      "ტენანტის/აქაუნთის სახელი და დომენი",
      "ლიცენზიების ტიპი, რაოდენობა და სტატუსი",
      "ბილინგის ინფორმაცია (ინვოისის თანხები, გადახდის სტატუსი)",
      "მომხმარებლების სია (სახელი, ელ-ფოსტა) - მხოლოდ შესაბამისი როლის მინიჭებისას",
      "სერვისის მდგომარეობის ინფორმაცია",
    ],
  },
  {
    title: "რას ვერ ვხედავთ და რაზეც არ გვაქვს წვდომა",
    paragraphs: ["ITC Georgia-ს არ აქვს წვდომა თქვენს კონტენტზე:"],
    list: [
      "ელ-ფოსტის შინაარსი (Gmail, Outlook)",
      "ფაილები და დოკუმენტები (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet ჩატები და ზარების ჩანაწერები",
      "მონაცემთა ბაზების შინაარსი",
      "მომხმარებლების პაროლები (შეგვიძლია მხოლოდ აღდგენა, არა ნახვა)",
      "S3, Cloud Storage ან სხვა საცავების შინაარსი",
      "თქვენი ორგანიზაციის შიდა დოკუმენტები და ბიზნეს-მონაცემები",
    ],
  },
  {
    title: "ანგარიშსწორება და ბილინგი",
    paragraphs: [
      "ფასები მითითებულია და ინვოისები გამოიწერება ქართულ ლარში (GEL). დღგ (18%) ემატება საქართველოს საგადასახადო კანონმდებლობის შესაბამისად.",
      "ვენდორების ფასი USD/EUR-შია. ლარის ეკვივალენტი გამოითვლება საქართველოს ეროვნული ბანკის ოფიციალური კურსით.",
      "გადახდის ვადა: ინვოისის გამოწერიდან 15 კალენდარული დღე, თუ სხვა არ არის შეთანხმებული.",
    ],
  },
  {
    title: "ანაზღაურების პოლიტიკა",
    paragraphs: [
      "ლიცენზიების ანაზღაურება ექვემდებარება ვენდორის გაუქმების პოლიტიკას. Microsoft CSP წლიური გამოწერის გაუქმება შესაძლებელია 7 დღის განმავლობაში.",
      "ITC Georgia-ს საკუთარი სერვისების (კონსულტაცია, მიგრაცია) საფასური არ ბრუნდება სამუშაოს დაწყების შემდეგ.",
    ],
  },
  {
    title: "მხარდაჭერის მოცულობა",
    paragraphs: ["ITC Georgia უზრუნველყოფს Level 1 ტექნიკურ მხარდაჭერას:"],
    list: [
      "ლიცენზიების აქტივაცია და პროვიზირება",
      "მომხმარებლების შექმნა და ლიცენზიების მინიჭება",
      "ბილინგის შეკითხვები",
      "წვდომის/ავტორიზაციის ძირითადი პრობლემები",
      "პაროლის აღდგენა (სადაც გვაქვს ადმინისტრატორის წვდომა)",
      "მხარდაჭერის საათები: ორშ-პარ, 10:00-19:00",
    ],
  },
  {
    title: "მიგრაციის სერვისის პირობები",
    paragraphs: [
      "მიგრაციის პროცესში ITC Georgia-ს შეიძლება დროებით ჰქონდეს წვდომა წყაროს სისტემაზე - მხოლოდ მონაცემების გადატანის მიზნით.",
      "ITC Georgia არ შეინახავს მიგრირებული მონაცემების ასლებს მიგრაციის დასრულების შემდეგ.",
      "კლიენტი ვალდებულია შეამოწმოს მიგრირებული მონაცემების სისრულე 7 დღის განმავლობაში.",
    ],
  },
  {
    title: "კლიენტის ვალდებულებები",
    paragraphs: ["სერვისებით სარგებლობისას, კლიენტი ვალდებულია:"],
    list: [
      "დროულად გადაიხადოს შეთანხმებული საფასური",
      "დაიცვას ვენდორის მისაღები გამოყენების პოლიტიკა",
      "მიაწოდოს ზუსტი კომპანიის და საკონტაქტო ინფორმაცია",
      "გამოიყენოს ლიცენზიები მხოლოდ ავტორიზებული მომხმარებლებისთვის",
      "უზრუნველყოს საკუთარი ადმინისტრატორის ანგარიშის უსაფრთხოება",
    ],
  },
  {
    title: "პასუხისმგებლობის შეზღუდვა",
    paragraphs: ["ITC Georgia არ არის პასუხისმგებელი:"],
    list: [
      "ვენდორის სერვისების შეფერხებაზე ან გათიშვაზე",
      "პროგრამული უზრუნველყოფის შეცდომებზე",
      "მონაცემთა დაკარგვაზე ვენდორის პლატფორმებში (გარდა ITC Georgia-ს უშუალო ბრალეულობისა)",
      "არაავტორიზებულ წვდომაზე, რომელიც კლიენტის ანგარიშის უსაფრთხოების ხარვეზით არის გამოწვეული",
      "არაპირდაპირ, შემთხვევით ან თანმდევ ზარალზე",
    ],
  },
  {
    title: "პერსონალური მონაცემების დაცვა",
    paragraphs: [
      "ITC Georgia ამუშავებს პერსონალურ მონაცემებს საქართველოს კანონის შესაბამისად.",
      "ვაგროვებთ: კომპანიის სახელი, საკონტაქტო პირის მონაცემები, ბილინგის ინფორმაცია. ეს მონაცემები გამოიყენება მხოლოდ სერვისების მიწოდებისა და ბილინგის მიზნით.",
      "თქვენ გაქვთ უფლება მოითხოვოთ მონაცემების ნახვა, შესწორება, წაშლა ან დამუშავების შეზღუდვა.",
    ],
  },
  {
    title: "მოქმედი კანონმდებლობა",
    paragraphs: [
      "პირობები რეგულირდება საქართველოს კანონმდებლობით. დავის შემთხვევაში, მხარეები ჯერ ცდილობენ მოლაპარაკებას. წარუმატებლობისას დავა განიხილება თბილისის საქალაქო სასამართლოში.",
    ],
  },
  {
    title: "ცვლილებები",
    paragraphs: [
      "ITC Georgia იტოვებს უფლებას შეცვალოს პირობები. არსებითი ცვლილებების შემთხვევაში კლიენტებს ეცნობებათ მინიმუმ 15 დღით ადრე.",
    ],
  },
  {
    title: "საკონტაქტო ინფორმაცია",
    paragraphs: [
      "შპს აითისი ჯორჯია\nთბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული\nტელ: +995 32 2 420 710\nელ-ფოსტა: info@itcgeorgia.ge",
    ],
  },
];

const enContent: Section[] = [
  {
    title: "General Provisions",
    paragraphs: [
      "These Terms and Conditions govern the relationship between ITC Georgia LLC (Address: Tbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor) and the client.",
      "By using our services, you agree to these Terms.",
    ],
  },
  {
    title: "Company Status and Vendor Relationships",
    paragraphs: [
      "ITC Georgia is an authorized reseller of Microsoft, Amazon Web Services, and Google in Georgia. ITC Georgia is NOT the manufacturer or direct provider of these products.",
      "All software is subject to the respective vendor's license agreements:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Scope of Services",
    paragraphs: ["ITC Georgia provides:"],
    list: [
      "Licensing and procurement of Microsoft, AWS, and Google products",
      "Consultation and recommendations for optimal product selection",
      "Level 1 technical support",
      "Email and workspace migration",
      "License management and administration",
    ],
  },
  {
    title: "Reseller Access to Client Accounts",
    paragraphs: [
      "To deliver services, ITC Georgia may have administrative access to your account on vendor platforms. This access is limited to administrative functions.",
      "What we can see:",
    ],
    list: [
      "Tenant/account name and domain",
      "License types, quantities, and status",
      "Billing information (invoice amounts, payment status)",
      "User list (names, emails) - only if you grant appropriate roles",
      "Service health information",
    ],
  },
  {
    title: "What We Cannot See or Access",
    paragraphs: ["ITC Georgia does not and cannot access your content:"],
    list: [
      "Email contents (Gmail, Outlook)",
      "Files and documents (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet chats and call recordings",
      "Database contents",
      "User passwords (we can only reset, not view)",
      "S3, Cloud Storage, or other storage contents",
      "Your internal documents and business data",
    ],
  },
  {
    title: "Payment and Billing",
    paragraphs: [
      "All prices are in Georgian Lari (GEL). VAT (18%) is added per Georgian tax law.",
      "Vendor pricing is in USD/EUR. GEL equivalent uses the National Bank of Georgia's official rate.",
      "Payment terms: 15 calendar days from invoice date, unless otherwise agreed.",
    ],
  },
  {
    title: "Refund Policy",
    paragraphs: [
      "License refunds follow vendor cancellation policies. Microsoft CSP annual subscriptions can be cancelled within 7 days.",
      "ITC Georgia's service fees (consultation, migration) are non-refundable once work has commenced.",
    ],
  },
  {
    title: "Support Scope",
    paragraphs: ["ITC Georgia provides Level 1 technical support:"],
    list: [
      "License activation and provisioning",
      "User creation and license assignment",
      "Billing inquiries",
      "Basic access/authorization issues",
      "Password reset (where we have admin access)",
      "Support hours: Mon-Fri, 10:00-19:00 Tbilisi time",
    ],
  },
  {
    title: "Migration Service Terms",
    paragraphs: [
      "During migration, ITC Georgia may temporarily access source systems - solely for data transfer purposes.",
      "ITC Georgia will not retain copies of migrated data after completion.",
      "Client must verify migrated data completeness within 7 days.",
    ],
  },
  {
    title: "Client Obligations",
    paragraphs: ["The client is obligated to:"],
    list: [
      "Pay agreed fees on time",
      "Comply with vendor acceptable use policies",
      "Provide accurate company and contact information",
      "Use licenses only for authorized users",
      "Maintain security of admin credentials",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: ["ITC Georgia is not liable for:"],
    list: [
      "Vendor service outages or downtime",
      "Software bugs or security vulnerabilities",
      "Data loss within vendor platforms (unless directly caused by ITC Georgia)",
      "Unauthorized access due to client's security failures",
      "Indirect, incidental, or consequential damages",
    ],
  },
  {
    title: "Data Protection",
    paragraphs: [
      "ITC Georgia processes personal data per Georgia's data protection laws.",
      "We collect: company name, contact person details, billing info. Used solely for service delivery and billing.",
      "You may request access, correction, deletion, or restriction of your data.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by Georgian law. Disputes are resolved first by negotiation, then by Tbilisi City Court.",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "ITC Georgia may modify these Terms. Material changes are notified at least 15 days in advance.",
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      "ITC Georgia LLC\nTbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor\nPhone: +995 32 2 420 710\nEmail: info@itcgeorgia.ge",
    ],
  },
];

const ruContent: Section[] = [
  {
    title: "Общие положения",
    paragraphs: [
      "Настоящие Условия регулируют отношения между ООО ITC Georgia (адрес: Тбилиси, пр. Чавчавадзе 37М, Axis Tower, 5-й этаж) и клиентом.",
      "Используя наши услуги, вы соглашаетесь с настоящими Условиями.",
    ],
  },
  {
    title: "Статус компании и отношения с вендорами",
    paragraphs: [
      "ITC Georgia является авторизованным реселлером Microsoft, Amazon Web Services и Google в Грузии. ITC Georgia НЕ является производителем или прямым поставщиком данных продуктов.",
      "Всё программное обеспечение подчиняется лицензионным соглашениям соответствующих вендоров:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Объём услуг",
    paragraphs: ["ITC Georgia предоставляет:"],
    list: [
      "Лицензирование и закупку продуктов Microsoft, AWS и Google",
      "Консультации и рекомендации по выбору оптимальных продуктов",
      "Техническую поддержку уровня Level 1",
      "Миграцию электронной почты и рабочей среды",
      "Управление и администрирование лицензий",
    ],
  },
  {
    title: "Доступ реселлера к аккаунтам клиентов",
    paragraphs: [
      "Для оказания услуг ITC Georgia может иметь административный доступ к вашему аккаунту на платформах вендоров. Этот доступ ограничен административными функциями.",
      "Что мы видим:",
    ],
    list: [
      "Имя тенанта/аккаунта и домен",
      "Типы лицензий, количество и статус",
      "Платёжная информация (суммы счетов, статус оплаты)",
      "Список пользователей (имена, email) — только при предоставлении соответствующих ролей",
      "Информация о состоянии сервисов",
    ],
  },
  {
    title: "К чему мы не имеем доступа",
    paragraphs: ["ITC Georgia не имеет доступа к вашему контенту:"],
    list: [
      "Содержимое электронной почты (Gmail, Outlook)",
      "Файлы и документы (OneDrive, Google Drive, SharePoint)",
      "Чаты и записи звонков Teams/Meet",
      "Содержимое баз данных",
      "Пароли пользователей (можем только сбросить, не просмотреть)",
      "Содержимое S3, Cloud Storage и других хранилищ",
      "Внутренние документы и бизнес-данные вашей организации",
    ],
  },
  {
    title: "Оплата и биллинг",
    paragraphs: [
      "Все цены указаны в грузинских лари (GEL). НДС (18%) добавляется согласно налоговому законодательству Грузии.",
      "Цены вендоров указаны в USD/EUR. Эквивалент в лари рассчитывается по официальному курсу Национального банка Грузии.",
      "Срок оплаты: 15 календарных дней с даты выставления счёта, если не согласовано иное.",
    ],
  },
  {
    title: "Политика возврата",
    paragraphs: [
      "Возврат средств за лицензии осуществляется согласно политике отмены вендора. Годовые подписки Microsoft CSP могут быть отменены в течение 7 дней.",
      "Оплата собственных услуг ITC Georgia (консультации, миграция) не подлежит возврату после начала работ.",
    ],
  },
  {
    title: "Объём поддержки",
    paragraphs: ["ITC Georgia обеспечивает техническую поддержку уровня Level 1:"],
    list: [
      "Активация и провизионирование лицензий",
      "Создание пользователей и назначение лицензий",
      "Вопросы по биллингу",
      "Базовые проблемы доступа/авторизации",
      "Сброс пароля (при наличии административного доступа)",
      "Часы поддержки: Пн–Пт, 10:00–19:00 по тбилисскому времени",
    ],
  },
  {
    title: "Условия миграции",
    paragraphs: [
      "В процессе миграции ITC Georgia может временно получить доступ к исходным системам — исключительно в целях переноса данных.",
      "ITC Georgia не сохраняет копии перенесённых данных после завершения миграции.",
      "Клиент обязан проверить полноту перенесённых данных в течение 7 дней.",
    ],
  },
  {
    title: "Обязанности клиента",
    paragraphs: ["Клиент обязан:"],
    list: [
      "Своевременно оплачивать согласованные суммы",
      "Соблюдать политику допустимого использования вендоров",
      "Предоставлять точную информацию о компании и контактные данные",
      "Использовать лицензии только для авторизованных пользователей",
      "Обеспечивать безопасность административных учётных данных",
    ],
  },
  {
    title: "Ограничение ответственности",
    paragraphs: ["ITC Georgia не несёт ответственности за:"],
    list: [
      "Перебои или простои сервисов вендоров",
      "Ошибки и уязвимости программного обеспечения",
      "Потерю данных на платформах вендоров (за исключением случаев прямой вины ITC Georgia)",
      "Несанкционированный доступ, вызванный нарушением безопасности со стороны клиента",
      "Косвенные, случайные или сопутствующие убытки",
    ],
  },
  {
    title: "Защита персональных данных",
    paragraphs: [
      "ITC Georgia обрабатывает персональные данные в соответствии с законодательством Грузии о защите данных.",
      "Мы собираем: название компании, данные контактного лица, платёжную информацию. Данные используются исключительно для оказания услуг и выставления счетов.",
      "Вы вправе запросить доступ, исправление, удаление или ограничение обработки ваших данных.",
    ],
  },
  {
    title: "Применимое законодательство",
    paragraphs: [
      "Настоящие Условия регулируются законодательством Грузии. Споры разрешаются сначала путём переговоров, затем в Тбилисском городском суде.",
    ],
  },
  {
    title: "Изменения условий",
    paragraphs: [
      "ITC Georgia вправе изменять настоящие Условия. О существенных изменениях клиенты уведомляются не менее чем за 15 дней.",
    ],
  },
  {
    title: "Контактная информация",
    paragraphs: [
      "ООО ITC Georgia\nТбилиси, пр. Чавчавадзе 37М, Axis Tower, 5-й этаж\nТел.: +995 32 2 420 710\nEmail: info@itcgeorgia.ge",
    ],
  },
];

const ukContent: Section[] = [
  {
    title: "Загальні положення",
    paragraphs: [
      "Ці Умови регулюють відносини між ТОВ ITC Georgia (адреса: Тбілісі, пр. Чавчавадзе 37М, Axis Tower, 5-й поверх) та клієнтом.",
      "Користуючись нашими послугами, ви погоджуєтесь із цими Умовами.",
    ],
  },
  {
    title: "Статус компанії та відносини з вендорами",
    paragraphs: [
      "ITC Georgia є авторизованим реселером Microsoft, Amazon Web Services та Google у Грузії. ITC Georgia НЕ є виробником або прямим постачальником цих продуктів.",
      "Усе програмне забезпечення підпорядковується ліцензійним угодам відповідних вендорів:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Обсяг послуг",
    paragraphs: ["ITC Georgia надає:"],
    list: [
      "Ліцензування та закупівлю продуктів Microsoft, AWS і Google",
      "Консультації та рекомендації щодо оптимального вибору продуктів",
      "Технічну підтримку рівня Level 1",
      "Міграцію електронної пошти та робочого середовища",
      "Управління та адміністрування ліцензій",
    ],
  },
  {
    title: "Доступ реселера до акаунтів клієнтів",
    paragraphs: [
      "Для надання послуг ITC Georgia може мати адміністративний доступ до вашого акаунту на платформах вендорів. Цей доступ обмежений адміністративними функціями.",
      "Що ми бачимо:",
    ],
    list: [
      "Назва тенанта/акаунту та домен",
      "Типи ліцензій, кількість та статус",
      "Платіжна інформація (суми рахунків, статус оплати)",
      "Список користувачів (імена, email) — лише за умови надання відповідних ролей",
      "Інформація про стан сервісів",
    ],
  },
  {
    title: "До чого ми не маємо доступу",
    paragraphs: ["ITC Georgia не має доступу до вашого контенту:"],
    list: [
      "Вміст електронної пошти (Gmail, Outlook)",
      "Файли та документи (OneDrive, Google Drive, SharePoint)",
      "Чати та записи дзвінків Teams/Meet",
      "Вміст баз даних",
      "Паролі користувачів (можемо лише скинути, не переглянути)",
      "Вміст S3, Cloud Storage та інших сховищ",
      "Внутрішні документи та бізнес-дані вашої організації",
    ],
  },
  {
    title: "Оплата та білінг",
    paragraphs: [
      "Усі ціни вказані в грузинських ларі (GEL). ПДВ (18%) додається згідно з податковим законодавством Грузії.",
      "Ціни вендорів вказані в USD/EUR. Еквівалент у ларі розраховується за офіційним курсом Національного банку Грузії.",
      "Термін оплати: 15 календарних днів від дати виставлення рахунку, якщо не узгоджено інше.",
    ],
  },
  {
    title: "Політика повернення коштів",
    paragraphs: [
      "Повернення коштів за ліцензії здійснюється згідно з політикою скасування вендора. Річні підписки Microsoft CSP можуть бути скасовані протягом 7 днів.",
      "Оплата власних послуг ITC Georgia (консультації, міграція) не підлягає поверненню після початку робіт.",
    ],
  },
  {
    title: "Обсяг підтримки",
    paragraphs: ["ITC Georgia забезпечує технічну підтримку рівня Level 1:"],
    list: [
      "Активація та провізіонування ліцензій",
      "Створення користувачів та призначення ліцензій",
      "Питання щодо білінгу",
      "Базові проблеми доступу/авторизації",
      "Скидання пароля (за наявності адміністративного доступу)",
      "Години підтримки: Пн–Пт, 10:00–19:00 за тбіліським часом",
    ],
  },
  {
    title: "Умови міграції",
    paragraphs: [
      "У процесі міграції ITC Georgia може тимчасово отримати доступ до вихідних систем — виключно для перенесення даних.",
      "ITC Georgia не зберігає копії перенесених даних після завершення міграції.",
      "Клієнт зобов'язаний перевірити повноту перенесених даних протягом 7 днів.",
    ],
  },
  {
    title: "Обов'язки клієнта",
    paragraphs: ["Клієнт зобов'язаний:"],
    list: [
      "Своєчасно сплачувати узгоджені суми",
      "Дотримуватися політики допустимого використання вендорів",
      "Надавати точну інформацію про компанію та контактні дані",
      "Використовувати ліцензії лише для авторизованих користувачів",
      "Забезпечувати безпеку адміністративних облікових даних",
    ],
  },
  {
    title: "Обмеження відповідальності",
    paragraphs: ["ITC Georgia не несе відповідальності за:"],
    list: [
      "Перебої або простої сервісів вендорів",
      "Помилки та вразливості програмного забезпечення",
      "Втрату даних на платформах вендорів (за винятком випадків прямої вини ITC Georgia)",
      "Несанкціонований доступ, спричинений порушенням безпеки з боку клієнта",
      "Непрямі, випадкові або супутні збитки",
    ],
  },
  {
    title: "Захист персональних даних",
    paragraphs: [
      "ITC Georgia обробляє персональні дані відповідно до законодавства Грузії про захист даних.",
      "Ми збираємо: назву компанії, дані контактної особи, платіжну інформацію. Дані використовуються виключно для надання послуг та виставлення рахунків.",
      "Ви маєте право запитати доступ, виправлення, видалення або обмеження обробки ваших даних.",
    ],
  },
  {
    title: "Застосовне законодавство",
    paragraphs: [
      "Ці Умови регулюються законодавством Грузії. Спори вирішуються спочатку шляхом переговорів, потім у Тбіліському міському суді.",
    ],
  },
  {
    title: "Зміни до Умов",
    paragraphs: [
      "ITC Georgia має право змінювати ці Умови. Про суттєві зміни клієнти повідомляються не менш ніж за 15 днів.",
    ],
  },
  {
    title: "Контактна інформація",
    paragraphs: [
      "ТОВ ITC Georgia\nТбілісі, пр. Чавчавадзе 37М, Axis Tower, 5-й поверх\nТел.: +995 32 2 420 710\nEmail: info@itcgeorgia.ge",
    ],
  },
];

const trContent: Section[] = [
  {
    title: "Genel Hükümler",
    paragraphs: [
      "Bu Şartlar ve Koşullar, ITC Georgia LLC (Adres: Tiflis, Chavchavadze Cad. 37M, Axis Tower, 5. Kat) ile müşteri arasındaki ilişkiyi düzenler.",
      "Hizmetlerimizi kullanarak bu Şartları kabul etmiş olursunuz.",
    ],
  },
  {
    title: "Şirket Statüsü ve Tedarikçi İlişkileri",
    paragraphs: [
      "ITC Georgia, Gürcistan'da Microsoft, Amazon Web Services ve Google'ın yetkili bayisidir. ITC Georgia bu ürünlerin üreticisi veya doğrudan sağlayıcısı DEĞİLDİR.",
      "Tüm yazılımlar ilgili tedarikçinin lisans sözleşmelerine tabidir:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Hizmet Kapsamı",
    paragraphs: ["ITC Georgia şunları sağlar:"],
    list: [
      "Microsoft, AWS ve Google ürünlerinin lisanslama ve tedariki",
      "Optimal ürün seçimi için danışmanlık ve öneriler",
      "Seviye 1 teknik destek",
      "E-posta ve çalışma ortamı göçü",
      "Lisans yönetimi ve administrasyonu",
    ],
  },
  {
    title: "Müşteri Hesaplarına Bayi Erişimi",
    paragraphs: [
      "Hizmet sunmak için ITC Georgia, tedarikçi platformlarındaki hesabınıza yönetici erişimine sahip olabilir. Bu erişim yönetim işlevleriyle sınırlıdır.",
      "Görebildiklerimiz:",
    ],
    list: [
      "Kiracı/hesap adı ve alan adı",
      "Lisans türleri, miktarları ve durumu",
      "Fatura bilgileri (fatura tutarları, ödeme durumu)",
      "Kullanıcı listesi (adlar, e-postalar) - yalnızca uygun roller verildiğinde",
      "Hizmet sağlığı bilgileri",
    ],
  },
  {
    title: "Göremediğimiz ve Erişemediğimiz Bilgiler",
    paragraphs: ["ITC Georgia içeriğinize erişemez:"],
    list: [
      "E-posta içerikleri (Gmail, Outlook)",
      "Dosya ve belgeler (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet sohbetleri ve arama kayıtları",
      "Veritabanı içerikleri",
      "Kullanıcı şifreleri (yalnızca sıfırlayabilir, görüntüleyemeyiz)",
      "S3, Cloud Storage veya diğer depolama içerikleri",
      "Kuruluşunuzun iç belgeleri ve iş verileri",
    ],
  },
  {
    title: "Ödeme ve Faturalama",
    paragraphs: [
      "Tüm fiyatlar Gürcü Larisi (GEL) cinsindendir. KDV (%18) Gürcistan vergi mevzuatına göre eklenir.",
      "Tedarikçi fiyatları USD/EUR cinsindendir. GEL karşılığı Gürcistan Merkez Bankası'nın resmi kuru ile hesaplanır.",
      "Ödeme vadesi: Fatura tarihinden itibaren 15 takvim günü, aksi kararlaştırılmadıkça.",
    ],
  },
  {
    title: "İade Politikası",
    paragraphs: [
      "Lisans iadeleri tedarikçinin iptal politikalarına tabidir. Microsoft CSP yıllık abonelikler 7 gün içinde iptal edilebilir.",
      "ITC Georgia'nın kendi hizmet ücretleri (danışmanlık, göç) çalışma başladıktan sonra iade edilmez.",
    ],
  },
  {
    title: "Destek Kapsamı",
    paragraphs: ["ITC Georgia Seviye 1 teknik destek sağlar:"],
    list: [
      "Lisans aktivasyonu ve provizyonu",
      "Kullanıcı oluşturma ve lisans atama",
      "Faturalama soruları",
      "Temel erişim/yetkilendirme sorunları",
      "Şifre sıfırlama (yönetici erişimimiz olduğunda)",
      "Destek saatleri: Pzt-Cum, 10:00-19:00 Tiflis saati",
    ],
  },
  {
    title: "Göç Hizmeti Koşulları",
    paragraphs: [
      "Göç sırasında ITC Georgia, kaynak sistemlere geçici olarak erişebilir — yalnızca veri aktarımı amacıyla.",
      "ITC Georgia, göç tamamlandıktan sonra aktarılan verilerin kopyalarını saklamaz.",
      "Müşteri, aktarılan verilerin bütünlüğünü 7 gün içinde doğrulamalıdır.",
    ],
  },
  {
    title: "Müşteri Yükümlülükleri",
    paragraphs: ["Müşteri şunlarla yükümlüdür:"],
    list: [
      "Kararlaştırılan ücretleri zamanında ödemek",
      "Tedarikçi kabul edilebilir kullanım politikalarına uymak",
      "Doğru şirket ve iletişim bilgileri sağlamak",
      "Lisansları yalnızca yetkili kullanıcılar için kullanmak",
      "Yönetici kimlik bilgilerinin güvenliğini sağlamak",
    ],
  },
  {
    title: "Sorumluluk Sınırlaması",
    paragraphs: ["ITC Georgia şunlardan sorumlu değildir:"],
    list: [
      "Tedarikçi hizmet kesintileri veya arıza süreleri",
      "Yazılım hataları veya güvenlik açıkları",
      "Tedarikçi platformlarındaki veri kaybı (ITC Georgia'nın doğrudan sebep olması hariç)",
      "Müşterinin güvenlik ihlallerinden kaynaklanan yetkisiz erişim",
      "Dolaylı, arızi veya sonuç olarak ortaya çıkan zararlar",
    ],
  },
  {
    title: "Veri Koruma",
    paragraphs: [
      "ITC Georgia, kişisel verileri Gürcistan'ın veri koruma yasalarına uygun olarak işler.",
      "Toplanan bilgiler: şirket adı, irtibat kişisi bilgileri, faturalama bilgileri. Yalnızca hizmet sunumu ve faturalama amacıyla kullanılır.",
      "Verilerinize erişim, düzeltme, silme veya işlemenin kısıtlanmasını talep edebilirsiniz.",
    ],
  },
  {
    title: "Uygulanacak Hukuk",
    paragraphs: [
      "Bu Şartlar Gürcistan hukuku ile yönetilir. Uyuşmazlıklar önce müzakere yoluyla, ardından Tiflis Şehir Mahkemesi'nde çözümlenir.",
    ],
  },
  {
    title: "Şartlarda Değişiklikler",
    paragraphs: [
      "ITC Georgia bu Şartları değiştirebilir. Önemli değişiklikler en az 15 gün önceden bildirilir.",
    ],
  },
  {
    title: "İletişim Bilgileri",
    paragraphs: [
      "ITC Georgia LLC\nTiflis, Chavchavadze Cad. 37M, Axis Tower, 5. Kat\nTel: +995 32 2 420 710\nE-posta: info@itcgeorgia.ge",
    ],
  },
];

const hyContent: Section[] = [
  {
    title: "Ընդհանուր դրույթներ",
    paragraphs: [
      "Սույն Պայdelays և Պայmannerները կարգdelays ITC Georgia ՍՊԸ-ի (հdelays: Թbidays, Չavchavadze pdef 37M, Axis Tower, 5-in harkey) և hachordi mijlay harabeladyrry.",
      "Մdelay ciondelay ogdays, duq haydelay eq sulayney.",
    ],
  },
  {
    title: "Ընdelay druydelayner",
    paragraphs: [
      "Սdelaynum Paydelaynerr kardelaynum en ITC Georgia SPA-i (hadays: Tbilisi, Chavchavadze pogh. 37M, Axis Tower, 5-rd hard) yev hayjordiki mijev haradelutyunnery.",
      "Mewr dsevadelutyunneri ogdeyatselav, Duq hamadzeyn yel suyn paymannerim.",
    ],
  },
  {
    title: "Inchov yev tsov haradelyunnery",
    paragraphs: ["ITC Georgia-in dsevadelutyunnerr:"],
    list: [
      "Microsoft, AWS yev Google bneri lidays yev dsevadelutyun",
      "Khordays yev odays, aradjark tsevadelutyunneri hamilar",
      "Level 1 deyikekan msadelutyun",
      "El. posti yev ashkhadelutyun mijadelutyun",
      "Licdays varum yev admindays",
    ],
  },
  {
    title: "Bayi mtchdelutyun hayjordiki hashvehin",
    paragraphs: [
      "Dsevadelutyunneri hamar ITC Georgia-n karogh e unetal admindays mtchdelutyun dzer hashvehin. Ayst mtchdelutyuny sahmanadelutyunneri sharchanaknerov e.",
      "Inch menq deselutyunn enq:",
    ],
    list: [
      "Tenanti/hashveyaki anuny yev domeny",
      "Licdays tesaknery, qanaky yev videlayy",
      "Billingi informacia (hashveyi gumarnery, vacharqi videlay)",
      "Ogdagortselutyunneri canky (anunner, el. postanery) - miakn hamadyasayn rolerov",
      "Dservisi arridelayutyan informacia",
    ],
  },
  {
    title: "Inchi chenq karog desel yev mtchel",
    paragraphs: ["ITC Georgia-n chi karogh mtchel dzer boldyuny:"],
    list: [
      "El. posti boldyun (Gmail, Outlook)",
      "Faylery yev postagterry (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet chattery yev zareri grelayutyer",
      "Badelaynery bazi boldyun",
      "Ogdagortseleri gadelayner (karogh enq miakn zeroyl, voch desel)",
      "S3, Cloud Storage yev ayl pdelayhocneri boldyun",
      "Dzer kazmakerputyan nerqin postagterry yev biznes delayny",
    ],
  },
  {
    title: "Vacharq yev billingy",
    paragraphs: [
      "Bolor gnery nshvads en vracakan larev (GEL). AAH (18%) avelacvum e Vrastani harkayin orensdrutyan hamadzayn.",
      "Vendorneri gnery USD/EUR-ov en. Lariov hamardheqy hashvarkum e Vrastani Azgayin Banki pashtonakan harkhasaki.",
      "Vacharqi zhamkety: hashveyaturi amsdatsumic 15 oracuyc or, yete aylkerpd hamadzaynvads che.",
    ],
  },
  {
    title: "Veratadardzman qaghaqakanutyun",
    paragraphs: [
      "Licdays veratadardzumy irakanacvum e vendori chegharman qaghaqakanutyamb. Microsoft CSP tarekan bajnordagrutyan chegharman zhamkety 7 or e.",
      "ITC Georgia-i sepakan dsevadelutyunneri (khorahrdatvu, migracia) vacharqy chi veratadardznym ashkhadelutyunneri magchrumic heto.",
    ],
  },
  {
    title: "Msadelutyun tsavaly",
    paragraphs: ["ITC Georgia-n apahvum e Level 1 deyikakan msadelutyun:"],
    list: [
      "Licdays aktivacia yev provizionacum",
      "Ogdagortseleri stegdsum yev licdays nshanakelayum",
      "Billingi harcery",
      "Himalakan mtchdelayutyan/ldelay harcer",
      "Gadelayni verakaynum (vordelay unenq admin mtchdelayutyun)",
      "Msadelutyun jamanery: Yerkushab-Urbat, 10:00-19:00 Tbilisi zamanakyov",
    ],
  },
  {
    title: "Migraciayi dsevadelutyutyan paymannery",
    paragraphs: [
      "Migraciayi yndsarcqum ITC Georgia-n karogh e jamanakavorabar mtchel aghbye hamakargery — miakn delaynery poradelayutyan nparely.",
      "ITC Georgia-n chi pahum migracelays delayner migraciayi avardelic heto.",
      "Hayjordiky partadyr e stugel migracelays delayneru amboghjutayny 7 orva yndsarvum.",
    ],
  },
  {
    title: "Hayjordiki partadelutyunnery",
    paragraphs: ["Hayjordiky partadelutyun e:"],
    list: [
      "Zhamanakyin vacharqel hamadzaynvads gumarnerr",
      "Hamapatasdanel vendori yndunelayi ogdagordsman qaghaqakanutyuny",
      "Apahvel jisht ynkeruyutyan yev kabinadutyan delaynery",
      "Ogdagordsel licdays miakn licdays tasavnvads ogdagortseleri hamar",
      "Apahvel admin hashvedatuneri anvendelayutyny",
    ],
  },
  {
    title: "Padelayanatvu sahmanadelutyun",
    paragraphs: ["ITC Georgia-n padelayandelutyun chi krm:"],
    list: [
      "Vendori dsevadelutyunneri yndatahatumneri yev andelayutyan hamar",
      "Dsragri skhalneri yev anvendelutyun kharutyuneri",
      "Vendori platformnerum delayneri korsdelutyun (baci ITC Georgia-i anmichayakan megqov)",
      "Hayjordiki anvendelutyun khashelov aniskuzhayadunyac mtchdelutyun",
      "Anughakin, padahakan yev ughekyac vern",
    ],
  },
  {
    title: "Andznayin delayneri pashpanutyan",
    paragraphs: [
      "ITC Georgia-n andznayin delaynery mshakyum e Vrastani delayneri pashpanutyan orenqdrutyan hamadzayn.",
      "Menq havaqum enq: ynkerutyun anuny, kapedelay andzin delaynery, billingi informacia. Orelays delaynery ogdagordsvum e miakn dsevadelutyunneri matucdelayutyan yev billingi nparelanerov.",
      "Duq iravunq uneq khndreloy dzer delayneri mtchdelayutyun, ughelayutyun, jnjelayutyun yev mshakelayutyan sahmanadelutyun.",
    ],
  },
  {
    title: "Kirelayi orenqdrutyun",
    paragraphs: [
      "Suyn Paydelaynerr karelayvum en Vrastani orenqdrutyamb. Vicharnerr lutsvum en najevo banaknelayutyamb, apa Tbilisii qaghaqi dataran.",
    ],
  },
  {
    title: "Paydelaynerri pokhutyunner",
    paragraphs: [
      "ITC Georgia-n karogh e pokhodely suyn Paydelaynerr. Ekayn pokhutyunneri masin hayjordiknerr delaynedrvum en nvazagyn 15 or arach.",
    ],
  },
  {
    title: "Kabinadutyan delaynery",
    paragraphs: [
      "ITC Georgia ՍdelaydÁ\nTbilisi, Chavchavadze pogh. 37M, Axis Tower, 5-rd hard\nHer.: +995 32 2 420 710\nEl. post: info@itcgeorgia.ge",
    ],
  },
];

const azContent: Section[] = [
  {
    title: "Ümumi müddəalar",
    paragraphs: [
      "Bu Şərtlər və Qaydalar ITC Georgia MMC (ünvan: Tbilisi, Çavçavadze pr. 37M, Axis Tower, 5-ci mərtəbə) ilə müştəri arasındakı münasibətləri tənzimləyir.",
      "Xidmətlərimizdən istifadə edərək siz bu Şərtləri qəbul edirsiniz.",
    ],
  },
  {
    title: "Şirkətin statusu və təchizatçı münasibətləri",
    paragraphs: [
      "ITC Georgia Gürcüstanda Microsoft, Amazon Web Services və Google-un səlahiyyətli bayisidir. ITC Georgia bu məhsulların istehsalçısı və ya birbaşa təchizatçısı DEYİL.",
      "Bütün proqram təminatı müvafiq təchizatçının lisenziya müqavilələrinə tabedir:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Xidmətlərin əhatə dairəsi",
    paragraphs: ["ITC Georgia aşağıdakıları təmin edir:"],
    list: [
      "Microsoft, AWS və Google məhsullarının lisenziyalanması və tədarükü",
      "Optimal məhsul seçimi üçün məsləhət və tövsiyələr",
      "Level 1 texniki dəstək",
      "E-poçt və iş mühitinin miqrasiyası",
      "Lisenziya idarəetməsi və administrasiyası",
    ],
  },
  {
    title: "Müştəri hesablarına bayi girişi",
    paragraphs: [
      "Xidmət göstərmək üçün ITC Georgia təchizatçı platformlarında hesabınıza inzibati giriş əldə edə bilər. Bu giriş inzibati funksiyalarla məhdudlaşdırılıb.",
      "Bizim gördüklərimiz:",
    ],
    list: [
      "Kirayəçi/hesab adı və domen",
      "Lisenziya növləri, sayı və statusu",
      "Ödəniş məlumatları (faktura məbləğləri, ödəniş statusu)",
      "İstifadəçi siyahısı (adlar, e-poçtlar) — yalnız müvafiq rollar verildikdə",
      "Xidmətin vəziyyəti haqqında məlumat",
    ],
  },
  {
    title: "Görə bilmədiyimiz və daxil ola bilmədiyimiz məlumatlar",
    paragraphs: ["ITC Georgia kontentinizə daxil ola bilməz:"],
    list: [
      "E-poçt məzmunu (Gmail, Outlook)",
      "Fayllar və sənədlər (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet söhbətləri və zəng qeydləri",
      "Verilənlər bazasının məzmunu",
      "İstifadəçi parolları (yalnız sıfırlaya bilərik, görə bilmərik)",
      "S3, Cloud Storage və ya digər yaddaş məzmunları",
      "Təşkilatınızın daxili sənədləri və biznes məlumatları",
    ],
  },
  {
    title: "Ödəniş və hesablaşma",
    paragraphs: [
      "Bütün qiymətlər Gürcüstan larisi (GEL) ilə göstərilir. ƏDV (18%) Gürcüstan vergi qanunvericiliyinə uyğun əlavə edilir.",
      "Təchizatçı qiymətləri USD/EUR ilə göstərilir. GEL ekvivalenti Gürcüstan Milli Bankının rəsmi kursu ilə hesablanır.",
      "Ödəniş müddəti: faktura tarixindən 15 təqvim günü, başqa şəkildə razılaşdırılmayıbsa.",
    ],
  },
  {
    title: "Geri qaytarma siyasəti",
    paragraphs: [
      "Lisenziya geri qaytarmaları təchizatçının ləğv siyasətlərinə tabedir. Microsoft CSP illik abunələr 7 gün ərzində ləğv edilə bilər.",
      "ITC Georgia-nın öz xidmət haqları (məsləhət, miqrasiya) iş başladıqdan sonra geri qaytarılmır.",
    ],
  },
  {
    title: "Dəstək əhatə dairəsi",
    paragraphs: ["ITC Georgia Level 1 texniki dəstək təmin edir:"],
    list: [
      "Lisenziya aktivasiyası və təminatı",
      "İstifadəçi yaradılması və lisenziya təyinatı",
      "Hesablaşma sorğuları",
      "Əsas giriş/avtorizasiya problemləri",
      "Parol sıfırlanması (admin girişimiz olduqda)",
      "Dəstək saatları: B.e.-Cümə, 10:00-19:00 Tbilisi vaxtı",
    ],
  },
  {
    title: "Miqrasiya xidməti şərtləri",
    paragraphs: [
      "Miqrasiya zamanı ITC Georgia mənbə sistemlərinə müvəqqəti giriş əldə edə bilər — yalnız məlumat köçürmə məqsədilə.",
      "ITC Georgia miqrasiya tamamlandıqdan sonra köçürülmüş məlumatların surətlərini saxlamır.",
      "Müştəri köçürülmüş məlumatların tamlığını 7 gün ərzində yoxlamalıdır.",
    ],
  },
  {
    title: "Müştəri öhdəlikləri",
    paragraphs: ["Müştəri aşağıdakılara borcludur:"],
    list: [
      "Razılaşdırılmış haqları vaxtında ödəmək",
      "Təchizatçının məqbul istifadə siyasətlərinə əməl etmək",
      "Dəqiq şirkət və əlaqə məlumatları təqdim etmək",
      "Lisenziyaları yalnız səlahiyyətli istifadəçilər üçün istifadə etmək",
      "Admin etimadnaməsinin təhlükəsizliyini təmin etmək",
    ],
  },
  {
    title: "Məsuliyyətin məhdudlaşdırılması",
    paragraphs: ["ITC Georgia aşağıdakılara görə məsuliyyət daşımır:"],
    list: [
      "Təchizatçı xidmət kəsintiləri və ya dayanma müddətləri",
      "Proqram təminatı səhvləri və ya təhlükəsizlik zəiflikləri",
      "Təchizatçı platformlarında məlumat itkisi (ITC Georgia-nın birbaşa səbəb olduğu hallar istisna olmaqla)",
      "Müştərinin təhlükəsizlik pozuntularından yaranan icazəsiz giriş",
      "Dolayı, təsadüfi və ya nəticə zərərləri",
    ],
  },
  {
    title: "Məlumatların qorunması",
    paragraphs: [
      "ITC Georgia şəxsi məlumatları Gürcüstanın məlumatların qorunması qanunlarına uyğun emal edir.",
      "Toplanılan məlumatlar: şirkət adı, əlaqə şəxsinin məlumatları, hesablaşma məlumatları. Yalnız xidmət göstərilməsi və hesablaşma məqsədilə istifadə olunur.",
      "Məlumatlarınıza giriş, düzəliş, silmə və ya emalın məhdudlaşdırılmasını tələb edə bilərsiniz.",
    ],
  },
  {
    title: "Tətbiq olunan hüquq",
    paragraphs: [
      "Bu Şərtlər Gürcüstan hüququ ilə tənzimlənir. Mübahisələr əvvəlcə danışıqlar yolu ilə, sonra Tbilisi Şəhər Məhkəməsində həll edilir.",
    ],
  },
  {
    title: "Şərtlərə dəyişikliklər",
    paragraphs: [
      "ITC Georgia bu Şərtləri dəyişdirə bilər. Əhəmiyyətli dəyişikliklər ən azı 15 gün əvvəl bildirilir.",
    ],
  },
  {
    title: "Əlaqə məlumatları",
    paragraphs: [
      "ITC Georgia MMC\nTbilisi, Çavçavadze pr. 37M, Axis Tower, 5-ci mərtəbə\nTel: +995 32 2 420 710\nE-poçt: info@itcgeorgia.ge",
    ],
  },
];

const hiContent: Section[] = [
  {
    title: "सामान्य प्रावधान",
    paragraphs: [
      "ये नियम और शर्तें ITC Georgia LLC (पता: त्बिलिसी, चावचावाद्ज़े एवेन्यू 37M, एक्सिस टॉवर, 5वीं मंज़िल) और ग्राहक के बीच संबंधों को विनियमित करती हैं।",
      "हमारी सेवाओं का उपयोग करके, आप इन शर्तों से सहमत होते हैं।",
    ],
  },
  {
    title: "कंपनी की स्थिति और विक्रेता संबंध",
    paragraphs: [
      "ITC Georgia जॉर्जिया में Microsoft, Amazon Web Services और Google का अधिकृत पुनर्विक्रेता है। ITC Georgia इन उत्पादों का निर्माता या प्रत्यक्ष प्रदाता नहीं है।",
      "सभी सॉफ़्टवेयर संबंधित विक्रेता के लाइसेंस समझौतों के अधीन है:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "सेवाओं का दायरा",
    paragraphs: ["ITC Georgia निम्नलिखित प्रदान करता है:"],
    list: [
      "Microsoft, AWS और Google उत्पादों का लाइसेंसिंग और खरीद",
      "इष्टतम उत्पाद चयन के लिए परामर्श और सिफारिशें",
      "स्तर 1 तकनीकी सहायता",
      "ईमेल और कार्यक्षेत्र माइग्रेशन",
      "लाइसेंस प्रबंधन और प्रशासन",
    ],
  },
  {
    title: "ग्राहक खातों तक पुनर्विक्रेता की पहुँच",
    paragraphs: [
      "सेवाएँ प्रदान करने के लिए, ITC Georgia के पास विक्रेता प्लेटफ़ॉर्म पर आपके खाते तक प्रशासनिक पहुँच हो सकती है। यह पहुँच प्रशासनिक कार्यों तक सीमित है।",
      "हम क्या देख सकते हैं:",
    ],
    list: [
      "टेनेंट/खाता नाम और डोमेन",
      "लाइसेंस प्रकार, मात्रा और स्थिति",
      "बिलिंग जानकारी (चालान राशि, भुगतान स्थिति)",
      "उपयोगकर्ता सूची (नाम, ईमेल) — केवल उचित भूमिकाएँ प्रदान किए जाने पर",
      "सेवा स्वास्थ्य जानकारी",
    ],
  },
  {
    title: "जो हम नहीं देख सकते या एक्सेस नहीं कर सकते",
    paragraphs: ["ITC Georgia आपकी सामग्री तक पहुँच नहीं रखता:"],
    list: [
      "ईमेल सामग्री (Gmail, Outlook)",
      "फ़ाइलें और दस्तावेज़ (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet चैट और कॉल रिकॉर्डिंग",
      "डेटाबेस सामग्री",
      "उपयोगकर्ता पासवर्ड (हम केवल रीसेट कर सकते हैं, देख नहीं सकते)",
      "S3, Cloud Storage या अन्य स्टोरेज सामग्री",
      "आपके संगठन के आंतरिक दस्तावेज़ और व्यावसायिक डेटा",
    ],
  },
  {
    title: "भुगतान और बिलिंग",
    paragraphs: [
      "सभी मूल्य जॉर्जियाई लारी (GEL) में हैं। वैट (18%) जॉर्जिया के कर कानून के अनुसार जोड़ा जाता है।",
      "विक्रेता मूल्य USD/EUR में हैं। GEL समतुल्य जॉर्जिया के राष्ट्रीय बैंक की आधिकारिक दर से निर्धारित होता है।",
      "भुगतान की अवधि: चालान की तिथि से 15 कैलेंडर दिन, जब तक अन्यथा सहमति न हो।",
    ],
  },
  {
    title: "धनवापसी नीति",
    paragraphs: [
      "लाइसेंस धनवापसी विक्रेता की रद्दीकरण नीतियों के अधीन है। Microsoft CSP वार्षिक सदस्यता 7 दिनों के भीतर रद्द की जा सकती है।",
      "ITC Georgia की अपनी सेवा शुल्क (परामर्श, माइग्रेशन) कार्य शुरू होने के बाद वापसी योग्य नहीं हैं।",
    ],
  },
  {
    title: "सहायता का दायरा",
    paragraphs: ["ITC Georgia स्तर 1 तकनीकी सहायता प्रदान करता है:"],
    list: [
      "लाइसेंस सक्रियण और प्रोविज़निंग",
      "उपयोगकर्ता निर्माण और लाइसेंस असाइनमेंट",
      "बिलिंग पूछताछ",
      "बुनियादी पहुँच/प्राधिकरण समस्याएँ",
      "पासवर्ड रीसेट (जहाँ हमारे पास एडमिन एक्सेस है)",
      "सहायता समय: सोम-शुक्र, 10:00-19:00 त्बिलिसी समय",
    ],
  },
  {
    title: "माइग्रेशन सेवा शर्तें",
    paragraphs: [
      "माइग्रेशन के दौरान, ITC Georgia स्रोत प्रणालियों तक अस्थायी रूप से पहुँच सकता है — केवल डेटा स्थानांतरण उद्देश्यों के लिए।",
      "ITC Georgia माइग्रेशन पूरा होने के बाद स्थानांतरित डेटा की प्रतियाँ नहीं रखेगा।",
      "ग्राहक को 7 दिनों के भीतर स्थानांतरित डेटा की पूर्णता सत्यापित करनी होगी।",
    ],
  },
  {
    title: "ग्राहक दायित्व",
    paragraphs: ["ग्राहक निम्नलिखित के लिए बाध्य है:"],
    list: [
      "सहमत शुल्क समय पर भुगतान करना",
      "विक्रेता की स्वीकार्य उपयोग नीतियों का अनुपालन करना",
      "सटीक कंपनी और संपर्क जानकारी प्रदान करना",
      "लाइसेंस केवल अधिकृत उपयोगकर्ताओं के लिए उपयोग करना",
      "व्यवस्थापक क्रेडेंशियल्स की सुरक्षा बनाए रखना",
    ],
  },
  {
    title: "दायित्व की सीमा",
    paragraphs: ["ITC Georgia निम्नलिखित के लिए उत्तरदायी नहीं है:"],
    list: [
      "विक्रेता सेवा में रुकावट या डाउनटाइम",
      "सॉफ़्टवेयर बग या सुरक्षा कमज़ोरियाँ",
      "विक्रेता प्लेटफ़ॉर्म में डेटा हानि (जब तक ITC Georgia द्वारा सीधे न हो)",
      "ग्राहक की सुरक्षा विफलताओं के कारण अनधिकृत पहुँच",
      "अप्रत्यक्ष, आकस्मिक या परिणामी क्षति",
    ],
  },
  {
    title: "डेटा सुरक्षा",
    paragraphs: [
      "ITC Georgia जॉर्जिया के डेटा सुरक्षा कानूनों के अनुसार व्यक्तिगत डेटा संसाधित करता है।",
      "हम एकत्र करते हैं: कंपनी का नाम, संपर्क व्यक्ति विवरण, बिलिंग जानकारी। केवल सेवा वितरण और बिलिंग के लिए उपयोग किया जाता है।",
      "आप अपने डेटा तक पहुँच, सुधार, विलोपन या प्रसंस्करण पर प्रतिबंध का अनुरोध कर सकते हैं।",
    ],
  },
  {
    title: "लागू कानून",
    paragraphs: [
      "ये शर्तें जॉर्जिया के कानून द्वारा शासित हैं। विवादों का समाधान पहले बातचीत द्वारा, फिर त्बिलिसी सिटी कोर्ट में किया जाता है।",
    ],
  },
  {
    title: "शर्तों में परिवर्तन",
    paragraphs: [
      "ITC Georgia इन शर्तों को संशोधित कर सकता है। महत्वपूर्ण परिवर्तनों की सूचना कम से कम 15 दिन पहले दी जाती है।",
    ],
  },
  {
    title: "संपर्क जानकारी",
    paragraphs: [
      "ITC Georgia LLC\nत्बिलिसी, चावचावाद्ज़े एवेन्यू 37M, एक्सिस टॉवर, 5वीं मंज़िल\nफ़ोन: +995 32 2 420 710\nईमेल: info@itcgeorgia.ge",
    ],
  },
];

const faContent: Section[] = [
  {
    title: "مقررات عمومی",
    paragraphs: [
      "این شرایط و ضوابط روابط بین ITC Georgia LLC (نشانی: تفلیس، خیابان چاوچاوادزه ۳۷M، برج اکسیس، طبقه ۵) و مشتری را تنظیم می\u200cکند.",
      "با استفاده از خدمات ما، شما این شرایط را می\u200cپذیرید.",
    ],
  },
  {
    title: "وضعیت شرکت و روابط با فروشندگان",
    paragraphs: [
      "ITC Georgia نماینده مجاز فروش Microsoft، Amazon Web Services و Google در گرجستان است. ITC Georgia تولیدکننده یا ارائه\u200cدهنده مستقیم این محصولات نیست.",
      "تمامی نرم\u200cافزارها تابع توافقنامه\u200cهای مجوز فروشنده مربوطه هستند:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "دامنه خدمات",
    paragraphs: ["ITC Georgia خدمات زیر را ارائه می\u200cدهد:"],
    list: [
      "صدور مجوز و تهیه محصولات Microsoft، AWS و Google",
      "مشاوره و توصیه برای انتخاب بهینه محصول",
      "پشتیبانی فنی سطح ۱",
      "مهاجرت ایمیل و فضای کاری",
      "مدیریت و اداره مجوزها",
    ],
  },
  {
    title: "دسترسی نماینده فروش به حساب\u200cهای مشتری",
    paragraphs: [
      "برای ارائه خدمات، ITC Georgia ممکن است دسترسی مدیریتی به حساب شما در پلتفرم\u200cهای فروشنده داشته باشد. این دسترسی به عملکردهای مدیریتی محدود است.",
      "آنچه ما می\u200cتوانیم ببینیم:",
    ],
    list: [
      "نام مستأجر/حساب و دامنه",
      "انواع مجوز، تعداد و وضعیت",
      "اطلاعات صورتحساب (مبالغ فاکتور، وضعیت پرداخت)",
      "فهرست کاربران (نام\u200cها، ایمیل\u200cها) — فقط در صورت اعطای نقش\u200cهای مناسب",
      "اطلاعات سلامت سرویس",
    ],
  },
  {
    title: "آنچه نمی\u200cتوانیم ببینیم یا به آن دسترسی داشته باشیم",
    paragraphs: ["ITC Georgia به محتوای شما دسترسی ندارد:"],
    list: [
      "محتوای ایمیل (Gmail، Outlook)",
      "فایل\u200cها و اسناد (OneDrive، Google Drive، SharePoint)",
      "چت\u200cها و ضبط تماس\u200cهای Teams/Meet",
      "محتوای پایگاه داده",
      "رمز عبور کاربران (فقط می\u200cتوانیم بازنشانی کنیم، نه مشاهده)",
      "محتوای S3، Cloud Storage یا سایر فضاهای ذخیره\u200cسازی",
      "اسناد داخلی و داده\u200cهای تجاری سازمان شما",
    ],
  },
  {
    title: "پرداخت و صورتحساب",
    paragraphs: [
      "تمامی قیمت\u200cها به لاری گرجستان (GEL) هستند. مالیات بر ارزش افزوده (۱۸٪) طبق قانون مالیاتی گرجستان اضافه می\u200cشود.",
      "قیمت\u200cهای فروشنده به USD/EUR هستند. معادل GEL با نرخ رسمی بانک ملی گرجستان محاسبه می\u200cشود.",
      "مهلت پرداخت: ۱۵ روز تقویمی از تاریخ فاکتور، مگر اینکه توافق دیگری شده باشد.",
    ],
  },
  {
    title: "سیاست بازپرداخت",
    paragraphs: [
      "بازپرداخت مجوز تابع سیاست\u200cهای لغو فروشنده است. اشتراک\u200cهای سالانه Microsoft CSP ظرف ۷ روز قابل لغو هستند.",
      "هزینه خدمات خود ITC Georgia (مشاوره، مهاجرت) پس از شروع کار قابل بازپرداخت نیست.",
    ],
  },
  {
    title: "دامنه پشتیبانی",
    paragraphs: ["ITC Georgia پشتیبانی فنی سطح ۱ ارائه می\u200cدهد:"],
    list: [
      "فعال\u200cسازی و تأمین مجوز",
      "ایجاد کاربر و تخصیص مجوز",
      "استعلام\u200cهای صورتحساب",
      "مشکلات اساسی دسترسی/مجوز",
      "بازنشانی رمز عبور (در صورت داشتن دسترسی مدیریتی)",
      "ساعات پشتیبانی: دوشنبه تا جمعه، ۱۰:۰۰-۱۹:۰۰ به وقت تفلیس",
    ],
  },
  {
    title: "شرایط خدمات مهاجرت",
    paragraphs: [
      "در طول مهاجرت، ITC Georgia ممکن است به طور موقت به سیستم\u200cهای مبدأ دسترسی پیدا کند — صرفاً برای انتقال داده.",
      "ITC Georgia پس از اتمام مهاجرت، نسخه\u200cای از داده\u200cهای منتقل شده نگه نمی\u200cدارد.",
      "مشتری باید کامل بودن داده\u200cهای منتقل شده را ظرف ۷ روز تأیید کند.",
    ],
  },
  {
    title: "تعهدات مشتری",
    paragraphs: ["مشتری موظف است:"],
    list: [
      "هزینه\u200cهای توافق شده را به موقع پرداخت کند",
      "سیاست\u200cهای استفاده قابل قبول فروشنده را رعایت کند",
      "اطلاعات دقیق شرکت و تماس ارائه دهد",
      "مجوزها را فقط برای کاربران مجاز استفاده کند",
      "امنیت اعتبارنامه\u200cهای مدیریتی را حفظ کند",
    ],
  },
  {
    title: "محدودیت مسئولیت",
    paragraphs: ["ITC Georgia مسئول موارد زیر نیست:"],
    list: [
      "قطعی یا وقفه خدمات فروشنده",
      "باگ\u200cها یا آسیب\u200cپذیری\u200cهای امنیتی نرم\u200cافزار",
      "از دست رفتن داده در پلتفرم\u200cهای فروشنده (مگر اینکه مستقیماً توسط ITC Georgia ایجاد شده باشد)",
      "دسترسی غیرمجاز ناشی از نقص امنیتی مشتری",
      "خسارات غیرمستقیم، اتفاقی یا تبعی",
    ],
  },
  {
    title: "حفاظت از داده\u200cها",
    paragraphs: [
      "ITC Georgia داده\u200cهای شخصی را مطابق قوانین حفاظت از داده\u200cهای گرجستان پردازش می\u200cکند.",
      "اطلاعات جمع\u200cآوری شده: نام شرکت، مشخصات شخص تماس، اطلاعات صورتحساب. صرفاً برای ارائه خدمات و صورتحساب استفاده می\u200cشود.",
      "شما می\u200cتوانید درخواست دسترسی، اصلاح، حذف یا محدود کردن پردازش داده\u200cهای خود را بدهید.",
    ],
  },
  {
    title: "قانون حاکم",
    paragraphs: [
      "این شرایط تحت قانون گرجستان اداره می\u200cشود. اختلافات ابتدا از طریق مذاکره و سپس در دادگاه شهر تفلیس حل می\u200cشوند.",
    ],
  },
  {
    title: "تغییرات در شرایط",
    paragraphs: [
      "ITC Georgia ممکن است این شرایط را تغییر دهد. تغییرات مهم حداقل ۱۵ روز قبل اطلاع\u200cرسانی می\u200cشوند.",
    ],
  },
  {
    title: "اطلاعات تماس",
    paragraphs: [
      "ITC Georgia LLC\nتفلیس، خیابان چاوچاوادزه ۳۷M، برج اکسیس، طبقه ۵\nتلفن: +995 32 2 420 710\nایمیل: info@itcgeorgia.ge",
    ],
  },
];

const arContent: Section[] = [
  {
    title: "الأحكام العامة",
    paragraphs: [
      "تنظّم هذه الشروط والأحكام العلاقة بين شركة ITC Georgia ذ.م.م (العنوان: تبليسي، شارع تشافتشافادزه 37M، برج أكسيس، الطابق 5) والعميل.",
      "باستخدام خدماتنا، فإنك توافق على هذه الشروط.",
    ],
  },
  {
    title: "وضع الشركة وعلاقاتها مع المورّدين",
    paragraphs: [
      "ITC Georgia هي موزّع معتمد لـ Microsoft وAmazon Web Services وGoogle في جورجيا. ITC Georgia ليست الشركة المصنّعة أو المزوّد المباشر لهذه المنتجات.",
      "تخضع جميع البرمجيات لاتفاقيات ترخيص المورّد المعني:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "نطاق الخدمات",
    paragraphs: ["توفّر ITC Georgia ما يلي:"],
    list: [
      "ترخيص وشراء منتجات Microsoft وAWS وGoogle",
      "استشارات وتوصيات لاختيار المنتج الأمثل",
      "دعم فني من المستوى الأول",
      "ترحيل البريد الإلكتروني وبيئة العمل",
      "إدارة التراخيص والإدارة",
    ],
  },
  {
    title: "وصول الموزّع إلى حسابات العملاء",
    paragraphs: [
      "لتقديم الخدمات، قد يكون لدى ITC Georgia وصول إداري إلى حسابك على منصات المورّدين. يقتصر هذا الوصول على الوظائف الإدارية.",
      "ما يمكننا رؤيته:",
    ],
    list: [
      "اسم المستأجر/الحساب والنطاق",
      "أنواع التراخيص والكميات والحالة",
      "معلومات الفوترة (مبالغ الفواتير، حالة الدفع)",
      "قائمة المستخدمين (الأسماء، البريد الإلكتروني) — فقط عند منح الأدوار المناسبة",
      "معلومات سلامة الخدمة",
    ],
  },
  {
    title: "ما لا يمكننا رؤيته أو الوصول إليه",
    paragraphs: ["لا تستطيع ITC Georgia الوصول إلى محتواك:"],
    list: [
      "محتوى البريد الإلكتروني (Gmail، Outlook)",
      "الملفات والمستندات (OneDrive، Google Drive، SharePoint)",
      "محادثات وتسجيلات مكالمات Teams/Meet",
      "محتوى قواعد البيانات",
      "كلمات مرور المستخدمين (يمكننا إعادة التعيين فقط، وليس العرض)",
      "محتوى S3 وCloud Storage وغيرها من وحدات التخزين",
      "المستندات الداخلية وبيانات الأعمال الخاصة بمؤسستك",
    ],
  },
  {
    title: "الدفع والفوترة",
    paragraphs: [
      "جميع الأسعار بالعملة الجورجية لاري (GEL). تُضاف ضريبة القيمة المضافة (18%) وفقاً لقانون الضرائب الجورجي.",
      "أسعار المورّدين بالدولار الأمريكي/اليورو. يُحسب المعادل بالعملة الجورجية وفق السعر الرسمي للبنك الوطني الجورجي.",
      "شروط الدفع: 15 يوماً تقويمياً من تاريخ الفاتورة، ما لم يُتفق على خلاف ذلك.",
    ],
  },
  {
    title: "سياسة الاسترداد",
    paragraphs: [
      "تخضع عمليات استرداد التراخيص لسياسات إلغاء المورّد. يمكن إلغاء اشتراكات Microsoft CSP السنوية خلال 7 أيام.",
      "رسوم خدمات ITC Georgia الخاصة (الاستشارات، الترحيل) غير قابلة للاسترداد بعد بدء العمل.",
    ],
  },
  {
    title: "نطاق الدعم",
    paragraphs: ["توفّر ITC Georgia دعماً فنياً من المستوى الأول:"],
    list: [
      "تفعيل التراخيص وتوفيرها",
      "إنشاء المستخدمين وتعيين التراخيص",
      "استفسارات الفوترة",
      "مشكلات الوصول/التفويض الأساسية",
      "إعادة تعيين كلمة المرور (حيث يتوفر لدينا وصول إداري)",
      "ساعات الدعم: الاثنين–الجمعة، 10:00–19:00 بتوقيت تبليسي",
    ],
  },
  {
    title: "شروط خدمة الترحيل",
    paragraphs: [
      "أثناء الترحيل، قد تصل ITC Georgia مؤقتاً إلى الأنظمة المصدر — لغرض نقل البيانات فقط.",
      "لن تحتفظ ITC Georgia بنسخ من البيانات المُرحَّلة بعد اكتمال العملية.",
      "يجب على العميل التحقق من اكتمال البيانات المُرحَّلة خلال 7 أيام.",
    ],
  },
  {
    title: "التزامات العميل",
    paragraphs: ["يلتزم العميل بما يلي:"],
    list: [
      "دفع الرسوم المتفق عليها في الوقت المحدد",
      "الامتثال لسياسات الاستخدام المقبول لدى المورّدين",
      "تقديم معلومات دقيقة عن الشركة وبيانات الاتصال",
      "استخدام التراخيص للمستخدمين المصرّح لهم فقط",
      "الحفاظ على أمان بيانات الاعتماد الإدارية",
    ],
  },
  {
    title: "تحديد المسؤولية",
    paragraphs: ["لا تتحمل ITC Georgia المسؤولية عن:"],
    list: [
      "انقطاع خدمات المورّد أو توقفها",
      "أخطاء البرمجيات أو الثغرات الأمنية",
      "فقدان البيانات في منصات المورّدين (ما لم تكن ITC Georgia السبب المباشر)",
      "الوصول غير المصرّح به الناجم عن إخفاقات العميل الأمنية",
      "الأضرار غير المباشرة أو العرضية أو التبعية",
    ],
  },
  {
    title: "حماية البيانات",
    paragraphs: [
      "تعالج ITC Georgia البيانات الشخصية وفقاً لقوانين حماية البيانات في جورجيا.",
      "البيانات المُجمَّعة: اسم الشركة، بيانات جهة الاتصال، معلومات الفوترة. تُستخدم حصراً لتقديم الخدمات والفوترة.",
      "يحق لك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها.",
    ],
  },
  {
    title: "القانون الحاكم",
    paragraphs: [
      "تخضع هذه الشروط للقانون الجورجي. تُحل النزاعات أولاً عبر التفاوض، ثم أمام محكمة مدينة تبليسي.",
    ],
  },
  {
    title: "التغييرات على الشروط",
    paragraphs: [
      "يحق لـ ITC Georgia تعديل هذه الشروط. يُخطر العملاء بالتغييرات الجوهرية قبل 15 يوماً على الأقل.",
    ],
  },
  {
    title: "معلومات الاتصال",
    paragraphs: [
      "ITC Georgia ذ.م.م\nتبليسي، شارع تشافتشافادزه 37M، برج أكسيس، الطابق 5\nهاتف: +995 32 2 420 710\nبريد إلكتروني: info@itcgeorgia.ge",
    ],
  },
];

const allContent: Record<string, Section[]> = {
  ka: kaContent,
  en: enContent,
  ru: ruContent,
  uk: ukContent,
  tr: trContent,
  hy: hyContent,
  az: azContent,
  hi: hiContent,
  fa: faContent,
  ar: arContent,
};

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;
  const content = allContent[lang] || allContent.en;
  const ui = uiStrings[lang] || uiStrings.en;

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {ui.legal}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ui.title}
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              {ui.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            {content.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  {i + 1}. {section.title}
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  {section.paragraphs.map((text, j) => (
                    <p key={j} className="whitespace-pre-line">{text}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-1.5">
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 max-w-3xl">
            <p className="text-sm text-slate-500 mb-4">
              {ui.forQuestions}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span>info@itcgeorgia.ge</span>
              <span>+995 32 2 420 710</span>
            </div>
            <div className="mt-6">
              <Link href={`${p}/contact`} className="text-sm font-medium text-navy-600 hover:text-azure-600 transition-colors">
                {"\u2190"} {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
