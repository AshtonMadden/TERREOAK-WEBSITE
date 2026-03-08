import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Snowball Referral Program | TERREOAK",
    description: "Refer a neighbor and save! Join the TERREOAK Snowball Referral program to earn credits for yourself and discounts for your friends.",
};

export default function SnowReferralLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
