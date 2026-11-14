import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Landscaping & Snow Removal Blog Calgary | TERREOAK",
  description: "Read the TERREOAK blog for expert landscaping tips, snow removal advice, and seasonal property maintenance guides for Calgary homeowners.",
  path: "/blog",
  image: "/images/blog-hero.jpg",
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
