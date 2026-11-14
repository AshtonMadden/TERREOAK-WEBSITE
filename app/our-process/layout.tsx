import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Our Landscaping Process | How TERREOAK Works",
  description: "Learn about TERREOAK's seamless landscaping process. From initial consultation to final installation, see how we deliver exceptional results in Calgary.",
  path: "/our-process",
});

export default function OurProcessLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
