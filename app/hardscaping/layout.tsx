import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Custom Hardscaping & Patio Builders Calgary | TERREOAK",
  description: "Premium hardscaping services in Calgary. We design and build stunning patios, retaining walls, and walkways using top-quality materials.",
  path: "/hardscaping",
  image: "/Landscape web page pics/Finished-hardscape-project.JPG",
});

export default function HardscapingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
