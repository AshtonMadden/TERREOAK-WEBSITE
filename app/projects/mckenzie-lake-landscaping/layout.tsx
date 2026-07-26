import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata = {
  title: "McKenzie Lake Landscape Makeover | TERREOAK Projects",
  description: "View our recent landscape makeover in McKenzie Lake, Calgary. See how TERREOAK transformed this property with custom hardscaping and elegant design.",
};



export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
