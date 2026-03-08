import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Irrigation Blowouts Calgary | Sprinkler Winterization",
    description: "Ensure your irrigation system survives the Calgary freeze. Professional blowout services to prevent damage and ensure a smooth start next spring.",
};

export default function IrrigationLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
