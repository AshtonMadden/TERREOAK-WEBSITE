import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Commercial Grounds Maintenance Calgary | TERREOAK",
  description: "Professional commercial grounds maintenance in Calgary. Keep your business property pristine year-round with TERREOAK's dedicated property care.",
  path: "/commercial-grounds-maintenance",
  image: "/commercial-lawn-mowing.JPG",
});

export default function CommercialLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
