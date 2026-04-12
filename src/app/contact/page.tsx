"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
              კონტაქტი
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              დაგვიკავშირდით
            </h1>
            <p className="mt-6 text-lg text-graphite-300 leading-relaxed">
              გაინტერესებთ ლიცენზიების შეძენა ან გჭირდებათ კონსულტაცია? მოგვწერეთ
              ან დაგვირეკეთ — გიპასუხებთ სამუშაო დღეს, 24 საათის განმავლობაში.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-graphite-900 mb-2">
                მოგვწერეთ
              </h2>
              <p className="text-graphite-500 mb-8">
                შეავსეთ ფორმა და ჩვენი გუნდი დაგიკავშირდებათ მოკლე ვადაში.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-graphite-900 mb-2">
                    მესიჯი გაიგზავნა
                  </h3>
                  <p className="text-graphite-600">
                    მადლობა, რომ დაგვიკავშირდით. ჩვენი გუნდი გიპასუხებთ სამუშაო
                    დღეს, 24 საათის განმავლობაში.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-graphite-700 mb-2"
                      >
                        სახელი და გვარი
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="თქვენი სახელი"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-graphite-700 mb-2"
                      >
                        კომპანია
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="კომპანიის სახელი"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-graphite-700 mb-2"
                      >
                        ელ-ფოსტა
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="info@company.ge"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-graphite-700 mb-2"
                      >
                        ტელეფონი
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="+995 XXX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-graphite-700 mb-2"
                    >
                      რა გაინტერესებთ
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    >
                      <option value="">აირჩიეთ...</option>
                      <option value="microsoft">Microsoft ლიცენზიები</option>
                      <option value="aws">Amazon AWS სერვისები</option>
                      <option value="google">Google სერვისები</option>
                      <option value="consultation">ზოგადი კონსულტაცია</option>
                      <option value="other">სხვა</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-graphite-700 mb-2"
                    >
                      მესიჯი
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white border border-graphite-200 rounded-xl text-graphite-900 placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-y"
                      placeholder="მოგვიყევით თქვენი საჭიროებების შესახებ..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl hover:from-brand-700 hover:to-brand-800 shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transition-all"
                  >
                    გაგზავნა
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-graphite-900 mb-6">
                    საკონტაქტო ინფორმაცია
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-brand-600"
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
                      </div>
                      <div>
                        <p className="text-sm font-medium text-graphite-500">
                          ტელეფონი
                        </p>
                        <a
                          href="tel:032244111"
                          className="text-graphite-900 font-semibold hover:text-brand-600 transition-colors"
                        >
                          032 2 44 11 11
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-brand-600"
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
                      </div>
                      <div>
                        <p className="text-sm font-medium text-graphite-500">
                          ელ-ფოსტა
                        </p>
                        <a
                          href="mailto:info@itcgeorgia.ge"
                          className="text-graphite-900 font-semibold hover:text-brand-600 transition-colors"
                        >
                          info@itcgeorgia.ge
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-brand-600"
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
                      </div>
                      <div>
                        <p className="text-sm font-medium text-graphite-500">
                          მისამართი
                        </p>
                        <p className="text-graphite-900 font-semibold">
                          თბილისი, ჭავჭავაძის გამზირი 37მ
                        </p>
                        <p className="text-sm text-graphite-500">
                          აქსის თაუერი, მე-5 სართული
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working hours */}
                <div className="bg-graphite-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-graphite-900 mb-3">
                    სამუშაო საათები
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-graphite-600">
                      <span>ორშაბათი — პარასკევი</span>
                      <span className="font-medium text-graphite-900">
                        10:00 — 19:00
                      </span>
                    </div>
                    <div className="flex justify-between text-graphite-600">
                      <span>შაბათი — კვირა</span>
                      <span className="font-medium text-graphite-400">
                        დასვენება
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-graphite-100 rounded-2xl overflow-hidden h-56 flex items-center justify-center">
                  <div className="text-center text-graphite-400">
                    <svg
                      className="w-10 h-10 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
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
                    <p className="text-sm">
                      ჭავჭავაძის გამზირი 37მ, აქსის თაუერი
                    </p>
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
