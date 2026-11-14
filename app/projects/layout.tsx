import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Our Landscaping Projects Portfolio Calgary | TERREOAK",
  description: "Browse the TERREOAK landscaping portfolio. View our recent projects in Calgary featuring custom patios, garden designs, and complete yard renovations.",
  path: "/projects",
  image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
