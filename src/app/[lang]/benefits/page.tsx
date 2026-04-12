import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.benefitsPage.metaTitle,
    description: dict.benefitsPage.metaDesc,
  };
}

export default async function BenefitsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-600 mb-2">{dict.benefitsPage.label}</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {dict.benefitsPage.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {dict.benefitsPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits detail */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 space-y-20">
          {dict.benefitsPage.items.map((b) => (
            <div key={b.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">{b.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{b.text}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {b.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-navy-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.benefitsPage.comparisonLabel} title={dict.benefitsPage.comparison} />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400">&nbsp;</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-400">{dict.benefitsPage.direct}</th>
                  <th className="text-center py-3 px-4 font-medium text-navy-600 bg-navy-50/50 rounded-t-lg">{dict.benefitsPage.viaItc}</th>
                </tr>
              </thead>
              <tbody>
                {dict.benefitsPage.rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.f}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{row.d}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-medium bg-navy-50/30">{row.i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">{dict.benefitsPage.ctaTitle}</h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">{dict.benefitsPage.ctaDesc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={`${p}/contact`} className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              {dict.benefitsPage.ctaButton}
            </Link>
            <Link href={`${p}/services`} className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors">
              {dict.benefitsPage.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
