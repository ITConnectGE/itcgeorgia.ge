import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  description:
    "ITC Georgia — Microsoft, AWS და Google პროდუქტების ადგილობრივი რესელერი. ანგარიშსწორება ლარში, დღგ-ს ჩათვლით ინვოისი, ქართულენოვანი მხარდაჭერა.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-600 mb-2">
              ჩვენ შესახებ
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              თქვენი ტექნოლოგიური პარტნიორი საქართველოში
            </h1>
            <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
              ITC Georgia არის კორპორატიული ლიცენზირებისა და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი. ვეხმარებით ქართულ ბიზნესებს Microsoft, AWS და Google პროდუქტების მარტივად შეძენაში.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading label="მისია" title="რას ვაკეთებთ" centered={false} />
              <div className="mt-5 space-y-4 text-[14px] text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">შპს აითისი ჯორჯია</strong> არის Microsoft, Amazon AWS და Google პროდუქტების ოფიციალური რესელერი საქართველოში.
                </p>
                <p>
                  საერთაშორისო ვენდორისგან პირდაპირ შეძენა ხშირად უცხოური ვალუტის გადარიცხვებთან, საბანკო საკომისიოებთან და ინგლისურენოვან კომუნიკაციასთანაა დაკავშირებული. ჩვენ ეს ბარიერები მოვხსენით.
                </p>
                <p>
                  ITC Georgia-სთან თქვენ იხდით ლარში, იღებთ ქართულ ანგარიშფაქტურას დღგ-ს ჩათვლით და სარგებლობთ ქართულენოვანი კონსულტაციითა და ტექნიკური მხარდაჭერით.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="space-y-6">
                {[
                  { value: "3", label: "მსოფლიო ტექ-პარტნიორი", sub: "Microsoft, AWS, Google" },
                  { value: "GEL", label: "ანგარიშსწორება ეროვნულ ვალუტაში", sub: "საკომისიოს გარეშე" },
                  { value: "L1", label: "ტექნიკური მხარდაჭერა", sub: "პირველი დონის სერვისი" },
                ].map((s) => (
                  <div key={s.value} className="flex items-start gap-4">
                    <span className="text-2xl font-semibold text-navy-600 w-14 shrink-0">{s.value}</span>
                    <div>
                      <p className="text-[14px] font-medium text-slate-900">{s.label}</p>
                      <p className="text-[12px] text-slate-400">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading label="ღირებულებები" title="რა გამოგვარჩევს" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "სანდოობა", desc: "ოფიციალური ლიცენზიები სრული გარანტიითა და მხარდაჭერით." },
              { title: "ადგილობრივობა", desc: "ქართული კომუნიკაცია, ინვოისი და ბიზნეს-კულტურის გაგება." },
              { title: "ექსპერტიზა", desc: "ბიზნეს-საჭიროებების ანალიზი და ოპტიმალური პროდუქტის შერჩევა." },
              { title: "მხარდაჭერა", desc: "L1 ტექნიკური მხარდაჭერა. ვენდორის სერვისიც ხელმისაწვდომია." },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">მოგვიყევით თქვენი საჭიროებების შესახებ</h2>
          <p className="mt-3 text-[15px] text-slate-400 max-w-md mx-auto">პირველი კონსულტაცია უფასოა.</p>
          <div className="mt-8">
            <Link href="/contact" className="px-5 py-2.5 text-[14px] font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
