import type { ReactNode } from "react";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Softscape & Garden Design Calgary | TERREOAK",
  description: "Beautiful softscape installations in Calgary. TERREOAK specializes in planting, sodding, mulching, and custom garden designs for your home.",
  path: "/softscapes",
  image: "/images/softscaping-river-rock-hostas.jpg",
});

export default function SoftscapesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
