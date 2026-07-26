import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Blowouts & Winterization Calgary | TERREOAK",
  description: "Protect your sprinkler system from freezing. Book professional irrigation blowouts and winterization services in Calgary with TERREOAK.",
};

export default function IrrigationLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
