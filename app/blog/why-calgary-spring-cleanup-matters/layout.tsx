import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Spring Cleanup Matters in Calgary | TERREOAK Blog",
  description: "Understand the importance of a thorough spring yard cleanup in Calgary. Learn how early maintenance sets your lawn and garden up for summer success.",
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
