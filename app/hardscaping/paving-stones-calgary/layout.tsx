import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paving Stones Calgary – Patio & Walkway Pavers | TERREOAK",
  description:
    "Calgary paving-stone patios, walkways and driveways installed on a compacted base so they stay level through freeze-thaw. Request your free proposal.",
};

export default function PavingStonesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
