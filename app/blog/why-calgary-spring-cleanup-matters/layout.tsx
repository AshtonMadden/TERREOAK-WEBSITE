import type { ReactNode } from "react";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta({
  title: "Why Spring Cleanup Matters in Calgary | TERREOAK Blog",
  description: "Understand the importance of a thorough spring yard cleanup in Calgary. Learn how early maintenance sets your lawn and garden up for summer success.",
  path: "/blog/why-calgary-spring-cleanup-matters",
  type: "article",
});

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
