import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retaining Walls Calgary – Built to Last | TERREOAK",
  description:
    "Calgary retaining walls built with interlocking block and proper drainage so slopes stay put. Permits and engineering handled. Request a free quote.",
};

export default function RetainingWallsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
