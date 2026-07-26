import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Snow Removal Services Calgary | TERREOAK",
  description: "Reliable residential snow removal in Calgary. Keep your driveway and walkways clear and safe all winter long with TERREOAK's professional crews.",
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
