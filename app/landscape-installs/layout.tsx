import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calgary Landscaping Company | Patios, Sod & Garden Beds",
    description: "Custom landscape design and construction in Calgary. From paving and stone work to sod and tree installation, we build durable outdoor spaces for Alberta climates.",
};

export default function LandscapeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
