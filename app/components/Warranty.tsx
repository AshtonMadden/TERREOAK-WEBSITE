import { Band, Tick } from "./ds";

// The workmanship warranty, stated once so every page says the same thing.
export const warranty = {
  years: 5,
  title: "5-year workmanship warranty",
  summary: "Our landscape construction is backed by a 5-year workmanship warranty. If something we built fails because of how we built it, we come back and make it right.",
  covers: ["Paver patios, walkways and steps", "Retaining walls", "Base preparation, grading and drainage we install", "Sod and softscape installation workmanship"],
  plants: "Plants are living material, so they aren’t covered by the workmanship warranty. Where the plant supplier provides a warranty, we match it.",
  faq: {
    q: "Do you offer a warranty on your work?",
    a: "Yes. Our landscape construction, including patios, walkways, retaining walls and other installs, is backed by a 5-year workmanship warranty. Plants aren’t covered by the workmanship warranty, but where the plant supplier provides a warranty, we match it. The full terms are in your written quote.",
  },
};

/** Warranty section used on the landscaping pages. */
export default function WarrantyBand() {
  return (
    <Band id="warranty">
      <div className="to-card grid items-center gap-8 p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12">
        <div>
          <p className="to-sub">Our warranty</p>
          <p className="to-display mt-3 text-[3.4rem] leading-none text-accent md:text-[4.4rem]">{warranty.years} years</p>
          <h2 className="to-display to-h3 mt-3">Workmanship warranty</h2>
        </div>
        <div>
          <p className="to-body">{warranty.summary}</p>
          <ul className="mt-6 grid gap-3 text-[1.08rem] text-fg sm:grid-cols-2">
            {warranty.covers.map((item) => (
              <li key={item} className="flex gap-3">
                <Tick />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">{warranty.plants}</p>
          <p className="mt-3 text-[0.98rem] text-muted">Full warranty terms are set out in your written quote.</p>
        </div>
      </div>
    </Band>
  );
}
