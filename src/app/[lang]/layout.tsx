import type { Metadata } from "next";
import { locales, getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<string, string> = {
    ka: "ITC Georgia — Microsoft, AWS, Google ლიცენზიები საქართველოში",
    en: "ITC Georgia — Microsoft, AWS, Google Licenses in Georgia",
    hi: "ITC Georgia — जॉर्जिया में Microsoft, AWS, Google लाइसेंस",
  };
  return {
    title: { default: titles[lang] || titles.ka, template: `%s | ITC Georgia` },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang as Locale);
  const htmlLang = lang === "hi" ? "hi" : lang === "en" ? "en" : "ka";
  const dir = lang === "hi" ? "ltr" : "ltr";

  return (
    <div data-lang={htmlLang} dir={dir}>
      <Header dict={dict} lang={lang as Locale} />
      <main className="flex-1 w-full">{children}</main>
      <Footer dict={dict} lang={lang as Locale} />
    </div>
  );
}
