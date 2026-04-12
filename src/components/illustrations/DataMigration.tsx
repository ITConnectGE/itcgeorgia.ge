export function DataMigration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Old server (left) */}
      <rect x="30" y="60" width="80" height="120" rx="8" fill="white" stroke="#94a3b8" strokeWidth="1.5"/>
      <line x1="30" y1="90" x2="110" y2="90" stroke="#94a3b8" strokeWidth="1" opacity="0.4"/>
      <line x1="30" y1="120" x2="110" y2="120" stroke="#94a3b8" strokeWidth="1" opacity="0.4"/>
      <circle cx="48" cy="75" r="4" fill="#94a3b8" opacity="0.5"/>
      <circle cx="60" cy="75" r="4" fill="#94a3b8" opacity="0.3"/>
      <rect x="75" y="72" width="26" height="6" rx="3" fill="#94a3b8" opacity="0.2"/>
      <circle cx="48" cy="105" r="4" fill="#94a3b8" opacity="0.4"/>
      <rect x="75" y="102" width="26" height="6" rx="3" fill="#94a3b8" opacity="0.15"/>
      <circle cx="48" cy="135" r="4" fill="#94a3b8" opacity="0.3"/>
      <rect x="75" y="132" width="26" height="6" rx="3" fill="#94a3b8" opacity="0.1"/>

      {/* Arrow flow */}
      <path d="M130 120h50" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      <path d="M190 120h20" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M220 120h20" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M250 120l15-8v16z" fill="#2563eb" opacity="0.9"/>

      {/* Data dots flowing */}
      <circle cx="148" cy="120" r="3" fill="#2563eb" opacity="0.3"/>
      <circle cx="168" cy="115" r="2.5" fill="#2563eb" opacity="0.4"/>
      <circle cx="185" cy="120" r="3" fill="#2563eb" opacity="0.5"/>
      <circle cx="205" cy="118" r="2.5" fill="#2563eb" opacity="0.6"/>
      <circle cx="225" cy="120" r="3" fill="#2563eb" opacity="0.7"/>
      <circle cx="242" cy="116" r="2" fill="#2563eb" opacity="0.8"/>

      {/* Cloud (right) */}
      <path d="M350 90c0-22-17.9-40-40-40-3.7 0-7.2.5-10.6 1.4C291.1 35 275.6 24 257 24c-22.1 0-40 17.9-40 40 0 1.8.1 3.5.3 5.3C204 72.4 195 84 195 98c0 17.7 14.3 32 32 32h116c14.7 0 26.7-11.9 26.7-26.7 0-5.5-1.7-10.6-4.5-14.9" fill="#2563eb" opacity="0.08"/>
      <path d="M350 90c0-22-17.9-40-40-40-3.7 0-7.2.5-10.6 1.4C291.1 35 275.6 24 257 24c-22.1 0-40 17.9-40 40 0 1.8.1 3.5.3 5.3C204 72.4 195 84 195 98c0 17.7 14.3 32 32 32h116c14.7 0 26.7-11.9 26.7-26.7 0-5.5-1.7-10.6-4.5-14.9" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>

      {/* Cloud server inside */}
      <rect x="270" y="138" width="60" height="52" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5"/>
      <circle cx="284" cy="155" r="3.5" fill="#2563eb"/>
      <circle cx="294" cy="155" r="3.5" fill="#2563eb" opacity="0.4"/>
      <rect x="306" y="152" width="16" height="5" rx="2.5" fill="#2563eb" opacity="0.15"/>
      <line x1="270" y1="167" x2="330" y2="167" stroke="#2563eb" strokeWidth="1" opacity="0.2"/>
      <circle cx="284" cy="178" r="3.5" fill="#2563eb" opacity="0.7"/>
      <circle cx="294" cy="178" r="3.5" fill="#2563eb" opacity="0.3"/>
      <rect x="306" y="175" width="16" height="5" rx="2.5" fill="#2563eb" opacity="0.15"/>

      {/* Connection from cloud to server */}
      <path d="M300 130V138" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>

      {/* Labels */}
      <text x="70" y="205" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Legacy</text>
      <text x="300" y="215" textAnchor="middle" fill="#2563eb" fontSize="10" fontFamily="system-ui">Cloud</text>
    </svg>
  );
}
