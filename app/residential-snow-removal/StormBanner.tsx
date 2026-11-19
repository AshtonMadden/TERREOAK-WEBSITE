"use client";

import { useEffect, useState } from "react";

/**
 * Storm alert shown at the top of the snow page. Edit the text here when the forecast changes.
 * It hides itself after `expires` so an old warning never lingers; set `active` to false to
 * take it down sooner.
 */
export const stormAlert = {
  active: true,
  /** When the banner stops showing: noon on Saturday, November 21, 2026, Calgary time. */
  expires: "2026-11-21T19:00:00Z",
  title: "Snow in the forecast",
  text: "1 cm possible this Friday night.",
  linkLabel: "Need a pass? Fill out the form",
  linkHref: "#seasonal-form",
};

export default function StormBanner() {
  const [show, setShow] = useState(stormAlert.active);

  useEffect(() => {
    // The visitor's clock is only known in the browser, so the expiry check runs after load.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (Date.now() > Date.parse(stormAlert.expires)) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div role="status" className="to-storm mb-6 flex flex-col gap-x-5 gap-y-3 rounded-[22px] bg-brand px-5 py-4 text-brand-deep md:mb-8 md:flex-row md:items-center md:rounded-full md:px-7 md:py-3">
      <p className="flex items-start gap-3 text-[1.02rem] leading-snug md:items-center">
        <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 md:mt-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3 2.5 20h19L12 3Z" />
          <path d="M12 10v4.5M12 17.2v.3" />
        </svg>
        <span>
          <strong className="font-bold uppercase tracking-wide">{stormAlert.title}.</strong> {stormAlert.text}
        </span>
      </p>
      <a href={stormAlert.linkHref} className="to-focus shrink-0 font-bold underline underline-offset-4 md:ml-auto">
        {stormAlert.linkLabel}
      </a>
    </div>
  );
}
