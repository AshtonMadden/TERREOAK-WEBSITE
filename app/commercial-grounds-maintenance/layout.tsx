import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Landscaping & Grounds Maintenance Calgary",
  description: "Comprehensive exterior management for Calgary commercial properties. Priority snow removal, scheduled grounds maintenance, and digital reporting for total accountability.",
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
