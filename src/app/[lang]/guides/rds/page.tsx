import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { RelatedPosts, getAllGuides } from "@/components/RelatedPosts";
import { RDSIllustration } from "@/components/illustrations/guides";

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
      ? "RDS — Remote Desktop Services ლიცენზირება | ITC Georgia"
      : "RDS — Remote Desktop Services Licensing | ITC Georgia",
    description: isKa
      ? "RDS CAL ტიპები, როდის არის საჭირო, Farm ლიცენზირება, External Connector და გამოთვლის მაგალითები."
      : "RDS CAL types, when required, Farm licensing, External Connector, and calculation examples.",
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

/* ─── X mark for "not required" lists ─── */
function XMark() {
  return (
    <svg
      className="w-4 h-4 text-slate-400 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default async function RDSPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";

  const relatedSlugs = ["cal", "windows-server", "virtualization"];
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
                {ka ? "დისტანციური წვდომა" : "Remote Access"}
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                {ka
                  ? "RDS — Remote Desktop Services ლიცენზირება"
                  : "RDS — Remote Desktop Services Licensing"}
              </h1>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
                {ka
                  ? "Remote Desktop Services საშუალებას აძლევს მომხმარებლებს სერვერზე დისტანციურად იმუშაონ. RDS მოითხოვს სპეციალურ ლიცენზიას — RDS CAL-ს — Windows Server CAL-ის გარდა. გაიგეთ როდის არის საჭირო, რა ტიპები არსებობს და როგორ გამოითვალოთ ღირებულება."
                  : "Remote Desktop Services lets users work remotely on a server. RDS requires a special license — the RDS CAL — in addition to the Windows Server CAL. Learn when it's required, what types exist, and how to calculate costs."}
              </p>
            </div>
            <div className="hidden lg:block">
              <RDSIllustration className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── When Required / Not Required ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "როდის არის RDS CAL საჭირო?" : "When Is an RDS CAL Required?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-emerald-700 mb-3">
                {ka ? "RDS CAL საჭიროა" : "RDS CAL IS Required"}
              </h4>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "სამუშაო მაგიდა RDP-ით (სრული დესკტოპი)",
                      "RemoteApp აპლიკაციები",
                      "VDI (Virtual Desktop Infrastructure)",
                      "2+ ერთდროული სესია სერვერზე",
                      "RD Web Access / RD Gateway",
                    ]
                  : [
                      "Full desktop via RDP (work desktop)",
                      "RemoteApp applications",
                      "VDI (Virtual Desktop Infrastructure)",
                      "2+ concurrent sessions on a server",
                      "RD Web Access / RD Gateway",
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
              <h4 className="text-sm font-semibold text-slate-500 mb-3">
                {ka ? "RDS CAL არ არის საჭირო" : "RDS CAL is NOT Required"}
              </h4>
              <ul className="space-y-2">
                {(ka
                  ? [
                      "ადმინისტრაციული RDP (2 სესია უფასოა)",
                      "Server Manager დისტანციური მართვა",
                      "ფაილების გაზიარება (SMB/File Shares)",
                      "Active Directory / DNS / DHCP სერვისები",
                      "Print Server, WSUS და სხვა როლები",
                    ]
                  : [
                      "Administrative RDP (2 sessions are free)",
                      "Server Manager remote management",
                      "File sharing (SMB/File Shares)",
                      "Active Directory / DNS / DHCP services",
                      "Print Server, WSUS, and other roles",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <XMark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RDS CAL Types */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "RDS CAL ტიპები" : "RDS CAL Types"}
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "მახასიათებელი" : "Feature"}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-azure-600 bg-navy-50/50 rounded-tl-lg">
                    RDS User CAL
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">
                    RDS Device CAL
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
                    f: ka ? "დისტანციური მუშაობა" : "Remote work",
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

          {/* Licensing Stack */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "სრული ლიცენზირების სტეკი" : "Complete Licensing Stack"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "RDS-ის სრულფასოვანი გამოყენებისთვის 3 ცალკეული ლიცენზია არის საჭირო:"
                : "Full RDS deployment requires 3 separate licenses:"}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium text-slate-900">Windows Server {ka ? "ლიცენზია" : "License"}</p>
                  <p className="text-slate-500">{ka ? "სერვერის გაშვების უფლება (Core-based)" : "Right to run the server (Core-based)"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium text-slate-900">Windows Server CAL</p>
                  <p className="text-slate-500">{ka ? "სერვერთან წვდომის უფლება (User ან Device)" : "Right to access the server (User or Device)"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-navy-100 text-navy-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium text-slate-900">RDS CAL</p>
                  <p className="text-slate-500">{ka ? "Remote Desktop სერვისის გამოყენების უფლება (User ან Device)" : "Right to use the Remote Desktop service (User or Device)"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculation example */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "გამოთვლის მაგალითი" : "Calculation Example"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "სცენარი: 30 მომხმარებელი, 1 სერვერი (2 პროცესორი, თითო 8 ბირთვი)."
                : "Scenario: 30 users, 1 server (2 processors, 8 cores each)."}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[450px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-400">
                      {ka ? "ლიცენზია" : "License"}
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-slate-400">
                      {ka ? "რაოდენობა" : "Quantity"}
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-slate-400">
                      {ka ? "განმარტება" : "Explanation"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      lic: "Windows Server Standard",
                      qty: ka ? "8 × 2-core პაკეტი" : "8 × 2-core packs",
                      note: ka ? "2 × 8 = 16 ბირთვი (მინ. 16)" : "2 × 8 = 16 cores (min. 16)",
                    },
                    {
                      lic: "Windows Server User CAL",
                      qty: "30",
                      note: ka ? "თითო მომხმარებელზე 1" : "1 per user",
                    },
                    {
                      lic: "RDS User CAL",
                      qty: "30",
                      note: ka ? "თითო მომხმარებელზე 1" : "1 per user",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-700">{row.lic}</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-medium">{row.qty}</td>
                      <td className="py-3 px-4 text-center text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RDS Farm */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "RDS Farm — მრავალსერვერული გარემო" : "RDS Farm — Multi-Server Environment"}
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {ka
                ? "RDS Farm არის რამდენიმე სერვერისგან შემდგარი კლასტერი, რომელიც ერთობლივად ემსახურება RDS მომხმარებლებს. Farm-ის ლიცენზირებისას გაითვალისწინეთ:"
                : "An RDS Farm is a cluster of multiple servers collectively serving RDS users. When licensing a Farm, keep in mind:"}
            </p>
            <ul className="space-y-2">
              {(ka
                ? [
                    "User CAL მუშაობს მთელ Farm-ში — მომხმარებელს ერთი CAL ყველა სერვერზე აძლევს წვდომას",
                    "ყველა სერვერს სჭირდება საკუთარი Windows Server ლიცენზია (Core-based)",
                    "Connection Broker, Web Access, Gateway — ყველა სერვერს სჭირდება ლიცენზია",
                    "Device CAL მიბმულია კონკრეტულ მოწყობილობაზე და ასევე მუშაობს Farm-ში",
                  ]
                : [
                    "User CAL works across the entire Farm — one CAL grants access to all servers",
                    "Each server needs its own Windows Server license (Core-based)",
                    "Connection Broker, Web Access, Gateway — all servers need licenses",
                    "Device CAL is tied to a specific device and also works across the Farm",
                  ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* External Connector */}
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            {ka ? "External Connector" : "External Connector"}
          </h3>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {ka
                ? "External Connector ლიცენზია განკუთვნილია გარე მომხმარებლებისთვის — კონტრაქტორები, კლიენტები, პარტნიორები. ერთი External Connector ლიცენზია თითო სერვერზე იძლევა შეუზღუდავი რაოდენობის გარე მომხმარებლების წვდომის უფლებას."
                : "The External Connector license is designed for external users — contractors, clients, partners. One External Connector license per server grants unlimited external user access."}
            </p>
            <ul className="space-y-2">
              {(ka
                ? [
                    "ერთი ლიცენზია თითო სერვერზე — შეუზღუდავი გარე წვდომა",
                    "არ ცვლის შიდა მომხმარებლების CAL მოთხოვნას",
                    "ეფექტურია როცა გარე მომხმარებლების რაოდენობა ბევრია ან უცნობია",
                    "ცალკე საჭიროა WS External Connector და RDS External Connector",
                  ]
                : [
                    "One license per server — unlimited external access",
                    "Does not replace CAL requirements for internal users",
                    "Cost-effective when external user count is large or unknown",
                    "Separate WS External Connector and RDS External Connector needed",
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
