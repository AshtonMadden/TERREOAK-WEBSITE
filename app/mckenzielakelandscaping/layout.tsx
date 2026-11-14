import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "McKenzie Lake Landscaping Calgary | TERREOAK",
  description: "Expert landscaping services in McKenzie Lake, Calgary. From custom hardscaping to lush softscapes, trust TERREOAK for your next yard transformation.",
  path: "/mckenzielakelandscaping",
  image: "/Landscape web page pics/Finished-hardscape-project.JPG",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
