import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Received | TERREOAK",
  description: "Thank you for reaching out to TERREOAK. We've received your request and our team will get back to you shortly.",
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
