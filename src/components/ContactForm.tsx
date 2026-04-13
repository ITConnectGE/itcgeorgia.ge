"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement): boolean {
    const errs: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const isKa = dict.contact.label === "კონტაქტი";

    if (!name) errs.name = isKa ? "სახელი სავალდებულოა" : "Name is required";
    if (!email) errs.email = isKa ? "ელ-ფოსტა სავალდებულოა" : "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = isKa ? "არასწორი ელ-ფოსტის ფორმატი" : "Invalid email format";
    if (!message) errs.message = isKa ? "მესიჯი სავალდებულოა" : "Message is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot check
    const hp = (form.elements.namedItem("website_url") as HTMLInputElement).value;
    if (hp) return;

    if (!validate(form)) return;

    setLoading(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  const c = dict.contact;
  const inputClass = "w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all focus-visible:ring-2 focus-visible:ring-navy-500/40";
  const errorInputClass = "border-red-300 focus:ring-red-500/20 focus:border-red-500";

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-azure-600 mb-2">{c.label}</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">{c.title}</h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">{c.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <svg className="w-10 h-10 text-emerald-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{c.successTitle}</h3>
                  <p className="text-sm text-slate-500">{c.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website_url">Website</label>
                    <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">{c.name}</label>
                      <input type="text" id="name" name="name"
                        className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
                        placeholder={c.namePlaceholder} />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">{c.companyLabel}</label>
                      <input type="text" id="company" name="company" className={inputClass} placeholder={c.companyPlaceholder} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">{c.email}</label>
                      <input type="email" id="email" name="email"
                        className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                        placeholder="info@company.ge" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">{c.phone}</label>
                      <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+995 XXX XX XX XX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1.5">{c.interest}</label>
                    <select id="interest" name="interest" className={inputClass}>
                      {c.interestOptions.map((option, i) => (
                        <option key={i} value={i === 0 ? "" : option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">{c.message}</label>
                    <textarea id="message" name="message" rows={4}
                      className={`${inputClass} resize-y ${errors.message ? errorInputClass : ""}`}
                      placeholder={c.messagePlaceholder} />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-navy-500/40 focus-visible:ring-offset-2">
                    {loading && (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {loading ? (c.label === "კონტაქტი" ? "იგზავნება..." : "Sending...") : c.send}
                  </button>
                </form>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* SLA badge */}
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-emerald-700">
                    {c.label === "კონტაქტი" ? "პასუხობთ 24 საათში სამუშაო დღეს" : "Response within 24 business hours"}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{c.infoTitle}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">{c.phoneLabel}</p>
                      <a href="tel:+995322420710" className="text-sm font-medium text-slate-900 hover:text-navy-600 transition-colors">+995 32 2 420 710</a>
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

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.7683!3d41.7151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU0LjQiTiA0NMKwNDYnMDUuOSJF!5e0!3m2!1ska!2sge!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ITC Georgia - Axis Tower, Tbilisi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
