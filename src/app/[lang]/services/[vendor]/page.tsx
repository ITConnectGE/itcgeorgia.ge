import type { Metadata } from "next";
import Link from "next/link";
import { locales, getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { MicrosoftLogo, AWSLogo, GoogleLogo, M365Logo, AzureLogo } from "@/components/vendor-logos";

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

// Microsoft product icon colors
const msProductColors: Record<string, string> = {
  "Microsoft 365": "bg-[#eb3c00]/10 text-[#eb3c00]",
  "Microsoft Azure": "bg-[#0078d4]/10 text-[#0078d4]",
  "Windows Server & SQL Server": "bg-[#00a4ef]/10 text-[#00a4ef]",
  "Dynamics 365": "bg-[#002050]/10 text-[#002050]",
};

const msProductIcons: Record<string, string> = {
  "Microsoft 365": "M3.75 9.776c.112-.017.166-.078.166-.183V5.49c0-.106-.054-.167-.166-.183L.668 4.86C.556 4.843.5 4.904.5 5.01v9.98c0 .106.056.167.168.15l3.082-.447z M8.5 3.01c0-.106-.054-.167-.166-.15L5.252 3.307c-.112.017-.166.078-.166.183v13.02c0 .106.054.167.166.15l3.082-.447c.112-.017.166-.078.166-.183V3.01z M13.5 1.672c0-.106-.054-.167-.166-.15L10.252 2.07c-.112.017-.166.078-.166.183V17.747c0 .106.054.167.166.15l3.082-.548c.112-.02.166-.08.166-.184V1.672z",
  "Microsoft Azure": "M7.5 2L2 13h4.5L3 22l12-13H9.5L14 2z",
  "Windows Server & SQL Server": "M2 3h9v9H2zM13 3h9v9h-9zM2 14h9v9H2zM13 14h9v9h-9z",
  "Dynamics 365": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
};

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
  const isMs = vendor === "microsoft";

  // Vendor-specific hero gradient
  const heroGradient = isMs
    ? "bg-gradient-to-br from-[#f3f2f1] via-white to-[#e8f4fd]"
    : vendor === "aws"
      ? "bg-gradient-to-b from-[#fff8f0] to-white"
      : "bg-gradient-to-b from-navy-50/40 to-white";

  return (
    <>
      {/* Hero */}
      <section className={`py-16 sm:py-20 border-b border-slate-100 ${heroGradient}`}>
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-4">
                {isMs && <MicrosoftLogo className="h-8" />}
                {vendor === "aws" && <AWSLogo className="h-8" />}
                {vendor === "google" && <GoogleLogo className="h-8" />}
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                {v.title}
              </h1>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">{v.description}</p>
              <div className="mt-6">
                <Link
                  href={`${p}/contact`}
                  className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
                >
                  {v.cta} &rarr;
                </Link>
              </div>
            </div>

            {/* Microsoft: show product sub-logos */}
            {isMs && (
              <div className="hidden lg:grid grid-cols-2 gap-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                  <M365Logo className="h-7 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Microsoft 365</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                  <AzureLogo className="h-7 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Azure</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                  <svg className="h-6 w-6 text-[#00a4ef] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 3h9v9H2zM13 3h9v9h-9zM2 14h9v9H2zM13 14h9v9h-9z" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Windows Server</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                  <svg className="h-6 w-6 text-[#002050] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Dynamics 365</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {v.products.map((product) => {
              const colorClass = isMs ? (msProductColors[product.name] || "bg-azure-50 text-azure-600") : "bg-azure-50 text-azure-600";
              return (
                <div
                  key={product.name}
                  className="border border-slate-200 rounded-xl p-6 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all"
                >
                  {isMs && (
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${colorClass}`}>
                      {product.name === "Microsoft 365" && <M365Logo className="h-5" />}
                      {product.name === "Microsoft Azure" && <AzureLogo className="h-5" />}
                      {product.name === "Windows Server & SQL Server" && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2 3h9v9H2zM13 3h9v9h-9zM2 14h9v9H2zM13 14h9v9h-9z" />
                        </svg>
                      )}
                      {product.name === "Dynamics 365" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      )}
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{product.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Microsoft-specific: Windows Licensing Guide link */}
          {isMs && (
            <div className="mt-8 bg-gradient-to-r from-[#f3f2f1] to-[#e8f4fd] border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {lang === "ka"
                    ? "Windows და Windows Server ლიცენზირების გზამკვლევი"
                    : "Windows & Windows Server Licensing Guide"}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === "ka"
                    ? "Core-ების ლიცენზირება, ვირტუალიზაცია, CAL-ები — დეტალური სახელმძღვანელო"
                    : "Core licensing, virtualization, CALs — detailed guide"}
                </p>
              </div>
              <Link
                href={`${p}/guides/windows-licensing`}
                className="inline-block px-4 py-2 text-xs font-medium text-[#0078d4] border border-[#0078d4]/20 rounded-lg hover:bg-[#0078d4]/5 transition-colors shrink-0"
              >
                {lang === "ka" ? "გზამკვლევის ნახვა" : "View Guide"} &rarr;
              </Link>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 rounded-xl p-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">{dict.vendors.forWhom}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.audience}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">{dict.vendors.howWeHelp}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.help}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer CTA */}
      <section className={`py-12 ${isMs ? "bg-gradient-to-r from-[#0078d4] to-[#002050]" : "bg-navy-900"}`}>
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            {lang === "ka"
              ? "უკვე გაქვთ ლიცენზიები? გადმოიტანეთ ჩვენთან"
              : "Already have licenses? Transfer to us"}
          </h2>
          <p className="mt-2 text-sm text-white/60">
            {lang === "ka"
              ? "ლიცენზიების გადმოტანა მარტივია — მონაცემები და სერვისი უცვლელი რჩება"
              : "License transfer is simple — your data and services remain unchanged"}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={`${p}/transfer`}
              className="inline-block px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              {lang === "ka" ? "გადმოტანის პროცესი" : "Transfer Process"} &rarr;
            </Link>
            <Link
              href={`${p}/corporate`}
              className="inline-block px-5 py-2.5 text-sm font-medium text-white/80 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              {lang === "ka" ? "კორპორატიული შეთავაზება" : "Corporate Offers"}
            </Link>
          </div>
        </div>
      </section>

      {/* Back to services */}
      <section className="py-10 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Link
            href={`${p}/services`}
            className="text-sm font-medium text-navy-600 hover:text-azure-600 transition-colors"
          >
            {"\u2190"} {dict.nav.services}
          </Link>
        </div>
      </section>
    </>
  );
}
