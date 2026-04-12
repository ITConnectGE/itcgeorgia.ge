import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  description:
    "ITC Georgia — Microsoft, AWS და Google პროდუქტების ოფიციალური რესელერი საქართველოში. ადგილობრივი კონსულტაცია, ანგარიშსწორება ლარში, დღგ-ს ჩათვლით ინვოისი.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
              ჩვენ შესახებ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              თქვენი ტექნოლოგიური პარტნიორი საქართველოში
            </h1>
            <p className="mt-6 text-lg text-graphite-300 leading-relaxed">
              ITC Georgia არის კორპორატიული პროგრამული უზრუნველყოფის
              ლიცენზირებისა და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი.
              ვეხმარებით ქართულ ბიზნესებს Microsoft, AWS და Google პროდუქტების
              სწრაფად და მარტივად შეძენაში.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="მისია"
                title="რას ვაკეთებთ"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-graphite-600 leading-relaxed">
                <p>
                  <strong className="text-graphite-900">შპს აითისი ჯორჯია</strong>{" "}
                  არის Microsoft, Amazon AWS და Google პროდუქტების ოფიციალური
                  რესელერი საქართველოში. ჩვენი მთავარი მისიაა ქართულ კომპანიებს
                  გავუმარტივოთ კორპორატიული პროგრამული უზრუნველყოფის შეძენა.
                </p>
                <p>
                  მსოფლიოში წამყვანი ტექნოლოგიური კომპანიების პროდუქტების
                  შეძენა პირდაპირ — ხშირად დაკავშირებულია უცხოური ვალუტის
                  გადარიცხვებთან, საბანკო საკომისიოებთან და ინგლისურენოვან
                  კომუნიკაციასთან. ჩვენ ეს ბარიერები მოვხსენით.
                </p>
                <p>
                  ITC Georgia-სთან თანამშრომლობით, თქვენ იხდით ლარში, იღებთ
                  ქართულ ანგარიშფაქტურას დღგ-ს ჩათვლით და სარგებლობთ
                  ქართულენოვანი კონსულტაციით და ტექნიკური მხარდაჭერით.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-graphite-50 to-brand-50 rounded-3xl p-10 lg:p-14">
              <div className="space-y-8">
                {[
                  {
                    value: "3",
                    label: "მსოფლიო ტექ-პარტნიორი",
                    sub: "Microsoft, AWS, Google",
                  },
                  {
                    value: "GEL",
                    label: "ანგარიშსწორება ეროვნულ ვალუტაში",
                    sub: "საკომისიოს გარეშე",
                  },
                  {
                    value: "L1",
                    label: "ტექნიკური მხარდაჭერა",
                    sub: "პირველი დონის სერვისი",
                  },
                ].map((stat) => (
                  <div key={stat.value} className="flex items-start gap-5">
                    <span className="text-3xl font-bold text-brand-600 w-16 shrink-0">
                      {stat.value}
                    </span>
                    <div>
                      <p className="font-semibold text-graphite-900">
                        {stat.label}
                      </p>
                      <p className="text-sm text-graphite-500">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-graphite-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="ღირებულებები"
            title="რა გამოგვარჩევს"
            description="ჩვენი მიდგომა ეფუძნება გამჭვირვალეობას, პროფესიონალიზმს და კლიენტის ინტერესების პრიორიტეტიზაციას."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
                title: "სანდოობა",
                description:
                  "ოფიციალური პარტნიორი ვართ — თქვენ ლეგიტიმურ ლიცენზიებს იძენთ, სრული გარანტიითა და მხარდაჭერით.",
              },
              {
                icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
                title: "ადგილობრივობა",
                description:
                  "ქართული კომუნიკაცია, ქართული ინვოისი, ქართული ბიზნეს-კულტურის გაგება. ჩვენ ვცხოვრობთ იმავე ბაზარზე.",
              },
              {
                icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
                title: "ექსპერტიზა",
                description:
                  "გეხმარებით ბიზნეს-საჭიროებების ანალიზში და ოპტიმალური პროდუქტების შერჩევაში — არ გაიხადოთ ზედმეტი.",
              },
              {
                icon: "M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796l-3.448 4.138m5.716-.128a9.014 9.014 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m0 0L4.33 7.288m14.046 7.288L15.532 12m-7.064 0L4.33 16.712m0 0a9.014 9.014 0 010-9.424m4.138 5.976L12 9.264m-3.532 2.736L12 14.736m0-5.472a3.765 3.765 0 00-2.528 0m5.056 0a3.765 3.765 0 012.528 0",
                title: "მხარდაჭერა",
                description:
                  "Level 1 ტექნიკურ მხარდაჭერას ჩვენგან მიიღებთ. საჭიროებისას, ვენდორის სერვისი ასევე ხელმისაწვდომია.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-graphite-100">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-graphite-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-graphite-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            მოგვიყევით თქვენი საჭიროებების შესახებ
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            პირველი კონსულტაცია უფასოა. დაგვიკავშირდით და ერთად შევარჩევთ
            თქვენთვის ოპტიმალურ გადაწყვეტილებას.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-blue-50 shadow-xl transition-all"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
