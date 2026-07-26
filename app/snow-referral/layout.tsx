import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snow Removal Referral Program Calgary | TERREOAK",
  description: "Join the TERREOAK snow removal referral program in Calgary. Earn rewards by referring friends and neighbors for our reliable winter services.",
};

export default function SnowReferralLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
