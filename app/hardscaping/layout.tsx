import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Hardscaping & Patio Builders Calgary | TERREOAK",
  description: "Premium hardscaping services in Calgary. We design and build stunning patios, retaining walls, and walkways using top-quality materials.",
};

export default function HardscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
