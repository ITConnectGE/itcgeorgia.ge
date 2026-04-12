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
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-navy-600 mb-2">კონტაქტი</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              დაგვიკავშირდით
            </h1>
            <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
              გაინტერესებთ ლიცენზიების შეძენა ან გჭირდებათ კონსულტაცია? მოგვწერეთ — გიპასუხებთ სამუშაო დღეს, 24 საათში.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                  <svg className="w-10 h-10 text-navy-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">მესიჯი გაიგზავნა</h3>
                  <p className="text-[14px] text-slate-500">გიპასუხებთ სამუშაო დღეს, 24 საათის განმავლობაში.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-slate-700 mb-1.5">სახელი და გვარი</label>
                      <input type="text" id="name" name="name" required
                        className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="თქვენი სახელი" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[13px] font-medium text-slate-700 mb-1.5">კომპანია</label>
                      <input type="text" id="company" name="company"
                        className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="კომპანიის სახელი" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-medium text-slate-700 mb-1.5">ელ-ფოსტა</label>
                      <input type="email" id="email" name="email" required
                        className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="info@company.ge" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[13px] font-medium text-slate-700 mb-1.5">ტელეფონი</label>
                      <input type="tel" id="phone" name="phone"
                        className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all"
                        placeholder="+995 XXX XX XX XX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-[13px] font-medium text-slate-700 mb-1.5">რა გაინტერესებთ</label>
                    <select id="interest" name="interest"
                      className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all">
                      <option value="">აირჩიეთ...</option>
                      <option value="microsoft">Microsoft ლიცენზიები</option>
                      <option value="aws">Amazon AWS სერვისები</option>
                      <option value="google">Google სერვისები</option>
                      <option value="consultation">ზოგადი კონსულტაცია</option>
                      <option value="other">სხვა</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[13px] font-medium text-slate-700 mb-1.5">მესიჯი</label>
                    <textarea id="message" name="message" rows={4} required
                      className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-all resize-y"
                      placeholder="მოგვიყევით თქვენი საჭიროებების შესახებ..." />
                  </div>

                  <button type="submit"
                    className="px-5 py-2.5 text-[14px] font-medium text-white bg-navy-900 rounded-lg hover:bg-navy-800 transition-colors">
                    გაგზავნა
                  </button>
                </form>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-4">საკონტაქტო ინფორმაცია</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[12px] text-slate-400 mb-0.5">ტელეფონი</p>
                      <a href="tel:032244111" className="text-[14px] font-medium text-slate-900 hover:text-navy-600 transition-colors">032 2 44 11 11</a>
                    </div>
                    <div>
                      <p className="text-[12px] text-slate-400 mb-0.5">ელ-ფოსტა</p>
                      <a href="mailto:info@itcgeorgia.ge" className="text-[14px] font-medium text-slate-900 hover:text-navy-600 transition-colors">info@itcgeorgia.ge</a>
                    </div>
                    <div>
                      <p className="text-[12px] text-slate-400 mb-0.5">მისამართი</p>
                      <p className="text-[14px] font-medium text-slate-900">თბილისი, ჭავჭავაძის გამზირი 37მ</p>
                      <p className="text-[13px] text-slate-500">აქსის თაუერი, მე-5 სართული</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5">
                  <h4 className="text-[13px] font-semibold text-slate-900 mb-3">სამუშაო საათები</h4>
                  <div className="space-y-1.5 text-[13px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">ორშაბათი — პარასკევი</span>
                      <span className="font-medium text-slate-700">10:00 — 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">შაბათი — კვირა</span>
                      <span className="text-slate-400">დასვენება</span>
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
