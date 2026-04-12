import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";
import { SQLServerIllustration } from "@/components/illustrations/guides";

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
      ? "SQL Server ლიცენზირება — Core vs Server+CAL | ITC Georgia"
      : "SQL Server Licensing — Core vs Server+CAL | ITC Georgia",
    description: isKa
      ? "SQL Server Core-based vs Server+CAL მოდელები. Standard vs Enterprise შედარება. როდის რომელი მოდელი გამოვიყენოთ."
      : "SQL Server Core-based vs Server+CAL models. Standard vs Enterprise comparison. When to use which model.",
  };
}

/* ─── tiny helper for check-mark lists ─── */
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

export default async function SQLServerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  const relatedSlugs = ["windows-server", "cal", "virtualization"];
  const relatedPosts = getAllGuides(lang).filter((g) =>
    relatedSlugs.includes(g.slug)
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Link
                href={`/${lang}/guides/windows-licensing`}
                className="inline-flex items-center gap-1 text-xs font-medium text-azure-600 hover:text-azure-700 transition-colors mb-4"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                {ka ? "ლიცენზირების გზამკვლევი" : "Licensing Guide"}
              </Link>
              <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
                {ka ? "მონაცემთა ბაზა" : "Database"}
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                {ka
                  ? "SQL Server — ლიცენზირების მოდელები"
                  : "SQL Server — Licensing Models"}
              </h1>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
                {ka
                  ? "SQL Server გთავაზობთ ორ ლიცენზირების მოდელს: Core-based და Server+CAL. სწორი მოდელის არჩევა დამოკიდებულია მომხმარებლების ტიპზე, რაოდენობასა და განლაგების სცენარზე."
                  : "SQL Server offers two licensing models: Core-based and Server+CAL. Choosing the right model depends on user type, count, and deployment scenario."}
              </p>
            </div>
            <div className="hidden lg:block">
              <SQLServerIllustration className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Licensing Models ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "ლიცენზირების მოდელები" : "Licensing Models"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {ka ? "Core-Based ლიცენზირება" : "Core-Based Licensing"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "ლიცენზია ეფუძნება სერვერის ფიზიკურ ბირთვებს. არ საჭიროებს CAL-ს — ნებისმიერ რაოდენობის მომხმარებელს შეუძლია წვდომა."
                  : "Licensing is based on the physical cores of the server. No CALs needed — any number of users can access."}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "მინიმუმ 4 ბირთვი თითო სერვერზე",
                      "იყიდება 2-ბირთვიან პაკეტებში",
                      "ყველა ფიზიკური ბირთვი უნდა იყოს ლიცენზირებული",
                      "CAL არ არის საჭირო",
                    ]
                  : [
                      "Minimum 4 cores per server",
                      "Sold in 2-core packs",
                      "All physical cores must be licensed",
                      "No CAL required",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {ka ? "Server+CAL ლიცენზირება" : "Server+CAL Licensing"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "ერთი სერვერის ლიცენზია + CAL თითოეულ მომხმარებელზე ან მოწყობილობაზე. უფრო ეფექტურია ცნობილი, მცირე რაოდენობის მომხმარებლებისთვის."
                  : "One server license + a CAL for each user or device. More cost-effective for known, smaller user counts."}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "ერთი სერვერის ლიცენზია თითო სერვერზე",
                      "User CAL ან Device CAL თითოეულ მომხმარებელზე/მოწყობილობაზე",
                      "ხელმისაწვდომია მხოლოდ Standard ედიშენისთვის",
                      "ეფექტური მცირე, შიდა განლაგებისთვის",
                    ]
                  : [
                      "One server license per server",
                      "User CAL or Device CAL per user/device",
                      "Available for Standard edition only",
                      "Cost-effective for small, internal deployments",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standard vs Enterprise */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "Standard vs Enterprise შედარება" : "Standard vs Enterprise Comparison"}
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full min-w-[550px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "მახასიათებელი" : "Feature"}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">Standard</th>
                  <th className="text-center py-3 px-4 font-medium text-azure-600 bg-navy-50/50 rounded-t-lg">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: ka ? "მაქს. მეხსიერება" : "Max memory",
                    std: "128 GB",
                    ent: ka ? "OS მაქსიმუმი" : "OS maximum",
                  },
                  {
                    f: ka ? "მაქს. მონაცემთა ბაზის ზომა" : "Max database size",
                    std: "524 PB",
                    ent: "524 PB",
                  },
                  {
                    f: "Always On Availability Groups",
                    std: ka ? "ბაზისური (2 რეპლიკა)" : "Basic (2 replicas)",
                    ent: ka ? "გაფართოებული (8 რეპლიკა)" : "Advanced (8 replicas)",
                  },
                  {
                    f: "In-Memory OLTP",
                    std: ka ? "შეზღუდული" : "Limited",
                    ent: ka ? "შეუზღუდავი" : "Unlimited",
                  },
                  {
                    f: "Columnstore",
                    std: "✓",
                    ent: "✓",
                  },
                  {
                    f: ka ? "მონაცემთა შეკუმშვა" : "Data Compression",
                    std: "✓",
                    ent: "✓",
                  },
                  {
                    f: "Transparent Data Encryption",
                    std: "✓",
                    ent: "✓",
                  },
                  {
                    f: ka ? "ლიცენზირების მოდელები" : "Licensing models",
                    std: ka ? "Core + Server+CAL" : "Core + Server+CAL",
                    ent: ka ? "მხოლოდ Core" : "Core only",
                  },
                  {
                    f: ka ? "სავარაუდო ფასი (2-core)" : "Approx. price (2-core)",
                    std: "~$3,900",
                    ent: "~$15,100",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.f}</td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.std}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-medium bg-navy-50/30">
                      {row.ent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* When to use which */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "როდის რომელი მოდელი გამოვიყენოთ?" : "When to Use Which Model?"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {ka ? "Core-Based — გამოიყენეთ როცა:" : "Core-Based — Use when:"}
              </h4>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "ვებ-აპლიკაციები და საჯარო სერვისები",
                      "მომხმარებლების რაოდენობა უცნობია ან ცვალებადია",
                      "გარე მომხმარებლები (კლიენტები, პარტნიორები)",
                      "Enterprise ედიშენი საჭიროა",
                      "მაღალი დატვირთვის სცენარები",
                    ]
                  : [
                      "Web applications and public-facing services",
                      "User count is unknown or variable",
                      "External users (clients, partners)",
                      "Enterprise edition is needed",
                      "High-load scenarios",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {ka ? "Server+CAL — გამოიყენეთ როცა:" : "Server+CAL — Use when:"}
              </h4>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "ცნობილი, შიდა მომხმარებლები",
                      "მცირე განლაგება (ნაკლები მომხმარებელი)",
                      "ბიუჯეტის ოპტიმიზაცია მცირე გუნდისთვის",
                      "Standard ედიშენი საკმარისია",
                      "მომხმარებლების რაოდენობა სტაბილურია",
                    ]
                  : [
                      "Known, internal users",
                      "Smaller deployments (fewer users)",
                      "Budget optimization for small teams",
                      "Standard edition is sufficient",
                      "User count is stable",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      <RelatedPosts posts={relatedPosts} lang={lang} />
    </>
  );
}
