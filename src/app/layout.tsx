import type { Metadata } from "next";
import "./globals.css";
import { LanguagePopup } from "@/components/LanguagePopup";

const locales = ["ka", "en", "hi", "fa", "ar", "ru", "uk", "tr", "hy", "az"];

export const metadata: Metadata = {
  metadataBase: new URL("https://itcgeorgia.ge"),
  title: {
    default: "ITC Georgia — Microsoft, AWS, Google ლიცენზიები საქართველოში",
    template: "%s | ITC Georgia",
  },
  description:
    "ITC Georgia — Microsoft, Amazon AWS და Google ლიცენზიების და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი საქართველოში.",
  keywords: [
    "Microsoft ლიცენზიები საქართველოში",
    "AWS მომსახურება საქართველოში",
    "Google ლიცენზიები საქართველოში",
    "cloud solutions Georgia",
    "ITC Georgia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://itcgeorgia.ge/ka",
    languages: Object.fromEntries(
      locales.map((lang) => [lang, `https://itcgeorgia.ge/${lang}`])
    ),
  },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: "https://itcgeorgia.ge",
    siteName: "ITC Georgia",
    title: "ITC Georgia — Microsoft, AWS, Google ლიცენზიები საქართველოში",
    description:
      "Microsoft, Amazon AWS და Google ლიცენზიების და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი საქართველოში.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ITC Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITC Georgia — Microsoft, AWS, Google ლიცენზიები საქართველოში",
    description:
      "Microsoft, Amazon AWS და Google ლიცენზიების და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი საქართველოში.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-700">
        <LanguagePopup />
        {children}
      </body>
    </html>
  );
}
