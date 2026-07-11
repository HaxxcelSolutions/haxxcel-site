import type { SVGProps } from "react";

const base = "h-auto w-full";

/* ---------------- Laptop mockup with SaaS dashboard ---------------- */
export function LaptopMockup({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 280" className={`${base} ${className}`} role="img" aria-label="SaaS dashboard on a laptop" {...props}>
      <defs>
        <linearGradient id="ill-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111844" />
          <stop offset="100%" stopColor="#171f4d" />
        </linearGradient>
        <linearGradient id="ill-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4b5694" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4b5694" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* screen */}
      <rect x="40" y="20" width="320" height="205" rx="12" fill="#0d1338" stroke="rgba(255,255,255,0.1)" />
      <rect x="52" y="32" width="296" height="181" rx="6" fill="url(#ill-screen)" />
      {/* sidebar */}
      <rect x="52" y="32" width="60" height="181" fill="rgba(255,255,255,0.03)" />
      <rect x="64" y="48" width="36" height="6" rx="3" fill="#4b5694" />
      <rect x="64" y="66" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
      <rect x="64" y="80" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
      <rect x="64" y="94" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
      {/* KPI cards */}
      <rect x="124" y="48" width="66" height="40" rx="6" fill="rgba(255,255,255,0.05)" />
      <rect x="200" y="48" width="66" height="40" rx="6" fill="rgba(255,255,255,0.05)" />
      <rect x="276" y="48" width="60" height="40" rx="6" fill="rgba(255,255,255,0.05)" />
      <rect x="132" y="58" width="30" height="6" rx="3" fill="#5c69a0" />
      <rect x="208" y="58" width="30" height="6" rx="3" fill="#7288ae" />
      <rect x="284" y="58" width="26" height="6" rx="3" fill="#4b5694" />
      {/* chart */}
      <rect x="124" y="98" width="212" height="100" rx="6" fill="rgba(255,255,255,0.03)" />
      <path d="M136 180 L168 160 L196 168 L224 138 L252 146 L288 116 L324 126 L324 190 L136 190 Z" fill="url(#ill-area)" />
      <path d="M136 180 L168 160 L196 168 L224 138 L252 146 L288 116 L324 126" fill="none" stroke="#5c69a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* base */}
      <path d="M20 225 L380 225 L400 250 L0 250 Z" fill="#0d1338" stroke="rgba(255,255,255,0.1)" />
      <rect x="170" y="230" width="60" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

/* ---------------- Phone mockup ---------------- */
export function PhoneMockup({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 300" className={`${base} ${className}`} role="img" aria-label="Mobile app mockup" {...props}>
      <defs>
        <linearGradient id="ill-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171f4d" />
          <stop offset="100%" stopColor="#111844" />
        </linearGradient>
      </defs>
      <rect x="20" y="10" width="120" height="280" rx="24" fill="#0d1338" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      <rect x="30" y="24" width="100" height="252" rx="16" fill="url(#ill-phone)" />
      <rect x="62" y="16" width="36" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      {/* header */}
      <rect x="42" y="40" width="50" height="8" rx="4" fill="#5c69a0" />
      <circle cx="118" cy="44" r="7" fill="rgba(255,255,255,0.1)" />
      {/* balance card */}
      <rect x="42" y="60" width="76" height="44" rx="10" fill="#363e6d" opacity="0.85" />
      <rect x="50" y="70" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.6)" />
      <rect x="50" y="82" width="46" height="9" rx="4" fill="#ffffff" />
      {/* list */}
      {[120, 146, 172, 198].map((y) => (
        <g key={y}>
          <circle cx="52" cy={y + 8} r="8" fill="rgba(255,255,255,0.08)" />
          <rect x="68" y={y + 2} width="40" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="68" y={y + 12} width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        </g>
      ))}
      {/* nav */}
      <rect x="42" y="252" width="76" height="16" rx="8" fill="rgba(255,255,255,0.05)" />
      <circle cx="58" cy="260" r="4" fill="#5c69a0" />
      <circle cx="80" cy="260" r="4" fill="rgba(255,255,255,0.2)" />
      <circle cx="102" cy="260" r="4" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

/* ---------------- AI illustration (neural network) ---------------- */
export function AIIllustration({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 260" className={`${base} ${className}`} role="img" aria-label="AI neural network illustration" {...props}>
      <defs>
        <radialGradient id="ill-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7288ae" />
          <stop offset="100%" stopColor="#4b5694" />
        </radialGradient>
      </defs>
      <g stroke="rgba(114,136,174,0.35)" strokeWidth="1.5">
        <line x1="60" y1="60" x2="150" y2="130" />
        <line x1="60" y1="130" x2="150" y2="130" />
        <line x1="60" y1="200" x2="150" y2="130" />
        <line x1="150" y1="130" x2="240" y2="70" />
        <line x1="150" y1="130" x2="240" y2="130" />
        <line x1="150" y1="130" x2="240" y2="190" />
      </g>
      {[
        [60, 60], [60, 130], [60, 200],
        [240, 70], [240, 130], [240, 190],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="12" fill="#111844" stroke="#5c69a0" strokeWidth="2" />
      ))}
      <circle cx="150" cy="130" r="26" fill="url(#ill-core)" />
      <path d="M150 118v24M138 130h24M143 123l14 14M157 123l-14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- Analytics graphic ---------------- */
export function AnalyticsGraphic({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" className={`${base} ${className}`} role="img" aria-label="Analytics graphic" {...props}>
      <defs>
        <linearGradient id="ill-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c69a0" />
          <stop offset="100%" stopColor="#4b5694" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="300" height="200" rx="14" fill="#111844" stroke="rgba(255,255,255,0.08)" />
      <line x1="40" y1="40" x2="40" y2="180" stroke="rgba(255,255,255,0.15)" />
      <line x1="40" y1="180" x2="290" y2="180" stroke="rgba(255,255,255,0.15)" />
      {(
        [
          [70, 120], [110, 90], [150, 140], [190, 70], [230, 100], [265, 50],
        ] as [number, number][]
      ).map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="24" height={180 - y} rx="4" fill="url(#ill-bar)" opacity={0.55 + i * 0.07} />
      ))}
      <path d="M82 118 L122 88 L162 138 L202 68 L242 98 L277 48" fill="none" stroke="#7288ae" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {([[82, 118], [122, 88], [162, 138], [202, 68], [242, 98], [277, 48]] as [number, number][]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#7288ae" />
      ))}
    </svg>
  );
}

/* ---------------- Developers working ---------------- */
export function DevelopersGraphic({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" className={`${base} ${className}`} role="img" aria-label="Developers working" {...props}>
      <rect x="10" y="10" width="300" height="180" rx="12" fill="#0d1338" stroke="rgba(255,255,255,0.1)" />
      <rect x="10" y="10" width="300" height="26" rx="12" fill="rgba(255,255,255,0.04)" />
      <circle cx="28" cy="23" r="4" fill="#ef4444" />
      <circle cx="42" cy="23" r="4" fill="#f59e0b" />
      <circle cx="56" cy="23" r="4" fill="#22c55e" />
      {/* code lines */}
      {[
        [30, 5, "#5c69a0"], [30, 4, "#7288ae"], [46, 5, "#4b5694"], [46, 4, "#b6bfdf"],
        [30, 6, "#5c69a0"], [30, 5, "#7288ae"], [46, 4, "#4b5694"],
      ].map(([indent, w, color], i) => (
        <rect key={i} x={20 + (indent as number)} y={52 + i * 18} width={(w as number) * 14} height="7" rx="3.5" fill={color as string} opacity="0.7" />
      ))}
      {/* cursor */}
      <rect x="150" y="106" width="2" height="12" fill="#fff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* base */}
      <path d="M60 190 L260 190 L280 210 L40 210 Z" fill="#111844" stroke="rgba(255,255,255,0.1)" />
    </svg>
  );
}

/* ---------------- Team avatars ---------------- */
export function TeamGraphic({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  const people = [
    { x: 60, c: "#5c69a0" },
    { x: 130, c: "#7288ae" },
    { x: 200, c: "#4b5694" },
    { x: 270, c: "#b6bfdf" },
  ];
  return (
    <svg viewBox="0 0 330 180" className={`${base} ${className}`} role="img" aria-label="Team" {...props}>
      {people.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy="70" r="28" fill="#111844" stroke={p.c} strokeWidth="2.5" />
          <circle cx={p.x} cy="60" r="10" fill={p.c} />
          <path d={`M${p.x - 16} 92 a16 14 0 0 1 32 0 z`} fill={p.c} opacity="0.85" />
          <rect x={p.x - 26} y="120" width="52" height="7" rx="3.5" fill="rgba(255,255,255,0.25)" />
          <rect x={p.x - 18} y="133" width="36" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        </g>
      ))}
    </svg>
  );
}

/* ---------------- Isometric stack ---------------- */
export function IsometricGraphic({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  const layer = (y: number, top: string, left: string, right: string) => (
    <g transform={`translate(0 ${y})`}>
      <path d="M150 40 L230 80 L150 120 L70 80 Z" fill={top} />
      <path d="M70 80 L150 120 L150 150 L70 110 Z" fill={left} />
      <path d="M230 80 L150 120 L150 150 L230 110 Z" fill={right} />
    </g>
  );
  return (
    <svg viewBox="0 0 300 260" className={`${base} ${className}`} role="img" aria-label="Isometric technology stack" {...props}>
      {layer(60, "#171f4d", "#1e285a", "#111844")}
      {layer(20, "#4b5694", "#363e6d", "#1e285a")}
      {layer(-20, "#5c69a0", "#4b5694", "#363e6d")}
      <circle cx="150" cy="20" r="10" fill="#fff" opacity="0.9" />
      <path d="M146 20l3 3 5-6" stroke="#363e6d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
