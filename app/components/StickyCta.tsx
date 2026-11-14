"use client";

import { useEffect, useState } from "react";

/** Sign-up bar that appears after the hero and gets out of the way when the form or the footer is on screen. */
export default function StickyCta({ targetId, label }: { targetId: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const rect = document.getElementById(targetId)?.getBoundingClientRect();
      const formOnScreen = !!rect && rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      const footerTop = document.querySelector("footer")?.getBoundingClientRect().top;
      const footerOnScreen = footerTop !== undefined && footerTop < window.innerHeight;
      setVisible(window.scrollY > 700 && !formOnScreen && !footerOnScreen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);

  if (!visible || dismissed) return null;

  return (
    <div className="to-pavement fixed inset-x-0 bottom-4 z-50 mx-auto flex w-fit items-center gap-1 rounded-full !bg-[#1d1f21] p-1.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)] md:hidden">
      <a href={`#${targetId}`} className="to-btn to-btn-primary to-btn-sm">
        {label}
      </a>
      <button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss" className="to-focus flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:text-white">
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
