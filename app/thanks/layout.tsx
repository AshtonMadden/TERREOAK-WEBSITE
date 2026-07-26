import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | TERREOAK Landscaping Calgary",
  description: "Thank you for contacting TERREOAK. We have received your message and will be in touch shortly regarding your landscaping or snow removal needs.",
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
