import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";
import { CALIllustration } from "@/components/illustrations/guides";

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
      ? "CAL — Client Access License გზამკვლევი | ITC Georgia"
      : "CAL — Client Access License Guide | ITC Georgia",
    description: isKa
      ? "User CAL vs Device CAL შედარება. როდის რომელი გამოვიყენოთ, BYOD და დისტანციური მუშაობის სცენარები. RDS CAL მიმოხილვა."
      : "User CAL vs Device CAL comparison. When to use which, BYOD and remote work scenarios. RDS CAL overview.",
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

export default async function CALPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  const relatedSlugs = ["rds", "windows-server", "sql-server"];
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
                {ka ? "კლიენტის ლიცენზია" : "Client Licensing"}
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                {ka
                  ? "CAL — Client Access License"
                  : "CAL — Client Access License"}
              </h1>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
                {ka
                  ? "Windows Server-ზე წვდომის მქონე ყველა მომხმარებელს ან მოწყობილობას სჭირდება Client Access License (CAL). ეს ცალკე ლიცენზიაა სერვერის ლიცენზიისგან — სერვერის ლიცენზია იძლევა სერვერის გაშვების უფლებას, CAL კი — მასთან წვდომის უფლებას."
                  : "Every user or device accessing Windows Server needs a Client Access License (CAL). This is separate from the server license — the server license grants the right to run the server, while the CAL grants the right to access it."}
              </p>
            </div>
            <div className="hidden lg:block">
              <CALIllustration className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAL Types ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "CAL-ის ტიპები" : "CAL Types"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {ka ? "User CAL (მომხმარებლის CAL)" : "User CAL"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "მინიჭებულია კონკრეტულ მომხმარებელზე. ამ მომხმარებელს შეუძლია სერვერთან წვდომა ნებისმიერი მოწყობილობიდან — კომპიუტერი, ტელეფონი, ტაბლეტი, სახლიდან ან ოფისიდან."
                  : "Assigned to a specific user. That user can access the server from any device — PC, phone, tablet, from home or office."}
              </p>
              <p className="text-xs font-semibold text-slate-700 mb-2">
                {ka ? "საუკეთესოა:" : "Best for:"}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "თანამშრომელს აქვს 2+ მოწყობილობა",
                      "BYOD (Bring Your Own Device) გარემო",
                      "დისტანციური მუშაობა",
                      "მობილური თანამშრომლები",
                    ]
                  : [
                      "Employees with 2+ devices",
                      "BYOD (Bring Your Own Device) environments",
                      "Remote work scenarios",
                      "Mobile workforce",
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
                {ka ? "Device CAL (მოწყობილობის CAL)" : "Device CAL"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {ka
                  ? "მინიჭებულია კონკრეტულ მოწყობილობაზე. ამ მოწყობილობიდან ნებისმიერ მომხმარებელს შეუძლია სერვერთან წვდომა — იდეალურია ცვლაში მომუშავეებისთვის."
                  : "Assigned to a specific device. Any user can access the server from that device — ideal for shift workers sharing equipment."}
              </p>
              <p className="text-xs font-semibold text-slate-700 mb-2">
                {ka ? "საუკეთესოა:" : "Best for:"}
              </p>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "ცვლაში მუშაობა (რამდენიმე მომხმარებელი ერთ მოწყობილობაზე)",
                      "კიოსკები და საჯარო ტერმინალები",
                      "საერთო სამუშაო სადგურები",
                      "კომპიუტერული ლაბორატორიები",
                    ]
                  : [
                      "Shift work (multiple users on one device)",
                      "Kiosks and public terminals",
                      "Shared workstations",
                      "Computer labs",
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

          {/* Comparison table */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "User CAL vs Device CAL შედარება" : "User CAL vs Device CAL Comparison"}
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "მახასიათებელი" : "Feature"}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-azure-600 bg-navy-50/50 rounded-tl-lg">
                    User CAL
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">
                    Device CAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: ka ? "მინიჭებულია" : "Assigned to",
                    user: ka ? "მომხმარებელზე" : "A user",
                    device: ka ? "მოწყობილობაზე" : "A device",
                  },
                  {
                    f: ka ? "წვდომა" : "Access from",
                    user: ka ? "ნებისმიერი მოწყობილობიდან" : "Any device",
                    device: ka ? "მხოლოდ ამ მოწყობილობიდან" : "Only this device",
                  },
                  {
                    f: ka ? "გადატანა" : "Reassignment",
                    user: ka ? "სხვა მომხმარებელზე (90 დღეში)" : "To another user (90-day min.)",
                    device: ka ? "სხვა მოწყობილობაზე (90 დღეში)" : "To another device (90-day min.)",
                  },
                  {
                    f: ka ? "BYOD სცენარი" : "BYOD scenario",
                    user: ka ? "იდეალური" : "Ideal",
                    device: ka ? "არაეფექტური" : "Inefficient",
                  },
                  {
                    f: ka ? "ცვლაში მუშაობა" : "Shift work",
                    user: ka ? "არაეფექტური" : "Inefficient",
                    device: ka ? "იდეალური" : "Ideal",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.f}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-medium bg-navy-50/30">
                      {row.user}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.device}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RDS CAL mention */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              {ka ? "RDS CAL — Remote Desktop Services" : "RDS CAL — Remote Desktop Services"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {ka
                ? "თუ მომხმარებლები იყენებენ Remote Desktop Services-ს (RemoteApp, სამუშაო მაგიდა RDP-ით, VDI), Windows Server CAL-ის გარდა საჭიროა დამატებითი RDS CAL. ეს არის ცალკე ლიცენზია, რომელიც ემატება ძირითად CAL-ს."
                : "If users access Remote Desktop Services (RemoteApp, full desktop via RDP, VDI), an additional RDS CAL is required on top of the Windows Server CAL. This is a separate license that stacks on top of the base CAL."}
            </p>
            <Link
              href={`/${lang}/guides/rds`}
              className="inline-flex items-center gap-1 text-sm font-medium text-azure-600 hover:text-azure-700 transition-colors"
            >
              {ka ? "RDS ლიცენზირების სრული გზამკვლევი" : "Full RDS Licensing Guide"}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      <RelatedPosts posts={relatedPosts} lang={lang} />
    </>
  );
}
