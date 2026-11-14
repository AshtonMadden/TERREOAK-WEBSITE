"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * Collapses extra content on phones behind a button. The content is always in the page
 * (so search engines read all of it) and is always fully shown from tablet width up.
 *
 * `inGrid` lets the hidden items take their own cells in a parent grid on larger screens,
 * for example reviews two and three in a three-column row.
 */
export default function ReadMore({
  children,
  label = "Read more",
  inGrid = false,
  allSizes = false,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  inGrid?: boolean;
  /** Collapse on every screen size, not only on phones. */
  allSizes?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  const wrapper = inGrid ? (allSizes ? "contents" : "md:contents") : "";
  const shown = inGrid ? (allSizes ? "contents" : "grid gap-5 md:contents") : "grid gap-5";
  const hidden = allSizes ? "hidden" : inGrid ? "max-md:hidden md:contents" : "grid gap-5 max-md:hidden";

  return (
    <div className={`${wrapper} ${className}`}>
      <div id={id} className={open ? shown : hidden}>
        {children}
      </div>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-controls={id}
          aria-expanded={false}
          className={`to-link col-span-full justify-self-start text-[1.08rem] ${allSizes ? "" : "md:hidden"}`}
        >
          {label}
        </button>
      )}
    </div>
  );
}
