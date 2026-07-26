import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softscape & Garden Design Calgary | TERREOAK",
  description: "Beautiful softscape installations in Calgary. TERREOAK specializes in planting, sodding, mulching, and custom garden designs for your home.",
};

export default function SoftscapesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
