import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "ka" ? "კონფიდენციალურობის პოლიტიკა" : "Privacy Policy" };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">{ka ? "იურიდიული" : "Legal"}</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            {ka ? "კონფიდენციალურობის პოლიტიკა" : "Privacy Policy"}
          </h1>
          <p className="mt-3 text-sm text-slate-400">{ka ? "ბოლო განახლება: 2026 წლის აპრილი" : "Last updated: April 2026"}</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl space-y-8 text-sm text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{ka ? "1. ვინ ვართ" : "1. Who We Are"}</h2>
              <p>{ka
                ? "შპს აითისი ჯორჯია (მისამართი: თბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული) არის მონაცემთა დამუშავების კონტროლიორი."
                : "ITC Georgia LLC (Tbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor) is the data controller."}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{ka ? "2. რა მონაცემებს ვაგროვებთ" : "2. What Data We Collect"}</h2>
              <p>{ka
                ? "ვაგროვებთ: კომპანიის სახელი, საკონტაქტო პირის სახელი/გვარი, ელ-ფოსტა, ტელეფონი, ბილინგის მისამართი. ეს მონაცემები გამოიყენება მხოლოდ სერვისების მიწოდებისა და ბილინგის მიზნით."
                : "We collect: company name, contact person name, email, phone, billing address. This data is used solely for service delivery and billing."}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{ka ? "3. თქვენი უფლებები" : "3. Your Rights"}</h2>
              <p>{ka
                ? "თქვენ გაქვთ უფლება მოითხოვოთ მონაცემების ნახვა, შესწორება, წაშლა ან დამუშავების შეზღუდვა. დაგვიკავშირდით: info@itcgeorgia.ge"
                : "You may request access, correction, deletion, or restriction of your data. Contact us: info@itcgeorgia.ge"}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{ka ? "4. მონაცემთა დაცვა" : "4. Data Protection"}</h2>
              <p>{ka
                ? "ITC Georgia ამუშავებს პერსონალურ მონაცემებს საქართველოს კანონმდებლობის შესაბამისად. მონაცემები არ გადაეცემა მესამე მხარეებს, გარდა სერვისის მიწოდებისთვის საჭირო შემთხვევებისა (Microsoft, AWS, Google)."
                : "ITC Georgia processes personal data per Georgian law. Data is not shared with third parties except as needed for service delivery (Microsoft, AWS, Google)."}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
