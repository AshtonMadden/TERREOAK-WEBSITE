import type { ReactNode } from "react";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta({
  title: "Why Hire a Pro Snow Removal Company? | TERREOAK Blog",
  description: "Discover the top reasons to hire a professional snow removal company in Calgary. Save time, avoid injury, and ensure your property is always safe.",
  path: "/blog/why-hire-snow-removal-company",
  image: "/blog-pics/professional_snow_clearing.png",
  type: "article",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
