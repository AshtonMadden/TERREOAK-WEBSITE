import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Spring Cleanup Matters for Calgary Lawns | TERREOAK Tips",
    description: "Discover why professional spring cleanup is essential for your Calgary yard. Learn about snow mold, aeration, power raking, and salt damage solutions.",
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
