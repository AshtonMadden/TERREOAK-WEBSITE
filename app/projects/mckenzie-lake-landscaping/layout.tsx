import type { ReactNode } from "react";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta({
  title: "McKenzie Lake Landscape Makeover | TERREOAK Projects",
  description: "View our recent landscape makeover in McKenzie Lake, Calgary. See how TERREOAK transformed this property with custom hardscaping and elegant design.",
  path: "/projects/mckenzie-lake-landscaping",
  image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
