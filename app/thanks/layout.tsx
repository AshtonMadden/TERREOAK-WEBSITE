import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Thank You | TERREOAK Landscaping Calgary",
  description: "Thank you for contacting TERREOAK. We have received your message and will be in touch shortly regarding your landscaping or snow removal needs.",
  path: "/thanks",
  noindex: true,
});

export default function ThanksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
