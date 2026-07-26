import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping & Snow Removal Blog Calgary | TERREOAK",
  description: "Read the TERREOAK blog for expert landscaping tips, snow removal advice, and seasonal property maintenance guides for Calgary homeowners.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
