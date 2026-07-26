const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

content = content.replace(/<main className="([^"]*)text-white([^"]*)"/, '<main className="$1text-black$2"');
content = content.replace(/text-white\/([0-9]+)/g, 'text-black/$1');
// Founder spotlight: bg-[#222222] was already reverted to bg-white. Let's make text-black.
// We only want to replace text-white with text-black for things that are not explicit hero/button texts.
// Actually, I'll just restore app/page.tsx from git, and RE-ADD the Process section manually. It's much safer!
