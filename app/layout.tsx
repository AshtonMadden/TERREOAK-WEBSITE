// app/layout.tsx
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TERREOAK Landscaping: Grounds Maintenance & Landscaping",
  description: "Calgary's premier landscape construction and snow removal team. We specialize in high-end residential landscaping, commercial grounds maintenance, and reliable year-round property care.",
  metadataBase: new URL("https://terreoak.ca"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  }
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
