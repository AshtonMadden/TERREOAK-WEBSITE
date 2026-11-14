import type { ReactNode } from "react";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta({
  title: "Why Use Open Grade Base for Patios? | TERREOAK Blog",
  description: "Learn why an open grade base is superior for paver patios. Discover the benefits of improved drainage and longevity for your Calgary hardscaping project.",
  path: "/blog/why-open-grade-base-for-paver-patios",
  type: "article",
});

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
