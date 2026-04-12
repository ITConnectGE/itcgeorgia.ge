"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { FlagIcon, localeLabels } from "@/components/flags";

const languages: { code: Locale; nativeCta: string }[] = [
  { code: "ka", nativeCta: "გაგრძელება ქართულად" },
  { code: "en", nativeCta: "Continue in English" },
  { code: "ru", nativeCta: "Продолжить на русском" },
  { code: "uk", nativeCta: "Продовжити українською" },
  { code: "hi", nativeCta: "हिन्दी में जारी रखें" },
  { code: "fa", nativeCta: "ادامه به فارسی" },
  { code: "ar", nativeCta: "المتابعة بالعربية" },
  { code: "tr", nativeCta: "Türkçe ile devam et" },
  { code: "hy", nativeCta: "Շարունակել հայերենով" },
  { code: "az", nativeCta: "Azərbaycanca davam et" },
];

const browserLangMap: Record<string, Locale> = {
  ka: "ka", en: "en", ru: "ru", uk: "uk", hi: "hi",
  fa: "fa", ar: "ar", tr: "tr", hy: "hy", az: "az",
};

export function LanguagePopup() {
  const [show, setShow] = useState(false);
  const [suggestedLang, setSuggestedLang] = useState<Locale | null>(null);

  useEffect(() => {
    if (localStorage.getItem("itc-lang-chosen")) return;
    const browserLang = navigator.language?.split("-")[0]?.toLowerCase() || "";
    const mapped = browserLangMap[browserLang];
    if (browserLang === "ka") {
      localStorage.setItem("itc-lang-chosen", "ka");
      return;
    }
    setSuggestedLang(mapped || "en");
    setShow(true);
  }, []);

  function handleChoose(code: Locale) {
    localStorage.setItem("itc-lang-chosen", code);
    setShow(false);
  }

  function handleDismiss() {
    localStorage.setItem("itc-lang-chosen", "ka");
    setShow(false);
  }

  if (!show) return null;

  const suggested = suggestedLang
    ? languages.find((l) => l.code === suggestedLang)
    : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/20 max-w-sm w-full p-6 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-5">
          <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Choose your language</h3>
          <p className="text-xs text-slate-400 mt-1">აირჩიეთ ენა / Select language</p>
        </div>

        {/* Suggested language */}
        {suggested && (
          <Link
            href={`/${suggested.code}`}
            onClick={() => handleChoose(suggested.code)}
            className="flex items-center gap-3 w-full px-4 py-3 mb-3 bg-navy-50 border border-navy-100 rounded-xl text-left hover:bg-navy-100 transition-colors"
          >
            <FlagIcon locale={suggested.code} className="w-7 h-5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-navy-900">{suggested.nativeCta}</p>
              <p className="text-xs text-navy-500">{localeLabels[suggested.code]}</p>
            </div>
            <svg className="w-4 h-4 text-navy-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        )}

        {/* All languages grid */}
        <div className="grid grid-cols-2 gap-1">
          {languages
            .filter((l) => l.code !== suggestedLang)
            .map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                onClick={() => handleChoose(l.code)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <FlagIcon locale={l.code} className="w-5 h-3.5" />
                <span>{localeLabels[l.code]}</span>
              </Link>
            ))}
        </div>

        <button
          onClick={handleDismiss}
          className="w-full mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400 hover:text-slate-600 transition-colors text-center"
        >
          გაგრძელება ქართულად
        </button>
      </div>
    </div>
  );
}
