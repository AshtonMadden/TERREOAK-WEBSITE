"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/site";
import { zones } from "./content";

const OUTSIDE = "__outside__";

/** The hero's working control: pick a community and find out whether a route covers it. */
export function RouteCheck() {
  const [choice, setChoice] = useState("");
  const zone = zones.find((z) => z.areas.includes(choice));

  return (
    <div className="rounded-[28px] bg-[#1d1f21]/80 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md sm:p-7">
      <label htmlFor="route-check" className="block text-lg font-semibold text-fg">
        Is your home on one of our routes?
      </label>
      <select id="route-check" value={choice} onChange={(e) => setChoice(e.target.value)} className="to-field mt-3">
        <option value="" disabled>
          Choose your community
        </option>
        {zones.map((z) => (
          <optgroup key={z.name} label={z.name}>
            {z.areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </optgroup>
        ))}
        <option value={OUTSIDE}>Somewhere else</option>
      </select>

      <div aria-live="polite" className="mt-4 min-h-[6.5rem]">
        {!choice && (
          <p className="text-[1.05rem] leading-relaxed text-muted">
            We only take homes we can reach within 24 hours of a snowfall, so routes are limited to south Calgary.
          </p>
        )}
        {zone && (
          <>
            <p className="text-[1.05rem] leading-relaxed text-fg">
              <strong className="font-semibold text-accent">Yes.</strong> {choice} is on our {zone.name.toLowerCase().replace("calgary", "Calgary")} route. Capacity is capped each season.
            </p>
            <a href="#seasonal-form" className="to-btn to-btn-primary mt-4 w-full">
              Reserve a season pass
            </a>
          </>
        )}
        {choice === OUTSIDE && (
          <>
            <p className="text-[1.05rem] leading-relaxed text-fg">We may still be able to reach you. Call and we’ll check availability for your street.</p>
            <a href={site.phoneHref} className="to-btn to-btn-quiet mt-4 w-full">
              Call {site.phoneDisplay}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

/** Sign-up bar that appears after the hero and gets out of the way when the form or the footer is on screen. */
export function StickyCta({ targetId, label }: { targetId: string; label: string }) {
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
