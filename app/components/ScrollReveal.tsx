"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Subtle reveal-on-scroll for any element marked data-reveal.
 *
 * Built to be search-friendly: the content is always in the HTML and visible by default.
 * Only after the page loads are sections that sit below the fold hidden and then eased in
 * as they enter the screen. It animates opacity and position only, so nothing shifts layout,
 * and it does nothing at all when the visitor prefers reduced motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    for (const el of targets) {
      el.classList.add("to-reveal");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of targets) el.classList.remove("to-reveal", "is-in");
    };
  }, [pathname]);

  return null;
}
