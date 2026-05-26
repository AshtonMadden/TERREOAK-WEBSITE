import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calgary Snow Removal | TERREOAK",
    description: "TERREOAK offers residential snow removal in Calgary with season passes, photo logs, and 12-24 hour service guarantees. Serving SW, SE, Calgary",
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
