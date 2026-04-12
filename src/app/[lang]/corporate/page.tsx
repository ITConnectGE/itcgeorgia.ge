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
      ? "კორპორატიული შეთავაზება | ITC Georgia"
      : "Corporate Offers | ITC Georgia",
    description: isKa
      ? "სპეციალური კორპორატიული ფასები, მოცულობითი ფასდაკლებები და პერსონალიზებული ლიცენზირების პაკეტები ორგანიზაციებისთვის."
      : "Special corporate pricing, volume discounts, and custom licensing bundles for organizations.",
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
  const isKa = lang === "ka";

  /* ── localised content ── */
  const hero = {
    label: isKa ? "კორპორატიული" : "Corporate",
    title: isKa ? "კორპორატიული შეთავაზება" : "Corporate Offers",
    subtitle: isKa
      ? "სპეციალური ფასები და პირობები ორგანიზაციებისთვის — მოცულობითი ფასდაკლებები, პერსონალური მხარდაჭერა და მოქნილი ანგარიშსწორება."
      : "Special pricing and terms for organizations — volume discounts, dedicated support, and flexible billing.",
  };

  const valueProps = isKa
    ? [
        "ვაწარმოებთ მოლაპარაკებებს ვენდორებთან თქვენი სახელით",
        "მოცულობითი ფასდაკლებები დიდი შეკვეთებისთვის",
        "ინდივიდუალური ლიცენზირების პაკეტები",
        "მრავალწლიანი ხელშეკრულების უპირატესობები",
        "დედიკატებული ანგარიშის მენეჯერი",
      ]
    : [
        "We negotiate with vendors on your behalf",
        "Volume discounts for larger orders",
        "Custom licensing bundles",
        "Multi-year agreement benefits",
        "Dedicated account management",
      ];

  const tiers = isKa
    ? [
        {
          name: "სტანდარტი",
          range: "5-49 მომხმარებელი",
          features: [
            "სტანდარტული რესელერის ფასები",
            "L1 მხარდაჭერა",
            "ლარში ანგარიშსწორება",
            "დღგ-ს ჩათვლით ინვოისი",
          ],
          highlight: false,
        },
        {
          name: "ბიზნესი",
          range: "50-249 მომხმარებელი",
          features: [
            "მოცულობითი ფასდაკლებები",
            "პრიორიტეტული მხარდაჭერა",
            "დედიკატებული საკონტაქტო პირი",
            "ლარში ანგარიშსწორება",
            "დღგ-ს ჩათვლით ინვოისი",
          ],
          highlight: true,
        },
        {
          name: "ენტერპრაისი",
          range: "250+ მომხმარებელი",
          features: [
            "ინდივიდუალური ფასები",
            "SLA ხელშეკრულება",
            "მიგრაცია ფასში შედის",
            "ანგარიშის მენეჯერი",
            "ლარში ანგარიშსწორება",
            "დღგ-ს ჩათვლით ინვოისი",
          ],
          highlight: false,
        },
      ]
    : [
        {
          name: "Standard",
          range: "5-49 users",
          features: [
            "Standard reseller pricing",
            "L1 support",
            "GEL billing",
            "VAT-inclusive invoices",
          ],
          highlight: false,
        },
        {
          name: "Business",
          range: "50-249 users",
          features: [
            "Volume discounts",
            "Priority support",
            "Dedicated contact person",
            "GEL billing",
            "VAT-inclusive invoices",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          range: "250+ users",
          features: [
            "Custom pricing",
            "SLA agreement",
            "Migration included",
            "Account manager",
            "GEL billing",
            "VAT-inclusive invoices",
          ],
          highlight: false,
        },
      ];

  const negotiateItems = isKa
    ? [
        "Microsoft CSP ფასების დონეები",
        "AWS commitment ფასდაკლებები (Savings Plans, Reserved Instances)",
        "Google Workspace წლიური commitment ფასები",
        "მრავალპროდუქტიანი პაკეტები",
      ]
    : [
        "Microsoft CSP pricing tiers",
        "AWS commitment discounts (Savings Plans, Reserved Instances)",
        "Google Workspace annual commitment pricing",
        "Multi-product bundles",
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

      {/* Value Proposition */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
            {isKa ? "რატომ ITC Georgia?" : "Why ITC Georgia?"}
          </h2>
          <ul className="space-y-3">
            {valueProps.map((vp) => (
              <li
                key={vp}
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
            {isKa ? "შეთავაზების პაკეტები" : "Offer Tiers"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
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
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
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
                    {isKa ? "შეთავაზების მოთხოვნა" : "Request Offer"}
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
            {isKa
              ? "რაზე შეგვიძლია მოლაპარაკება"
              : "What We Can Negotiate"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {negotiateItems.map((item) => (
              <div
                key={item}
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
            {isKa
              ? "მოითხოვეთ კორპორატიული შეთავაზება"
              : "Request a Corporate Offer"}
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            {isKa
              ? "დაგვიკავშირდით და მიიღეთ თქვენს ორგანიზაციაზე მორგებული შეთავაზება."
              : "Contact us and receive a tailored offer for your organization."}
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
