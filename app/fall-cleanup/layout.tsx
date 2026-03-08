import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fall Cleanup Calgary | Leaf Removal & Winter Prep",
  description: "Prepare your property for the Alberta winter with professional fall cleanup. Leaf removal, garden bed clearing, and final lawn maintenance to protect your investment.",
};

export default function FallCleanupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
