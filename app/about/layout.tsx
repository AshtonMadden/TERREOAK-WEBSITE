import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "About TERREOAK | Calgary's Trusted Landscapers",
  description: "Learn about TERREOAK, an owner-operated landscaping company in Calgary. Discover our story, our hands-on approach, and our commitment to quality.",
  path: "/about",
  image: "/images/about-mission-team.jpg",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
