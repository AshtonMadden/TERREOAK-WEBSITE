import type { ReactNode } from "react";

// Line icons for the service cards, one per service page. Drawn on a 24px grid in the brand
// colours via the shared .to-icon badge. Decorative: the card's heading carries the meaning.
const icons: Record<string, ReactNode> = {
  // A tree and a shrub on a ground line
  "/landscape-installs": (
    <>
      <circle cx="9" cy="8.5" r="5" />
      <path d="M9 13.5V21M9 17l2.5-2M3 21h18M16.5 17.5V21" />
      <circle cx="16.5" cy="14.7" r="2.8" />
    </>
  ),
  // Pavers laid in a running bond
  "/hardscaping": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20" />
    </>
  ),
  // A seedling with two leaves
  "/softscapes": <path d="M12 21v-9M12 14c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7ZM12 11c0-4 2.2-6.2 6.5-6.2 0 4-2.2 6.2-6.5 6.2ZM7 21h10" />,
  // A snowflake
  "/residential-snow-removal": (
    <path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17M9.5 4.5 12 7l2.5-2.5M9.5 19.5 12 17l2.5 2.5M4.2 10.6l3.4-.9-.9-3.4M19.8 13.4l-3.4.9.9 3.4M19.8 10.6l-3.4-.9.9-3.4M4.2 13.4l3.4.9-.9 3.4" />
  ),
  // A rake
  "/spring-cleanup-calgary": <path d="M12 3v11M5 14h14M5 14v5M8.5 14v5M12 14v5M15.5 14v5M19 14v5" />,
  // A leaf
  "/fall-cleanup": <path d="M20 4C9 4 4 9.5 4 17c0 1 .2 2 .5 3M20 4c0 11-5.5 16-13 16-1 0-1.9-.2-2.5-.5M4.5 20C8 14 12 10.5 16 8" />,
  // A sprinkler head spraying
  "/irrigation-blowouts": <path d="M9 21h6M12 21v-6M9.5 12h5v3h-5zM12 9V6M7.5 10l-2-2.5M16.5 10l2-2.5M4 13l-2-1M20 13l2-1" />,
  // An office building
  "/commercial-grounds-maintenance": <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 8h3M8 12h3M8 16h3" />,
};

export default function ServiceIcon({ href, className = "" }: { href: string; className?: string }) {
  const icon = icons[href];
  if (!icon) return null;
  return (
    <span className={`to-icon shrink-0 ${className}`} aria-hidden="true">
      <svg className="h-[55%] w-[55%]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {icon}
      </svg>
    </span>
  );
}
