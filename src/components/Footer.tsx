import Link from "next/link";

const footerLinks = {
  company: [
    { name: "ჩვენ შესახებ", href: "/about" },
    { name: "სერვისები", href: "/services" },
    { name: "რატომ ჩვენ", href: "/benefits" },
    { name: "კონტაქტი", href: "/contact" },
  ],
  services: [
    { name: "Microsoft ლიცენზიები", href: "/services#microsoft" },
    { name: "Amazon AWS", href: "/services#aws" },
    { name: "Google სერვისები", href: "/services#google" },
    { name: "კონსულტაცია", href: "/services#consulting" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-graphite-900 text-graphite-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">ITC</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ITC Georgia
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-graphite-400 max-w-xs">
              Microsoft, Amazon AWS და Google პროდუქტების ოფიციალური რესელერი
              საქართველოში. ადგილობრივი მხარდაჭერა, ანგარიშსწორება ლარში.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              კომპანია
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-graphite-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              სერვისები
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-graphite-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              კონტაქტი
            </h3>
            <ul className="space-y-3 text-sm text-graphite-400">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-graphite-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>
                  თბილისი, ჭავჭავაძის გამზირი 37მ,
                  <br />
                  აქსის თაუერი, მე-5 სართული
                </span>
              </li>
              <li>
                <Link
                  href="tel:032244111"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-graphite-500 shrink-0"
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
              </li>
              <li>
                <Link
                  href="mailto:info@itcgeorgia.ge"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-graphite-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@itcgeorgia.ge
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-graphite-500">
            &copy; {new Date().getFullYear()} შპს აითისი ჯორჯია. ყველა უფლება
            დაცულია.
          </p>
          <div className="flex items-center gap-6 text-xs text-graphite-500">
            <span>Microsoft Partner</span>
            <span className="w-1 h-1 bg-graphite-700 rounded-full" />
            <span>AWS Partner</span>
            <span className="w-1 h-1 bg-graphite-700 rounded-full" />
            <span>Google Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
