import { agentTools } from "../../lib/agent";
import { site } from "../../lib/site";

// MCP Server Card, served at /.well-known/mcp/server-card.json (see the rewrite in next.config.ts).
// It tells agents where the site's MCP server is and what it can do, before they connect.
export const dynamic = "force-static";

export function GET() {
  const endpoint = `${site.url}/api/mcp`;
  return Response.json(
    {
      $schema: "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
      version: "1.0",
      protocolVersion: "2025-06-18",
      name: "terreoak",
      title: "TERREOAK Landscaping & Snow",
      description: "Read-only facts about TERREOAK Landscaping & Snow in Calgary: contact details, services, snow removal routes and quote request links.",
      serverInfo: { name: "terreoak", title: "TERREOAK Landscaping & Snow", version: "1.0.0" },
      websiteUrl: site.url,
      documentationUrl: `${site.url}/llms.txt`,
      endpoint,
      transport: { type: "streamable-http", endpoint },
      capabilities: { tools: { listChanged: false } },
      authentication: { required: false, schemes: [] },
      tools: agentTools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })),
    },
    { headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600" } }
  );
}
