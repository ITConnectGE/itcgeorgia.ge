import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";
import { WindowsDesktopIllustration } from "@/components/illustrations/guides";

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
      ? "Windows Desktop ლიცენზირება — ედიშენები და ტიპები | ITC Georgia"
      : "Windows Desktop Licensing — Editions & Types | ITC Georgia",
    description: isKa
      ? "Windows 11 Pro vs Enterprise vs Education შედარება. OEM, Retail და Volume Licensing ტიპები. Microsoft 365 Enterprise Upgrade უფლებები."
      : "Windows 11 Pro vs Enterprise vs Education comparison. OEM, Retail, and Volume Licensing types. Microsoft 365 Enterprise Upgrade rights.",
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

export default async function WindowsDesktopPage({
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
                {ka ? "დესკტოპ ლიცენზირება" : "Desktop Licensing"}
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                {ka
                  ? "Windows 11 — ედიშენები და ლიცენზირების ტიპები"
                  : "Windows 11 — Editions & License Types"}
              </h1>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
                {ka
                  ? "გაიგეთ Windows 11-ის სამი ძირითადი ედიშენის განსხვავებები და აირჩიეთ სწორი ლიცენზირების ტიპი — OEM, Retail ან Volume Licensing."
                  : "Understand the differences between the three main Windows 11 editions and choose the right license type — OEM, Retail, or Volume Licensing."}
              </p>
            </div>
            <div className="hidden lg:block">
              <WindowsDesktopIllustration className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Edition Comparison ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
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

      {/* ── Related Posts ── */}
      <RelatedPosts posts={relatedPosts} lang={lang} />
    </>
  );
}
