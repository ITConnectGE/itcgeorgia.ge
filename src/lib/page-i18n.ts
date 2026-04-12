// Translations for pages that don't use the main dictionary
// Maps lang code -> translated strings
// Falls back: ka -> ka, en/hi/fa/ar/ru/uk/tr/hy/az -> their translation

type LangMap = Record<string, string>;

function t(translations: LangMap, lang: string): string {
  return translations[lang] || translations.en || translations.ka;
}

export function getPageStrings(lang: string) {
  return {
    t: (translations: LangMap) => t(translations, lang),
    // Common UI strings used across multiple pages
    backToGuides: t({
      ka: "ყველა სტატია", en: "All Articles", ru: "Все статьи", uk: "Всі статті",
      tr: "Tüm Makaleler", hy: "Բoloր հoդվածnerë", az: "Bütün Məqalələr",
      hi: "सभी लेख", fa: "همه مقالات", ar: "جميع المقالات",
    }, lang),
    readMore: t({
      ka: "წაკითხვა", en: "Read", ru: "Читать", uk: "Читати",
      tr: "Oku", hy: "Կարdelays", az: "Oxu",
      hi: "पढ़ें", fa: "مطالعه", ar: "اقرأ",
    }, lang),
    contactUs: t({
      ka: "დაგვიკავშირდით", en: "Contact Us", ru: "Свяжитесь с нами", uk: "Зв'яжіться з нами",
      tr: "Bize Ulaşın", hy: "Կapveq մեζ", az: "Bizimlə Əlaqə",
      hi: "हमसे संपर्क करें", fa: "تماس با ما", ar: "اتصل بنا",
    }, lang),
    learnMore: t({
      ka: "გაიგეთ მეტი", en: "Learn More", ru: "Узнать больше", uk: "Дізнатися більше",
      tr: "Daha Fazla", hy: "Իmagecheq avel", az: "Daha Çox",
      hi: "और जानें", fa: "بیشتر بدانید", ar: "اعرف المزيد",
    }, lang),
    requestConsultation: t({
      ka: "კონსულტაციის მოთხოვნა", en: "Request Consultation", ru: "Запросить консультацию", uk: "Запросити консультацію",
      tr: "Danışmanlık Talep Et", hy: "Խորhrdatveq", az: "Məsləhət Tələb Et",
      hi: "परामर्श का अनुरोध करें", fa: "درخواست مشاوره", ar: "طلب استشارة",
    }, lang),
    legal: t({
      ka: "იურიდიული", en: "Legal", ru: "Юридическая информация", uk: "Юридична інформація",
      tr: "Yasal", hy: "Իravabanakan", az: "Hüquqi",
      hi: "कानूनी", fa: "حقوقی", ar: "قانوني",
    }, lang),
    lastUpdated: t({
      ka: "ბოლო განახლება: 2026 წლის აპრილი", en: "Last updated: April 2026",
      ru: "Последнее обновление: апрель 2026", uk: "Останнє оновлення: квітень 2026",
      tr: "Son güncelleme: Nisan 2026", hy: "Վerçin tarmatsneq: april 2026",
      az: "Son yenilənmə: Aprel 2026", hi: "अंतिम अपडेट: अप्रैल 2026",
      fa: "آخرین به‌روزرسانی: آوریل 2026", ar: "آخر تحديث: أبريل 2026",
    }, lang),
    questionsContact: t({
      ka: "კითხვების შემთხვევაში დაგვიკავშირდით:", en: "For questions, contact us:",
      ru: "По вопросам обращайтесь:", uk: "З питань звертайтеся:",
      tr: "Sorularınız için bizimle iletişime geçin:", az: "Suallarınız üçün bizimlə əlaqə saxlayın:",
      hi: "प्रश्नों के लिए, हमसे संपर्क करें:", fa: "برای سوالات با ما تماس بگیرید:",
      ar: "للأسئلة، اتصل بنا:", hy: "Harcerë uneq, kapveq mezë:",
    }, lang),
  };
}
