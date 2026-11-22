// app/layout.tsx
import type { ReactNode } from "react";
// Montserrat is the only typeface on the site, self-hosted so builds never depend on a font server.
import "@fontsource-variable/montserrat";
import "@fontsource-variable/montserrat/wght-italic.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { pageMeta } from "./lib/seo";
import { site } from "./lib/site";
import JsonLd from "./components/JsonLd";
import ScrollReveal from "./components/ScrollReveal";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import WebMcpTools from "./components/WebMcpTools";

const homeTitle = "Calgary Landscaping & Snow Removal Company | TERREOAK";
const homeDescription =
  "TERREOAK builds patios, retaining walls and landscapes and handles year-round property maintenance and residential snow removal in Calgary. 5.0 on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMeta({ title: homeTitle, description: homeDescription, path: "/" }),
  applicationName: site.name,
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
        "@id": "https://terreoak.ca/#organization",
        "name": "TERREOAK Landscaping & Snow",
        "url": "https://terreoak.ca",
        "logo": {
          "@type": "ImageObject",
          "url": "https://terreoak.ca/icon.png",
          "width": 180,
          "height": 180
        },
        "telephone": "+1-587-707-7648",
        "email": "services@terreoak.ca",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "postalCode": "T2P",
          "addressCountry": "CA"
        },
        "sameAs": site.sameAs,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-587-707-7648",
          "contactType": "customer service",
          "url": "https://terreoak.ca/contact",
          "areaServed": "CA",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://terreoak.ca/#website",
        "url": "https://terreoak.ca",
        "name": "TERREOAK Landscaping & Snow",
        "alternateName": ["TERREOAK", "TERREOAK Landscaping", "Terre Oak", "Terra Oak", "Terraoak"],
        "description": "Calgary's premier landscaping and snow removal team.",
        "publisher": { "@id": "https://terreoak.ca/#organization" }
      },
      {
        "@type": "LandscapingService",
        "@id": "https://terreoak.ca/#localbusiness",
        "name": "TERREOAK Landscaping & Snow",
        "legalName": "TERREOAK Landscaping & Snow",
        "url": "https://terreoak.ca",
        "telephone": "+1-587-707-7648",
        "email": "services@terreoak.ca",
        "description": "TERREOAK Landscaping & Snow is a premium landscaping contractor in Calgary, Alberta. We specialize in residential hardscaping, softscaping, retaining walls, paving stone patios, landscape design, reliable year-round commercial property maintenance, and residential snow removal.",
        "knowsAbout": ["Calgary Snow Removal", "Landscaping in Calgary", "Hardscaping Calgary", "Retaining Walls", "Paving Stone Patios", "Softscaping", "Commercial Grounds Maintenance", "Landscape Design", "Spring Cleanup"],
        "image": "https://terreoak.ca/hardscaping/calgary-fire-pit-patio.jpg",
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
        "hasMap": site.googleProfile,
        "sameAs": site.sameAs,

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
      <head>
        {/* Open connections to the booking form's servers early so the form appears faster. */}
        <link rel="preconnect" href="https://d3ey4dbjkt2f6s.cloudfront.net" />
        <link rel="preconnect" href="https://clienthub.getjobber.com" />
      </head>
      <body>
        {/* Analytics loads once the page is idle so it never competes with the content. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9038MTNX12" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9038MTNX12');
gtag('config', 'AW-16575832442');`}
        </Script>
        <JsonLd data={jsonLd} />
        <ScrollReveal />
        <WebMcpTools />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
