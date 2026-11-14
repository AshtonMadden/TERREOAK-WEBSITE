import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Professional Landscape Installs Calgary | TERREOAK",
  description: "Complete landscape installations in Calgary. Let TERREOAK bring your dream yard to life with our expert design and construction team.",
  path: "/landscape-installs",
  image: "/Calgary-landscape-design-build-patio.JPG",
});

export default function LandscapeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
