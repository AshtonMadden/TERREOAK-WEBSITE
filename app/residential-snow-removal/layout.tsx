import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residential Snow Removal Calgary | Monthly Snow Passes",
    description: "TERREOAK offers residential snow removal in Calgary with season passes, photo logs, and 12-24 hour service guarantees. Serving SW, SE, Calgary",
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
