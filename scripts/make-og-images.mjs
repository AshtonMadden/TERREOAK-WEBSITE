// Builds the 1200x630 share images (used by Facebook, LinkedIn, iMessage, X and others)
// from each page's main photo. Run with: node scripts/make-og-images.mjs
// To add a page, add its route and source photo below, then run the script again.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const sources = {
  "/": "images/home-hero-poster.jpg",
  "/residential-snow-removal": "images/snow-removal/hero-poster.jpg",
  "/landscape-installs": "Calgary-landscape-design-build-patio.JPG",
  "/hardscaping": "hardscaping/calgary-fire-pit-patio.jpg",
  "/softscapes": "images/softscaping-river-rock-hostas.jpg",
  "/commercial-grounds-maintenance": "commercial-lawn-mowing.JPG",
  "/spring-cleanup-calgary": "spring-cleanup-pics/calgary-spring-cleanup-after.jpg",
  "/fall-cleanup": "spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG",
  "/irrigation-blowouts": "images/irrigation-hero.jpg",
  "/our-process": "Landscape web page pics/lawn-relevel-calgary.JPG",
  "/projects": "Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
  "/projects/cranston-landscape-makeover": "projects/cranston-makeover/hero-aerial.jpg",
  "/projects/mckenzie-lake-landscaping": "projects/project-2/img-7.jpg",
  "/mckenzielakelandscaping": "Landscape web page pics/Finished-hardscape-project.JPG",
  "/parklandlandscaping": "images/softscaping-river-rock-hostas.jpg",
  "/about": "images/about-mission-team.jpg",
  "/contact": "images/about-mission-team.jpg",
  "/blog": "Landscape web page pics/Finished-hardscape-project.JPG",
  "/blog/why-hire-snow-removal-company": "blog-pics/professional_snow_clearing.png",
  "/blog/power-raking-calgary-guide": "spring-cleanup-pics/Power-raking-services.JPG",
  "/blog/when-to-aerate-lawn-calgary": "spring-cleanup-pics/Calgary-Core-Aeration.JPG",
  "/blog/commercial-snow-removal-calgary-guide": "blog-pics/commercial-snow-removal-calgary-picket.jpg",
  "/commercial-snow-removal": "blog-pics/commercial-snow-removal-calgary-picket.jpg",
  "/blog/commercial-winter-site-prep-checklist": "blog-pics/commercial-property-sidewalk-calgary.jpg",
  "/blog/commercial-ice-control-calgary": "snow-removal-okotoks-after.JPG",
  "/blog/winter-slip-and-fall-liability-property-managers": "residential-snow-removalJPG.JPG",
  "/blog/why-calgary-spring-cleanup-matters": "spring-cleanup-pics/Leaf-Cleanup-near-me.jpg",
  "/blog/why-open-grade-base-for-paver-patios": "Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
  "/careers": "images/careers-hero.png",
  "/privacy": "images/home-hero-poster.jpg",
  "/terms": "images/home-hero-poster.jpg",
  "/thanks": "images/home-hero-poster.jpg",
};

for (const [route, source] of Object.entries(sources)) {
  const out = path.join("public/og", `${route === "/" ? "home" : route.slice(1)}.jpg`);
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(path.join("public", source))
    .rotate()
    .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(out);
}
