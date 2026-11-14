import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Professional Spring Cleanup Calgary | TERREOAK",
  description: "Revitalize your yard with TERREOAK's professional spring cleanup services in Calgary. Power raking, aeration, and debris removal for a healthy lawn.",
  path: "/spring-cleanup-calgary",
  image: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG",
});

export default function SpringCleanupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
