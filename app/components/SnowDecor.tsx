// Snow decorations shared by the residential and commercial snow pages. Decorative only.

/**
 * A snow bank that runs the full width of the page: two flat-coloured drifts, the back one
 * slightly grey for depth. Used to split the page into parts. Decorative only.
 */
export function SnowBank({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-[64px] w-full md:h-[110px] ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path d="M0 120V46C160 6 300 72 460 36C620 4 760 62 900 30C1060 0 1220 56 1440 22V120Z" fill="#cfd8dc" />
      <path d="M0 120V72C120 34 220 96 360 62C480 32 560 84 700 56C840 30 930 92 1080 64C1200 42 1320 88 1440 52V120Z" fill="#ffffff" />
    </svg>
  );
}

/** A small snowman standing in the drift on top of the snow tracker card. Decorative only. */
export function Snowman({ className = "right-[9%] md:right-[12%]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-full z-[1] h-[76px] w-auto translate-y-[5px] md:h-[112px] md:translate-y-[7px] ${className}`}
    >
      <path d="M15 52 3 40M6 47l-4 1M49 52l12-10M57 48l5 1" stroke="#7a5a3c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="58" r="20" fill="#ffffff" />
      <path d="M13.5 65.5A20 20 0 0 0 50.5 65.5 24 24 0 0 1 13.5 65.5Z" fill="#cfd8dc" />
      <circle cx="32" cy="28" r="13.5" fill="#ffffff" />
      <path d="M20 37.5c7 3 17 3 24 0l1.5 5c-8 3.4-19 3.4-27 0Z" fill="#019587" />
      <path d="M39 40.5 46 54l-6 1.5-4-13Z" fill="#019587" />
      <path d="M23 5h18v11H23Z" fill="#005148" />
      <rect x="18" y="14.5" width="28" height="3.6" rx="1.8" fill="#005148" />
      <rect x="23" y="11" width="18" height="3" fill="#ccea8d" />
      <circle cx="27.5" cy="25" r="1.8" fill="#26282b" />
      <circle cx="36.5" cy="25" r="1.8" fill="#26282b" />
      <path d="M32 28.5 44.5 31 32 33Z" fill="#f08a24" />
      <circle cx="32" cy="52" r="1.7" fill="#26282b" />
      <circle cx="32" cy="60" r="1.7" fill="#26282b" />
      <circle cx="32" cy="68" r="1.7" fill="#26282b" />
    </svg>
  );
}
