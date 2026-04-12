import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
