// Inline SVG illustrations for guide/blog cards — flat, #2563eb accent, consistent style

const base = "w-full h-full";

export function WindowsDesktopIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      <rect x="60" y="30" width="200" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="60" y="30" width="200" height="20" rx="8" fill="#2563eb" opacity="0.08" />
      <circle cx="76" cy="40" r="3" fill="#2563eb" opacity="0.3" />
      <circle cx="86" cy="40" r="3" fill="#2563eb" opacity="0.2" />
      <circle cx="96" cy="40" r="3" fill="#2563eb" opacity="0.15" />
      <rect x="80" y="62" width="80" height="6" rx="3" fill="#2563eb" opacity="0.15" />
      <rect x="80" y="76" width="120" height="4" rx="2" fill="#e2e8f0" />
      <rect x="80" y="86" width="100" height="4" rx="2" fill="#e2e8f0" />
      <rect x="80" y="96" width="110" height="4" rx="2" fill="#e2e8f0" />
      <rect x="80" y="114" width="56" height="20" rx="6" fill="#2563eb" opacity="0.12" />
      <rect x="86" y="120" width="44" height="8" rx="4" fill="#2563eb" opacity="0.3" />
    </svg>
  );
}

export function WindowsServerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      <rect x="100" y="20" width="120" height="140" rx="8" fill="white" stroke="#2563eb" strokeWidth="1.5" opacity="0.6" />
      <rect x="100" y="20" width="120" height="40" rx="8" fill="#2563eb" opacity="0.05" />
      <line x1="100" y1="60" x2="220" y2="60" stroke="#2563eb" strokeWidth="1" opacity="0.15" />
      <line x1="100" y1="100" x2="220" y2="100" stroke="#2563eb" strokeWidth="1" opacity="0.15" />
      <circle cx="118" cy="40" r="5" fill="#2563eb" opacity="0.5" />
      <circle cx="132" cy="40" r="5" fill="#2563eb" opacity="0.3" />
      <rect x="150" y="36" width="50" height="8" rx="4" fill="#2563eb" opacity="0.1" />
      <circle cx="118" cy="80" r="5" fill="#2563eb" opacity="0.4" />
      <circle cx="132" cy="80" r="5" fill="#2563eb" opacity="0.2" />
      <rect x="150" y="76" width="50" height="8" rx="4" fill="#2563eb" opacity="0.1" />
      <circle cx="118" cy="120" r="5" fill="#2563eb" opacity="0.3" />
      <circle cx="132" cy="120" r="5" fill="#2563eb" opacity="0.15" />
      <rect x="150" y="116" width="50" height="8" rx="4" fill="#2563eb" opacity="0.1" />
      <text x="160" y="145" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="system-ui" opacity="0.4">CORE</text>
    </svg>
  );
}

export function VirtualizationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      {/* Host */}
      <rect x="80" y="100" width="160" height="60" rx="6" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="160" y="138" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Host Server</text>
      {/* VMs */}
      <rect x="90" y="24" width="56" height="56" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" />
      <text x="118" y="56" textAnchor="middle" fill="#2563eb" fontSize="9" fontFamily="system-ui">VM 1</text>
      <rect x="155" y="24" width="56" height="56" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" />
      <text x="183" y="56" textAnchor="middle" fill="#2563eb" fontSize="9" fontFamily="system-ui">VM 2</text>
      {/* Connection lines */}
      <path d="M118 80V100" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <path d="M183 80V100" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      {/* Dots */}
      <circle cx="225" cy="40" r="20" fill="#2563eb" opacity="0.05" />
      <text x="225" y="44" textAnchor="middle" fill="#2563eb" fontSize="7" fontFamily="system-ui" opacity="0.5">+N</text>
    </svg>
  );
}

export function CALIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      {/* Server */}
      <rect x="130" y="20" width="60" height="50" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" />
      <circle cx="150" cy="38" r="4" fill="#2563eb" opacity="0.5" />
      <circle cx="162" cy="38" r="4" fill="#2563eb" opacity="0.3" />
      <rect x="140" y="50" width="40" height="4" rx="2" fill="#2563eb" opacity="0.1" />
      {/* Users */}
      {[80, 140, 200].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="130" r="14" fill="#2563eb" opacity={0.08 + i * 0.03} />
          <circle cx={x} cy="126" r="5" fill="#2563eb" opacity={0.2 + i * 0.1} />
          <path d={`M${x - 8} 138a8 8 0 0116 0`} fill="#2563eb" opacity={0.15 + i * 0.05} />
        </g>
      ))}
      {/* Connection lines */}
      <path d="M80 116V70h80" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <path d="M140 116V70" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <path d="M200 116V70h-40" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <text x="160" y="98" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="system-ui" opacity="0.4">CAL</text>
    </svg>
  );
}

