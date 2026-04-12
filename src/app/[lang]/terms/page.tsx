import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "ka" ? "წესები და პირობები" : "Terms and Conditions" };
}

type Section = { title: string; paragraphs: string[]; list?: string[] };

function getTermsContent(lang: string): Section[] {
  if (lang === "ka") return kaContent;
  return enContent;
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const p = `/${lang}`;
  const content = getTermsContent(lang);

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">
              {lang === "ka" ? "იურიდიული" : "Legal"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {lang === "ka" ? "წესები და პირობები" : "Terms and Conditions"}
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              {lang === "ka" ? "ბოლო განახლება: 2026 წლის აპრილი" : "Last updated: April 2026"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-3xl">
            {content.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  {i + 1}. {section.title}
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  {section.paragraphs.map((text, j) => (
                    <p key={j} className="whitespace-pre-line">{text}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-1.5">
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 max-w-3xl">
            <p className="text-sm text-slate-500 mb-4">
              {lang === "ka" ? "კითხვების შემთხვევაში დაგვიკავშირდით:" : "For questions, contact us:"}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span>info@itcgeorgia.ge</span>
              <span>032 2 44 11 11</span>
            </div>
            <div className="mt-6">
              <Link href={`${p}/contact`} className="text-sm font-medium text-navy-600 hover:text-azure-600 transition-colors">
                {"\u2190"} {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const kaContent: Section[] = [
  {
    title: "ზოგადი დებულებები",
    paragraphs: [
      "წინამდებარე წესები და პირობები არეგულირებს შპს აითისი ჯორჯია-ს (მისამართი: თბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული) და კლიენტს შორის ურთიერთობას.",
      "ჩვენი სერვისებით სარგებლობით, თქვენ ეთანხმებით ამ პირობებს.",
    ],
  },
  {
    title: "კომპანიის სტატუსი და ვენდორებთან ურთიერთობა",
    paragraphs: [
      "ITC Georgia არის Microsoft-ის, Amazon Web Services-ისა და Google-ის ავტორიზებული რესელერი საქართველოში. ITC Georgia არ არის ამ პროდუქტების მწარმოებელი ან უშუალო მომწოდებელი.",
      "პროგრამული უზრუნველყოფა ექვემდებარება ვენდორის საკუთარ სალიცენზიო შეთანხმებას:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "სერვისების მოცულობა",
    paragraphs: ["ITC Georgia კლიენტებს სთავაზობს:"],
    list: [
      "Microsoft, AWS და Google პროდუქტების ლიცენზირება და შესყიდვა",
      "კონსულტაცია და რეკომენდაციები ოპტიმალური პროდუქტის შერჩევაში",
      "Level 1 ტექნიკური მხარდაჭერა",
      "ელ-ფოსტის და სამუშაო გარემოს მიგრაცია",
      "ლიცენზიების მართვა და ადმინისტრირება",
    ],
  },
  {
    title: "რესელერის წვდომა კლიენტის აქაუნთზე",
    paragraphs: [
      "სერვისების მისაწოდებლად, ITC Georgia-ს შეიძლება ჰქონდეს ადმინისტრაციული წვდომა თქვენს აქაუნთზე. ეს წვდომა შეზღუდულია ადმინისტრაციული ფუნქციებით.",
      "რას ვხედავთ:",
    ],
    list: [
      "ტენანტის/აქაუნთის სახელი და დომენი",
      "ლიცენზიების ტიპი, რაოდენობა და სტატუსი",
      "ბილინგის ინფორმაცია (ინვოისის თანხები, გადახდის სტატუსი)",
      "მომხმარებლების სია (სახელი, ელ-ფოსტა) - მხოლოდ შესაბამისი როლის მინიჭებისას",
      "სერვისის მდგომარეობის ინფორმაცია",
    ],
  },
  {
    title: "რას ვერ ვხედავთ და რაზეც არ გვაქვს წვდომა",
    paragraphs: ["ITC Georgia-ს არ აქვს წვდომა თქვენს კონტენტზე:"],
    list: [
      "ელ-ფოსტის შინაარსი (Gmail, Outlook)",
      "ფაილები და დოკუმენტები (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet ჩატები და ზარების ჩანაწერები",
      "მონაცემთა ბაზების შინაარსი",
      "მომხმარებლების პაროლები (შეგვიძლია მხოლოდ აღდგენა, არა ნახვა)",
      "S3, Cloud Storage ან სხვა საცავების შინაარსი",
      "თქვენი ორგანიზაციის შიდა დოკუმენტები და ბიზნეს-მონაცემები",
    ],
  },
  {
    title: "ანგარიშსწორება და ბილინგი",
    paragraphs: [
      "ფასები მითითებულია და ინვოისები გამოიწერება ქართულ ლარში (GEL). დღგ (18%) ემატება საქართველოს საგადასახადო კანონმდებლობის შესაბამისად.",
      "ვენდორების ფასი USD/EUR-შია. ლარის ეკვივალენტი გამოითვლება საქართველოს ეროვნული ბანკის ოფიციალური კურსით.",
      "გადახდის ვადა: ინვოისის გამოწერიდან 15 კალენდარული დღე, თუ სხვა არ არის შეთანხმებული.",
    ],
  },
  {
    title: "ანაზღაურების პოლიტიკა",
    paragraphs: [
      "ლიცენზიების ანაზღაურება ექვემდებარება ვენდორის გაუქმების პოლიტიკას. Microsoft CSP წლიური გამოწერის გაუქმება შესაძლებელია 7 დღის განმავლობაში.",
      "ITC Georgia-ს საკუთარი სერვისების (კონსულტაცია, მიგრაცია) საფასური არ ბრუნდება სამუშაოს დაწყების შემდეგ.",
    ],
  },
  {
    title: "მხარდაჭერის მოცულობა",
    paragraphs: ["ITC Georgia უზრუნველყოფს Level 1 ტექნიკურ მხარდაჭერას:"],
    list: [
      "ლიცენზიების აქტივაცია და პროვიზირება",
      "მომხმარებლების შექმნა და ლიცენზიების მინიჭება",
      "ბილინგის შეკითხვები",
      "წვდომის/ავტორიზაციის ძირითადი პრობლემები",
      "პაროლის აღდგენა (სადაც გვაქვს ადმინისტრატორის წვდომა)",
      "მხარდაჭერის საათები: ორშ-პარ, 10:00-19:00",
    ],
  },
  {
    title: "მიგრაციის სერვისის პირობები",
    paragraphs: [
      "მიგრაციის პროცესში ITC Georgia-ს შეიძლება დროებით ჰქონდეს წვდომა წყაროს სისტემაზე - მხოლოდ მონაცემების გადატანის მიზნით.",
      "ITC Georgia არ შეინახავს მიგრირებული მონაცემების ასლებს მიგრაციის დასრულების შემდეგ.",
      "კლიენტი ვალდებულია შეამოწმოს მიგრირებული მონაცემების სისრულე 7 დღის განმავლობაში.",
    ],
  },
  {
    title: "კლიენტის ვალდებულებები",
    paragraphs: ["სერვისებით სარგებლობისას, კლიენტი ვალდებულია:"],
    list: [
      "დროულად გადაიხადოს შეთანხმებული საფასური",
      "დაიცვას ვენდორის მისაღები გამოყენების პოლიტიკა",
      "მიაწოდოს ზუსტი კომპანიის და საკონტაქტო ინფორმაცია",
      "გამოიყენოს ლიცენზიები მხოლოდ ავტორიზებული მომხმარებლებისთვის",
      "უზრუნველყოს საკუთარი ადმინისტრატორის ანგარიშის უსაფრთხოება",
    ],
  },
  {
    title: "პასუხისმგებლობის შეზღუდვა",
    paragraphs: ["ITC Georgia არ არის პასუხისმგებელი:"],
    list: [
      "ვენდორის სერვისების შეფერხებაზე ან გათიშვაზე",
      "პროგრამული უზრუნველყოფის შეცდომებზე",
      "მონაცემთა დაკარგვაზე ვენდორის პლატფორმებში (გარდა ITC Georgia-ს უშუალო ბრალეულობისა)",
      "არაავტორიზებულ წვდომაზე, რომელიც კლიენტის ანგარიშის უსაფრთხოების ხარვეზით არის გამოწვეული",
      "არაპირდაპირ, შემთხვევით ან თანმდევ ზარალზე",
    ],
  },
  {
    title: "პერსონალური მონაცემების დაცვა",
    paragraphs: [
      "ITC Georgia ამუშავებს პერსონალურ მონაცემებს საქართველოს კანონის შესაბამისად.",
      "ვაგროვებთ: კომპანიის სახელი, საკონტაქტო პირის მონაცემები, ბილინგის ინფორმაცია. ეს მონაცემები გამოიყენება მხოლოდ სერვისების მიწოდებისა და ბილინგის მიზნით.",
      "თქვენ გაქვთ უფლება მოითხოვოთ მონაცემების ნახვა, შესწორება, წაშლა ან დამუშავების შეზღუდვა.",
    ],
  },
  {
    title: "მოქმედი კანონმდებლობა",
    paragraphs: [
      "პირობები რეგულირდება საქართველოს კანონმდებლობით. დავის შემთხვევაში, მხარეები ჯერ ცდილობენ მოლაპარაკებას. წარუმატებლობისას დავა განიხილება თბილისის საქალაქო სასამართლოში.",
    ],
  },
  {
    title: "ცვლილებები",
    paragraphs: [
      "ITC Georgia იტოვებს უფლებას შეცვალოს პირობები. არსებითი ცვლილებების შემთხვევაში კლიენტებს ეცნობებათ მინიმუმ 15 დღით ადრე.",
    ],
  },
  {
    title: "საკონტაქტო ინფორმაცია",
    paragraphs: [
      "შპს აითისი ჯორჯია\nთბილისი, ჭავჭავაძის გამზირი 37მ, აქსის თაუერი, მე-5 სართული\nტელ: 032 2 44 11 11\nელ-ფოსტა: info@itcgeorgia.ge",
    ],
  },
];

const enContent: Section[] = [
  {
    title: "General Provisions",
    paragraphs: [
      "These Terms and Conditions govern the relationship between ITC Georgia LLC (Address: Tbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor) and the client.",
      "By using our services, you agree to these Terms.",
    ],
  },
  {
    title: "Company Status and Vendor Relationships",
    paragraphs: [
      "ITC Georgia is an authorized reseller of Microsoft, Amazon Web Services, and Google in Georgia. ITC Georgia is NOT the manufacturer or direct provider of these products.",
      "All software is subject to the respective vendor's license agreements:",
    ],
    list: [
      "Microsoft: Microsoft Customer Agreement, Microsoft Product Terms",
      "AWS: AWS Customer Agreement, AWS Service Terms",
      "Google: Google Workspace Agreement, Google Cloud Terms of Service",
    ],
  },
  {
    title: "Scope of Services",
    paragraphs: ["ITC Georgia provides:"],
    list: [
      "Licensing and procurement of Microsoft, AWS, and Google products",
      "Consultation and recommendations for optimal product selection",
      "Level 1 technical support",
      "Email and workspace migration",
      "License management and administration",
    ],
  },
  {
    title: "Reseller Access to Client Accounts",
    paragraphs: [
      "To deliver services, ITC Georgia may have administrative access to your account on vendor platforms. This access is limited to administrative functions.",
      "What we can see:",
    ],
    list: [
      "Tenant/account name and domain",
      "License types, quantities, and status",
      "Billing information (invoice amounts, payment status)",
      "User list (names, emails) - only if you grant appropriate roles",
      "Service health information",
    ],
  },
  {
    title: "What We Cannot See or Access",
    paragraphs: ["ITC Georgia does not and cannot access your content:"],
    list: [
      "Email contents (Gmail, Outlook)",
      "Files and documents (OneDrive, Google Drive, SharePoint)",
      "Teams/Meet chats and call recordings",
      "Database contents",
      "User passwords (we can only reset, not view)",
      "S3, Cloud Storage, or other storage contents",
      "Your internal documents and business data",
    ],
  },
  {
    title: "Payment and Billing",
    paragraphs: [
      "All prices are in Georgian Lari (GEL). VAT (18%) is added per Georgian tax law.",
      "Vendor pricing is in USD/EUR. GEL equivalent uses the National Bank of Georgia's official rate.",
      "Payment terms: 15 calendar days from invoice date, unless otherwise agreed.",
    ],
  },
  {
    title: "Refund Policy",
    paragraphs: [
      "License refunds follow vendor cancellation policies. Microsoft CSP annual subscriptions can be cancelled within 7 days.",
      "ITC Georgia's service fees (consultation, migration) are non-refundable once work has commenced.",
    ],
  },
  {
    title: "Support Scope",
    paragraphs: ["ITC Georgia provides Level 1 technical support:"],
    list: [
      "License activation and provisioning",
      "User creation and license assignment",
      "Billing inquiries",
      "Basic access/authorization issues",
      "Password reset (where we have admin access)",
      "Support hours: Mon-Fri, 10:00-19:00 Tbilisi time",
    ],
  },
  {
    title: "Migration Service Terms",
    paragraphs: [
      "During migration, ITC Georgia may temporarily access source systems - solely for data transfer purposes.",
      "ITC Georgia will not retain copies of migrated data after completion.",
      "Client must verify migrated data completeness within 7 days.",
    ],
  },
  {
    title: "Client Obligations",
    paragraphs: ["The client is obligated to:"],
    list: [
      "Pay agreed fees on time",
      "Comply with vendor acceptable use policies",
      "Provide accurate company and contact information",
      "Use licenses only for authorized users",
      "Maintain security of admin credentials",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: ["ITC Georgia is not liable for:"],
    list: [
      "Vendor service outages or downtime",
      "Software bugs or security vulnerabilities",
      "Data loss within vendor platforms (unless directly caused by ITC Georgia)",
      "Unauthorized access due to client's security failures",
      "Indirect, incidental, or consequential damages",
    ],
  },
  {
    title: "Data Protection",
    paragraphs: [
      "ITC Georgia processes personal data per Georgia's data protection laws.",
      "We collect: company name, contact person details, billing info. Used solely for service delivery and billing.",
      "You may request access, correction, deletion, or restriction of your data.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by Georgian law. Disputes are resolved first by negotiation, then by Tbilisi City Court.",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "ITC Georgia may modify these Terms. Material changes are notified at least 15 days in advance.",
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      "ITC Georgia LLC\nTbilisi, Chavchavadze Ave 37M, Axis Tower, 5th Floor\nPhone: 032 2 44 11 11\nEmail: info@itcgeorgia.ge",
    ],
  },
];
