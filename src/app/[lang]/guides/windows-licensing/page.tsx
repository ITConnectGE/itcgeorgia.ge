import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getAllGuides } from "@/components/RelatedPosts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const isKa = lang === "ka";
  return {
    title: isKa
      ? "Windows და Windows Server ლიცენზირების გზამკვლევი | ITC Georgia"
      : "Windows & Windows Server Licensing Guide | ITC Georgia",
    description: isKa
      ? "დეტალური გზამკვლევი Windows Desktop, Windows Server, CAL და SQL Server ლიცენზირების შესახებ. Core-based ლიცენზირება, ვირტუალიზაციის უფლებები და სწორი ლიცენზიის შერჩევა."
      : "Comprehensive guide to Windows Desktop, Windows Server, CAL, and SQL Server licensing. Core-based licensing, virtualization rights, and choosing the right license.",
  };
}

export default async function WindowsLicensingHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const p = `/${lang}`;
  const ka = lang === "ka";

  const guides = getAllGuides(lang).filter(
    (g) => g.slug !== "windows-licensing"
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {ka ? "გზამკვლევი" : "Guide"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ka
                ? "Windows და Windows Server ლიცენზირების გზამკვლევი"
                : "Windows & Windows Server Licensing Guide"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl">
              {ka
                ? "ეს გზამკვლევი დაგეხმარებათ გაიგოთ Microsoft Windows-ის ლიცენზირების მოდელები — Desktop-იდან Server-ამდე, ვირტუალიზაციიდან CAL-ებამდე. შეისწავლეთ რა ლიცენზიები სჭირდება თქვენს ორგანიზაციას და როგორ ოპტიმიზირდეთ ხარჯები."
                : "This guide helps you understand Microsoft Windows licensing models — from Desktop to Server, virtualization to CALs. Learn what licenses your organization needs and how to optimize costs."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Guide Cards Grid ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            {ka ? "ლიცენზირების თემები" : "Licensing Topics"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group border border-slate-200 rounded-xl p-6 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all"
              >
                <span className="inline-block text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full mb-3">
                  {guide.tag}
                </span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-azure-700 transition-colors leading-snug mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-azure-600 group-hover:gap-2 transition-all">
                  {ka ? "წაიკითხეთ" : "Read more"}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {ka
              ? "ITC Georgia გეხმარებით სწორი ლიცენზიის შერჩევაში"
              : "ITC Georgia Helps You Choose the Right License"}
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-lg mx-auto">
            {ka
              ? "ჩვენი გუნდი დაგეხმარებათ Windows, Windows Server, SQL Server და Microsoft 365 ლიცენზირების ოპტიმიზაციაში. მიიღეთ ინვოისი ლარში, დღგ-ს ჩათვლით."
              : "Our team will help you optimize Windows, Windows Server, SQL Server, and Microsoft 365 licensing. Get invoices in GEL, VAT included."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${p}/contact`}
              className="px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              {ka ? "კონსულტაციის მოთხოვნა" : "Request a Consultation"}
            </Link>
            <Link
              href={`${p}/services`}
              className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              {ka ? "სერვისების ნახვა" : "View Services"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
