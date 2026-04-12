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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-graphite-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl flex items-center justify-center shadow-lg shadow-brand-600/20 group-hover:shadow-brand-600/30 transition-shadow">
              <span className="text-white font-bold text-sm tracking-tight">
                ITC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-graphite-900 font-bold text-lg leading-tight tracking-tight">
                ITC Georgia
              </span>
              <span className="text-graphite-400 text-[10px] tracking-widest uppercase leading-tight">
                Technology Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-graphite-600 hover:text-graphite-900 rounded-lg hover:bg-graphite-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:032244111"
              className="text-sm font-medium text-graphite-600 hover:text-graphite-900 transition-colors"
            >
              032 2 44 11 11
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl hover:from-brand-700 hover:to-brand-800 shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transition-all"
            >
              კონსულტაცია
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-graphite-50 transition-colors"
            aria-label="მენიუ"
          >
            <svg
              className="w-6 h-6 text-graphite-700"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-graphite-100">
            <nav className="flex flex-col gap-1 mt-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-graphite-700 hover:text-graphite-900 rounded-xl hover:bg-graphite-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-4 flex flex-col gap-3">
              <Link
                href="tel:032244111"
                className="text-base font-medium text-graphite-600"
              >
                032 2 44 11 11
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl shadow-lg shadow-brand-600/20"
              >
                კონსულტაციის მოთხოვნა
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
