import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calgary Landscaping Company | TERREOAK",
    description: "TERREOAK Landscaping provides residential and commercial landscaping in Calgary, with design, construction, maintenance, and custom outdoor solutions.",
};

export default function LandscapeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
