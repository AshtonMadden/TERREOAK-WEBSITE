import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Landscaping Projects Portfolio Calgary | TERREOAK",
  description: "Browse the TERREOAK landscaping portfolio. View our recent projects in Calgary featuring custom patios, garden designs, and complete yard renovations.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
