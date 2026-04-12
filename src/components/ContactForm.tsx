"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const c = dict.contact;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-600 mb-2">{c.label}</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {c.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                  <svg className="w-10 h-10 text-navy-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{c.successTitle}</h3>
                  <p className="text-sm text-slate-500">{c.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">{c.name}</label>
                      <input type="text" id="name" name="name" required
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder={c.namePlaceholder} />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">{c.companyLabel}</label>
                      <input type="text" id="company" name="company"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder={c.companyPlaceholder} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">{c.email}</label>
                      <input type="email" id="email" name="email" required
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="info@company.ge" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">{c.phone}</label>
                      <input type="tel" id="phone" name="phone"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="+995 XXX XX XX XX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1.5">{c.interest}</label>
                    <select id="interest" name="interest"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all">
                      {c.interestOptions.map((option, i) => (
                        <option key={i} value={i === 0 ? "" : option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">{c.message}</label>
                    <textarea id="message" name="message" rows={4} required
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all resize-y"
                      placeholder={c.messagePlaceholder} />
                  </div>

                  <button type="submit"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
                    {c.send}
                  </button>
                </form>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{c.infoTitle}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">{c.phoneLabel}</p>
                      <a href="tel:032244111" className="text-sm font-medium text-slate-900 hover:text-navy-600 transition-colors">032 2 44 11 11</a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">{c.emailLabel}</p>
                      <a href="mailto:info@itcgeorgia.ge" className="text-sm font-medium text-slate-900 hover:text-navy-600 transition-colors">info@itcgeorgia.ge</a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">{c.addressLabel}</p>
                      <p className="text-sm font-medium text-slate-900">{dict.footer.address[0]}</p>
                      <p className="text-sm text-slate-500">{dict.footer.address[1]}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">{c.hours}</h4>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{c.weekdays}</span>
                      <span className="font-medium text-slate-700">{c.weekdaysTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{c.weekend}</span>
                      <span className="text-slate-400">{c.weekendTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
