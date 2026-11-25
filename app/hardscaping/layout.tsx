import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardscaping Calgary – Paving Stones & Patios | TERREOAK",
  description: "Calgary hardscaping built on a proper compacted base: paving-stone patios, retaining walls, walkways and steps that stay level through freeze-thaw.",
};

export default function HardscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
