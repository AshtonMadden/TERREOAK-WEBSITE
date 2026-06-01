import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Calgary Landscaping & Design | TERREOAK",
  description: "Learn how TERREOAK approaches landscape design and construction in Calgary. From initial consultation to 3D design and professional installation.",
};

export default function OurProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
