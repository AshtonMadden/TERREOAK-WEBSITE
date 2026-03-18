import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Testimonials | Calgary Landscaping Reviews",
    description: "Watch video testimonials from our satisfied Calgary landscaping, snow removal, and spring yard cleanup clients. See why TERREOAK is the trusted choice.",
};

export default function VideoTestimonialsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
