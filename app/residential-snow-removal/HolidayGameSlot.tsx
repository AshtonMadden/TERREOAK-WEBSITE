"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The game's code is only downloaded during the holiday season, and only in the browser.
const HolidayGame = dynamic(() => import("./HolidayGame"), { ssr: false });

/** First and last day the game shows each year, as [month, day]. It runs across New Year. */
const SEASON_START: [number, number] = [11, 15];
const SEASON_END: [number, number] = [1, 6];

const inSeason = (date: Date) => {
  const value = (date.getMonth() + 1) * 100 + date.getDate();
  return value >= SEASON_START[0] * 100 + SEASON_START[1] || value <= SEASON_END[0] * 100 + SEASON_END[1];
};

/** Holiday game section for the snow page. Renders nothing outside the season. */
export default function HolidayGameSlot() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const preview = new URLSearchParams(window.location.search).has("holiday-game");
    // The date is only known in the browser, so this has to run after the page loads.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(preview || inSeason(new Date()));
  }, []);

  if (!show) return null;

  return (
    <section id="holiday-game" className="py-10 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="to-card to-snow-v2 p-6 md:p-12">
          <p className="to-sub">Happy holidays from TERREOAK</p>
          <h2 className="to-display to-h2 mt-3">Take a break: catch some presents</h2>
          <p className="to-body mt-4">While we look after the driveway, see how many presents you can catch before the coal gets you.</p>
          <div className="mt-8">
            <HolidayGame />
          </div>
        </div>
      </div>
    </section>
  );
}
