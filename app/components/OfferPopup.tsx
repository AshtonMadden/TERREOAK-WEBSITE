"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Offer = {
  /** Short unique name, used to remember that this visitor has seen the offer. */
  id: string;
  label: string;
  /** The big number or phrase, e.g. "10% off" or "Free". */
  highlight: string;
  title: string;
  text: string;
  cta: string;
  /** id of the form section the main button jumps to. */
  formId: string;
  photo: string;
  photoAlt: string;
  /** Optional cut-out graphic shown over the photo (and beside the offer on phones). */
  graphic?: { src: string; alt: string; width: number; height: number };
  terms?: string;
};

/**
 * Offer popup for a service page.
 *
 * It waits until the visitor has been on the page a while or has scrolled, shows once per
 * browser session, and is a small card on phones instead of a full-screen takeover, so it
 * does not get in the way of reading the page or of search engines.
 */
export default function OfferPopup({ offer }: { offer: Offer }) {
  const seenKey = `terreoak-offer-seen-${offer.id}`;
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(seenKey)) return;
    } catch {
      // Storage can be blocked; in that case the offer may show again on a later visit.
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      // Don't interrupt someone who is already at the sign-up form.
      const form = document.getElementById(offer.formId)?.getBoundingClientRect();
      if (form && form.top < window.innerHeight && form.bottom > 0) return;
      shown = true;
      setOpen(true);
      try {
        sessionStorage.setItem(seenKey, "1");
      } catch {}
      cleanup();
    };
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 1.2) show();
    };
    const timer = window.setTimeout(show, 12000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
    return cleanup;
  }, [seenKey, offer.formId]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button type="button" aria-label="Close offer" onClick={() => setOpen(false)} className="absolute inset-0 cursor-default bg-[#1d1f21]/70" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
        className="to-pavement to-offer relative w-full max-w-[860px] overflow-hidden rounded-[32px] !bg-[#2f3236] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] sm:grid sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
      >
        <div className="relative hidden min-h-[420px] sm:block">
          <Image src={offer.photo} alt={offer.photoAlt} fill sizes="400px" className="object-cover" />
          {offer.graphic && (
            <>
              <div className="absolute inset-0 bg-[#1d1f21]/35" />
              <Image
                src={offer.graphic.src}
                alt={offer.graphic.alt}
                width={offer.graphic.width}
                height={offer.graphic.height}
                className="absolute bottom-0 left-1/2 h-[82%] w-auto -translate-x-1/2"
              />
            </>
          )}
        </div>

        <div className="relative p-7 sm:p-10">
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close offer"
            className="to-focus absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex items-start gap-5 pr-12 sm:block sm:pr-0">
            {offer.graphic && (
              <Image src={offer.graphic.src} alt="" width={offer.graphic.width} height={offer.graphic.height} className="h-28 w-auto shrink-0 sm:hidden" />
            )}
            <div>
              <p className="to-sub">{offer.label}</p>
              <p className="to-display mt-3 text-[3.4rem] leading-none text-accent sm:text-[4.6rem]">{offer.highlight}</p>
            </div>
          </div>
          <h2 id="offer-title" className="to-display mt-4 text-[1.6rem] leading-tight sm:text-[1.9rem]">
            {offer.title}
          </h2>
          <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">{offer.text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`#${offer.formId}`} onClick={() => setOpen(false)} className="to-btn to-btn-primary">
              {offer.cta}
            </a>
            <button type="button" onClick={() => setOpen(false)} className="to-btn to-btn-quiet">
              No thanks
            </button>
          </div>
          <p className="mt-5 text-[0.92rem] text-muted">{offer.terms ?? "Terms and conditions may apply."}</p>
        </div>
      </div>
    </div>
  );
}
