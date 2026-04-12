"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "მთავარი", href: "/" },
  { name: "ჩვენ შესახებ", href: "/about" },
  { name: "სერვისები", href: "/services" },
  { name: "რატომ ჩვენ", href: "/benefits" },
  { name: "კონტაქტი", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 w-full shrink-0" />

      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl h-full px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">ITC</span>
            </div>
            <span className="text-slate-900 font-semibold text-sm">
              ITC Georgia
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="tel:032244111"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              032 2 44 11 11
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors"
            >
              კონსულტაცია
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2"
            aria-label="მენიუ"
          >
            <svg
              className="w-5 h-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pb-4 pt-2">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100 px-3 flex flex-col gap-3">
              <Link href="tel:032244111" className="text-sm text-slate-500">
                032 2 44 11 11
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-center px-4 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg"
              >
                კონსულტაცია
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
