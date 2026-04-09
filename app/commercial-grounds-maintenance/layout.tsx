import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Maintenance | Calgary",
  description: "TERREOAK provides commercial grounds maintenance and snow removal in Calgary for condo complexes, industrial sites, and new construction. Fully insured. Digital reporting.",
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
