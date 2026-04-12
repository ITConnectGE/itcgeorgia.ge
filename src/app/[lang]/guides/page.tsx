import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getAllGuides } from "@/components/RelatedPosts";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "ka" ? "გზამკვლევები და სტატიები" : "Guides & Articles",
    description: lang === "ka"
      ? "ლიცენზირების, ღრუბლოვანი სერვისების და IT ინფრასტრუქტურის გზამკვლევები ქართულ ენაზე."
      : "Licensing, cloud services and IT infrastructure guides.",
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";
  const p = `/${lang}`;
  const allGuides = getAllGuides(lang);

  // Group by tag
  const tags = [...new Set(allGuides.map((g) => g.tag))];

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-gradient-to-b from-navy-50/40 to-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {ka ? "ბლოგი" : "Blog"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {ka ? "გზამკვლევები და სტატიები" : "Guides & Articles"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {ka
                ? "ლიცენზირების, ღრუბლოვანი სერვისების და IT ინფრასტრუქტურის პრაქტიკული გზამკვლევები. დაგეხმარებათ სწორი გადაწყვეტილების მიღებაში."
                : "Practical guides on licensing, cloud services and IT infrastructure. Helping you make the right decisions."}
            </p>
          </div>
        </div>
      </section>

      {/* Tag pills */}
      <section className="py-6 border-b border-slate-100 bg-white sticky top-16 z-30">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-xs font-medium bg-navy-900 text-white rounded-full">
              {ka ? "ყველა" : "All"} ({allGuides.length})
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 rounded-full"
              >
                {tag} ({allGuides.filter((g) => g.tag === tag).length})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          {tags.map((tag) => {
            const guides = allGuides.filter((g) => g.tag === tag);
            return (
              <div key={tag} className="mb-12 last:mb-0">
                <h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-azure-500 rounded-full" />
                  {tag}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={guide.href}
                      className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-azure-200 hover:shadow-md hover:shadow-azure-500/5 transition-all"
                    >
                      <span className="inline-block text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full mb-3">
                        {guide.tag}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-azure-700 transition-colors leading-snug mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        {guide.description}
                      </p>
                      <span className="text-xs font-medium text-navy-600 group-hover:text-azure-600 transition-colors">
                        {ka ? "წაკითხვა" : "Read"} &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-xl font-semibold text-white">
            {ka ? "ვერ იპოვეთ პასუხი?" : "Can't find an answer?"}
          </h2>
          <p className="mt-2 text-sm text-navy-300">
            {ka ? "დაგვიკავშირდით — გიპასუხებთ ნებისმიერ შეკითხვაზე." : "Contact us — we'll answer any question."}
          </p>
          <div className="mt-5">
            <Link
              href={`${p}/contact`}
              className="inline-block px-5 py-2.5 text-sm font-medium text-navy-900 bg-white rounded-lg hover:bg-navy-50 transition-colors"
            >
              {ka ? "დაგვიკავშირდით" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
