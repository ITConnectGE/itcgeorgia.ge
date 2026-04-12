import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ITC Georgia — Microsoft, AWS, Google ლიცენზიები საქართველოში",
    template: "%s | ITC Georgia",
  },
  description:
    "ITC Georgia — Microsoft, Amazon AWS და Google ლიცენზიების და ღრუბლოვანი სერვისების ადგილობრივი პარტნიორი საქართველოში. გადაიხადეთ ლარში, მიიღეთ დღგ-ს ჩათვლით ანგარიშფაქტურა და ადგილობრივი მხარდაჭერა.",
  keywords: [
    "Microsoft ლიცენზიები საქართველოში",
    "AWS მომსახურება საქართველოში",
    "Google ლიცენზიები საქართველოში",
    "ბიზნეს ლიცენზიები",
    "cloud solutions Georgia",
    "ღრუბლოვანი სერვისები",
    "ITC Georgia",
    "software reseller Georgia",
  ],
  openGraph: {
    title: "ITC Georgia — ლიცენზიები და ღრუბლოვანი სერვისები",
    description:
      "Microsoft, AWS და Google პროდუქტების ოფიციალური რესელერი საქართველოში.",
    locale: "ka_GE",
    type: "website",
    siteName: "ITC Georgia",
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
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
