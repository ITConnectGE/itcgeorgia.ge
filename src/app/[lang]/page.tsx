import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, type Locale } from "@/lib/i18n";
import { CloudServer } from "@/components/illustrations/CloudServer";
import { DataMigration } from "@/components/illustrations/DataMigration";
import { MicrosoftLogo, AWSLogo, GoogleLogo } from "@/components/vendor-logos";
import FAQ from "@/components/FAQ";
import { WindowsServerIllustration, RDSIllustration, CALIllustration } from "@/components/illustrations/guides";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;
  const ka = lang === "ka";

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-navy-50/60 via-white to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-azure-600 mb-3 tracking-wide">{dict.hero.badge}</p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-snug">{dict.hero.title}</h1>
              <p className="mt-4 text-base text-slate-500 leading-relaxed">{dict.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`${p}/contact`} className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 shadow-sm shadow-navy-900/10 transition-all">
                  {dict.hero.cta}
                </Link>
                <Link href={`${p}/services`} className="inline-block px-5 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                  {dict.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <CloudServer className="w-full max-w-sm" />
            </div>
          </div>
          {/* Trust + Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex flex-wrap gap-6 text-xs text-slate-400">
              {dict.hero.trust.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-azure-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6 text-xs">
              <div className="text-center">
                <span className="text-lg font-bold text-navy-900">100+</span>
                <p className="text-slate-400">{ka ? "კომპანია" : "Companies"}</p>
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-navy-900">3</span>
                <p className="text-slate-400">{ka ? "გლობალური პარტნიორი" : "Global Partners"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 hover:opacity-60 transition-opacity">
            <MicrosoftLogo className="h-7" />
            <AWSLogo className="h-7" />
            <GoogleLogo className="h-7" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.services.label} title={dict.services.title} description={dict.services.description} />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {dict.services.items.map((service, i) => {
              const slugs = ["microsoft", "aws", "google"];
              const logos = [
                <MicrosoftLogo key="ms" className="h-6" />,
                <AWSLogo key="aws" className="h-5" />,
                <GoogleLogo key="g" className="h-5" />,
              ];
              const borderColors = ["border-l-[#0078d4]", "border-l-[#ff9900]", "border-l-[#34a853]"];
              return (
                <div key={i} className={`group border border-slate-200 ${borderColors[i]} border-l-[3px] rounded-xl p-6 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all relative`}>
                  {i === 0 && (
                    <span className="absolute -top-2.5 right-4 bg-azure-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {ka ? "ყველაზე პოპულარული" : "Most Popular"}
                    </span>
                  )}
                  <div className="mb-4">{logos[i]}</div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-400 mb-3">
                    {i === 0 ? (ka ? "ოფისის, ღრუბლის და სერვერების სრული ეკოსისტემა ნებისმიერი ზომის ბიზნესისთვის." : "Complete office, cloud and server ecosystem for any size business.")
                     : i === 1 ? (ka ? "მსოფლიოს ყველაზე ფართო ღრუბლოვანი პლატფორმა მასშტაბირებადი ინფრასტრუქტურისთვის." : "World's broadest cloud platform for scalable infrastructure.")
                     : (ka ? "თანამშრომლობის ინსტრუმენტები და ღრუბლოვანი ტექნოლოგიები პროდუქტიულობისთვის." : "Collaboration tools and cloud technologies for productivity.")}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <svg className="w-4 h-4 text-azure-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`${p}/services/${slugs[i]}`} className="text-sm font-medium text-navy-600 group-hover:text-azure-600 transition-colors">
                    {dict.services.detail} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label={ka ? "ფასწარმოქმნა" : "Pricing"}
            title={ka ? "საორიენტაციო ფასები" : "Indicative Pricing"}
            description={ka ? "საბოლოო ფასი დამოკიდებულია მომხმარებლების რაოდენობასა და არჩეულ გეგმაზე. გამოითხოვეთ უფასო შეთავაზება." : "Final pricing depends on user count and selected plan. Request a free quote."}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                logo: <MicrosoftLogo key="ms" className="h-5" />,
                name: "Microsoft 365",
                from: ka ? "დაწყებული" : "Starting from",
                price: "~$6",
                per: ka ? "/ მომხმარებელი / თვე" : "/ user / month",
                note: ka ? "Business Basic გეგმა. Enterprise და Premium გეგმებიც ხელმისაწვდომია." : "Business Basic plan. Enterprise and Premium plans also available.",
              },
              {
                logo: <AWSLogo key="aws" className="h-4" />,
                name: "Amazon AWS",
                from: ka ? "დაწყებული" : "Starting from",
                price: ka ? "მოხმარებით" : "Pay-as-you-go",
                per: "",
                note: ka ? "ხარჯები დამოკიდებულია გამოყენებულ სერვისებზე. Savings Plans-ის ფასდაკლებები ხელმისაწვდომია." : "Costs depend on services used. Savings Plans discounts available.",
              },
              {
                logo: <GoogleLogo key="g" className="h-4" />,
                name: "Google Workspace",
                from: ka ? "დაწყებული" : "Starting from",
                price: "~$7",
                per: ka ? "/ მომხმარებელი / თვე" : "/ user / month",
                note: ka ? "Business Starter გეგმა. Business Plus და Enterprise გეგმებიც ხელმისაწვდომია." : "Business Starter plan. Business Plus and Enterprise plans also available.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="mb-3">{item.logo}</div>
                <p className="text-xs text-slate-400 mb-1">{item.from}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-slate-900">{item.price}</span>
                  {item.per && <span className="text-xs text-slate-400">{item.per}</span>}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${p}/contact`} className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 shadow-sm transition-all">
              {ka ? "მიიღეთ პერსონალური შეთავაზება" : "Get a Personalized Quote"}
            </Link>
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-navy-50/40">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.migration.label} title={dict.migration.title} description={dict.migration.description} />
          <div className="mt-8 flex justify-center">
            <DataMigration className="w-full max-w-md" />
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {dict.migration.items.map((item) => (
              <div key={item.title} className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-navy-200 hover:shadow-md hover:shadow-navy-500/5 transition-all">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${p}/contact`} className="inline-block px-5 py-2.5 text-sm font-medium text-navy-700 border border-navy-200 rounded-lg hover:bg-navy-50 transition-all">
              {dict.migration.cta} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.benefits.label} title={dict.benefits.title} description={dict.benefits.description} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dict.benefits.items.map((b, i) => (
              <div key={i} className="group bg-slate-50/60 border border-slate-100 rounded-xl p-6 hover:bg-white hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label={ka ? "კლიენტები" : "Clients"}
            title={ka ? "ჩვენი კლიენტების გამოხმაურება" : "What Our Clients Say"}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                quote: ka ? "200-მდე მეილის მიგრაცია განხორციელდა სამუშაო პროცესის შეფერხების გარეშე. ITC Georgia-ს გუნდმა ყველაფერი პროფესიონალურად წარმართა." : "Migration of ~200 mailboxes was completed without any work disruption. ITC Georgia's team handled everything professionally.",
                name: ka ? "არჩილი" : "Archil",
                company: ka ? "კორპორატიული კლიენტი" : "Corporate Client",
                service: "Email Migration",
              },
              {
                quote: ka ? "Microsoft 365-ზე მიგრაცია სრულიად უპრობლემოდ ჩატარდა. გუნდმა ყველაფერი თავის თავზე აიღო." : "Migration to Microsoft 365 was completely seamless. The team handled everything.",
                name: ka ? "გიორგი მ." : "Giorgi M.",
                company: ka ? "სამშენებლო კომპანია" : "Construction Company",
                service: "Microsoft 365",
              },
              {
                quote: ka ? "ლარში ანგარიშსწორება და ქართული ინვოისი ჩვენი ბუღალტერიისთვის ძალიან მოხერხებულია." : "GEL billing and Georgian invoices are very convenient for our accounting.",
                name: ka ? "ნინო კ." : "Nino K.",
                company: ka ? "იურიდიული ფირმა" : "Law Firm",
                service: "Google Workspace",
              },
              {
                quote: ka ? "AWS ხარჯების ოპტიმიზაციაში დაგვეხმარნენ და თვეში 30%-ით ნაკლებს ვიხდით." : "They helped us optimize AWS costs and we pay 30% less per month.",
                name: ka ? "დავით შ." : "David Sh.",
                company: ka ? "ტექ სტარტაპი" : "Tech Startup",
                service: "AWS",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                <svg className="w-5 h-5 text-navy-100 mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{t.quote}</p>
                <div>
                  <p className="text-sm font-medium text-slate-900">{t.name}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-xs text-slate-400">{t.company}</p>
                    <span className="text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — 3 steps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label={ka ? "პროცესი" : "Process"}
            title={ka ? "როგორ მუშაობს" : "How It Works"}
            description={ka ? "3 მარტივი ნაბიჯი — კონსულტაციიდან მხარდაჭერამდე." : "3 simple steps — from consultation to support."}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: ka ? "კონსულტაცია და შეთავაზება" : "Consultation & Quote",
                desc: ka ? "მოგვიყევით საჭიროებების შესახებ — შემოგთავაზებთ ოპტიმალურ პროდუქტს და ფასს ლარში, დღგ-ს ჩათვლით." : "Tell us your needs — we suggest the optimal product and provide pricing in GEL with VAT.",
              },
              {
                n: "02",
                title: ka ? "შეძენა და მიგრაცია" : "Purchase & Migration",
                desc: ka ? "ლიცენზიების აქტივაცია და საჭიროებისას სამუშაო გარემოს გადატანა — შეუფერხებლად." : "License activation and workspace migration if needed — seamlessly.",
              },
              {
                n: "03",
                title: ka ? "მხარდაჭერა" : "Support",
                desc: ka ? "უწყვეტი ტექნიკური მხარდაჭერა და კონსულტაცია — ყოველთვის ხელმისაწვდომი." : "Ongoing technical support and consultation — always available.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <span className="inline-flex w-10 h-10 items-center justify-center bg-navy-50 text-navy-600 text-sm font-bold rounded-full mb-3">{step.n}</span>
                <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label={ka ? "კითხვები" : "FAQ"}
            title={ka ? "ხშირად დასმული კითხვები" : "Frequently Asked Questions"}
          />
          <div className="mt-10 max-w-2xl mx-auto">
            <FAQ
              items={ka ? [
                { q: "რამდენი ღირს Microsoft 365 ლიცენზია?", a: "ფასი იწყება დაახლოებით $6-დან მომხმარებელზე თვეში (Business Basic). საბოლოო ფასი დამოკიდებულია გეგმასა და მომხმარებლების რაოდენობაზე. გამოითხოვეთ უფასო შეთავაზება." },
                { q: "მიგრაცია რამდენ ხანს იღებს?", a: "სტანდარტული მიგრაცია 1-5 სამუშაო დღეში სრულდება, მომხმარებლების რაოდენობისა და მონაცემების მოცულობის მიხედვით. სერვისი არ წყდება პროცესის განმავლობაში." },
                { q: "შევძლებ თუ არა ლარში გადახდას?", a: "დიახ! ყველა ანგარიშსწორება ხდება ქართულ ლარში. იღებთ ანგარიშფაქტურას დღგ-ს ჩათვლით, სტანდარტული საბანკო გადარიცხვით." },
                { q: "ვენდორის სერვის ცენტრთან კომუნიკაცია ჩემი საქმე იქნება?", a: "არა. ჩვენ უზრუნველვყოფთ Level 1 მხარდაჭერას. საჭიროებისას, ვენდორთან კომუნიკაციას ჩვენ ვაწარმოებთ თქვენ მაგივრად. ამასთან, პირდაპირ ვენდორის მხარდაჭერაზეც გაქვთ წვდომა." },
              ] : [
                { q: "How much does a Microsoft 365 license cost?", a: "Pricing starts from ~$6/user/month (Business Basic). Final price depends on plan and user count. Request a free quote." },
                { q: "How long does migration take?", a: "Standard migration completes in 1-5 business days, depending on users and data volume. No service interruption during the process." },
                { q: "Can I pay in GEL?", a: "Yes! All billing is in Georgian Lari. You receive VAT-inclusive invoices via standard bank transfer." },
                { q: "Do I have to deal with vendor support myself?", a: "No. We provide L1 support. When needed, we handle vendor communication on your behalf. Direct vendor support is also available." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Blog — real guides */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            label={ka ? "ბლოგი" : "Blog"}
            title={ka ? "გზამკვლევები და სტატიები" : "Guides & Articles"}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: "Windows Server",
                title: ka ? "Windows Server Core ლიცენზირება" : "Windows Server Core Licensing",
                excerpt: ka ? "Core-based მოდელი, Standard vs Datacenter, გამოთვლის მაგალითები." : "Core-based model, Standard vs Datacenter, calculation examples.",
                href: `${p}/guides/windows-server`,
                Illust: WindowsServerIllustration,
              },
              {
                tag: "RDS",
                title: ka ? "RDS — Remote Desktop Services ლიცენზირება" : "RDS Licensing Guide",
                excerpt: ka ? "RDS CAL ტიპები, Farm ლიცენზირება, External Connector, გამოთვლის მაგალითები." : "RDS CAL types, Farm licensing, External Connector, calculation examples.",
                href: `${p}/guides/rds`,
                Illust: RDSIllustration,
              },
              {
                tag: "Licensing",
                title: ka ? "CAL — Client Access License" : "CAL — Client Access License",
                excerpt: ka ? "User CAL vs Device CAL, როდის რომელი გამოვიყენოთ." : "User CAL vs Device CAL, when to use which.",
                href: `${p}/guides/cal`,
                Illust: CALIllustration,
              },
            ].map((post, i) => (
              <Link key={i} href={post.href} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all">
                <div className="h-32 border-b border-slate-100">
                  <post.Illust className="w-full h-full" />
                </div>
                <div className="p-5">
                <span className="text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">{post.tag}</span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-azure-700 transition-colors leading-snug">{post.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{post.excerpt}</p>
                <p className="mt-3 text-xs font-medium text-navy-600 group-hover:text-azure-600 transition-colors">
                  {ka ? "წაკითხვა" : "Read"} &rarr;
                </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${p}/guides`} className="text-sm font-medium text-navy-600 hover:text-azure-600 transition-colors">
              {ka ? "ყველა სტატია" : "All Articles"} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">{dict.cta.title}</h2>
          <p className="mt-3 text-sm text-navy-300 max-w-md mx-auto">{dict.cta.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-navy-800 rounded-full text-xs text-navy-300 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {ka ? "პასუხობთ 24 საათში სამუშაო დღეს" : "Response within 24 business hours"}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href={`${p}/contact`} className="inline-block px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-navy-50 shadow-sm transition-all">
              {dict.cta.button}
            </Link>
            <Link href="tel:032244111" className="inline-block px-5 py-2.5 text-sm font-medium text-navy-200 border border-navy-700 rounded-lg hover:bg-navy-800 transition-all">
              032 2 44 11 11
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
