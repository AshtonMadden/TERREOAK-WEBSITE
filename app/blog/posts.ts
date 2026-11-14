// Blog posts. The article text lives in each post's page file.
import type { Article } from "../components/ArticlePage";

export const snowPost: Article = {
  "metaTitle": "Why Hire a Snow Removal Company in Calgary? | TERREOAK",
  "metaDescription": "Discover the top reasons to hire a professional snow removal company in Calgary. Save time, avoid injury, and ensure your property is always safe.",
  "title": "Why you should hire a professional Calgary snow removal company",
  "category": "Winter maintenance",
  "hero": "/blog-pics/professional_snow_clearing.png",
  "heroAlt": "TERREOAK professional snow removal crew clearing a residential driveway",
  "excerpt": "When the temperature drops and heavy snow falls, shoveling the driveway is the last thing anyone wants to do. But avoiding the cold isn't the only reason to hire a professional.",
  "updated": "2026-11-14",
  "cta": {
    "title": "Ready for a worry-free Calgary winter?",
    "text": "Don't wait until the first blizzard hits. Secure your spot on our exclusive South Calgary snow removal routes today.",
    "label": "Secure your season pass",
    "href": "/residential-snow-removal#seasonal-form"
  },
  "path": "/blog/why-hire-snow-removal-company"
};

export const springPost: Article = {
  "metaTitle": "Why Spring Cleanup Matters for Calgary Lawns | TERREOAK",
  "metaDescription": "Understand the importance of a thorough spring yard cleanup in Calgary. Learn how early maintenance sets your lawn and garden up for summer success.",
  "title": "Why a professional spring cleanup is essential for Calgary lawns",
  "category": "Seasonal care",
  "hero": "/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg",
  "heroAlt": "TERREOAK professionally cleaning a Calgary lawn",
  "excerpt": "Between snow mold, winter salt buildup, and soil compaction, your lawn goes through massive stress during the Calgary winter.",
  "updated": "2026-11-14",
  "cta": {
    "title": "Ready for a lush Calgary summer?",
    "text": "Don't let winter damage dictate the health of your yard. Book your professional spring cleanup today and give your grass the head start it deserves.",
    "label": "Book your spring cleanup",
    "href": "/spring-cleanup-calgary#spring-cleanup-form"
  },
  "path": "/blog/why-calgary-spring-cleanup-matters"
};

export const basePost: Article = {
  "metaTitle": "Open Grade Base vs Road Crush for Calgary Patios | TERREOAK",
  "metaDescription": "Learn why an open grade base is superior for paver patios. Discover the benefits of improved drainage and longevity for your Calgary hardscaping project.",
  "title": "Why open grade base is the gold standard for Calgary patio & hardscaping",
  "category": "Landscape construction",
  "hero": "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
  "heroAlt": "High-end Calgary patio and luxury hardscaping installation",
  "excerpt": "In Calgary, the freeze-thaw cycle is the enemy of any hardscaping project. Traditional road crush can trap moisture under your patio.",
  "updated": "2026-11-14",
  "cta": {
    "title": "Want a patio built for a Calgary lifetime?",
    "text": "At TERREOAK, we don't take shortcuts on what you can't see. Your Calgary patio's long-term beauty is built from the ground up with expert hardscaping techniques.",
    "label": "See our hardscaping services",
    "href": "/hardscaping"
  },
  "path": "/blog/why-open-grade-base-for-paver-patios"
};

export const posts = [basePost, springPost, snowPost];
