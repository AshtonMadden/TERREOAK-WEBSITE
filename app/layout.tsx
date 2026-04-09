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
  description: "Calgary's premier landscaping and snow removal team. Residential landscape construction, commercial maintenance, and year-round property care.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://terreoak.ca/#organization",
        "name": "TERREOAK Landscaping & Snow",
        "url": "https://terreoak.ca",
        "logo": {
          "@type": "ImageObject",
          "url": "https://terreoak.ca/icon.png",
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
        "@type": "LandscapingService",
        "@id": "https://terreoak.ca/#localbusiness",
        "name": "TERREOAK Landscaping & Snow",
        "legalName": "TERREOAK Landscaping & Snow",
        "url": "https://terreoak.ca",
        "telephone": "+1-587-707-7648",
        "email": "services@TERREOAK.ca",
        "image": "https://terreoak.ca/images/commercial.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calgary & Surrounding Area",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "postalCode": "T2P",
          "addressCountry": "CA"
        },
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
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Calgary"
        },
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
    <html lang="en" className={montserrat.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BB7P86ZK6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1BB7P86ZK6');
          `}
        </Script>
        <Script
          id="schema-ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
