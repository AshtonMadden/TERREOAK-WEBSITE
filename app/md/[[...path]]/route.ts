import TurndownService from "turndown";
import { site } from "../../lib/site";

/**
 * Markdown version of any page, for AI agents that send "Accept: text/markdown" (next.config.ts
 * rewrites those requests here). It reads the page's own HTML, keeps the main content and converts
 * it, so the Markdown can never drift from what visitors see.
 */
export const dynamic = "force-dynamic";

const cache = new Map<string, { at: number; body: string }>();
const TTL = 10 * 60 * 1000;

const turndown = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });
const dropped = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "VIDEO", "IFRAME", "CANVAS", "BUTTON", "SELECT", "FORM", "DIALOG"]);
turndown.remove((node) => dropped.has(node.nodeName.toUpperCase()));

const decode = (text: string) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

async function fetchHtml(path: string, request: Request) {
  // Ask the running app first; fall back to the public address.
  const origins = [`http://127.0.0.1:${process.env.PORT ?? 3000}`, new URL(request.url).origin, site.url];
  for (const origin of origins) {
    try {
      const response = await fetch(`${origin}${path}`, { headers: { Accept: "text/html" }, redirect: "follow", cache: "no-store", signal: AbortSignal.timeout(8000) });
      if (response.status === 404) return { status: 404, html: "" };
      if (response.ok && (response.headers.get("content-type") ?? "").includes("text/html")) return { status: 200, html: await response.text() };
    } catch {
      // Try the next origin.
    }
  }
  return { status: 502, html: "" };
}

export async function GET(request: Request, { params }: { params: Promise<{ path?: string[] }> }) {
  const segments = (await params).path ?? [];
  const path = `/${segments.join("/")}`.replace(/\.md$/, "").replace(/^\/index$/, "/");
  if (!/^\/[a-z0-9\-/]*$/i.test(path)) return new Response("Not found", { status: 404 });

  const headers = {
    "Content-Type": "text/markdown; charset=utf-8",
    // Never stored by shared caches, so a browser can never be handed the Markdown version by mistake.
    "Cache-Control": "private, no-store",
    "CDN-Cache-Control": "no-store",
    Vary: "Accept",
    "X-Robots-Tag": "noindex",
    Link: `<${site.url}${path === "/" ? "" : path}>; rel="canonical"`,
  };

  const hit = cache.get(path);
  if (hit && Date.now() - hit.at < TTL) return new Response(hit.body, { headers });

  const { status, html } = await fetchHtml(path, request);
  if (status !== 200) return new Response(status === 404 ? "Not found" : "Markdown is temporarily unavailable for this page.", { status });

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? site.name);
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
  const content = turndown
    .turndown(main)
    .replace(/\]\(\//g, `](${site.url}/`)
    .replace(/\]\(#/g, `](${site.url}${path === "/" ? "/" : path}#`)
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const body = [
    `# ${title}`,
    "",
    description ? `> ${description}` : "",
    "",
    `Source: ${site.url}${path === "/" ? "" : path}`,
    `Contact: ${site.phoneDisplay} · ${site.email} · ${site.hours}`,
    "",
    "---",
    "",
    content,
    "",
  ].join("\n");

  cache.set(path, { at: Date.now(), body });
  return new Response(body, { headers });
}
