import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDesc,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return <ContactForm dict={dict} />;
}
