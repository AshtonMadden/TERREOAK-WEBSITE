import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Snow Removal Referral Program Calgary | TERREOAK",
  description: "Join the TERREOAK snow removal referral program in Calgary. Earn rewards by referring friends and neighbors for our reliable winter services.",
  path: "/snow-referral",
});

export default function SnowReferralLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