export function RDSIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      {/* Remote screen */}
      <rect x="110" y="20" width="100" height="70" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" />
      <rect x="116" y="28" width="88" height="50" rx="3" fill="#2563eb" opacity="0.04" />
      <rect x="124" y="36" width="50" height="4" rx="2" fill="#2563eb" opacity="0.15" />
      <rect x="124" y="46" width="70" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="124" y="54" width="60" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="124" y="62" width="40" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="150" y="90" width="20" height="6" rx="1" fill="#94a3b8" opacity="0.3" />
      <rect x="140" y="96" width="40" height="3" rx="1.5" fill="#94a3b8" opacity="0.2" />
      {/* Remote users */}
      {[60, 260].map((x, i) => (
        <g key={i}>
          <rect x={x - 24} y="110" width="48" height="36" rx="4" fill="white" stroke={i === 0 ? "#2563eb" : "#94a3b8"} strokeWidth="1" opacity="0.6" />
          <rect x={x - 18} y="116" width="36" height="20" rx="2" fill="#2563eb" opacity={0.04 + i * 0.02} />
          <path d={`M${x} 105V100h${i === 0 ? 80 : -80}V90`} stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
        </g>
      ))}
      <text x="160" y="170" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="system-ui" opacity="0.4">Remote Desktop</text>
    </svg>
  );
}

export function SQLServerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      {/* Database cylinder */}
      <ellipse cx="160" cy="50" rx="50" ry="14" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <rect x="110" y="50" width="100" height="70" fill="white" stroke="none" />
      <line x1="110" y1="50" x2="110" y2="120" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <line x1="210" y1="50" x2="210" y2="120" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="160" cy="120" rx="50" ry="14" fill="white" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="160" cy="50" rx="50" ry="14" fill="#2563eb" opacity="0.06" />
      {/* Data rows */}
      <rect x="128" y="68" width="64" height="4" rx="2" fill="#2563eb" opacity="0.12" />
      <rect x="128" y="80" width="48" height="4" rx="2" fill="#2563eb" opacity="0.08" />
      <rect x="128" y="92" width="56" height="4" rx="2" fill="#2563eb" opacity="0.1" />
      <rect x="128" y="104" width="40" height="4" rx="2" fill="#2563eb" opacity="0.06" />
      <text x="160" y="155" textAnchor="middle" fill="#2563eb" fontSize="9" fontFamily="system-ui" opacity="0.4">SQL</text>
    </svg>
  );
}

export function WindowsLicensingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="8" fill="#f8fafc" />
      {/* License document */}
      <rect x="100" y="20" width="120" height="140" rx="6" fill="white" stroke="#2563eb" strokeWidth="1.5" opacity="0.5" />
      <rect x="112" y="36" width="60" height="6" rx="3" fill="#2563eb" opacity="0.2" />
      <rect x="112" y="52" width="96" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="112" y="62" width="80" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="112" y="72" width="88" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="112" y="90" width="96" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="112" y="100" width="72" height="3" rx="1.5" fill="#e2e8f0" />
      {/* Checkmark seal */}
      <circle cx="160" cy="132" r="16" fill="#2563eb" opacity="0.08" />
      <path d="M152 132l5 5 11-11" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Windows logo small */}
      <rect x="190" y="28" width="8" height="8" fill="#2563eb" opacity="0.2" />
      <rect x="200" y="28" width="8" height="8" fill="#2563eb" opacity="0.15" />
      <rect x="190" y="38" width="8" height="8" fill="#2563eb" opacity="0.15" />
      <rect x="200" y="38" width="8" height="8" fill="#2563eb" opacity="0.1" />
    </svg>
  );
}

// Map slug -> illustration component
export const guideIllustrations: Record<string, React.FC<{ className?: string }>> = {
  "windows-licensing": WindowsLicensingIllustration,
  "windows-desktop": WindowsDesktopIllustration,
  "windows-server": WindowsServerIllustration,
  "virtualization": VirtualizationIllustration,
  "cal": CALIllustration,
  "rds": RDSIllustration,
  "sql-server": SQLServerIllustration,
};
