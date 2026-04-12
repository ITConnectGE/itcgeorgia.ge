import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const p = `/${lang}`;
  const f = dict.footer;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href={p} className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">ITC</span>
              </div>
              <span className="text-slate-900 font-semibold text-sm">ITC Georgia</span>
            </Link>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-[240px]">{f.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{f.company}</h4>
            <ul className="space-y-2.5">
              {[
                { name: dict.nav.about, href: `${p}/about` },
                { name: dict.nav.services, href: `${p}/services` },
                { name: dict.nav.benefits, href: `${p}/benefits` },
                { name: dict.nav.contact, href: `${p}/contact` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-800 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{f.servicesLabel}</h4>
            <ul className="space-y-2.5">
              {[
                { name: f.msLicenses, href: `${p}/services/microsoft` },
                { name: "Amazon AWS", href: `${p}/services/aws` },
                { name: f.googleServices, href: `${p}/services/google` },
                { name: f.consultationLabel, href: `${p}/services#consulting` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-800 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{f.contactLabel}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>032 2 44 11 11</li>
              <li>info@itcgeorgia.ge</li>
              <li className="leading-relaxed">
                {f.address[0]}<br />{f.address[1]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} {f.copyright}</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Microsoft Partner</span>
            <span>AWS Partner</span>
            <span>Google Partner</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://itconnect.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-300 hover:text-slate-500 transition-colors"
          >
            Website by itconnect.ge
          </a>
        </div>
      </div>
    </footer>
  );
}
