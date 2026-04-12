import type { Metadata } from "next";
import Link from "next/link";
import { locales, getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { MicrosoftLogo, AWSLogo, GoogleLogo } from "@/components/vendor-logos";

const vendorSlugs = ["microsoft", "aws", "google"] as const;
type VendorSlug = (typeof vendorSlugs)[number];

export function generateStaticParams() {
  const params: { lang: string; vendor: string }[] = [];
  for (const lang of locales) {
    for (const vendor of vendorSlugs) {
      params.push({ lang, vendor });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; vendor: string }>;
}): Promise<Metadata> {
  const { lang, vendor } = await params;
  if (!isValidLocale(lang) || !vendorSlugs.includes(vendor as VendorSlug)) return {};
  const dict = getDictionary(lang as Locale);
  const v = dict.vendors[vendor as VendorSlug];
  return { title: v.title, description: v.metaDesc };
}

export default async function VendorPage({
  params,
}: {
  params: Promise<{ lang: string; vendor: string }>;
}) {
  const { lang, vendor } = await params;
  if (!isValidLocale(lang) || !vendorSlugs.includes(vendor as VendorSlug)) notFound();

  const dict = getDictionary(lang as Locale);
  const v = dict.vendors[vendor as VendorSlug];
  const p = `/${lang}`;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <div className="mb-4">
              {vendor === "microsoft" && <MicrosoftLogo className="h-8" />}
              {vendor === "aws" && <AWSLogo className="h-8" />}
              {vendor === "google" && <GoogleLogo className="h-8" />}
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {v.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">{v.description}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {v.products.map((product) => (
              <div
                key={product.name}
                className="border border-slate-200 rounded-xl p-6 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{product.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 rounded-xl p-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">{dict.vendors.forWhom}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.audience}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">{dict.vendors.howWeHelp}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.help}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href={`${p}/contact`}
              className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
            >
              {v.cta} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Back to services */}
      <section className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Link
            href={`${p}/services`}
            className="text-sm font-medium text-navy-600 hover:text-azure-600 transition-colors"
          >
            &larr; {dict.nav.services}
          </Link>
        </div>
      </section>
    </>
  );
}
