import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residential Snow Removal Calgary | Driveways & Walkways",
    description: "Reliable 1cm snow removal services for Calgary homeowners. Professional equipment, photo service logs, and tiered referral rewards for the best property care.",
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
