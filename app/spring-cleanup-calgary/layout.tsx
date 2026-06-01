import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Yard Cleanups Calgary | Power Raking & Aeration",
    description: "Professional Calgary spring cleanup. Power raking, aeration, and debris removal for a healthy, green seasonal lawn.",
};

export default function SpringCleanupLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
