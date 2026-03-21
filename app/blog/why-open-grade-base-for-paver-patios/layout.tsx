import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Open Grade Base is Best for Calgary Patios | TERREOAK Hardscaping",
    description: "Learn why TERREOAK uses open grade base for Calgary patio and hardscaping projects to prevent frost heave and ensure superior drainage.",
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
