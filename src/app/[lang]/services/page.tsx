import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { MicrosoftLogo, AWSLogo, GoogleLogo } from "@/components/vendor-logos";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  return { title: dict.servicesPage.title };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const sp = dict.servicesPage;
  const p = `/${lang}`;

  const vendorSlugs = ["microsoft", "aws", "google"] as const;
  const logos = [
    <MicrosoftLogo key="ms" className="h-6" />,
    <AWSLogo key="aws" className="h-5" />,
    <GoogleLogo key="g" className="h-5" />,
  ];

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">{sp.label}</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">{sp.title}</h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">{sp.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Vendor cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dict.services.items.map((service, i) => (
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
                <Link href={`${p}/services/${vendorSlugs[i]}`} className="text-sm font-medium text-navy-600 group-hover:text-azure-600 transition-colors">
                  {dict.services.detail} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section id="consulting" className="py-16 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-2">{sp.additionalLabel}</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">{sp.additionalTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sp.additional.map((item) => (
              <div key={item.title} className="border border-slate-700 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">{sp.productCta}</h2>
          <p className="mt-2 text-sm text-slate-500">{sp.productCtaDesc}</p>
          <div className="mt-6">
            <Link href={`${p}/contact`} className="px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
              {sp.productCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
