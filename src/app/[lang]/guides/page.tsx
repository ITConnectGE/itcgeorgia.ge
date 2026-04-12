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
      ? "ლიცენზირების, ღრუბლოვანი სერვისების და IT ინფრასტრუქტურის გზამკვლევები."
      : "Licensing, cloud services and IT infrastructure guides.",
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const ka = lang === "ka";
  const p = `/${lang}`;
  const allGuides = getAllGuides(lang);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
            {ka ? "ბლოგი" : "Blog"}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            {ka ? "გზამკვლევები და სტატიები" : "Guides & Articles"}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            {ka
              ? "ლიცენზირების და IT ინფრასტრუქტურის პრაქტიკული გზამკვლევები."
              : "Practical licensing and IT infrastructure guides."}
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-400 w-32">
                    {ka ? "კატეგორია" : "Category"}
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-slate-400">
                    {ka ? "სათაური" : "Title"}
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-slate-400 w-28 hidden sm:table-cell">
                    {ka ? "თარიღი" : "Date"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {allGuides.map((guide) => (
                  <tr key={guide.slug} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="inline-block text-[10px] font-medium text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">
                        {guide.tag}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Link href={guide.href} className="text-sm font-medium text-slate-900 hover:text-azure-600 transition-colors">
                        {guide.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-right text-xs text-slate-400 hidden sm:table-cell">
                      2026
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
