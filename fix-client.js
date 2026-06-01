const fs = require('fs');

const pages = [
  'app/commercial-grounds-maintenance/page.tsx',
  'app/residential-snow-removal/page.tsx',
  'app/spring-cleanup-calgary/page.tsx',
  'app/fall-cleanup/page.tsx',
  'app/irrigation-blowouts/page.tsx'
];

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');
  if (content.startsWith('import PremiumHero')) {
    // Remove it from the top
    content = content.replace('import PremiumHero from "../components/PremiumHero";\n', '');
    
    // Insert it after "use client";
    content = content.replace('"use client";', '"use client";\nimport PremiumHero from "../components/PremiumHero";');
    fs.writeFileSync(page, content);
    console.log(`Fixed order in ${page}`);
  }
});
