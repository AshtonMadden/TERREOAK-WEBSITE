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

  // Add import if missing
  if (!content.includes('import PremiumHero from')) {
    content = content.replace(
      /import TrustBar from "\.\.\/components\/TrustBar";/,
      'import PremiumHero from "../components/PremiumHero";\nimport TrustBar from "../components/TrustBar";'
    );
    fs.writeFileSync(page, content);
    console.log(`Added import to ${page}`);
  }
});
