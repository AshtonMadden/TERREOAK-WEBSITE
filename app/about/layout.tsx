import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TERREOAK | Calgary's Trusted Landscapers",
  description: "Learn about TERREOAK, an owner-operated landscaping company in Calgary. Discover our story, our hands-on approach, and our commitment to quality.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
