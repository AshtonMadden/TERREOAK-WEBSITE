import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Landscaping Process | How TERREOAK Works",
  description: "Learn about TERREOAK's seamless landscaping process. From initial consultation to final installation, see how we deliver exceptional results in Calgary.",
};

export default function OurProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
