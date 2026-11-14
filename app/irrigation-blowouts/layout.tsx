import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Irrigation Blowouts & Winterization Calgary | TERREOAK",
  description: "Protect your sprinkler system from freezing. Book professional irrigation blowouts and winterization services in Calgary with TERREOAK.",
  path: "/irrigation-blowouts",
  image: "/images/irrigation-hero.jpg",
});

export default function IrrigationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
