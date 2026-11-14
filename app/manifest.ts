import type { MetadataRoute } from "next";
import { site } from "./lib/site";

// Lets phones show the right name, icon and colours when the site is saved to the home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: "Landscape construction, property maintenance and residential snow removal in Calgary.",
    start_url: "/",
    display: "browser",
    background_color: "#26282b",
    theme_color: "#26282b",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
