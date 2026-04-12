import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "სერვისები — Microsoft, AWS, Google ლიცენზიები",
  description:
    "Microsoft 365, Azure, AWS, Google Workspace ლიცენზირება საქართველოში. კონსულტაცია, რეკომენდაციები და ტექნიკური მხარდაჭერა.",
};

const services = [
  {
    id: "microsoft",
    vendor: "Microsoft",
    title: "Microsoft ლიცენზიები",
    description: "კორპორატიული Microsoft პროდუქტების სრული სპექტრი.",
    products: [
      { name: "Microsoft 365", detail: "Word, Excel, Teams, Outlook, OneDrive, SharePoint — Business და Enterprise გეგმები." },
      { name: "Microsoft Azure", detail: "ღრუბლოვანი ინფრასტრუქტურა, ვირტუალური მანქანები, AI სერვისები." },
      { name: "Windows Server & SQL Server", detail: "სერვერული OS და მონაცემთა ბაზები ნებისმიერი მასშტაბისთვის." },
      { name: "Dynamics 365", detail: "ERP და CRM — ბიზნეს-პროცესების ავტომატიზაცია." },
    ],
    audience: "ნებისმიერი ზომის კომპანია, რომელსაც Microsoft-ის ეკოსისტემაში მუშაობა სურს.",
    help: "სწორი გეგმის შერჩევა, ლიცენზიების მართვა, მიგრაცია და ტექნიკური მხარდაჭერა.",
  },
  {
    id: "aws",
    vendor: "Amazon",
    title: "Amazon AWS სერვისები",
    description: "მსოფლიოში ყველაზე ფართო ღრუბლოვანი პლატფორმა.",
    products: [
      { name: "EC2 & Compute", detail: "ვირტუალური სერვერები, Auto Scaling, Load Balancing." },
      { name: "S3 & Storage", detail: "მონაცემთა შენახვა, სარეზერვო ასლები, ფაილური სისტემები." },
      { name: "RDS & Databases", detail: "მართული მონაცემთა ბაზები — MySQL, PostgreSQL, SQL Server." },
      { name: "AI/ML & Analytics", detail: "SageMaker, Bedrock, Redshift, QuickSight." },
    ],
    audience: "ტექნოლოგიური კომპანიები და საწარმოები, რომლებსაც მასშტაბირებადი ინფრასტრუქტურა სჭირდებათ.",
    help: "AWS ანგარიშის მართვა, ხარჯების ოპტიმიზაცია, არქიტექტურული რეკომენდაციები.",
  },
  {
    id: "google",
    vendor: "Google",
    title: "Google სერვისები",
    description: "თანამშრომლობის ინსტრუმენტები და ღრუბლოვანი ტექნოლოგიები.",
    products: [
      { name: "Google Workspace", detail: "Gmail, Drive, Docs, Meet, Calendar — კორპორატიული პაკეტი თქვენი დომენით." },
      { name: "Google Cloud Platform", detail: "Compute Engine, BigQuery, Kubernetes, Cloud Storage." },
      { name: "Google Maps Platform", detail: "რუკები, მარშრუტები და გეოლოკაციის API-ები." },
      { name: "Chrome Enterprise", detail: "მოწყობილობებისა და ბრაუზერის მართვა კორპორატიულ გარემოში." },
    ],
    audience: "კომპანიები, რომლებსაც Google-ის ეკოსისტემა სურთ კომუნიკაციისა და ანალიტიკისთვის.",
    help: "Workspace კონფიგურაცია, დომენის მიბმა, მომხმარებლების მართვა, ტექნიკური კონსულტაცია.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-600 mb-2">სერვისები</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              ლიცენზიები და ღრუბლოვანი გადაწყვეტილებები
            </h1>
            <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
              Microsoft, AWS და Google — ადგილობრივი კონსულტაციით, ლარში ანგარიშსწორებითა და ტექნიკური მხარდაჭერით.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 sm:py-24 ${index % 2 === 1 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="max-w-2xl mb-10">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-600 mb-2">{service.vendor}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-[15px] text-slate-500">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {service.products.map((p) => (
                <div key={p.name} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">{p.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 rounded-xl p-6 mb-8">
              <div>
                <h4 className="text-[13px] font-semibold text-slate-900 mb-1">ვისთვისაა</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{service.audience}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-semibold text-slate-900 mb-1">როგორ გეხმარებით</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{service.help}</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 text-[13px] font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
            >
              {service.vendor} კონსულტაცია &rarr;
            </Link>
          </div>
        </section>
      ))}

      {/* Additional services */}
      <section id="consulting" className="py-20 sm:py-24 bg-navy-900">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-400 mb-2">დამატებითი სერვისები</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">კონსულტაცია და მხარდაჭერა</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "კონსულტაცია", desc: "ბიზნეს-საჭიროებების ანალიზი და ოპტიმალური პროდუქტის შერჩევა. არ გადაიხადოთ ზედმეტი." },
              { title: "L1 ტექნიკური მხარდაჭერა", desc: "ძირითადი საკითხების გადაჭრა ჩვენგან. რთული შემთხვევებისთვის — ვენდორის მხარდაჭერა." },
              { title: "ლიცენზიების შესყიდვა", desc: "მოთხოვნიდან აქტივაციამდე — სრული ციკლი. ლარში ანგარიშსწორება, დღგ-ს ჩათვლით ინვოისი." },
            ].map((item) => (
              <div key={item.title} className="border border-slate-700 rounded-xl p-6">
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">გაინტერესებთ კონკრეტული პროდუქტი?</h2>
          <p className="mt-2 text-[15px] text-slate-500">მოგვწერეთ — მოგამზადებთ პერსონალიზებულ შეთავაზებას.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-5 py-2.5 text-[14px] font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
              შეთავაზების მოთხოვნა
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
