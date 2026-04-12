import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-graphite-300 tracking-wide">
                Microsoft &middot; AWS &middot; Google ოფიციალური რესელერი
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              პროგრამული ლიცენზიები
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                ადგილობრივი პარტნიორისგან
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-graphite-300 leading-relaxed max-w-2xl">
              შეიძინეთ Microsoft, AWS და Google ლიცენზიები საქართველოში —
              გადაიხადეთ ლარში, მიიღეთ დღგ-ს ჩათვლით ანგარიშფაქტურა და
              ისარგებლეთ ადგილობრივი კონსულტაციით და მხარდაჭერით.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl hover:from-brand-700 hover:to-brand-800 shadow-xl shadow-brand-600/25 hover:shadow-brand-600/35 transition-all"
              >
                კონსულტაციის მოთხოვნა
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
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                სერვისების ნახვა
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-4">
              {[
                "ანგარიშსწორება ლარში",
                "დღგ-ს ჩათვლით ინვოისი",
                "ადგილობრივი მხარდაჭერა",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                  <span className="text-sm text-graphite-400">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-graphite-50 border-y border-graphite-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-graphite-400 uppercase tracking-widest mb-10">
            ოფიციალური პარტნიორები
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            <div className="flex items-center gap-3 text-graphite-400 hover:text-graphite-600 transition-colors">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z" />
              </svg>
              <span className="text-xl font-semibold tracking-tight">
                Microsoft
              </span>
            </div>
            <div className="flex items-center gap-3 text-graphite-400 hover:text-graphite-600 transition-colors">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104a6.37 6.37 0 00-.862.288 2.3 2.3 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.593 4.593 0 011-.36 4.84 4.84 0 011.229-.152c.94 0 1.627.216 2.07.638.439.423.662 1.062.662 1.916v2.525zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.128 0 .2.064.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 01-.312.08h-.687c-.152 0-.256-.024-.32-.08-.063-.056-.119-.16-.15-.32L13.553 6.64l-1.23 5.196c-.04.16-.087.264-.15.32-.064.056-.176.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.504.504 0 01-.048-.224v-.407c0-.167.064-.248.183-.248.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415A3.48 3.48 0 0118.123 6c.207 0 .422.016.638.04.215.032.415.072.606.12.184.056.36.112.52.176.16.064.287.128.383.192a.838.838 0 01.28.24.545.545 0 01.072.287v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.072-1.062.223-.248.152-.375.384-.375.695 0 .224.08.416.24.567.159.152.454.304.878.44l1.133.358c.574.184.99.44 1.237.767.248.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.165 2.165 0 01-.575.695c-.247.2-.543.343-.886.44-.36.104-.735.152-1.142.152z" />
                <path d="M21.698 16.88c-2.678 1.978-6.558 3.03-9.897 3.03-4.68 0-8.895-1.733-12.088-4.616-.25-.224-.024-.535.28-.36 3.448 2.006 7.71 3.215 12.111 3.215 2.97 0 6.232-.614 9.233-1.893.455-.2.838.295.36.623z" />
                <path d="M22.713 15.716c-.343-.44-2.262-.208-3.127-.104-.263.032-.303-.2-.064-.367 1.53-1.078 4.04-.766 4.332-.407.296.368-.08 2.886-1.51 4.093-.216.183-.423.088-.327-.152.32-.79 1.038-2.622.695-3.063z" />
              </svg>
              <span className="text-xl font-semibold tracking-tight">AWS</span>
            </div>
            <div className="flex items-center gap-3 text-graphite-400 hover:text-graphite-600 transition-colors">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-xl font-semibold tracking-tight">
                Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="სერვისები"
            title="ყველაფერი რაც თქვენს ბიზნესს სჭირდება"
            description="Microsoft, Amazon AWS და Google პროდუქტების ლიცენზირება, კონსულტაცია და ტექნიკური მხარდაჭერა — ერთი პარტნიორისგან."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                color: "blue",
                icon: "M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z",
                title: "Microsoft ლიცენზიები",
                description:
                  "Microsoft 365, Azure, Windows Server, SQL Server და სხვა კორპორატიული პროდუქტების ლიცენზირება. ბიზნესზე მორგებული გადაწყვეტილებები.",
                href: "/services#microsoft",
              },
              {
                color: "orange",
                icon: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104a6.37 6.37 0 00-.862.288 2.3 2.3 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.593 4.593 0 011-.36 4.84 4.84 0 011.229-.152c.94 0 1.627.216 2.07.638.439.423.662 1.062.662 1.916v2.525z",
                title: "Amazon AWS სერვისები",
                description:
                  "ღრუბლოვანი ინფრასტრუქტურა, კომპიუტინგი, შენახვა და AI/ML სერვისები. მოქნილი და მასშტაბირებადი გადაწყვეტილებები ნებისმიერი ზომის ბიზნესისთვის.",
                href: "/services#aws",
              },
              {
                color: "green",
                icon: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                title: "Google სერვისები",
                description:
                  "Google Workspace, Google Cloud Platform და სხვა სერვისები. თანამშრომლობის ინსტრუმენტები და ღრუბლოვანი ტექნოლოგიები თქვენი გუნდისთვის.",
                href: "/services#google",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative bg-white border border-graphite-200 rounded-2xl p-8 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5 transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-xl flex items-center justify-center mb-6`}
                >
                  <svg
                    className={`w-7 h-7 text-${service.color}-600`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-graphite-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-graphite-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors"
                >
                  დეტალურად
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-graphite-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="უპირატესობები"
            title="რატომ ადგილობრივი პარტნიორისგან?"
            description="საერთაშორისო ვენდორისგან პირდაპირ შეძენის ნაცვლად, ადგილობრივი რესელერისგან ყიდვას რეალური ბიზნეს-უპირატესობები აქვს."
            light
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
                title: "ანგარიშსწორება ლარში",
                description:
                  "გადაიხადეთ ეროვნულ ვალუტაში, გადარიცხვის საკომისიოს და ვალუტის კონვერტაციის ხარჯების გარეშე.",
              },
              {
                icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
                title: "დღგ-ს ჩათვლით ინვოისი",
                description:
                  "მიიღეთ ქართული კანონმდებლობის შესაბამისი ანგარიშფაქტურა დღგ-ს ჩათვლით, რაც ამარტივებს ბუღალტერიას.",
              },
              {
                icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
                title: "ქართულენოვანი კომუნიკაცია",
                description:
                  "დაგვიკავშირდით ქართულად. ადგილობრივ წარმომადგენელთან ურთიერთობა ბევრად მარტივია.",
              },
              {
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
                title: "კონსულტაცია და რეკომენდაციები",
                description:
                  "გეხმარებით სწორი პროდუქტის და ლიცენზიის ტიპის შერჩევაში, თქვენი ბიზნეს-საჭიროებების გათვალისწინებით.",
              },
              {
                icon: "M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21.75m-7.5 9.75v-2.625c0-1.036.84-1.875 1.875-1.875H21.75",
                title: "Level 1 ტექნიკური მხარდაჭერა",
                description:
                  "პირველი დონის ტექნიკურ მხარდაჭერას ჩვენგან მიიღებთ. საჭიროებისას, ვენდორის პირდაპირ მხარდაჭერაზეც გაქვთ წვდომა.",
              },
              {
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                title: "მარტივი შეძენის პროცესი",
                description:
                  "არანაირი რთული საერთაშორისო ტრანზაქციები. მარტივი, გამჭვირვალე და სწრაფი შეძენის პროცესი თავიდან ბოლომდე.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all"
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
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-graphite-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/benefits"
              className="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              ყველა უპირატესობა
              <svg
                className="ml-1 w-4 h-4"
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

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="როგორ მუშაობს"
            title="მარტივი პროცესი, საიმედო შედეგი"
            description="ლიცენზიის შეძენა რამდენიმე მარტივ ნაბიჯში — კონსულტაციიდან მხარდაჭერამდე."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {[
              {
                step: "01",
                title: "კონსულტაცია",
                description:
                  "დაგვიკავშირდით და მოგვიყევით თქვენი ბიზნეს-საჭიროებების შესახებ.",
              },
              {
                step: "02",
                title: "რეკომენდაცია",
                description:
                  "შემოგთავაზებთ თქვენზე მორგებულ პროდუქტებს და ლიცენზიის ტიპებს.",
              },
              {
                step: "03",
                title: "შეთავაზება",
                description:
                  "მიიღებთ დეტალურ ფასის შეთავაზებას ლარში, დღგ-ს ჩათვლით.",
              },
              {
                step: "04",
                title: "შეძენა",
                description:
                  "ხელშეკრულების გაფორმება და ლიცენზიების აქტივაცია მოკლე ვადაში.",
              },
              {
                step: "05",
                title: "მხარდაჭერა",
                description:
                  "უწყვეტი ტექნიკური მხარდაჭერა და კონსულტაცია შეძენის შემდეგაც.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center lg:text-left">
                <span className="text-5xl font-bold text-graphite-100 leading-none">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            მზად ხართ დასაწყებად?
          </h2>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            მოგვწერეთ ან დაგვირეკეთ — გიპასუხებთ სამუშაო დღეს, 24 საათის
            განმავლობაში. კონსულტაცია უფასოა.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-blue-50 shadow-xl shadow-brand-900/20 transition-all"
            >
              კონსულტაციის მოთხოვნა
            </Link>
            <Link
              href="tel:032244111"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              032 2 44 11 11
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
