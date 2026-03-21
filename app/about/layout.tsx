import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About TERREOAK | Calgary Landscaping & Snow Company",
    description: "Learn about TERREOAK Landscaping & Snow. Professional integrity and cultural excellence built for Calgary's unique seasons.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
