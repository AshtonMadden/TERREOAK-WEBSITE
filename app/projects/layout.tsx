import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calgary Landscaping Projects | TERREOAK Projects",
    description: "Explore our gallery of completed landscape construction and commercial property maintenance projects across Calgary and surrounding areas.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
