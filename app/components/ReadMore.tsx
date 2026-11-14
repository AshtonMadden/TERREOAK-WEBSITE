"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * Collapses long copy on phones behind a "Read more" button. The text is always in the page
 * (so search engines read all of it) and is always fully shown from tablet width up.
 */
export default function ReadMore({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <div id={id} className={`grid gap-5 ${open ? "" : "max-md:hidden"}`}>
        {children}
      </div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)} aria-controls={id} aria-expanded={false} className="to-link text-[1.08rem] md:hidden">
          Read more
        </button>
      )}
    </div>
  );
}
