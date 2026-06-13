import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Custom Landscaping Calgary | TERREOAK",
    description: "High-end custom landscaping and design-build firm in Calgary. We specialize in luxury outdoor transformations, from engineered retaining walls to custom patios.",
};

export default function LandscapeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
