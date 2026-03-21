import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residential Snow Removal Calgary | Driveways & Walkways",
    description: "Reliable 1cm snow removal for Calgary homeowners. Professional service, photo logs, and neighbor referral rewards.",
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
