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
      ? "Windows და Windows Server ლიცენზირების გზამკვლევი | ITC Georgia"
      : "Windows & Windows Server Licensing Guide | ITC Georgia",
    description: isKa
      ? "დეტალური გზამკვლევი Windows Desktop, Windows Server, CAL და SQL Server ლიცენზირების შესახებ. Core-based ლიცენზირება, ვირტუალიზაციის უფლებები და სწორი ლიცენზიის შერჩევა."
      : "Comprehensive guide to Windows Desktop, Windows Server, CAL, and SQL Server licensing. Core-based licensing, virtualization rights, and choosing the right license.",
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

export default async function WindowsLicensingGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;
  const ka = lang === "ka";

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {ka ? "გზამკვლევი" : "Guide"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ka
                ? "Windows და Windows Server ლიცენზირების გზამკვლევი"
                : "Windows & Windows Server Licensing Guide"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
              {ka
                ? "ეს გზამკვლევი დაგეხმარებათ გაიგოთ Microsoft Windows-ის ლიცენზირების მოდელები — Desktop-იდან Server-ამდე, ვირტუალიზაციიდან CAL-ებამდე. შეისწავლეთ რა ლიცენზიები სჭირდება თქვენს ორგანიზაციას და როგორ ოპტიმიზირდეთ ხარჯები."
                : "This guide helps you understand Microsoft Windows licensing models — from Desktop to Server, virtualization to CALs. Learn what licenses your organization needs and how to optimize costs."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Table of Contents ── */}
      <section className="py-10 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {ka ? "სარჩევი" : "Table of Contents"}
          </p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { href: "#desktop", label: ka ? "Windows Desktop ლიცენზირება" : "Windows Desktop Licensing" },
              { href: "#server", label: ka ? "Windows Server ლიცენზირების მოდელი" : "Windows Server Licensing Model" },
              { href: "#virtualization", label: ka ? "ვირტუალიზაციის უფლებები" : "Virtualization Rights" },
              { href: "#cal", label: ka ? "CAL — Client Access License" : "CAL — Client Access License" },
              { href: "#sql", label: ka ? "SQL Server ლიცენზირება" : "SQL Server Licensing" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-navy-600 hover:text-azure-600 transition-colors"
              >
                → {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §1  Windows Desktop Licensing
         ══════════════════════════════════════════════════ */}
      <section id="desktop" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "დესკტოპ ლიცენზირება" : "Desktop Licensing"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
            {ka
              ? "Windows 11 — ედიშენები და ლიცენზირების ტიპები"
              : "Windows 11 — Editions & License Types"}
          </h2>

          {/* Edition comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "Windows 11 Pro",
                desc: ka
                  ? "ბიზნეს მომხმარებლებისთვის ოპტიმალური არჩევანი. მოიცავს BitLocker-ს, Hyper-V-ს, Remote Desktop-ს, Group Policy მართვას და Windows Update for Business-ს. შესაფერისია 300-მდე მომხმარებლის ორგანიზაციებისთვის."
                  : "The go-to choice for business users. Includes BitLocker, Hyper-V, Remote Desktop, Group Policy management, and Windows Update for Business. Suited for organizations up to ~300 users.",
                features: ka
                  ? ["BitLocker დაშიფვრა", "Hyper-V ვირტუალიზაცია", "Remote Desktop host", "Group Policy მხარდაჭერა", "Windows Update for Business"]
                  : ["BitLocker encryption", "Hyper-V virtualization", "Remote Desktop host", "Group Policy support", "Windows Update for Business"],
              },
              {
                title: "Windows 11 Enterprise",
                desc: ka
                  ? "Pro-ს ყველაფერი + გაფართოებული უსაფრთხოება და მართვა. მოიცავს Credential Guard-ს, Application Guard-ს, AppLocker-ს და DirectAccess-ს. ხელმისაწვდომია მხოლოდ Volume Licensing-ით ან Microsoft 365 E3/E5 გამოწერით."
                  : "Everything in Pro plus advanced security and management. Includes Credential Guard, Application Guard, AppLocker, and DirectAccess. Available only through Volume Licensing or Microsoft 365 E3/E5 subscriptions.",
                features: ka
                  ? ["Credential Guard", "Application Guard (MDAG)", "AppLocker / App Control", "DirectAccess", "Windows Defender ATP (E5)"]
                  : ["Credential Guard", "Application Guard (MDAG)", "AppLocker / App Control", "DirectAccess", "Windows Defender ATP (E5)"],
              },
              {
                title: "Windows 11 Education",
                desc: ka
                  ? "Enterprise-ს იდენტური ფუნქციონალი, განკუთვნილი საგანმანათლებლო დაწესებულებებისთვის. ხელმისაწვდომია სპეციალური აკადემიური ფასით. საჭიროებს Academic Volume License შეთანხმებას."
                  : "Functionally identical to Enterprise, designed for educational institutions. Available at special academic pricing. Requires an Academic Volume License agreement.",
                features: ka
                  ? ["Enterprise-ს სრული ფუნქციონალი", "აკადემიური ფასი", "Set Up School PCs აპი", "Take a Test ფუნქცია", "Autopilot თვითგანლაგება"]
                  : ["Full Enterprise functionality", "Academic pricing", "Set Up School PCs app", "Take a Test feature", "Autopilot self-deploying"],
              },
            ].map((ed) => (
              <div
                key={ed.title}
                className="border border-slate-200 rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {ed.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {ed.desc}
                </p>
                <ul className="space-y-2">
                  {ed.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-500">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* License types */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "ლიცენზიის ტიპები: OEM vs Retail vs Volume" : "License Types: OEM vs Retail vs Volume"}
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "მახასიათებელი" : "Feature"}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">OEM</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">Retail (FPP)</th>
                  <th className="text-center py-3 px-4 font-medium text-azure-600 bg-navy-50/50 rounded-t-lg">
                    Volume (VL)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: ka ? "მიბმა მოწყობილობასთან" : "Tied to device",
                    oem: ka ? "დიახ" : "Yes",
                    retail: ka ? "არა" : "No",
                    vl: ka ? "არა" : "No",
                  },
                  {
                    f: ka ? "გადატანა სხვა PC-ზე" : "Transfer to another PC",
                    oem: "✕",
                    retail: "✓",
                    vl: "✓",
                  },
                  {
                    f: ka ? "Downgrade უფლება" : "Downgrade rights",
                    oem: ka ? "შეზღუდული" : "Limited",
                    retail: "✕",
                    vl: "✓",
                  },
                  {
                    f: ka ? "რეიმაჟინგ უფლება" : "Reimaging rights",
                    oem: "✕",
                    retail: "✕",
                    vl: "✓",
                  },
                  {
                    f: ka ? "მინიმალური რაოდენობა" : "Minimum quantity",
                    oem: "1",
                    retail: "1",
                    vl: "5+",
                  },
                  {
                    f: ka ? "ფასი" : "Price",
                    oem: ka ? "ყველაზე დაბალი" : "Lowest",
                    retail: ka ? "ყველაზე მაღალი" : "Highest",
                    vl: ka ? "საშუალო (მასშტაბით)" : "Mid (at scale)",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.f}</td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.oem}</td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.retail}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-medium bg-navy-50/30">
                      {row.vl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* M365 upgrade rights */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              {ka
                ? "Microsoft 365 E3/E5 — Windows Enterprise Upgrade უფლებები"
                : "Microsoft 365 E3/E5 — Windows Enterprise Upgrade Rights"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {ka
                ? "Microsoft 365 E3 და E5 გამოწერები მოიცავს Windows Enterprise-ზე განახლების უფლებას. ეს ნიშნავს, რომ თუ თქვენს მოწყობილობას აქვს Windows Pro ლიცენზია (OEM ან Volume), შეგიძლიათ განაახლოთ Enterprise-ზე დამატებითი ლიცენზიის შეძენის გარეშე. ეს არის ყველაზე ეფექტური გზა Enterprise ფუნქციონალის მისაღებად, რადგან M365 E3 ასევე მოიცავს Office 365, EMS და სხვა სერვისებს."
                : "Microsoft 365 E3 and E5 subscriptions include Windows Enterprise upgrade rights. This means if your device has a qualifying Windows Pro license (OEM or Volume), you can upgrade to Enterprise at no additional license cost. This is the most cost-effective path to Enterprise features, since M365 E3 also includes Office 365, EMS, and other services."}
            </p>
            <ul className="space-y-2">
              {(ka
                ? [
                    "M365 E3: Windows Enterprise E3 + Office 365 E3 + EMS E3",
                    "M365 E5: Windows Enterprise E5 + Office 365 E5 + EMS E5 + Defender ATP",
                    "საბაზისო მოთხოვნა: მოწყობილობას უნდა ჰქონდეს Windows Pro ლიცენზია",
                    "თითო მომხმარებელს შეუძლია 5 მოწყობილობაზე გააქტიურება",
                  ]
                : [
                    "M365 E3: Windows Enterprise E3 + Office 365 E3 + EMS E3",
                    "M365 E5: Windows Enterprise E5 + Office 365 E5 + EMS E5 + Defender ATP",
                    "Prerequisite: device must have a qualifying Windows Pro license",
                    "Each user can activate on up to 5 devices",
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
      </section>

      {/* ══════════════════════════════════════════════════
          §2  Windows Server Licensing Model
         ══════════════════════════════════════════════════ */}
      <section id="server" className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "სერვერის ლიცენზირება" : "Server Licensing"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            {ka
              ? "Windows Server — Core-Based ლიცენზირების მოდელი"
              : "Windows Server — Core-Based Licensing Model"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-10">
            {ka
              ? "Windows Server 2022/2025 იყენებს Core-Based ლიცენზირების მოდელს. ეს ნიშნავს, რომ ლიცენზია ეფუძნება სერვერის ფიზიკურ ბირთვებს (cores), და არა პროცესორების ან სერვერების რაოდენობას. გაითვალისწინეთ: ეს მოდელი მოქმედებს 2016 წლიდან და შეცვალა ძველი პროცესორზე დაფუძნებული სისტემა."
              : "Windows Server 2022/2025 uses a Core-Based licensing model. This means licensing is based on the physical cores in a server, not the number of processors or servers. Note: this model has been in effect since 2016, replacing the older processor-based system."}
          </p>

          {/* Core rules */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "ძირითადი წესები" : "Core Rules"}
          </h3>
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

      {/* ══════════════════════════════════════════════════
          §3  Virtualization Rights
         ══════════════════════════════════════════════════ */}
      <section id="virtualization" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "ვირტუალიზაცია" : "Virtualization"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
            {ka
              ? "ვირტუალიზაციის უფლებები და VM ლიცენზირება"
              : "Virtualization Rights & VM Licensing"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Standard */}
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                Standard Edition
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "Standard ლიცენზია (ყველა ბირთვის დაფარვით) გაძლევთ უფლებას გაუშვათ 2 ვირტუალური მანქანა (OSE — Operating System Environment). ფიზიკურ ჰოსტზე შეგიძლიათ გაუშვათ მხოლოდ Hyper-V როლი — სხვა workload-ების გაშვება ფიზიკურ ჰოსტზე მოითხოვს მესამე OSE-ს ლიცენზირებას."
                  : "A Standard license (covering all cores) entitles you to run 2 Virtual Machines (OSEs — Operating System Environments). The physical host may only run the Hyper-V role — running other workloads on the physical host requires licensing a third OSE."}
              </p>
              <ul className="space-y-2 mb-4">
                {(ka
                  ? [
                      "2 VM (OSE) თითო ლიცენზირებულ სერვერზე",
                      "ფიზიკური ჰოსტი — მხოლოდ Hyper-V როლი",
                      "მეტი VM-ისთვის — დამატებითი Standard ლიცენზიის stacking",
                      "მაგ: 6 VM-ისთვის საჭიროა 3× Standard ლიცენზია",
                    ]
                  : [
                      "2 VMs (OSEs) per licensed server",
                      "Physical host — Hyper-V role only",
                      "For more VMs — \"stack\" additional Standard licenses",
                      "E.g.: 6 VMs require 3× Standard licenses",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Datacenter */}
            <div className="border border-azure-200 bg-azure-50/30 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                Datacenter Edition
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "Datacenter ლიცენზია (ყველა ბირთვის დაფარვით) გაძლევთ შეუზღუდავი რაოდენობის Windows Server VM-ების გაშვების უფლებას ერთ ფიზიკურ სერვერზე. ეს არის ოპტიმალური არჩევანი მაღალი სიმკვრივის ვირტუალიზაციის სცენარებისთვის."
                  : "A Datacenter license (covering all cores) entitles you to run an unlimited number of Windows Server VMs on a single physical server. This is the optimal choice for high-density virtualization scenarios."}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "შეუზღუდავი Windows Server VM-ები",
                      "Shielded VMs მხარდაჭერა",
                      "Software-Defined Networking",
                      "Storage Spaces Direct (HCI სცენარები)",
                    ]
                  : [
                      "Unlimited Windows Server VMs",
                      "Shielded VMs support",
                      "Software-Defined Networking",
                      "Storage Spaces Direct (HCI scenarios)",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Break-even */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <h3 className="text-base font-semibold text-slate-900 mb-3">
              {ka
                ? "როდის ავირჩიოთ Datacenter? — Break-Even ანალიზი"
                : "When to Choose Datacenter? — Break-Even Analysis"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "Datacenter ედიშენი დაახლოებით 6-ჯერ ძვირია Standard-ზე (16-ბირთვიანი ლიცენზიისთვის ~$6,200 vs ~$1,070). ვინაიდან Standard ლიცენზია იძლევა 2 VM-ის უფლებას, break-even წერტილი არის:"
                : "Datacenter edition costs roughly 6× more than Standard (for 16-core license ~$6,200 vs ~$1,070). Since each Standard license grants 2 VM rights, the break-even point is:"}
            </p>
            <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-slate-700">
                {ka
                  ? "$6,200 ÷ $1,070 ≈ 5.8 Standard ლიცენზია → 5.8 × 2 VM = ~12 VM"
                  : "$6,200 ÷ $1,070 ≈ 5.8 Standard licenses → 5.8 × 2 VMs = ~12 VMs"}
              </p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ka
                ? "პრაქტიკული რეკომენდაცია: თუ ერთ ფიზიკურ სერვერზე 13 ან მეტი Windows Server VM გეგმავთ, Datacenter ედიშენი უფრო ეკონომიურია. 12 ან ნაკლები VM-ისთვის Standard-ის stacking უფრო იაფია. ასევე გაითვალისწინეთ, რომ Datacenter მოიცავს დამატებით ფუნქციებს (Shielded VMs, SDN, S2D), რომლებმაც შეიძლება გადაწონოს ფასის სხვაობა."
                : "Practical recommendation: if you plan to run 13 or more Windows Server VMs on a single physical server, Datacenter edition is more cost-effective. For 12 or fewer VMs, stacking Standard licenses is cheaper. Also consider that Datacenter includes additional features (Shielded VMs, SDN, S2D) that may justify the price difference on their own."}
            </p>
          </div>

          {/* Hypervisor note */}
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              {ka
                ? "VMware და სხვა ჰიპერვიზორები"
                : "VMware & Other Hypervisors"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ka
                ? "Windows Server ლიცენზირების წესები ერთნაირად მოქმედებს ნებისმიერ ჰიპერვიზორზე — Hyper-V, VMware ESXi, KVM, Xen და სხვა. ვირტუალიზაციის უფლებები (2 VM Standard-ით, შეუზღუდავი Datacenter-ით) ვრცელდება ჰიპერვიზორის მიუხედავად. თუმცა, VMware-ის გამოყენებისას ფიზიკურ ჰოსტზე Hyper-V როლის უფასო უფლება არ გამოიყენება, რადგან ჰოსტი VMware ESXi-ს უშვებს."
                : "Windows Server licensing rules apply identically across all hypervisors — Hyper-V, VMware ESXi, KVM, Xen, etc. Virtualization rights (2 VMs with Standard, unlimited with Datacenter) apply regardless of hypervisor. However, when using VMware, the \"free\" physical host Hyper-V role right does not apply, since the host runs VMware ESXi instead."}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §4  CAL — Client Access License
         ══════════════════════════════════════════════════ */}
      <section id="cal" className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "კლიენტის წვდომა" : "Client Access"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            {ka
              ? "CAL — Client Access License"
              : "CAL — Client Access License"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-10">
            {ka
              ? "Windows Server ლიცენზიის გარდა, ყველა მომხმარებელს ან მოწყობილობას, რომელიც Windows Server-ზე წვდება, სჭირდება Client Access License (CAL). ეს ცალკე ლიცენზიაა და არ შედის სერვერის ლიცენზიაში."
              : "In addition to the Windows Server license, every user or device that accesses Windows Server needs a Client Access License (CAL). This is a separate license and is not included with the server license."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* User CAL */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                User CAL
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "User CAL მიენიჭება კონკრეტულ მომხმარებელს და აძლევს მას უფლებას, წვდომა ჰქონდეს ნებისმიერ Windows Server-ზე ნებისმიერი მოწყობილობიდან. ოპტიმალურია, როდესაც თანამშრომლები იყენებენ რამდენიმე მოწყობილობას (ლეპტოპი, ტელეფონი, ტაბლეტი)."
                  : "A User CAL is assigned to a specific user and allows them to access any Windows Server from any device. Optimal when employees use multiple devices (laptop, phone, tablet)."}
              </p>
              <p className="text-xs font-semibold text-azure-600 uppercase tracking-wider mb-2">
                {ka ? "როდის გამოვიყენოთ" : "When to use"}
              </p>
              <ul className="space-y-1.5">
                {(ka
                  ? [
                      "თანამშრომლები იყენებენ 2+ მოწყობილობას",
                      "BYOD (Bring Your Own Device) პოლიტიკა",
                      "დისტანციური მუშაობა სხვადასხვა მოწყობილობიდან",
                    ]
                  : [
                      "Employees use 2+ devices each",
                      "BYOD (Bring Your Own Device) policy",
                      "Remote work from various devices",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Device CAL */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Device CAL
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "Device CAL მიენიჭება კონკრეტულ მოწყობილობას და აძლევს ნებისმიერ მომხმარებელს უფლებას, ამ მოწყობილობიდან წვდომა ჰქონდეს Windows Server-ზე. ოპტიმალურია, როდესაც ერთ მოწყობილობას ბევრი მომხმარებელი იყენებს."
                  : "A Device CAL is assigned to a specific device and allows any user to access Windows Server from that device. Optimal when multiple users share a single device."}
              </p>
              <p className="text-xs font-semibold text-azure-600 uppercase tracking-wider mb-2">
                {ka ? "როდის გამოვიყენოთ" : "When to use"}
              </p>
              <ul className="space-y-1.5">
                {(ka
                  ? [
                      "ცვლაში მუშაობა (ერთ PC-ს ბევრი მომხმარებელი)",
                      "კიოსკები, საკლასო ოთახები",
                      "საწარმოო გარემო საერთო სამუშაო სადგურებით",
                    ]
                  : [
                      "Shift work (many users per PC)",
                      "Kiosks, classrooms",
                      "Manufacturing with shared workstations",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RDS CAL */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              {ka
                ? "RDS CAL — Remote Desktop Services"
                : "RDS CAL — Remote Desktop Services"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "თუ თანამშრომლები Remote Desktop Services-ს (სესიაზე დაფუძნებულ დესკტოპებს ან RemoteApp-ს) იყენებენ, Windows Server CAL-ის გარდა, საჭიროა ცალკე RDS CAL. RDS CAL ასევე არსებობს User და Device ვარიანტებში. ეს არ ეხება ადმინისტრაციულ RDP კავშირებს (2 კონკურენტული სესია ყოველთვის ხელმისაწვდომია ადმინისტრირებისთვის)."
                : "If employees use Remote Desktop Services (session-based desktops or RemoteApp), a separate RDS CAL is required in addition to the Windows Server CAL. RDS CALs also come in User and Device variants. This does not apply to administrative RDP connections (2 concurrent sessions are always available for administration)."}
            </p>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900 mb-1">
                {ka ? "მაგალითი: 50 მომხმარებელი RDS-ით" : "Example: 50 users with RDS"}
              </p>
              <p className="text-sm text-slate-600">
                {ka
                  ? "საჭიროა: Windows Server ლიცენზია (core-based) + 50 Windows Server User CAL + 50 RDS User CAL. სულ 3 ტიპის ლიცენზია."
                  : "Required: Windows Server license (core-based) + 50 Windows Server User CALs + 50 RDS User CALs. Three license types in total."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          §5  SQL Server Licensing (brief)
         ══════════════════════════════════════════════════ */}
      <section id="sql" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "მონაცემთა ბაზა" : "Database"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            {ka
              ? "SQL Server ლიცენზირება — მოკლე მიმოხილვა"
              : "SQL Server Licensing — Brief Overview"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-10">
            {ka
              ? "SQL Server გთავაზობთ ორ ლიცენზირების მოდელს. სწორი არჩევანი დამოკიდებულია მომხმარებლების რაოდენობაზე, წვდომის ტიპზე და სერვერის სიმძლავრეზე."
              : "SQL Server offers two licensing models. The right choice depends on the number of users, access patterns, and server capacity."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Core-based */}
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {ka ? "Core-Based მოდელი" : "Core-Based Model"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "მსგავსი Windows Server-ის მოდელისა — ლიცენზირება ფიზიკური ბირთვების მიხედვით, მინიმუმ 4 core პაკეტი (გაყიდვა 2-ბირთვიანი პაკეტებით). CAL არ არის საჭირო. ოპტიმალურია ბევრი ან უცნობი რაოდენობის მომხმარებლისთვის, ინტერნეტ-facing აპლიკაციებისთვის."
                  : "Similar to Windows Server model — licensing by physical cores, minimum 4 core packs (sold in 2-core packs). No CALs needed. Optimal for many or unknown number of users, internet-facing applications."}
              </p>
              <ul className="space-y-1.5">
                {(ka
                  ? ["CAL არ სჭირდება", "მინიმუმ 4 ბირთვი", "იყიდება 2-ბირთვიანი პაკეტებით", "Enterprise: შეუზღუდავი ვირტუალიზაცია"]
                  : ["No CALs needed", "Minimum 4 cores", "Sold in 2-core packs", "Enterprise: unlimited virtualization"]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Server + CAL */}
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {ka ? "Server + CAL მოდელი" : "Server + CAL Model"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {ka
                  ? "იყიდება სერვერის ლიცენზია + User ან Device CAL-ები. უფრო იაფია მცირე, ცნობილი რაოდენობის მომხმარებლისთვის. ხელმისაწვდომია მხოლოდ SQL Server Standard ედიშენისთვის."
                  : "Purchase a server license plus User or Device CALs. More affordable for a small, known number of users. Available only for SQL Server Standard edition."}
              </p>
              <ul className="space-y-1.5">
                {(ka
                  ? ["მხოლოდ Standard ედიშენი", "სერვერის ლიცენზია + CAL-ები", "ეკონომიური მცირე გუნდებისთვის", "არ შეიძლება Internet-facing სცენარებში"]
                  : ["Standard edition only", "Server license + CALs", "Cost-effective for small teams", "Cannot be used for internet-facing scenarios"]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SQL editions */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "მახასიათებელი" : "Feature"}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">
                    SQL Standard
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-azure-600 bg-navy-50/50 rounded-t-lg">
                    SQL Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: ka ? "მაქს. მეხსიერება" : "Max memory",
                    std: "128 GB",
                    ent: "OS max",
                  },
                  {
                    f: ka ? "მაქს. ბირთვები" : "Max cores",
                    std: "24 cores",
                    ent: "OS max",
                  },
                  {
                    f: "Always On AG",
                    std: ka ? "ბაზისური (2 რეპლიკა)" : "Basic (2 replicas)",
                    ent: ka ? "სრული (8 რეპლიკა)" : "Full (8 replicas)",
                  },
                  {
                    f: ka ? "ლიცენზირების მოდელი" : "Licensing models",
                    std: ka ? "Core ან Server+CAL" : "Core or Server+CAL",
                    ent: ka ? "მხოლოდ Core" : "Core only",
                  },
                  {
                    f: ka ? "ვირტუალიზაცია (Core ლიც.)" : "Virtualization (Core lic.)",
                    std: ka ? "ლიცენზირებული ბირთვებით" : "Per licensed cores",
                    ent: ka ? "შეუზღუდავი VM" : "Unlimited VMs",
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
         ══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {ka
              ? "ITC Georgia გეხმარებით სწორი ლიცენზიის შერჩევაში"
              : "ITC Georgia Helps You Choose the Right License"}
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-lg mx-auto">
            {ka
              ? "ჩვენი გუნდი დაგეხმარებათ Windows, Windows Server, SQL Server და Microsoft 365 ლიცენზირების ოპტიმიზაციაში. მიიღეთ ინვოისი ლარში, დღგ-ს ჩათვლით."
              : "Our team will help you optimize Windows, Windows Server, SQL Server, and Microsoft 365 licensing. Get invoices in GEL, VAT included."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${p}/contact`}
              className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              {ka ? "კონსულტაციის მოთხოვნა" : "Request a Consultation"}
            </Link>
            <Link
              href={`${p}/services`}
              className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              {ka ? "სერვისების ნახვა" : "View Services"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
