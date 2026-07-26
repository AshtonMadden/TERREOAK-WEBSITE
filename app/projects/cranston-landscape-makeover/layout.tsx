import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata = {
  title: "Cranston Landscape Makeover | TERREOAK Projects",
  description: "Explore our Cranston landscape makeover project. Discover the high-quality craftsmanship and materials TERREOAK brings to Calgary yards.",
};



export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
