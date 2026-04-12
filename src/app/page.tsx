import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-navy-600 mb-3">
              Microsoft &middot; AWS &middot; Google — ოფიციალური რესელერი
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-snug">
              პროგრამული ლიცენზიები და ღრუბლოვანი სერვისები საქართველოში
            </h1>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              შეიძინეთ ლარში, მიიღეთ ანგარიშფაქტურა დღგ-ს ჩათვლით და
              ისარგებლეთ ადგილობრივი კონსულტაციითა და მხარდაჭერით.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
              >
                კონსულტაციის მოთხოვნა
              </Link>
              <Link
                href="/services"
                className="inline-block px-5 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                სერვისების ნახვა
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-xs text-slate-400">
            {["ანგარიშსწორება ლარში", "დღგ-ს ჩათვლით ინვოისი", "ადგილობრივი მხარდაჭერა"].map(
              (text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-navy-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-10 text-slate-300">
            {[
              { name: "Microsoft", icon: "M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z" },
              { name: "AWS", icon: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104a6.37 6.37 0 00-.862.288 2.3 2.3 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.593 4.593 0 011-.36 4.84 4.84 0 011.229-.152c.94 0 1.627.216 2.07.638.439.423.662 1.062.662 1.916v2.525z" },
              { name: "Google", icon: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 hover:text-slate-500 transition-colors">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d={p.icon} />
                </svg>
                <span className="text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label="სერვისები"
            title="ყველაფერი რაც თქვენს ბიზნესს სჭირდება"
            description="Microsoft, AWS და Google ლიცენზიები, კონსულტაცია და ტექნიკური მხარდაჭერა — ერთი პარტნიორისგან."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Microsoft ლიცენზიები",
                items: ["Microsoft 365 (Business & Enterprise)", "Azure ღრუბლოვანი სერვისები", "Windows Server & SQL Server"],
                href: "/services#microsoft",
              },
              {
                title: "Amazon AWS სერვისები",
                items: ["EC2, S3, RDS ინფრასტრუქტურა", "AI/ML და ანალიტიკის სერვისები", "მოქნილი ფასწარმოქმნა მოხმარებით"],
                href: "/services#aws",
              },
              {
                title: "Google სერვისები",
                items: ["Google Workspace", "Google Cloud Platform", "Chrome Enterprise & Maps API"],
                href: "/services#google",
              },
            ].map((service) => (
              <div key={service.title} className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
                <h3 className="text-base font-semibold text-slate-900 mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                      <svg className="w-4 h-4 text-navy-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors">
                  დეტალურად &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label="უპირატესობები"
            title="რატომ ადგილობრივი პარტნიორისგან?"
            description="ITC Georgia-სთან თანამშრომლობა რეალურ ბიზნეს-სარგებელს მოგიტანთ."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
                title: "ანგარიშსწორება ლარში",
                desc: "გადაიხადეთ ეროვნულ ვალუტაში — საკომისიოს გარეშე.",
              },
              {
                icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
                title: "დღგ-ს ჩათვლით ინვოისი",
                desc: "ქართული ანგარიშფაქტურა — ამარტივებს ბუღალტერიას.",
              },
              {
                icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
                title: "ქართულენოვანი კომუნიკაცია",
                desc: "ადგილობრივ წარმომადგენელთან ურთიერთობა ქართულად.",
              },
              {
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
                title: "კონსულტაცია",
                desc: "სწორი პროდუქტისა და ლიცენზიის ტიპის შერჩევა.",
              },
              {
                icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
                title: "L1 ტექნიკური მხარდაჭერა",
                desc: "პირველი დონის მხარდაჭერა + ვენდორის სერვისი.",
              },
              {
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                title: "მარტივი პროცესი",
                desc: "მარტივი, სწრაფი შეძენა საერთაშორისო სირთულეების გარეშე.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <svg className="w-5 h-5 text-navy-600 mb-3 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label="პროცესი"
            title="როგორ მუშაობს"
            description="ლიცენზიის შეძენა 5 მარტივ ნაბიჯში."
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { n: "01", title: "კონსულტაცია", desc: "მოგვიყევით საჭიროებების შესახებ" },
              { n: "02", title: "რეკომენდაცია", desc: "შემოგთავაზებთ ოპტიმალურ პროდუქტს" },
              { n: "03", title: "შეთავაზება", desc: "ფასი ლარში, დღგ-ს ჩათვლით" },
              { n: "04", title: "შეძენა", desc: "ხელშეკრულება და აქტივაცია" },
              { n: "05", title: "მხარდაჭერა", desc: "უწყვეტი ტექნიკური მხარდაჭერა" },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <span className="text-2xl font-semibold text-slate-200">{step.n}</span>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
            მზად ხართ დასაწყებად?
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            მოგვწერეთ ან დაგვირეკეთ — კონსულტაცია უფასოა.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              კონსულტაციის მოთხოვნა
            </Link>
            <Link
              href="tel:032244111"
              className="inline-block px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              032 2 44 11 11
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
