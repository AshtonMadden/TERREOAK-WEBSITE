import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Support | TERREOAK Landscaping",
    description: "Need help? Contact TERREOAK for questions about your recent service, billing, or to request technical support for our client portal.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
