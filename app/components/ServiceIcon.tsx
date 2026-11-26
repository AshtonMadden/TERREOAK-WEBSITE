import Icon, { type IconName } from "./Icon";

// Which icon goes with which service page.
const byService: Record<string, IconName> = {
  "/landscape-installs": "spade",
  "/hardscaping": "pavers",
  "/softscapes": "sprout",
  "/residential-snow-removal": "snowflake",
  "/spring-cleanup-calgary": "rake",
  "/fall-cleanup": "leaf",
  "/irrigation-blowouts": "sprinkler",
  "/commercial-grounds-maintenance": "building",
};

export default function ServiceIcon({ href, className }: { href: string; className?: string }) {
  const name = byService[href];
  return name ? <Icon name={name} className={className} /> : null;
}
