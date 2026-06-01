const fs = require('fs');
const path = require('path');

const pages = [
  'app/hardscaping/page.tsx',
  'app/woodworking/page.tsx',
  'app/excavation/page.tsx',
  'app/landscape-design/page.tsx',
  'app/our-process/page.tsx',
  'app/commercial-grounds-maintenance/page.tsx',
  'app/residential-snow-removal/page.tsx',
  'app/spring-cleanup-calgary/page.tsx',
  'app/fall-cleanup/page.tsx',
  'app/irrigation-blowouts/page.tsx'
];

pages.forEach(page => {
  if (!fs.existsSync(page)) return;
  
  let content = fs.readFileSync(page, 'utf8');

  // Extract necessary details
  const imgMatch = content.match(/<Image[^>]*src="([^"]+)"/);
  const img = imgMatch ? imgMatch[1] : '';

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'TERREOAK SERVICES';

  const descMatch = content.match(/<p className="mt-6 text-lg[^>]*>([\s\S]*?)<\/p>/);
  let descText = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '';
  
  // Custom fallback descriptions if not found
  if (!descText) {
    if (page.includes('hardscaping')) descText = "Expertly installed stone patios, retaining walls, walkways, and driveways built to withstand Calgary's harsh freeze-thaw cycles.";
    if (page.includes('woodworking')) descText = "Heavy-duty cedar decks, custom privacy fencing, pergolas, and structural timber retaining walls designed for Alberta's climate.";
    if (page.includes('excavation')) descText = "A lasting landscape starts with heavy lifting. We handle full-scale land clearing, grading, trenching, and soil removal.";
    if (page.includes('landscape-design')) descText = "Great landscaping begins with an intentional, carefully crafted design. We specialize in 3D conceptual designs and precise 2D blueprints.";
  }

  const ctaMatch = content.match(/<Link[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/);
  let ctaLink = ctaMatch ? ctaMatch[1] : '/landscape-installs';
  let ctaText = ctaMatch ? ctaMatch[2].trim() : 'REQUEST QUOTE';
  if (ctaText.includes('<')) ctaText = 'REQUEST QUOTE'; // avoid tags

  let badgeLabel = "Landscaping • Calgary";
  if (page.includes('snow') || page.includes('maintenance') || page.includes('cleanup') || page.includes('blowout')) {
    badgeLabel = "Property Maintenance";
  }

  const premiumHeroStr = `      <PremiumHero
        title="${h1Text}"
        description="${descText}"
        backgroundImage="${img}"
        badgeLabel="${badgeLabel}"
        ctaText="${ctaText}"
        ctaHref="${ctaLink}"
      />`;

  // Replace old hero
  const regex = /\{\/\* HERO \*\/\}\s*<section className="relative min-h-screen[\s\S]*?<\/section>/;
  if (regex.test(content)) {
    content = content.replace(regex, premiumHeroStr);

    // Add import if missing
    if (!content.includes('PremiumHero')) {
      content = content.replace(/import TrustBar from "\.\.\/components\/TrustBar";/, 'import PremiumHero from "../components/PremiumHero";\nimport TrustBar from "../components/TrustBar";');
    }

    fs.writeFileSync(page, content);
    console.log(`Updated ${page}`);
  }
});
