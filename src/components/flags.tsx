import type { Locale } from "@/lib/i18n";

function Flag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg className={`shrink-0 rounded-sm overflow-hidden ${className}`} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

function GE({ className }: { className?: string }) {
  return (
    <svg className={`shrink-0 rounded-sm overflow-hidden ${className}`} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" fill="#f00">
      <path fill="#fff" d="M0 0h30v20H0z" />
      <path d="M13 0h4v20h-4zM0 8h30v4H0z" />
      {/* Top-left cross */}
      <path d="M5.7968 1.954a5.4 5.4 0 0 0 1.4064 0 10.4 10.4 0 0 0 0 4.092 5.4 5.4 0 0 0-1.4064 0 10.4 10.4 0 0 0 0-4.092z" />
      <path d="M4.5468 3.204a5.4 5.4 0 0 0 0 1.4064 10.4 10.4 0 0 0 4.092 0 5.4 5.4 0 0 0 0-1.4064 10.4 10.4 0 0 0-4.092 0z" />
      {/* Top-right cross */}
      <path d="M22.7968 1.954a5.4 5.4 0 0 0 1.4064 0 10.4 10.4 0 0 0 0 4.092 5.4 5.4 0 0 0-1.4064 0 10.4 10.4 0 0 0 0-4.092z" />
      <path d="M21.5468 3.204a5.4 5.4 0 0 0 0 1.4064 10.4 10.4 0 0 0 4.092 0 5.4 5.4 0 0 0 0-1.4064 10.4 10.4 0 0 0-4.092 0z" />
      {/* Bottom-left cross */}
      <path d="M5.7968 13.954a5.4 5.4 0 0 0 1.4064 0 10.4 10.4 0 0 0 0 4.092 5.4 5.4 0 0 0-1.4064 0 10.4 10.4 0 0 0 0-4.092z" />
      <path d="M4.5468 15.204a5.4 5.4 0 0 0 0 1.4064 10.4 10.4 0 0 0 4.092 0 5.4 5.4 0 0 0 0-1.4064 10.4 10.4 0 0 0-4.092 0z" />
      {/* Bottom-right cross */}
      <path d="M22.7968 13.954a5.4 5.4 0 0 0 1.4064 0 10.4 10.4 0 0 0 0 4.092 5.4 5.4 0 0 0-1.4064 0 10.4 10.4 0 0 0 0-4.092z" />
      <path d="M21.5468 15.204a5.4 5.4 0 0 0 0 1.4064 10.4 10.4 0 0 0 4.092 0 5.4 5.4 0 0 0 0-1.4064 10.4 10.4 0 0 0-4.092 0z" />
    </svg>
  );
}

function GB({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="480" fill="#012169" />
      <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" fill="#fff" />
      <path d="M424 281l216 159v40L369 281zM241 301l-6 35L437 480H480zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z" fill="#C8102E" />
      <path d="M241 0v480h160V0zM0 160v160h640V160z" fill="#fff" />
      <path d="M0 193v96h640v-96zM273 0v480h96V0z" fill="#C8102E" />
    </Flag>
  );
}

function IN({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="160" fill="#FF9933" />
      <rect width="640" height="160" y="160" fill="#fff" />
      <rect width="640" height="160" y="320" fill="#138808" />
      <circle cx="320" cy="240" r="48" fill="#000080" />
      <circle cx="320" cy="240" r="44" fill="#fff" />
      <circle cx="320" cy="240" r="10" fill="#000080" />
    </Flag>
  );
}

function IR({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="160" fill="#239F40" />
      <rect width="640" height="160" y="160" fill="#fff" />
      <rect width="640" height="160" y="320" fill="#DA0000" />
      <rect width="640" height="4" y="158" fill="#DA0000" opacity="0.3" />
      <rect width="640" height="4" y="318" fill="#239F40" opacity="0.3" />
    </Flag>
  );
}

function SA({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="480" fill="#006C35" />
      <rect x="160" y="160" width="320" height="160" rx="8" fill="none" stroke="#fff" strokeWidth="3" opacity="0.5" />
      <path d="M260 220h120M260 260h120" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M320 200v80" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </Flag>
  );
}

function RU({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="160" fill="#fff" />
      <rect width="640" height="160" y="160" fill="#0039A6" />
      <rect width="640" height="160" y="320" fill="#D52B1E" />
    </Flag>
  );
}

function UA({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="240" fill="#0057B7" />
      <rect width="640" height="240" y="240" fill="#FFD700" />
    </Flag>
  );
}

function TR({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="480" fill="#E30A17" />
      <circle cx="240" cy="240" r="100" fill="#fff" />
      <circle cx="260" cy="240" r="80" fill="#E30A17" />
      <polygon points="340,240 360,210 330,230 370,230 340,210" fill="#fff" transform="translate(10,0) scale(1.5) translate(-340,-240) translate(340,240)" />
      <path d="M340 185l15 46h48l-39 28 15 46-39-28-39 28 15-46-39-28h48z" fill="#fff" transform="translate(20,0)" />
    </Flag>
  );
}

function AM({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="160" fill="#D90012" />
      <rect width="640" height="160" y="160" fill="#0033A0" />
      <rect width="640" height="160" y="320" fill="#F2A800" />
    </Flag>
  );
}

function AZ({ className }: { className?: string }) {
  return (
    <Flag className={className}>
      <rect width="640" height="160" fill="#0098C3" />
      <rect width="640" height="160" y="160" fill="#E00034" />
      <rect width="640" height="160" y="320" fill="#00AE65" />
      <circle cx="300" cy="240" r="60" fill="#fff" />
      <circle cx="316" cy="240" r="50" fill="#E00034" />
      <polygon points="360,215 370,240 360,265 385,248 335,248" fill="#fff" />
    </Flag>
  );
}

const flagComponents: Record<Locale, React.FC<{ className?: string }>> = {
  ka: GE,
  en: GB,
  hi: IN,
  fa: IR,
  ar: SA,
  ru: RU,
  uk: UA,
  tr: TR,
  hy: AM,
  az: AZ,
};

export function FlagIcon({ locale, className = "w-5 h-3.5" }: { locale: Locale; className?: string }) {
  const Comp = flagComponents[locale];
  return <Comp className={className} />;
}

export const localeLabels: Record<Locale, string> = {
  ka: "ქართული",
  en: "English",
  hi: "हिन्दी",
  fa: "فارسی",
  ar: "العربية",
  ru: "Русский",
  uk: "Українська",
  tr: "Türkçe",
  hy: "Հայերեն",
  az: "Azərbaycan",
};
