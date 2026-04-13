import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LangKey = "ka" | "en" | "ru" | "uk" | "tr" | "hy" | "az" | "hi" | "fa" | "ar";

const content: Record<
  LangKey,
  {
    pageTitle: string;
    label: string;
    lastUpdated: string;
    sections: { title: string; text: string }[];
  }
> = {
  ka: {
    pageTitle: "კონფიდენციალურობის პოლიტიკა",
    label: "იურიდიული",
    lastUpdated: "ბოლო განახლება: 2026 წლის აპრილი",
    sections: [
      {
        title: "1. ვინ ვართ",
        text: "შპს აითისი ჯორჯია (მისამართი: თბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული) არის მონაცემთა დამუშავების კონტროლიორი.",
      },
      {
        title: "2. რა მონაცემებს ვაგროვებთ",
        text: "ვაგროვებთ: კომპანიის სახელი, საკონტაქტო პირის სახელი/გვარი, ელ-ფოსტა, ტელეფონი, ბილინგის მისამართი. ეს მონაცემები გამოიყენება მხოლოდ სერვისების მიწოდებისა და ბილინგის მიზნით.",
      },
      {
        title: "3. თქვენი უფლებები",
        text: "თქვენ გაქვთ უფლება მოითხოვოთ მონაცემების ნახვა, შესწორება, წაშლა ან დამუშავების შეზღუდვა. დაგვიკავშირდით: info@itcgeorgia.ge",
      },
      {
        title: "4. მონაცემთა დაცვა",
        text: "ITC Georgia ამუშავებს პერსონალურ მონაცემებს საქართველოს კანონმდებლობის შესაბამისად. მონაცემები არ გადაეცემა მესამე მხარეებს, გარდა სერვისის მიწოდებისთვის საჭირო შემთხვევებისა (Microsoft, AWS, Google).",
      },
    ],
  },
  en: {
    pageTitle: "Privacy Policy",
    label: "Legal",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        title: "1. Who We Are",
        text: "ITC Georgia LLC (Tbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor) is the data controller.",
      },
      {
        title: "2. What Data We Collect",
        text: "We collect: company name, contact person name, email, phone, billing address. This data is used solely for service delivery and billing.",
      },
      {
        title: "3. Your Rights",
        text: "You may request access, correction, deletion, or restriction of your data. Contact us: info@itcgeorgia.ge",
      },
      {
        title: "4. Data Protection",
        text: "ITC Georgia processes personal data per Georgian law. Data is not shared with third parties except as needed for service delivery (Microsoft, AWS, Google).",
      },
    ],
  },
  ru: {
    pageTitle: "Политика конфиденциальности",
    label: "Юридическая информация",
    lastUpdated: "Последнее обновление: апрель 2026",
    sections: [
      {
        title: "1. Кто мы",
        text: "ООО ITC Georgia (адрес: Тбилиси, проспект Чавчавадзе 37М, Axis Tower, 5 этаж) является контролёром обработки персональных данных.",
      },
      {
        title: "2. Какие данные мы собираем",
        text: "Мы собираем: название компании, имя контактного лица, электронную почту, телефон, адрес для выставления счетов. Эти данные используются исключительно для предоставления услуг и выставления счетов.",
      },
      {
        title: "3. Ваши права",
        text: "Вы вправе запросить доступ к своим данным, их исправление, удаление или ограничение обработки. Свяжитесь с нами: info@itcgeorgia.ge",
      },
      {
        title: "4. Защита данных",
        text: "ITC Georgia обрабатывает персональные данные в соответствии с законодательством Грузии. Данные не передаются третьим лицам, за исключением случаев, необходимых для предоставления услуг (Microsoft, AWS, Google).",
      },
    ],
  },
  uk: {
    pageTitle: "Політика конфіденційності",
    label: "Юридична інформація",
    lastUpdated: "Останнє оновлення: квітень 2026",
    sections: [
      {
        title: "1. Хто ми",
        text: "ТОВ ITC Georgia (адреса: Тбілісі, проспект Чавчавадзе 37М, Axis Tower, 5 поверх) є контролером обробки персональних даних.",
      },
      {
        title: "2. Які дані ми збираємо",
        text: "Ми збираємо: назву компанії, ім\u2019я контактної особи, електронну пошту, телефон, адресу для виставлення рахунків. Ці дані використовуються виключно для надання послуг та виставлення рахунків.",
      },
      {
        title: "3. Ваші права",
        text: "Ви маєте право запросити доступ до своїх даних, їх виправлення, видалення або обмеження обробки. Зв\u2019яжіться з нами: info@itcgeorgia.ge",
      },
      {
        title: "4. Захист даних",
        text: "ITC Georgia обробляє персональні дані відповідно до законодавства Грузії. Дані не передаються третім особам, окрім випадків, необхідних для надання послуг (Microsoft, AWS, Google).",
      },
    ],
  },
  tr: {
    pageTitle: "Gizlilik Politikası",
    label: "Hukuki",
    lastUpdated: "Son güncelleme: Nisan 2026",
    sections: [
      {
        title: "1. Biz Kimiz",
        text: "ITC Georgia LLC (Tiflis, Chavchavadze Cad. 37M, Axis Tower, 5. Kat) veri sorumlusudur.",
      },
      {
        title: "2. Hangi Verileri Topluyoruz",
        text: "Toplanan veriler: şirket adı, irtibat kişisi adı, e-posta, telefon, fatura adresi. Bu veriler yalnızca hizmet sunumu ve faturalandırma amacıyla kullanılır.",
      },
      {
        title: "3. Haklarınız",
        text: "Verilerinize erişim, düzeltme, silme veya işlemenin kısıtlanmasını talep edebilirsiniz. Bize ulaşın: info@itcgeorgia.ge",
      },
      {
        title: "4. Veri Koruma",
        text: "ITC Georgia, kişisel verileri Gürcistan yasalarına uygun olarak işler. Veriler, hizmet sunumu için gerekli durumlar (Microsoft, AWS, Google) dışında üçüncü taraflarla paylaşılmaz.",
      },
    ],
  },
  hy: {
    pageTitle: "Գաղտնիության քաղաքականություն",
    label: "Իրավական",
    lastUpdated: "\u054E\u0565\u0580\u057B\u056B\u0576 \u0569\u0561\u0580\u0574\u0561\u0581\u0578\u0582\u0574\u055D \u0561\u057A\u0580\u056B\u056C 2026",
    sections: [
      {
        title: "1. \u0548\u057E \u0565\u0576\u0584 \u0574\u0565\u0576\u0584",
        text: "ITC Georgia \u054D\u054A\u0538 (\u0539\u0562\u056B\u056C\u056B\u057D\u056B, \u0549\u0561\u057E\u0579\u0561\u057E\u0561\u0571\u0565\u056B \u057A\u0578\u0572. 37\u0544, Axis Tower, 5-\u0580\u0564 \u0570\u0561\u0580\u056F) \u0570\u0561\u0576\u0564\u056B\u057D\u0561\u0576\u0578\u0582\u0574 \u0567 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u056B \u057E\u0565\u0580\u0561\u0570\u057D\u056F\u056B\u0579\u0568:",
      },
      {
        title: "2. \u053B\u0576\u0579 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580 \u0565\u0576\u0584 \u0570\u0561\u057E\u0561\u0584\u0578\u0582\u0574",
        text: "\u0544\u0565\u0576\u0584 \u0570\u0561\u057E\u0561\u0584\u0578\u0582\u0574 \u0565\u0576\u0584\u055D \u0568\u0576\u056F\u0565\u0580\u0578\u0582\u0569\u0575\u0561\u0576 \u0561\u0576\u057E\u0561\u0576\u0578\u0582\u0574\u0568, \u056F\u0561\u057A\u056B \u0561\u0576\u0571\u056B \u0561\u0576\u0578\u0582\u0576\u0568, \u0567\u056C. \u0583\u0578\u057D\u057F\u0568, \u0570\u0565\u057C\u0561\u056D\u0578\u057D\u0568, \u0570\u0561\u0577\u057E\u0561\u0580\u056F\u0574\u0561\u0576 \u0570\u0561\u057D\u0581\u0565\u0568: \u054D\u0578\u0575\u0576 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u0568 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u057E\u0578\u0582\u0574 \u0565\u0576 \u0562\u0561\u0581\u0561\u057C\u0561\u057A\u0565\u057D \u056E\u0561\u057C\u0561\u0575\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056B \u0574\u0561\u057F\u0578\u0582\u0581\u0574\u0561\u0576 \u0587 \u0570\u0561\u0577\u057E\u0561\u0580\u056F\u0574\u0561\u0576 \u0570\u0561\u0574\u0561\u0580:",
      },
      {
        title: "3. \u0541\u0565\u0580 \u056B\u0580\u0561\u057E\u0578\u0582\u0576\u0584\u0576\u0565\u0580\u0568",
        text: "\u0534\u0578\u0582\u0584 \u056F\u0561\u0580\u0578\u0572 \u0565\u0584 \u057A\u0561\u0570\u0561\u0576\u057B\u0565\u056C \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u056B \u0570\u0561\u057D\u0561\u0576\u0565\u056C\u056B\u0578\u0582\u0569\u0575\u0578\u0582\u0576, \u0578\u0582\u0572\u0572\u0578\u0582\u0574, \u057B\u0576\u057B\u0578\u0582\u0574 \u056F\u0561\u0574 \u0574\u0577\u0561\u056F\u0574\u0561\u0576 \u057D\u0561\u0570\u0574\u0561\u0576\u0561\u0583\u0561\u056F\u0578\u0582\u0574: \u053F\u0561\u057A\u057E\u0565\u0584 \u0574\u0565\u0566\u055D info@itcgeorgia.ge",
      },
      {
        title: "4. \u054F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u056B \u057A\u0561\u0577\u057F\u057A\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
        text: "ITC Georgia-\u0576 \u0574\u0577\u0561\u056F\u0578\u0582\u0574 \u0567 \u0561\u0576\u0571\u0576\u0561\u056F\u0561\u0576 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u0568 \u054E\u0580\u0561\u057D\u057F\u0561\u0576\u056B \u0585\u0580\u0565\u0576\u057D\u0564\u0580\u0578\u0582\u0569\u0575\u0561\u0576\u0568 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576: \u054F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u0568 \u0579\u0565\u0576 \u0583\u0578\u056D\u0561\u0576\u0581\u057E\u0578\u0582\u0574 \u0565\u0580\u0580\u0578\u0580\u0564 \u056F\u0578\u0572\u0574\u0565\u0580\u056B\u0576, \u0562\u0561\u0581\u056B \u056E\u0561\u057C\u0561\u0575\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056B \u0574\u0561\u057F\u0578\u0582\u0581\u0574\u0561\u0576 \u0570\u0561\u0574\u0561\u0580 \u0561\u0576\u0570\u0580\u0561\u056A\u0565\u0577\u057F \u0564\u0565\u057A\u0584\u0565\u0580\u0578\u0582\u0574 (Microsoft, AWS, Google):",
      },
    ],
  },
  az: {
    pageTitle: "Məxfilik Siyasəti",
    label: "Hüquqi",
    lastUpdated: "Son yenilənmə: Aprel 2026",
    sections: [
      {
        title: "1. Biz Kimik",
        text: "ITC Georgia MMC (Tbilisi, Çavçavadze prospekti 37M, Axis Tower, 5-ci mərtəbə) məlumat nəzarətçisidir.",
      },
      {
        title: "2. Hansı Məlumatları Toplayırıq",
        text: "Toplanan məlumatlar: şirkət adı, əlaqə şəxsinin adı, e-poçt, telefon, faktura ünvanı. Bu məlumatlar yalnız xidmət göstərilməsi və hesab-faktura üçün istifadə olunur.",
      },
      {
        title: "3. Hüquqlarınız",
        text: "Məlumatlarınıza giriş, düzəltmə, silmə və ya emalların məhdudlaşdırılmasını tələb edə bilərsiniz. Bizimlə əlaqə: info@itcgeorgia.ge",
      },
      {
        title: "4. Məlumatların Qorunması",
        text: "ITC Georgia şəxsi məlumatları Gürcüstan qanunvericiliyinə uyğun olaraq emal edir. Məlumatlar xidmət göstərilməsi üçün zəruri hallar (Microsoft, AWS, Google) xaricində üçüncü tərəflərə ötürülmür.",
      },
    ],
  },
  hi: {
    pageTitle: "गोपनीयता नीति",
    label: "कानूनी",
    lastUpdated: "अंतिम अपडेट: अप्रैल 2026",
    sections: [
      {
        title: "1. हम कौन हैं",
        text: "ITC Georgia LLC (त्बिलिसी, चावचावाड्ज़े एवेन्यू 37M, एक्सिस टॉवर, 5वीं मंज़िल) डेटा नियंत्रक है।",
      },
      {
        title: "2. हम कौन सा डेटा एकत्र करते हैं",
        text: "हम एकत्र करते हैं: कंपनी का नाम, संपर्क व्यक्ति का नाम, ईमेल, फ़ोन, बिलिंग पता। इस डेटा का उपयोग केवल सेवा वितरण और बिलिंग के लिए किया जाता है।",
      },
      {
        title: "3. आपके अधिकार",
        text: "आप अपने डेटा तक पहुँच, सुधार, विलोपन या प्रसंस्करण प्रतिबंध का अनुरोध कर सकते हैं। संपर्क करें: info@itcgeorgia.ge",
      },
      {
        title: "4. डेटा सुरक्षा",
        text: "ITC Georgia जॉर्जिया के कानून के अनुसार व्यक्तिगत डेटा संसाधित करता है। सेवा वितरण के लिए आवश्यक मामलों (Microsoft, AWS, Google) को छोड़कर डेटा तृतीय पक्षों के साथ साझा नहीं किया जाता है।",
      },
    ],
  },
  fa: {
    pageTitle: "سیاست حفظ حریم خصوصی",
    label: "حقوقی",
    lastUpdated: "آخرین به\u200Cروزرسانی: آوریل ۲۰۲۶",
    sections: [
      {
        title: "۱. ما کی هستیم",
        text: "ITC Georgia LLC (تفلیس، خیابان چاوچاوادزه 37M، برج اکسیس، طبقه 5) کنترل\u200Cکننده داده\u200Cها است.",
      },
      {
        title: "۲. چه داده\u200Cهایی جمع\u200Cآوری می\u200Cکنیم",
        text: "ما جمع\u200Cآوری می\u200Cکنیم: نام شرکت، نام شخص تماس، ایمیل، تلفن، آدرس صورت\u200Cحساب. این داده\u200Cها صرفاً برای ارائه خدمات و صدور صورت\u200Cحساب استفاده می\u200Cشوند.",
      },
      {
        title: "۳. حقوق شما",
        text: "شما می\u200Cتوانید دسترسی، اصلاح، حذف یا محدودیت پردازش داده\u200Cهای خود را درخواست کنید. با ما تماس بگیرید: info@itcgeorgia.ge",
      },
      {
        title: "۴. حفاظت از داده\u200Cها",
        text: "ITC Georgia داده\u200Cهای شخصی را مطابق قوانین گرجستان پردازش می\u200Cکند. داده\u200Cها به جز موارد لازم برای ارائه خدمات (Microsoft، AWS، Google) با اشخاص ثالث به اشتراک گذاشته نمی\u200Cشوند.",
      },
    ],
  },
  ar: {
    pageTitle: "سياسة الخصوصية",
    label: "قانوني",
    lastUpdated: "آخر تحديث: أبريل ٢٠٢٦",
    sections: [
      {
        title: "١. من نحن",
        text: "شركة ITC Georgia ذ.م.م (تبليسي، شارع تشافتشافادزه 37M، برج أكسيس، الطابق الخامس) هي المتحكم في البيانات.",
      },
      {
        title: "٢. ما البيانات التي نجمعها",
        text: "نجمع: اسم الشركة، اسم جهة الاتصال، البريد الإلكتروني، الهاتف، عنوان الفوترة. تُستخدم هذه البيانات حصرياً لتقديم الخدمات والفوترة.",
      },
      {
        title: "٣. حقوقك",
        text: "يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها. تواصل معنا: info@itcgeorgia.ge",
      },
      {
        title: "٤. حماية البيانات",
        text: "تعالج ITC Georgia البيانات الشخصية وفقاً للقانون الجورجي. لا تُشارَك البيانات مع أطراف ثالثة إلا عند الضرورة لتقديم الخدمات (Microsoft، AWS، Google).",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang as LangKey] || content.en;
  return { title: c.pageTitle };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const c = content[lang as LangKey] || content.en;

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {c.label}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            {c.pageTitle}
          </h1>
          <p className="mt-3 text-sm text-slate-400">{c.lastUpdated}</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl space-y-8 text-sm text-slate-600 leading-relaxed">
            {c.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  {s.title}
                </h2>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
