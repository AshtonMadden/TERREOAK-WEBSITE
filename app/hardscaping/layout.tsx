import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardscaping Calgary | Retaining Walls & Patios | TERREOAK",
  description: "Professional hardscaping in Calgary. Custom paving stone patios, retaining walls, walkways, and durable outdoor structures built to last in Calgary's climate.",
};

export default function HardscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
