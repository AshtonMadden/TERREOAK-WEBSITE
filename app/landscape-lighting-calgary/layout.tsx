import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Lighting Calgary – Outdoor LED Installs | TERREOAK",
  description:
    "Low-voltage landscape and outdoor lighting in Calgary, designed and installed: pathways, patios, trees and walls. Lit for year-round use. Get a quote.",
};

export default function LandscapeLightingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
