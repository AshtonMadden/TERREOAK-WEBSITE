import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Grounds Maintenance Calgary | TERREOAK",
  description: "Professional commercial grounds maintenance in Calgary. Keep your business property pristine year-round with TERREOAK's dedicated property care.",
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
