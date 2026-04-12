import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, type Locale } from "@/lib/i18n";
import { CloudServer } from "@/components/illustrations/CloudServer";
import { DataMigration } from "@/components/illustrations/DataMigration";
import { MicrosoftLogo, AWSLogo, GoogleLogo } from "@/components/vendor-logos";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;

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
          <div className="mt-12 flex flex-wrap gap-6 text-xs text-slate-400">
            {dict.hero.trust.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-azure-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
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
              return (
                <div key={i} className="group border border-slate-200 rounded-xl p-6 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all">
                  <div className="mb-4">{logos[i]}</div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">{service.title}</h3>
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

      {/* Migration */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-navy-50/40">
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

      {/* Process */}
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.process.label} title={dict.process.title} description={dict.process.description} />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {dict.process.steps.map((step) => (
              <div key={step.n} className="text-center">
                <span className="text-2xl font-semibold text-navy-100">{step.n}</span>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">{dict.cta.title}</h2>
          <p className="mt-3 text-sm text-navy-300 max-w-md mx-auto">{dict.cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
