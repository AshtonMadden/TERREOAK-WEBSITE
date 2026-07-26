import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Landscape Installs Calgary | TERREOAK",
  description: "Complete landscape installations in Calgary. Let TERREOAK bring your dream yard to life with our expert design and construction team.",
};

export default function LandscapeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
