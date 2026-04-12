import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "კონტაქტი — დაგვიკავშირდით",
  description:
    "დაუკავშირდით ITC Georgia-ს ლიცენზიების შეძენისთვის ან კონსულტაციისთვის. ტელეფონი: 032 2 44 11 11, ელ-ფოსტა: info@itcgeorgia.ge. თბილისი, ჭავჭავაძის გამზირი 37მ.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
