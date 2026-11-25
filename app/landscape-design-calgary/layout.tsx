import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Design Calgary – 3D Plans & Build | TERREOAK",
  description:
    "3D landscape design in Calgary from an owner-run design-build team. See your yard before we build it, then we install it. Book a design consultation.",
};

export default function LandscapeDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
