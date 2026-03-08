import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About TERREOAK | Calgary Landscaping & Snow Company",
    description: "Learn about the values and vision behind TERREOAK. Founded by Ashton Madden, we are dedicated to professional integrity, team culture, and results built for Calgary seasons.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
