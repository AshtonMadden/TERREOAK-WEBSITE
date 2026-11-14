"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A paragraph that shows its first few lines on phones with a "More" link, and in full on
 * larger screens. The whole text is always in the page, so search engines read all of it.
 * The link only appears when the text is actually cut off.
 */
export default function ClampText({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [cut, setCut] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || open) return;
    const check = () => setCut(el.scrollHeight > el.clientHeight + 2);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [open]);

  return (
    <>
      <p ref={ref} className={`${className} ${open ? "" : "max-md:line-clamp-3"}`}>
        {children}
      </p>
      {cut && !open && (
        <button type="button" onClick={() => setOpen(true)} className="to-link mt-1 text-[0.98rem] md:hidden">
          More
        </button>
      )}
    </>
  );
}
