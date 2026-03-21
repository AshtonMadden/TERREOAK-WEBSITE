import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Testimonials | Calgary Landscaping Reviews",
    description: "Watch video testimonials from our Calgary clients. See why TERREOAK is the trusted choice for lawn and snow care.",
};

export default function VideoTestimonialsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
