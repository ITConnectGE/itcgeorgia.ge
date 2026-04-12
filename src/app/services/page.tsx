import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "სერვისები — Microsoft, AWS, Google ლიცენზიები",
  description:
    "Microsoft 365, Azure, AWS, Google Workspace და სხვა ღრუბლოვანი სერვისების ლიცენზირება საქართველოში. კონსულტაცია, რეკომენდაციები და ტექნიკური მხარდაჭერა.",
};

const services = [
  {
    id: "microsoft",
    vendor: "Microsoft",
    color: "blue",
    iconBg: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    title: "Microsoft ლიცენზიები",
    description:
      "კორპორატიული Microsoft პროდუქტების სრული სპექტრი — ოფისის აპლიკაციებიდან სერვერულ ინფრასტრუქტურამდე.",
    products: [
      {
        name: "Microsoft 365",
        detail:
          "Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint — ყველა ინსტრუმენტი ერთ სააბონენტო პაკეტში. Business Basic, Standard, Premium და Enterprise გეგმები.",
      },
      {
        name: "Microsoft Azure",
        detail:
          "ღრუბლოვანი ინფრასტრუქტურა, ვირტუალური მანქანები, მონაცემთა ბაზები, AI სერვისები. მოქნილი ფასწარმოქმნა მოხმარების მიხედვით.",
      },
      {
        name: "Windows Server & SQL Server",
        detail:
          "სერვერული ოპერაციული სისტემები და მონაცემთა ბაზების მართვის სისტემები ნებისმიერი მასშტაბის ორგანიზაციისთვის.",
      },
      {
        name: "Microsoft Dynamics 365",
        detail:
          "ERP და CRM გადაწყვეტილებები ბიზნეს-პროცესების ავტომატიზაციისა და კლიენტებთან ურთიერთობის მართვისთვის.",
      },
    ],
    audience:
      "ნებისმიერი ზომის კომპანიისთვის — სტარტაპიდან კორპორაციამდე, რომელსაც Microsoft-ის ეკოსისტემაში მუშაობა სურს.",
    help: "გეხმარებით სწორი Microsoft გეგმის შერჩევაში, ლიცენზიების შეძენასა და მართვაში, მიგრაციაში და ტექნიკურ მხარდაჭერაში.",
  },
  {
    id: "aws",
    vendor: "Amazon",
    color: "orange",
    iconBg: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    title: "Amazon AWS სერვისები",
    description:
      "მსოფლიოში ყველაზე ფართო ღრუბლოვანი პლატფორმა — ინფრასტრუქტურიდან ხელოვნურ ინტელექტამდე.",
    products: [
      {
        name: "EC2 & Compute",
        detail:
          "ვირტუალური სერვერები ნებისმიერი დატვირთვისთვის. Auto Scaling, Load Balancing და სხვა კომპიუტინგ-სერვისები.",
      },
      {
        name: "S3 & Storage",
        detail:
          "მონაცემთა შენახვის სერვისები — ობიექტების საცავიდან ფაილური სისტემებისა და სარეზერვო ასლების მართვამდე.",
      },
      {
        name: "RDS & Databases",
        detail:
          "მართული მონაცემთა ბაზები — MySQL, PostgreSQL, SQL Server, Oracle. ავტომატური სარეზერვო ასლები და მასშტაბირება.",
      },
      {
        name: "AI/ML & Analytics",
        detail:
          "SageMaker, Bedrock, Comprehend და სხვა AI/ML სერვისები. მონაცემთა ანალიტიკა Redshift-ით, Athena-ით და QuickSight-ით.",
      },
    ],
    audience:
      "ტექნოლოგიური კომპანიებისთვის, სტარტაპებისთვის და საწარმოებისთვის, რომლებსაც მასშტაბირებადი ღრუბლოვანი ინფრასტრუქტურა სჭირდებათ.",
    help: "გეხმარებით AWS ანგარიშის გახსნასა და მართვაში, ხარჯების ოპტიმიზაციაში, არქიტექტურული რეკომენდაციებით და Level 1 მხარდაჭერით.",
  },
  {
    id: "google",
    vendor: "Google",
    color: "green",
    iconBg: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    title: "Google სერვისები",
    description:
      "თანამშრომლობის ინსტრუმენტები და ღრუბლოვანი ტექნოლოგიები — პროდუქტიულობისა და ინოვაციისთვის.",
    products: [
      {
        name: "Google Workspace",
        detail:
          "Gmail, Drive, Docs, Sheets, Slides, Meet, Calendar — კორპორატიული ელ-ფოსტა და თანამშრომლობის სრული პაკეტი თქვენი დომენით.",
      },
      {
        name: "Google Cloud Platform",
        detail:
          "Compute Engine, Cloud Storage, BigQuery, Kubernetes Engine. ღრუბლოვანი ინფრასტრუქტურა და მონაცემთა ანალიტიკა.",
      },
      {
        name: "Google Maps Platform",
        detail:
          "რუკები, მარშრუტები და გეოლოკაციის API-ები თქვენი აპლიკაციებისა და ვებსაიტებისთვის.",
      },
      {
        name: "Chrome Enterprise & Endpoint",
        detail:
          "მოწყობილობებისა და ბრაუზერის მართვა კორპორატიულ გარემოში, უსაფრთხოების გაძლიერებულ პარამეტრებით.",
      },
    ],
    audience:
      "კომპანიებისთვის, რომლებსაც Google-ის ეკოსისტემის გამოყენება სურთ კორპორატიული კომუნიკაციისთვის, მონაცემთა ანალიტიკისთვის ან აპლიკაციების განვითარებისთვის.",
    help: "გეხმარებით Google Workspace-ის და GCP-ის კონფიგურაციაში, დომენის მიბმაში, მომხმარებლების მართვაში და ტექნიკურ კონსულტაციაში.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
              სერვისები
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              ლიცენზიები და ღრუბლოვანი გადაწყვეტილებები
            </h1>
            <p className="mt-6 text-lg text-graphite-300 leading-relaxed">
              Microsoft, Amazon AWS და Google პროდუქტების სრული სპექტრი —
              ადგილობრივი კონსულტაციით, ლარით ანგარიშსწორებითა და ტექნიკური
              მხარდაჭერით.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 1 ? "bg-graphite-50" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
                {service.vendor}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-lg text-graphite-500 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white border border-graphite-200 rounded-2xl p-7 hover:shadow-lg hover:border-brand-200 transition-all"
                >
                  <h3 className="text-lg font-bold text-graphite-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-graphite-500 leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-graphite-50 to-brand-50/30 rounded-2xl p-8 lg:p-10">
              <div>
                <h4 className="font-semibold text-graphite-900 mb-2">
                  ვისთვისაა
                </h4>
                <p className="text-sm text-graphite-600 leading-relaxed">
                  {service.audience}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-graphite-900 mb-2">
                  როგორ გეხმარებით
                </h4>
                <p className="text-sm text-graphite-600 leading-relaxed">
                  {service.help}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl hover:from-brand-700 hover:to-brand-800 shadow-lg shadow-brand-600/20 transition-all"
              >
                {service.vendor} კონსულტაციის მოთხოვნა
                <svg
                  className="ml-2 w-4 h-4"
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
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Consulting & Support */}
      <section id="consulting" className="py-20 lg:py-28 bg-graphite-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="დამატებითი სერვისები"
            title="კონსულტაცია და მხარდაჭერა"
            description="ლიცენზიის შეძენის მიღმა — გთავაზობთ კონსულტაციას და ტექნიკურ მხარდაჭერას."
            light
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
                title: "კონსულტაცია და რეკომენდაციები",
                description:
                  "გავაანალიზებთ თქვენს ბიზნეს-საჭიროებებს და შემოგთავაზებთ ოპტიმალურ პროდუქტს, გეგმას და ლიცენზიის ტიპს. არ გადაიხადოთ ზედმეტი — აიღეთ ზუსტად ის, რაც გჭირდებათ.",
              },
              {
                icon: "M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21.75",
                title: "Level 1 ტექნიკური მხარდაჭერა",
                description:
                  "პრობლემის შემთხვევაში, პირველი კონტაქტის წერტილი ჩვენ ვართ. გადავჭრით ძირითად საკითხებს და საჭიროებისას, გადაგამისამართებთ ვენდორის პირდაპირ მხარდაჭერაზე.",
              },
              {
                icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
                title: "ლიცენზიების შესყიდვა კომპანიებისთვის",
                description:
                  "სრული შესყიდვის ციკლი — მოთხოვნის მიღებიდან ლიცენზიების აქტივაციამდე. ანგარიშსწორება ლარში, დღგ-ს ჩათვლით ინვოისი.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            გაინტერესებთ კონკრეტული პროდუქტი?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            მოგვწერეთ — მოგამზადებთ პერსონალიზებულ შეთავაზებას თქვენი
            ორგანიზაციისთვის.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-blue-50 shadow-xl transition-all"
            >
              შეთავაზების მოთხოვნა
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
