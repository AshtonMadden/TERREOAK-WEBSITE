import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Use Open Grade Base for Patios? | TERREOAK Blog",
  description: "Learn why an open grade base is superior for paver patios. Discover the benefits of improved drainage and longevity for your Calgary hardscaping project.",
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
