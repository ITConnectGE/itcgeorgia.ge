import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";

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
      ? "Windows Server Core ლიცენზირება — მოდელი და გაანგარიშება | ITC Georgia"
      : "Windows Server Core Licensing — Model & Calculation | ITC Georgia",
    description: isKa
      ? "Windows Server Core-Based ლიცენზირების მოდელი. Standard vs Datacenter შედარება. 16-ბირთვიანი და 24-ბირთვიანი სერვერების გამოთვლის მაგალითები."
      : "Windows Server Core-Based licensing model. Standard vs Datacenter comparison. Calculation examples for 16-core and 24-core servers.",
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

export default async function WindowsServerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  const relatedSlugs = ["virtualization", "cal", "rds"];
  const relatedPosts = getAllGuides(lang).filter((g) =>
    relatedSlugs.includes(g.slug)
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
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
              {ka ? "სერვერის ლიცენზირება" : "Server Licensing"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ka
                ? "Windows Server — Core-Based ლიცენზირების მოდელი"
                : "Windows Server — Core-Based Licensing Model"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
              {ka
                ? "Windows Server 2022/2025 იყენებს Core-Based ლიცენზირების მოდელს. ეს ნიშნავს, რომ ლიცენზია ეფუძნება სერვერის ფიზიკურ ბირთვებს (cores), და არა პროცესორების ან სერვერების რაოდენობას. გაითვალისწინეთ: ეს მოდელი მოქმედებს 2016 წლიდან და შეცვალა ძველი პროცესორზე დაფუძნებული სისტემა."
                : "Windows Server 2022/2025 uses a Core-Based licensing model. This means licensing is based on the physical cores in a server, not the number of processors or servers. Note: this model has been in effect since 2016, replacing the older processor-based system."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Rules ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "ძირითადი წესები" : "Core Rules"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                title: ka ? "მინიმუმ 16 ბირთვი თითო სერვერზე" : "Minimum 16 cores per physical server",
                desc: ka
                  ? "მიუხედავად ფაქტობრივი ბირთვების რაოდენობისა, ყველა ფიზიკურ სერვერს სჭირდება მინიმუმ 16-ბირთვიანი ლიცენზია. თუ სერვერს აქვს 4 ბირთვი, მაინც 16-ის ლიცენზია იყიდება."
                  : "Regardless of actual core count, every physical server requires a minimum 16-core license. If your server has only 4 cores, you still purchase 16 cores of licensing.",
              },
              {
                title: ka ? "იყიდება 2-ბირთვიანი პაკეტებით" : "Sold in 2-core packs",
                desc: ka
                  ? "ლიცენზიები ხელმისაწვდომია 2-ბირთვიან პაკეტებში. მინიმალური შეკვეთა არის 8 პაკეტი (8 × 2 = 16 ბირთვი). დამატებითი ბირთვები ემატება 2-ბირთვიანი ინკრემენტებით."
                  : "Licenses are available in 2-core packs. Minimum order is 8 packs (8 × 2 = 16 cores). Additional cores are added in 2-core increments.",
              },
              {
                title: ka ? "ყველა ფიზიკური ბირთვი უნდა იყოს ლიცენზირებული" : "All physical cores must be licensed",
                desc: ka
                  ? "სერვერის ყველა ფიზიკური ბირთვი უნდა იყოს დაფარული. Hyper-Threading ბირთვები არ ითვლება — მხოლოდ ფიზიკური ბირთვები. მაგალითად, 2-სოკეტიანი სერვერი 12-ბირთვიანი CPU-ებით = 24 ბირთვი ლიცენზირებისთვის."
                  : "Every physical core in the server must be covered. Hyper-Threading logical cores do not count — only physical cores. Example: a 2-socket server with 12-core CPUs = 24 cores to license.",
              },
              {
                title: ka ? "მინიმუმ 8 ბირთვი თითო პროცესორზე" : "Minimum 8 cores per processor",
                desc: ka
                  ? "თითოეულ ფიზიკურ პროცესორზე მინიმუმ 8 ბირთვი უნდა იყოს ლიცენზირებული. 2-სოკეტიან სერვერზე ეს ნიშნავს მინიმუმ 2 × 8 = 16 ბირთვს, რაც ემთხვევა სერვერის მინიმუმს."
                  : "Each physical processor must have at least 8 cores licensed. On a 2-socket server this means at least 2 × 8 = 16 cores, which matches the server minimum.",
              },
            ].map((rule) => (
              <div
                key={rule.title}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  {rule.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* Standard vs Datacenter */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "Standard vs Datacenter" : "Standard vs Datacenter"}
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
                    Datacenter
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: ka ? "ვირტუალური მანქანები (OSE)" : "Virtual Machines (OSEs)",
                    std: ka ? "2 VM თითო ლიცენზიაზე" : "2 VMs per license",
                    dc: ka ? "შეუზღუდავი" : "Unlimited",
                  },
                  {
                    f: ka ? "შენახვის რეპლიკა" : "Storage Replica",
                    std: ka ? "1 პარტნიორი, 2TB" : "1 partner, 2TB",
                    dc: ka ? "შეუზღუდავი" : "Unlimited",
                  },
                  {
                    f: "Shielded VMs",
                    std: "✕",
                    dc: "✓",
                  },
                  {
                    f: "Software-Defined Networking (SDN)",
                    std: "✕",
                    dc: "✓",
                  },
                  {
                    f: "Storage Spaces Direct (S2D)",
                    std: "✕",
                    dc: "✓",
                  },
                  {
                    f: ka ? "სავარაუდო ფასი (16-core)" : "Approximate price (16-core)",
                    std: "~$1,070",
                    dc: "~$6,200",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.f}</td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.std}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-medium bg-navy-50/30">
                      {row.dc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Calculation example */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-3">
              {ka ? "გაანგარიშების მაგალითი" : "Calculation Example"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "სცენარი: 2-სოკეტიანი სერვერი, თითოეულ სოკეტში 8-ბირთვიანი CPU (სულ 16 ფიზიკური ბირთვი)."
                : "Scenario: 2-socket server with 8-core CPUs in each socket (16 physical cores total)."}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p className="text-slate-600">
                  {ka
                    ? "ფიზიკური ბირთვები: 2 სოკეტი × 8 ბირთვი = 16 ბირთვი"
                    : "Physical cores: 2 sockets × 8 cores = 16 cores"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p className="text-slate-600">
                  {ka
                    ? "მინიმუმი: 16 ბირთვი (დაკმაყოფილებულია — ფაქტობრივი რაოდენობა = მინიმუმი)"
                    : "Minimum requirement: 16 cores (satisfied — actual count equals minimum)"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <p className="text-slate-600">
                  {ka
                    ? "საჭირო 2-ბირთვიანი პაკეტები: 16 ÷ 2 = 8 პაკეტი"
                    : "Required 2-core packs: 16 ÷ 2 = 8 packs"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <p className="text-slate-600">
                  {ka
                    ? "Standard ედიშენით: ამ ლიცენზიით შეგიძლიათ 2 Windows Server VM-ის გაშვება + 1 ფიზიკური ჰოსტი (მხოლოდ Hyper-V როლით)"
                    : "With Standard edition: this license permits running 2 Windows Server VMs + 1 physical host (running only the Hyper-V role)"}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900">
                {ka
                  ? "მაგალითი 24-ბირთვიანი სერვერისთვის:"
                  : "Example for a 24-core server:"}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {ka
                  ? "2 სოკეტი × 12 ბირთვი = 24 ბირთვი → 24 ÷ 2 = 12 პაკეტი საჭირო (არა 8, რადგან ფაქტობრივი ბირთვები აჭარბებს მინიმუმ 16-ს)."
                  : "2 sockets × 12 cores = 24 cores → 24 ÷ 2 = 12 packs needed (not 8, because actual cores exceed the 16-core minimum)."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      <RelatedPosts posts={relatedPosts} lang={lang} />
    </>
  );
}
