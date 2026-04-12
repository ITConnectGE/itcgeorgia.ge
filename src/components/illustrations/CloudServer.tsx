export function CloudServer({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <path d="M310 140c0-33.1-26.9-60-60-60-5.5 0-10.8.7-15.9 2.1C222.7 57.4 199.4 40 172 40c-33.1 0-60 26.9-60 60 0 2.7.2 5.3.5 7.9C94.1 112.9 80 130.5 80 152c0 26.5 21.5 48 48 48h174c22.1 0 40-17.9 40-40 0-8.3-2.5-16-6.8-22.4" fill="#2563eb" opacity="0.08"/>
      <path d="M310 140c0-33.1-26.9-60-60-60-5.5 0-10.8.7-15.9 2.1C222.7 57.4 199.4 40 172 40c-33.1 0-60 26.9-60 60 0 2.7.2 5.3.5 7.9C94.1 112.9 80 130.5 80 152c0 26.5 21.5 48 48 48h174c22.1 0 40-17.9 40-40 0-8.3-2.5-16-6.8-22.4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>

      {/* Server rack */}
      <rect x="140" y="170" width="120" height="90" rx="8" fill="white" stroke="#2563eb" strokeWidth="2"/>
      <line x1="140" y1="200" x2="260" y2="200" stroke="#2563eb" strokeWidth="1.5" opacity="0.3"/>
      <line x1="140" y1="230" x2="260" y2="230" stroke="#2563eb" strokeWidth="1.5" opacity="0.3"/>

      {/* Server indicators */}
      <circle cx="158" cy="185" r="4" fill="#2563eb"/>
      <circle cx="172" cy="185" r="4" fill="#2563eb" opacity="0.4"/>
      <rect x="200" y="182" width="46" height="6" rx="3" fill="#2563eb" opacity="0.15"/>

      <circle cx="158" cy="215" r="4" fill="#2563eb"/>
      <circle cx="172" cy="215" r="4" fill="#2563eb" opacity="0.4"/>
      <rect x="200" y="212" width="46" height="6" rx="3" fill="#2563eb" opacity="0.15"/>

      <circle cx="158" cy="245" r="4" fill="#2563eb" opacity="0.6"/>
      <circle cx="172" cy="245" r="4" fill="#2563eb" opacity="0.2"/>
      <rect x="200" y="242" width="46" height="6" rx="3" fill="#2563eb" opacity="0.15"/>

      {/* Connection lines to cloud */}
      <path d="M180 170V155" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
      <path d="M200 170V148" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
      <path d="M220 170V155" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>

      {/* Floating elements */}
      <rect x="290" y="90" width="40" height="28" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" opacity="0.7"/>
      <path d="M300 99h20M300 108h14" stroke="#2563eb" strokeWidth="1.5" opacity="0.4"/>

      <rect x="60" y="100" width="36" height="28" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" opacity="0.7"/>
      <path d="M69 109h18M69 118h12" stroke="#2563eb" strokeWidth="1.5" opacity="0.4"/>

      {/* Small circles decoration */}
      <circle cx="340" cy="160" r="5" fill="#2563eb" opacity="0.12"/>
      <circle cx="60" cy="145" r="4" fill="#2563eb" opacity="0.12"/>
      <circle cx="320" cy="80" r="3" fill="#2563eb" opacity="0.15"/>
    </svg>
  );
}
