// app/layout.tsx
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TERREOAK Landscaping: Grounds Maintenance & Landscaping",
  description: "Calgary's premier landscaping and snow removal team. Residential landscape construction, commercial maintenance, and year-round property care.",
  keywords: ["Calgary landscaping", "hardscaping Calgary", "retaining walls Calgary", "patio builders", "residential snow removal Calgary", "commercial grounds maintenance Calgary", "softscape installation", "TERREOAK Landscaping", "landscape design Calgary"],
  metadataBase: new URL("https://www.terreoak.ca"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  }
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat", // Keeping variable name same so global CSS doesn't break
});

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
        "email": "services@TERREOAK.ca",
        "description": "TERREOAK Landscaping & Snow is a premium landscaping contractor in Calgary, Alberta. We specialize in residential hardscaping, softscaping, retaining walls, paving stone patios, landscape design, reliable year-round commercial property maintenance, and residential snow removal.",
        "knowsAbout": ["Hardscaping", "Retaining Walls", "Paving Stone Patios", "Softscaping", "Snow Removal", "Commercial Grounds Maintenance", "Landscape Design", "Custom Woodworking"],
        "image": "https://www.terreoak.ca/images/commercial.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calgary & Surrounding Area",
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
    <html lang="en" className={jakarta.variable}>
      <head />
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9038MTNX12"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" src="/analytics.js" strategy="afterInteractive" />
        <Script
          id="schema-ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
