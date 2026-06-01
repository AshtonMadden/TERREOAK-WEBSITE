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
  if (!content.includes('import PremiumHero')) {
    content = 'import PremiumHero from "../components/PremiumHero";\n' + content;
    fs.writeFileSync(page, content);
    console.log(`Fixed ${page}`);
  }
});
