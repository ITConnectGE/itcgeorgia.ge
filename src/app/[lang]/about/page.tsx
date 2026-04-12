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
    title: dict.about.metaTitle,
    description: dict.about.metaDesc,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-600 mb-2">
              {dict.about.label}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {dict.about.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading label={dict.about.missionLabel} title={dict.about.missionTitle} centered={false} />
              <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
                {dict.about.missionText.map((text, i) => (
                  <p key={i}>
                    {i === 0 ? <strong className="text-slate-900">{text}</strong> : text}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="space-y-6">
                {dict.about.stats.map((s) => (
                  <div key={s.value} className="flex items-start gap-4">
                    <span className="text-2xl font-semibold text-navy-600 w-14 shrink-0">{s.value}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{s.label}</p>
                      <p className="text-xs text-slate-400">{s.sub}</p>
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
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading label={dict.about.valuesLabel} title={dict.about.valuesTitle} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.about.values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">{dict.about.ctaTitle}</h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">{dict.about.ctaDesc}</p>
          <div className="mt-8">
            <Link href={`${p}/contact`} className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              {dict.about.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
