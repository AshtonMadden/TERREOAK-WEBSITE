import { Tick } from "../components/ds";
import { iceMeltPrice, priceNote, snowPrices } from "./content";

/** Season pass price boxes: monthly rate and season rate for each property type, plus the ice melt add-on. */
export default function SnowPriceBoxes() {
  return (
    <div>
      <ul className="grid gap-3 md:gap-5 lg:grid-cols-3">
        {snowPrices.map((tier, i) => (
          <li key={tier.name} className={`to-card flex flex-col p-6 md:p-8 ${i === 0 ? "ring-1 ring-brand/45" : ""}`}>
            <h3 className="to-display to-h3">{tier.name}</h3>
            <p className="mt-2 text-[1.02rem] text-muted">{tier.covers}</p>
            <p className="mt-6">
              <span className="block text-[0.95rem] text-muted">Starting at</span>
              <span className="to-display text-[2.4rem] leading-none text-accent md:text-[2.8rem]">{tier.monthly}</span>
              <span className="ml-2 text-[1.05rem] text-muted">per month</span>
            </p>
            <p className="mt-5 border-t border-rule pt-5 text-[1.08rem] text-fg">
              <span className="font-bold">{tier.season}</span> <span className="text-muted">for the season (5 monthly payments)</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="to-card mt-3 grid items-center gap-5 p-6 md:mt-5 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-10 md:p-8">
        <div>
          <p className="to-sub">Optional add-on</p>
          <h3 className="to-display to-h3 mt-2">{iceMeltPrice.name}</h3>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{iceMeltPrice.desc}</p>
        </div>
        <div>
          <p>
            <span className="to-display text-[2rem] leading-none text-accent">{iceMeltPrice.monthly}</span>
            <span className="ml-2 text-[1.05rem] text-muted">per month</span>
          </p>
          <p className="mt-3 flex gap-3 text-[1.05rem] text-fg">
            <Tick />
            Cancel anytime
          </p>
        </div>
      </div>

      <p className="mt-5 text-[0.98rem] text-muted">{priceNote}</p>
    </div>
  );
}
