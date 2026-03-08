import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping & Snow Removal Tips Calgary | TERREOAK Blog",
  description: "Insights and updates from the TERREOAK team. Tips for lawn care, seasonal maintenance, and the latest landscaping trends in Calgary and Alberta.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
