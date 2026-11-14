// app/layout.tsx
import type { ReactNode } from "react";
// Fonts are self-hosted so builds never depend on a third-party font server.
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/lora";
import "@fontsource-variable/lora/wght-italic.css";
import "@fontsource-variable/montserrat";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { pageMeta } from "./lib/seo";
import { site } from "./lib/site";
import JsonLd from "./components/JsonLd";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const homeTitle = "Top Rated Landscaping & Snow Removal Calgary | TERREOAK";
const homeDescription =
  "TERREOAK provides premium landscaping, hardscaping, and residential snow removal in Calgary. Transform your outdoor space with our expert, hands-on team.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  applicationName: site.shortName,
  icons: { icon: "/icon.png", apple: "/icon.png" },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#26282b",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.terreoak.ca/#organization",
        "name": "TERREOAK Landscaping & Snow",
        "url": "https://www.terreoak.ca",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.terreoak.ca/icon.png",
          "width": 180,
          "height": 180
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-587-707-7648",
          "contactType": "customer service",
          "areaServed": "CA",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.terreoak.ca/#website",
        "url": "https://www.terreoak.ca",
        "name": "TERREOAK Landscaping",
        "description": "Calgary's premier landscaping and snow removal team."
      },
      {
        "@type": "LandscapingService",
        "@id": "https://www.terreoak.ca/#localbusiness",
        "name": "TERREOAK Landscaping & Snow",
        "legalName": "TERREOAK Landscaping & Snow",
        "url": "https://www.terreoak.ca",
        "telephone": "+1-587-707-7648",
        "email": "services@terreoak.ca",
        "description": "TERREOAK Landscaping & Snow is a premium landscaping contractor in Calgary, Alberta. We specialize in residential hardscaping, softscaping, retaining walls, paving stone patios, landscape design, reliable year-round commercial property maintenance, and residential snow removal.",
        "knowsAbout": ["Calgary Snow Removal", "Landscaping in Calgary", "Hardscaping Calgary", "Retaining Walls", "Paving Stone Patios", "Softscaping", "Commercial Grounds Maintenance", "Landscape Design", "Spring Cleanup"],
        "image": "https://www.terreoak.ca/images/commercial.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "postalCode": "T2P",
          "addressCountry": "CA"
        },
        "areaServed": [
          { "@type": "City", "name": "Calgary" },
          { "@type": "City", "name": "Chestermere" },
          { "@type": "City", "name": "Okotoks" },
          { "@type": "City", "name": "Airdrie" },
          { "@type": "City", "name": "Cochrane" }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.0447,
          "longitude": -114.0719
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "06:00",
          "closes": "21:00"
        },
        "priceRange": "$$$",

        "serviceType": [
          "Landscape Construction",
          "Snow Removal",
          "Grounds Maintenance",
          "Spring Cleanup",
          "Irrigation"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head />
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9038MTNX12"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" src="/analytics.js" strategy="afterInteractive" />
        <JsonLd data={jsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
