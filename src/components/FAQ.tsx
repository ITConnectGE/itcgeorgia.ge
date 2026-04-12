"use client";

import { useState } from "react";

interface FAQProps {
  items: { q: string; a: string }[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b border-slate-200">
          <button
            type="button"
            className="flex w-full items-center justify-between py-4 text-left text-base font-medium"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.q}</span>
            <svg
              className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
            }}
          >
            <p className="pb-4 text-sm">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
