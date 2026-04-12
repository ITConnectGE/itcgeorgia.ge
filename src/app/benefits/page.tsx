import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "რატომ ITC Georgia — ადგილობრივი რესელერის უპირატესობები",
  description:
    "რატომ უნდა შეიძინოთ Microsoft, AWS და Google ლიცენზიები ადგილობრივი რესელერისგან: ლარში ანგარიშსწორება, დღგ-ს ჩათვლით ინვოისი, ქართულენოვანი მხარდაჭერა.",
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
              უპირატესობები
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              რატომ ადგილობრივი პარტნიორისგან?
            </h1>
            <p className="mt-6 text-lg text-graphite-300 leading-relaxed">
              Microsoft, AWS ან Google-ის პროდუქტები პირდაპირაც შეგიძლიათ
              შეიძინოთ. მაგრამ ქართული ბიზნესისთვის ადგილობრივ რესელერთან
              თანამშრომლობას რეალური, მნიშვნელოვანი უპირატესობები აქვს.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Benefit 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite-900 mb-4">
                  ანგარიშსწორება ლარში
                </h2>
                <div className="space-y-3 text-graphite-600 leading-relaxed">
                  <p>
                    საერთაშორისო ვენდორისგან პირდაპირ შეძენისას, კომპანიას
                    უწევს უცხოურ ვალუტაში გადახდა. ეს ნიშნავს საბანკო
                    საკომისიოებს, კურსის რისკს და დამატებით ბუღალტრულ
                    სირთულეებს.
                  </p>
                  <p>
                    ITC Georgia-სთან თქვენ იხდით <strong>ქართულ ლარში</strong>{" "}
                    — სტანდარტული საბანკო გადარიცხვით ქართულ ანგარიშზე. არანაირი
                    სავალუტო კონვერტაცია, არანაირი დამატებითი საკომისიო.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-graphite-50 rounded-3xl p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
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
                    <p className="text-graphite-700">
                      გადარიცხვა ლარში, ქართულ საბანკო ანგარიშზე
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
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
                    <p className="text-graphite-700">
                      სავალუტო კონვერტაციის საკომისიო — 0
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
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
                    <p className="text-graphite-700">
                      საერთაშორისო გადარიცხვის საკომისიო — 0
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
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
                    <p className="text-graphite-700">
                      კურსის ცვლილების რისკი — 0
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite-900 mb-4">
                  დღგ-ს ჩათვლით ანგარიშფაქტურა
                </h2>
                <div className="space-y-3 text-graphite-600 leading-relaxed">
                  <p>
                    საერთაშორისო გადახდებისას, კომპანიის ბუღალტერიას ხშირად
                    სირთულე ექმნება ინვოისის ფორმატთან, დღგ-ს ჩათვლასთან და
                    ხარჯის დოკუმენტაციასთან.
                  </p>
                  <p>
                    ჩვენგან მიიღებთ{" "}
                    <strong>
                      ქართული კანონმდებლობის შესაბამის ანგარიშფაქტურას
                    </strong>{" "}
                    დღგ-ს ჩათვლით. ეს ამარტივებს ბუღალტერიას, აუდიტს და
                    საგადასახადო ანგარიშგებას.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-graphite-50 to-brand-50/30 rounded-3xl p-8 lg:p-10">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-5 border border-graphite-100 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-graphite-400 uppercase tracking-wider">
                        ინვოისი
                      </span>
                      <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full">
                        დღგ ჩათვლით
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-graphite-500">
                        <span>Microsoft 365 Business Standard × 50</span>
                        <span>₾ X,XXX</span>
                      </div>
                      <div className="flex justify-between text-graphite-500">
                        <span>დღგ (18%)</span>
                        <span>₾ XXX</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold text-graphite-900">
                        <span>სულ</span>
                        <span>₾ X,XXX</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-graphite-400 text-center">
                    სტანდარტული ქართული ანგარიშფაქტურა — თქვენი ბუღალტერიისთვის
                    ნაცნობი ფორმატი
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite-900 mb-4">
                  ქართულენოვანი კონსულტაცია
                </h2>
                <div className="space-y-3 text-graphite-600 leading-relaxed">
                  <p>
                    Microsoft-ის, AWS-ისა თუ Google-ის გლობალურ მხარდაჭერას
                    ინგლისურად აწარმოებენ. ტექნიკური საკითხების განხილვა უცხო
                    ენაზე ზრდის შეცდომის ალბათობას და ანელებს პრობლემის გადაჭრას.
                  </p>
                  <p>
                    ჩვენთან ურთიერთობთ{" "}
                    <strong>ქართულად, ადგილობრივ წარმომადგენელთან</strong>, რომელიც
                    იცნობს ქართულ ბიზნეს-გარემოს და თქვენს საჭიროებებს აფასებს
                    შესაბამის კონტექსტში.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-graphite-50 rounded-3xl p-8 lg:p-10 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="text-6xl font-bold text-brand-600 mb-3">
                    ქართ.
                  </div>
                  <p className="text-graphite-500 text-sm">
                    სრული კომუნიკაცია ქართულ ენაზე
                    <br />
                    კონსულტაცია, დოკუმენტაცია, მხარდაჭერა
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite-900 mb-4">
                  კონსულტაცია და რეკომენდაციები
                </h2>
                <div className="space-y-3 text-graphite-600 leading-relaxed">
                  <p>
                    სამივე ვენდორს ათობით პროდუქტი და საფასო გეგმა აქვს. სწორი
                    არჩევანის გაკეთება ტექნიკური ცოდნისა და ბაზრის გამოცდილების
                    გარეშე რთულია — და შეცდომა ფულის დაკარგვას ნიშნავს.
                  </p>
                  <p>
                    ჩვენ <strong>გავაანალიზებთ თქვენს საჭიროებებს</strong> და
                    შემოგთავაზებთ ოპტიმალურ პროდუქტს. არ გადაიხადოთ იმაზე მეტი,
                    რაც რეალურად გჭირდებათ.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-graphite-50 to-brand-50/30 rounded-3xl p-8 lg:p-10">
                <div className="space-y-4">
                  {[
                    "ბიზნეს-საჭიროებების ანალიზი",
                    "ოპტიმალური პროდუქტის შერჩევა",
                    "ლიცენზიის ტიპის რეკომენდაცია",
                    "ხარჯების ოპტიმიზაცია",
                    "მიგრაციის გეგმა საჭიროებისას",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-graphite-100">
                      <svg
                        className="w-5 h-5 text-brand-600 shrink-0"
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
                      <span className="text-sm font-medium text-graphite-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21.75"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-graphite-900 mb-4">
                  ტექნიკური მხარდაჭერა
                </h2>
                <div className="space-y-3 text-graphite-600 leading-relaxed">
                  <p>
                    ITC Georgia-ს კლიენტები{" "}
                    <strong>Level 1 ტექნიკურ მხარდაჭერას</strong> პირდაპირ
                    ჩვენგან იღებენ. ძირითადი საკითხების გადაჭრას ადგილობრივი
                    გუნდი უზრუნველყოფს.
                  </p>
                  <p>
                    ამასთანავე, თქვენ ყოველთვის შეგიძლიათ მიმართოთ{" "}
                    <strong>ვენდორის პირდაპირ მხარდაჭერასაც</strong> — ეს
                    ვარიანტი პარალელურად ხელმისაწვდომია. ჩვენ ვართ პირველი
                    კონტაქტის წერტილი, მაგრამ არა ერთადერთი.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-graphite-50 rounded-3xl p-8 lg:p-10">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-5 border border-brand-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-brand-100 text-brand-700 text-xs font-semibold rounded-md">
                        L1
                      </span>
                      <span className="font-semibold text-graphite-900">
                        ITC Georgia მხარდაჭერა
                      </span>
                    </div>
                    <p className="text-sm text-graphite-500">
                      ძირითადი საკითხები, კონფიგურაცია, ტრაბლშუტინგი —
                      ქართულ ენაზე
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-graphite-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-graphite-100 text-graphite-600 text-xs font-semibold rounded-md">
                        L2+
                      </span>
                      <span className="font-semibold text-graphite-900">
                        ვენდორის პირდაპირი მხარდაჭერა
                      </span>
                    </div>
                    <p className="text-sm text-graphite-500">
                      რთული ტექნიკური საკითხები — Microsoft, AWS ან Google
                      პირდაპირ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-graphite-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="შედარება"
            title="პირდაპირ vs ადგილობრივი რესელერით"
            description="ნათელი შედარება — რა იცვლება, როცა ITC Georgia-ს ირჩევთ."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-graphite-500 border-b border-graphite-200">
                    &nbsp;
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-graphite-400 border-b border-graphite-200">
                    პირდაპირ ვენდორისგან
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-brand-600 border-b border-brand-200 bg-brand-50/50 rounded-t-xl">
                    ITC Georgia-ით
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    feature: "ანგარიშსწორების ვალუტა",
                    direct: "USD / EUR",
                    itc: "GEL (ლარი)",
                  },
                  {
                    feature: "საბანკო საკომისიო",
                    direct: "საერთაშორისო გადარიცხვის საკომისიო",
                    itc: "სტანდარტული ადგილობრივი გადარიცხვა",
                  },
                  {
                    feature: "ინვოისი",
                    direct: "ინგლისურენოვანი, დღგ-ს გარეშე",
                    itc: "ქართული ანგარიშფაქტურა, დღგ ჩათვლით",
                  },
                  {
                    feature: "კომუნიკაციის ენა",
                    direct: "ინგლისური",
                    itc: "ქართული",
                  },
                  {
                    feature: "კონსულტაცია",
                    direct: "თვით-მომსახურება",
                    itc: "პერსონალიზებული რეკომენდაციები",
                  },
                  {
                    feature: "ტექნიკური მხარდაჭერა",
                    direct: "ვენდორის გლობალური მხარდაჭერა",
                    itc: "L1 ადგილობრივი + ვენდორის მხარდაჭერა",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-graphite-100">
                    <td className="py-4 px-6 font-medium text-graphite-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-graphite-500">
                      {row.direct}
                    </td>
                    <td className="py-4 px-6 text-center text-graphite-900 font-medium bg-brand-50/30">
                      {row.itc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            მზად ხართ უფრო მარტივი გზისთვის?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            დაგვიკავშირდით კონსულტაციისთვის — განვიხილავთ თქვენს საჭიროებებს და
            მოგამზადებთ შეთავაზებას ლარში.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-blue-50 shadow-xl transition-all"
            >
              კონსულტაციის მოთხოვნა
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
            >
              სერვისების ნახვა
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
