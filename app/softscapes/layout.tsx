import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softscapes Calgary | Sod, Mulch & Planting | TERREOAK",
  description: "Premium softscape installation in Calgary. We provide professional sod installation, custom garden beds, mulch, and planting services for beautiful, lasting yards.",
};

export default function SoftscapesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
