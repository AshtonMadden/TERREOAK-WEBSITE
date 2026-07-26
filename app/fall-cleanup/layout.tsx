import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fall Yard Cleanup Services Calgary | TERREOAK",
  description: "Get your property ready for winter with TERREOAK's comprehensive fall yard cleanup services in Calgary. Leaf removal, pruning, and debris clearing.",
};

export default function FallCleanupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
