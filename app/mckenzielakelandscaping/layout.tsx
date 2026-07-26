import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata = {
  title: "McKenzie Lake Landscaping Calgary | TERREOAK",
  description: "Expert landscaping services in McKenzie Lake, Calgary. From custom hardscaping to lush softscapes, trust TERREOAK for your next yard transformation.",
};



export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
