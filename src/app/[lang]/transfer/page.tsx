import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const isKa = lang === "ka";
  return {
    title: isKa
      ? "ლიცენზიების გადმოტანა | ITC Georgia"
      : "Transfer Your Licenses | ITC Georgia",
    description: isKa
      ? "გადმოიტანეთ არსებული ლიცენზიები ITC Georgia-ზე მარტივად — შეფერხების გარეშე, მონაცემების დაკარგვის გარეშე."
      : "Transfer your existing licenses to ITC Georgia easily — no downtime, no data loss, seamless process.",
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
  const isKa = lang === "ka";

  /* ── localised content ── */
  const hero = {
    label: isKa ? "ლიცენზიების ტრანსფერი" : "License Transfer",
    title: isKa ? "ლიცენზიების გადმოტანა" : "Transfer Your Licenses",
    subtitle: isKa
      ? "მარტივი და სწრაფი პროცესი — გადმოიტანეთ არსებული ლიცენზიები ადგილობრივ პარტნიორთან შეფერხების გარეშე."
      : "Simple, fast process to switch to a local partner — no downtime, no hassle.",
  };

  const steps = isKa
    ? [
        { title: "დაგვიკავშირდით", desc: "გაიარეთ უფასო კონსულტაცია — შეაფასეთ არსებული ლიცენზიები და საჭიროებები." },
        { title: "ლიცენზიების შეფასება", desc: "ჩვენი გუნდი განიხილავს თქვენს მიმდინარე გამოწერებს და შემოგთავაზებთ ოპტიმალურ გეგმას." },
        { title: "ავტორიზაცია", desc: "თქვენ ადასტურებთ ტრანსფერს ვენდორის პორტალზე — Microsoft Partner Center, AWS ან Google Admin Console." },
        { title: "ტრანსფერის დასრულება", desc: "პროცესი სრულდება 1-3 სამუშაო დღეში — სერვისი არ წყდება." },
        { title: "ადგილობრივი მხარდაჭერა", desc: "ისარგებლეთ ლარში ანგარიშსწორებით, დღგ-ს ინვოისით და ქართულენოვანი მხარდაჭერით." },
      ]
    : [
        { title: "Contact Us", desc: "Schedule a free consultation — assess your current licenses and needs." },
        { title: "License Review", desc: "Our team reviews your current subscriptions and proposes an optimal plan." },
        { title: "Authorization", desc: "You confirm the transfer via the vendor portal — Microsoft Partner Center, AWS, or Google Admin Console." },
        { title: "Transfer Completes", desc: "The process completes in 1-3 business days — no service interruption." },
        { title: "Local Support", desc: "Enjoy GEL billing, VAT invoices, and local Georgian-language support." },
      ];

  const microsoftPoints = isKa
    ? [
        "ტრანსფერი მოითხოვს მხოლოდ ბმულის დადასტურებას",
        "კლიენტი იღებს ელ-ფოსტას/ბმულს, აჭერს დადასტურებას - მზადაა",
        "სერვისი არ წყდება, მონაცემები არ იკარგება",
        "ყველა არსებული ლიცენზია, მომხმარებელი და მონაცემი უცვლელი რჩება",
      ]
    : [
        "Transfer requires just a link approval",
        "The client receives an email/link, clicks approve — done",
        "No downtime, no data loss, no service interruption",
        "All existing licenses, users, and data remain unchanged",
      ];

  const awsPoints = isKa
    ? [
        "არსებული AWS ანგარიშის მიბმა ITC Georgia-ზე ბილინგისთვის",
        "ან ახალი ანგარიშის შექმნა ITC Georgia-ს ორგანიზაციაში",
        "არსებული რესურსები უცვლელი რჩება",
      ]
    : [
        "Link existing AWS account to ITC Georgia for billing",
        "Or create a new account under ITC Georgia's organization",
        "Existing resources remain untouched",
      ];

  const googlePoints = isKa
    ? [
        "მარტივი პროცესი Admin Console-ის მეშვეობით",
        "რესელერის ცვლილება — არა მონაცემების მიგრაცია",
        "ყველა მომხმარებელი და მონაცემი უცვლელია",
      ]
    : [
        "Simple process via Admin Console",
        "Reseller change — not a data migration",
        "All users and data remain unchanged",
      ];

  const benefits = isKa
    ? [
        "ლარში ანგარიშსწორება",
        "დღგ-ს ჩათვლით ინვოისი",
        "ადგილობრივი მხარდაჭერა",
        "კორპორატიული ფასდაკლებები",
      ]
    : [
        "GEL billing",
        "VAT-inclusive invoices",
        "Local support in your language",
        "Corporate volume discounts",
      ];

  const faqs = isKa
    ? [
        { q: "დაიკარგება რაიმე მონაცემი?", a: "არა. ტრანსფერი არ მოიცავს მონაცემების მიგრაციას — ყველაფერი უცვლელი რჩება." },
        { q: "იქნება სერვისის შეფერხება?", a: "არა. პროცესი მიმდინარეობს ფონურ რეჟიმში და სერვისი არ წყდება." },
        { q: "რამდენ ხანს გრძელდება პროცესი?", a: "ჩვეულებრივ 1-3 სამუშაო დღე, ვენდორის მიხედვით." },
        { q: "რაიმეს შეცვლა მჭირდება ჩემს მხარეს?", a: "მხოლოდ ტრანსფერის დადასტურება — დანარჩენს ჩვენ მოვაგვარებთ." },
      ]
    : [
        { q: "Will I lose any data?", a: "No. The transfer does not involve data migration — everything remains unchanged." },
        { q: "Will there be downtime?", a: "No. The process happens in the background with zero service interruption." },
        { q: "How long does it take?", a: "Typically 1-3 business days, depending on the vendor." },
        { q: "Do I need to change anything on my side?", a: "Just approve the transfer request — we handle the rest." },
      ];

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {hero.label}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {hero.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-10">
            {isKa ? "როგორ მუშაობს პროცესი" : "How It Works"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
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
              {isKa
                ? "Microsoft ლიცენზიების ტრანსფერი"
                : "Microsoft CSP License Transfer"}
            </h2>
            <ul className="space-y-3">
              {microsoftPoints.map((pt) => (
                <li
                  key={pt}
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
              {isKa
                ? "AWS ანგარიშის ტრანსფერი"
                : "AWS Account Transfer"}
            </h2>
            <ul className="space-y-3">
              {awsPoints.map((pt) => (
                <li
                  key={pt}
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
              {isKa
                ? "Google Workspace ტრანსფერი"
                : "Google Workspace Transfer"}
            </h2>
            <ul className="space-y-3">
              {googlePoints.map((pt) => (
                <li
                  key={pt}
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
            {isKa ? "გადმოტანის უპირატესობები" : "Benefits of Switching"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
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
            {isKa ? "ხშირად დასმული კითხვები" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
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
            {isKa ? "დაიწყეთ გადმოტანა" : "Start Your Transfer"}
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            {isKa
              ? "დაგვიკავშირდით და ჩვენ მოვაგვარებთ ყველაფერს თქვენთვის."
              : "Contact us and we'll handle everything for you."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${p}/contact`}
              className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isKa ? "დაგვიკავშირდით" : "Contact Us"}
            </Link>
            <Link
              href={`${p}/services`}
              className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isKa ? "სერვისების ნახვა" : "View Services"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
