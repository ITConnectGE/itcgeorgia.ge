"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const navKeys = ["home", "about", "services", "benefits", "contact"] as const;
const navPaths = ["/", "/about", "/services", "/benefits", "/contact"];

const localeFlags: Record<Locale, { flag: string; label: string }> = {
  ka: { flag: "🇬🇪", label: "ქართული" },
  en: { flag: "🇬🇧", label: "English" },
  hi: { flag: "🇮🇳", label: "हिन्दी" },
  fa: { flag: "🇮🇷", label: "فارسی" },
  ar: { flag: "🇸🇦", label: "العربية" },
  ru: { flag: "🇷🇺", label: "Русский" },
  uk: { flag: "🇺🇦", label: "Українська" },
  tr: { flag: "🇹🇷", label: "Türkçe" },
  hy: { flag: "🇦🇲", label: "Հayerեn" },
  az: { flag: "🇦🇿", label: "Azərbaycan" },
};

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const prefix = `/${lang}`;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <div className="h-16 w-full shrink-0" />
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl h-full px-5 flex items-center justify-between">
          <Link href={prefix} className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">ITC</span>
            </div>
            <span className="text-slate-900 font-semibold text-sm">ITC Georgia</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((key, i) => (
              <Link
                key={key}
                href={i === 0 ? prefix : `${prefix}${navPaths[i]}`}
                className="px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="text-base leading-none">{localeFlags[lang].flag}</span>
                <span className="text-xs">{localeFlags[lang].label}</span>
                <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 py-1 z-50">
                  {(["ka", "en", "hi", "fa", "ar", "ru", "uk", "tr", "hy", "az"] as Locale[]).map((l) => (
                    <Link
                      key={l}
                      href={`/${l}`}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                        l === lang
                          ? "bg-navy-50 text-navy-700 font-medium"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-base leading-none">{localeFlags[l].flag}</span>
                      <span>{localeFlags[l].label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="tel:032244111" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              032 2 44 11 11
            </Link>
            <Link
              href={`${prefix}/contact`}
              className="px-4 py-2 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
            >
              {dict.nav.consultation}
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 -mr-2" aria-label="Menu">
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pb-4 pt-2">
            <nav className="flex flex-col gap-1">
              {navKeys.map((key, i) => (
                <Link
                  key={key}
                  href={i === 0 ? prefix : `${prefix}${navPaths[i]}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50"
                >
                  {dict.nav[key]}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100 px-3 space-y-3">
              {/* Mobile language switcher */}
              <div className="flex gap-1">
                {(["ka", "en", "hi", "fa", "ar", "ru", "uk", "tr", "hy", "az"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                      l === lang
                        ? "bg-navy-50 text-navy-700 font-medium"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-base leading-none">{localeFlags[l].flag}</span>
                    <span className="text-xs">{localeFlags[l].label}</span>
                  </Link>
                ))}
              </div>
              <Link
                href={`${prefix}/contact`}
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg"
              >
                {dict.nav.consultation}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
