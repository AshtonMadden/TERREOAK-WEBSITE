import { site } from "../lib/site";

// Written by hand rather than with Next's robots helper, because the helper can't output the
// Content-Signal line.
export const dynamic = "force-static";

// AI search and assistant crawlers are welcome: being read is how the site gets cited in AI answers.
const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

// How the content may be used: shown in search results, used to answer questions in AI assistants,
// and used to train AI models.
const contentSignal = "Content-Signal: search=yes, ai-input=yes, ai-train=yes";

export function GET() {
  // /thanks is kept out of search with a noindex tag, which crawlers can only see if they may fetch it.
  const body = [
    "User-Agent: *",
    contentSignal,
    "Allow: /",
    "",
    ...aiCrawlers.map((agent) => `User-Agent: ${agent}`),
    contentSignal,
    "Allow: /",
    "",
    `Host: ${site.url}`,
    `Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
