import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Yard Cleanup Calgary | Power Raking & Debris Removal",
    description: "Get your Calgary yard ready for summer with TERREOAK spring cleanup. Professional power raking, aeration, and debris removal for a healthy, green lawn.",
};

export default function SpringCleanupLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
