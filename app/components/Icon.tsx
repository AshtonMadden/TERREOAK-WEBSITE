import type { ReactNode } from "react";

/**
 * The site's icon set: solid, flat, two-tone pictograms drawn on a 48px grid in the brand
 * colours (lime with teal, deep-green details, white for snow). No outlines-in-a-circle.
 * Decorative only: the heading beside each icon carries the meaning.
 */
const L = "#ccea8d"; // lime: main shape
const T = "#019587"; // teal: second shape
const D = "#005148"; // deep green: details cut into the lime
const W = "#ffffff"; // white: snow

const arm = (
  <>
    <path d="M24 24V5" />
    <path d="M18.5 9.5 24 15l5.5-5.5" />
  </>
);

const icons = {
  // ---- Services ----
  spade: (
    <>
      <rect x="15" y="3" width="18" height="6" rx="3" fill={T} />
      <rect x="21.5" y="7" width="5" height="21" fill={T} />
      <path d="M12 26h24v6c0 7-5 12-12 14-7-2-12-7-12-14v-6Z" fill={L} />
      <path d="M24 31v9" stroke={D} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  pavers: (
    <>
      <rect x="4" y="7" width="18" height="10" rx="2" fill={L} />
      <rect x="25" y="7" width="19" height="10" rx="2" fill={T} />
      <rect x="4" y="19.5" width="9" height="10" rx="2" fill={T} />
      <rect x="16" y="19.5" width="19" height="10" rx="2" fill={L} />
      <rect x="38" y="19.5" width="6" height="10" rx="2" fill={T} />
      <rect x="4" y="32" width="22" height="10" rx="2" fill={T} />
      <rect x="29" y="32" width="15" height="10" rx="2" fill={L} />
    </>
  ),
  sprout: (
    <>
      <rect x="22.5" y="20" width="3" height="20" fill={T} />
      <path d="M24 29C12 29 6 22 6 11c12 0 18 7 18 18Z" fill={L} />
      <path d="M24 22c0-9 5.5-15 16-15 0 9-5.5 15-16 15Z" fill={L} />
      <path d="M7 45c2-6 8-8 17-8s15 2 17 8H7Z" fill={T} />
    </>
  ),
  snowflake: (
    <>
      <g stroke={L} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 24 24)`}>
            {arm}
          </g>
        ))}
      </g>
      <circle cx="24" cy="24" r="4" fill={T} />
    </>
  ),
  rake: (
    <>
      <path d="M24 3v22" stroke={T} strokeWidth="4.5" strokeLinecap="round" />
      <g stroke={L} strokeWidth="3.6" strokeLinecap="round" fill="none">
        <path d="M24 25 7 43M24 25l-8.5 20M24 25v21M24 25l8.5 20M24 25l17 18" />
      </g>
      <path d="M12 35c7-3.5 17-3.5 24 0" stroke={T} strokeWidth="3.6" strokeLinecap="round" fill="none" />
    </>
  ),
  leaf: (
    <g transform="rotate(22 24 24)">
      <path d="M24 3c10 7 15 15 15 23 0 8-6 14-15 15-9-1-15-7-15-15C9 18 14 10 24 3Z" fill={L} />
      <path d="M24 41v6" stroke={T} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M24 13v27M24 23l-7-5M24 23l7-5M24 31l-8-5.5M24 31l8-5.5" stroke={D} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </g>
  ),
  sprinkler: (
    <>
      <rect x="12" y="41" width="24" height="4" rx="2" fill={T} />
      <rect x="19" y="29" width="10" height="13" rx="2" fill={T} />
      <rect x="20.5" y="23" width="7" height="7" rx="2" fill={L} />
      <g fill={L}>
        <circle cx="24" cy="16" r="2.4" />
        <circle cx="24" cy="8" r="2.4" />
        <circle cx="16.5" cy="18.5" r="2.4" />
        <circle cx="10.5" cy="12.5" r="2.4" />
        <circle cx="31.5" cy="18.5" r="2.4" />
        <circle cx="37.5" cy="12.5" r="2.4" />
        <circle cx="10" cy="25" r="2.4" />
        <circle cx="38" cy="25" r="2.4" />
      </g>
    </>
  ),
  building: (
    <>
      <rect x="27" y="19" width="16" height="26" rx="2" fill={T} />
      <rect x="5" y="5" width="24" height="40" rx="2" fill={L} />
      <g fill={D}>
        <rect x="10" y="11" width="5" height="5" rx="1" />
        <rect x="19" y="11" width="5" height="5" rx="1" />
        <rect x="10" y="20" width="5" height="5" rx="1" />
        <rect x="19" y="20" width="5" height="5" rx="1" />
        <rect x="10" y="29" width="5" height="5" rx="1" />
        <rect x="19" y="29" width="5" height="5" rx="1" />
        <rect x="14" y="38" width="6" height="7" />
      </g>
      <g fill={L}>
        <rect x="33" y="25" width="5" height="3.5" rx="1" />
        <rect x="33" y="32" width="5" height="3.5" rx="1" />
      </g>
    </>
  ),

  // ---- Guarantees ----
  shield: (
    <>
      <path d="M24 3 7 9.5V22c0 10.5 6.8 19.3 17 23 10.2-3.7 17-12.5 17-23V9.5L24 3Z" fill={L} />
      <path d="m15.5 24 6 6 11-12" stroke={D} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  hardhat: (
    <>
      <path d="M8 31a16 16 0 0 1 32 0H8Z" fill={L} />
      <rect x="20.5" y="9" width="7" height="22" rx="3.5" fill={T} />
      <rect x="3" y="30" width="42" height="7" rx="3.5" fill={T} />
    </>
  ),
  medal: (
    <>
      <path d="M15 27 10.5 45l8.5-4 4 4V29l-8-2Z" fill={T} />
      <path d="m33 27 4.5 18-8.5-4-4 4V29l8-2Z" fill={T} />
      <circle cx="24" cy="18" r="14" fill={L} />
      <path d="m17.5 18.5 4.5 4.5 8.5-9.5" stroke={D} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),

  // ---- Snow pass features ----
  calendar: (
    <>
      <rect x="5" y="8" width="38" height="35" rx="5" fill={T} />
      <path d="M5 19h38v19a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V19Z" fill={L} />
      <rect x="13" y="4" width="4.5" height="10" rx="2.25" fill={L} />
      <rect x="30.5" y="4" width="4.5" height="10" rx="2.25" fill={L} />
      <path d="m16 31 5.5 5.5L32.5 25.5" stroke={D} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  ruler: (
    <>
      <rect x="17" y="3" width="14" height="36" rx="2.5" fill={L} />
      <path d="M17 10h6M17 16h4M17 22h6M17 28h4" stroke={D} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M41 26 33 30.5 41 35V26Z" fill={T} />
      <path d="M3 45c3-8 10-11 21-11s18 3 21 11H3Z" fill={W} />
    </>
  ),
  camera: (
    <>
      <path d="m16 14 3.5-7h9L32 14H16Z" fill={L} />
      <rect x="4" y="13" width="40" height="28" rx="5" fill={L} />
      <circle cx="24" cy="27" r="9" fill={T} />
      <circle cx="24" cy="27" r="4.2" fill={D} />
      <circle cx="37.5" cy="19.5" r="2" fill={D} />
    </>
  ),
  bell: (
    <>
      <circle cx="24" cy="5.5" r="3" fill={T} />
      <path d="M24 7a12.5 12.5 0 0 0-12.5 12.5v8L6 35.5h36l-5.5-8v-8A12.5 12.5 0 0 0 24 7Z" fill={L} />
      <path d="M18.5 38.5a5.5 5.5 0 0 0 11 0h-11Z" fill={T} />
      <path d="M41 9c2.5 3 3.800 6.5 3.800 10M7 9c-2.5 3-3.800 6.5-3.800 10" stroke={T} strokeWidth="3.2" strokeLinecap="round" fill="none" />
    </>
  ),
  picket: (
    <>
      <g transform="rotate(9 24 40)">
        <rect x="20" y="3" width="8" height="38" rx="4" fill={L} />
        <rect x="20" y="10" width="8" height="6" fill={T} />
        <rect x="20" y="21" width="8" height="6" fill={T} />
      </g>
      <path d="M4 45c3-7 10-10 20-10s17 3 20 10H4Z" fill={W} />
    </>
  ),
  card: (
    <>
      <rect x="3" y="9" width="42" height="30" rx="5" fill={L} />
      <rect x="3" y="15.5" width="42" height="6.5" fill={D} />
      <rect x="8.5" y="27.5" width="10" height="6" rx="1.5" fill={T} />
      <rect x="23" y="29" width="15" height="3" rx="1.5" fill={D} />
    </>
  ),

  // ---- Who we serve ----
  condo: (
    <>
      <rect x="6" y="4" width="20" height="41" rx="2" fill={L} />
      <g fill={D}>
        <rect x="10" y="9" width="4.5" height="4.5" rx="1" />
        <rect x="17.5" y="9" width="4.5" height="4.5" rx="1" />
        <rect x="10" y="17.5" width="4.5" height="4.5" rx="1" />
        <rect x="17.5" y="17.5" width="4.5" height="4.5" rx="1" />
        <rect x="10" y="26" width="4.5" height="4.5" rx="1" />
        <rect x="17.5" y="26" width="4.5" height="4.5" rx="1" />
      </g>
      <path d="M24 28.5 34 20l10 8.5V45H24V28.5Z" fill={T} />
      <rect x="31.5" y="35" width="5" height="10" fill={L} />
    </>
  ),
  factory: (
    <>
      <rect x="35.5" y="6" width="7" height="12" rx="1.5" fill={T} />
      <path d="M4 45V24.5l11 6.5v-6.5l11 6.5v-6.5l11 6.5V17h6.5v28H4Z" fill={L} />
      <g fill={D}>
        <rect x="9" y="35.5" width="6" height="5.5" rx="1" />
        <rect x="19.5" y="35.5" width="6" height="5.5" rx="1" />
        <rect x="30" y="35.5" width="6" height="5.5" rx="1" />
      </g>
    </>
  ),
  house: (
    <>
      <path d="M8 23 24 9.5 40 23v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V23Z" fill={L} />
      <path d="M4 24.5 24 7l20 17.5" stroke={T} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="20" y="31" width="8" height="14" rx="1" fill={D} />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export default function Icon({ name, className = "h-12 w-12 md:h-14 md:w-14" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`shrink-0 ${className}`} aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
