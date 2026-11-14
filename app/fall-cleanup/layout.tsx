import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Fall Yard Cleanup Services Calgary | TERREOAK",
  description: "Get your property ready for winter with TERREOAK's comprehensive fall yard cleanup services in Calgary. Leaf removal, pruning, and debris clearing.",
  path: "/fall-cleanup",
  image: "/fall-cleanup-hero.jpg",
});

export default function FallCleanupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
