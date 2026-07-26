import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Spring Cleanup Calgary | TERREOAK",
  description: "Revitalize your yard with TERREOAK's professional spring cleanup services in Calgary. Power raking, aeration, and debris removal for a healthy lawn.",
};

export default function SpringCleanupLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
