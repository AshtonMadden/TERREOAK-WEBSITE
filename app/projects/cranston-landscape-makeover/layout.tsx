import type { ReactNode } from "react";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta({
  title: "Cranston Landscape Makeover | TERREOAK Projects",
  description: "Explore our Cranston landscape makeover project. Discover the high-quality craftsmanship and materials TERREOAK brings to Calgary yards.",
  path: "/projects/cranston-landscape-makeover",
  image: "/projects/cranston-makeover/hero-aerial.jpg",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
