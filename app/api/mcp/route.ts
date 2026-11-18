import { agentTools } from "../../lib/agent";

/**
 * A small read-only MCP server (Streamable HTTP, stateless, JSON responses) so AI agents can ask
 * about the business directly. It exposes facts only: nothing here books, submits or changes anything.
 */

const PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"];
const serverInfo = { name: "terreoak", title: "TERREOAK Landscaping & Snow", version: "1.0.0" };

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id, MCP-Protocol-Version",
};

type Rpc = { jsonrpc?: string; id?: string | number | null; method?: string; params?: Record<string, unknown> };

const result = (id: Rpc["id"], value: unknown) => ({ jsonrpc: "2.0", id, result: value });
const failure = (id: Rpc["id"], code: number, message: string) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

function handle(message: Rpc) {
  const { id, method, params } = message;
  // Notifications carry no id and get no reply.
  if (id === undefined || id === null) return null;

  switch (method) {
    case "initialize": {
      const asked = typeof params?.protocolVersion === "string" ? params.protocolVersion : "";
      return result(id, {
        protocolVersion: PROTOCOL_VERSIONS.includes(asked) ? asked : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo,
        instructions: "Read-only facts about TERREOAK Landscaping & Snow, a landscaping and snow removal company in Calgary, Alberta.",
      });
    }
    case "ping":
      return result(id, {});
    case "tools/list":
      return result(id, { tools: agentTools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
    case "tools/call": {
      const tool = agentTools.find((t) => t.name === params?.name);
      if (!tool) return failure(id, -32602, `Unknown tool: ${String(params?.name)}`);
      const args = (params?.arguments ?? {}) as Record<string, unknown>;
      if (tool.name === "check_snow_route" && typeof args.community !== "string") {
        return result(id, { content: [{ type: "text", text: "Missing required argument: community" }], isError: true });
      }
      const data = tool.run(args);
      return result(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }], structuredContent: Array.isArray(data) ? { items: data } : data });
    }
    default:
      return failure(id, -32601, `Method not found: ${String(method)}`);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(failure(null, -32700, "Parse error"), { status: 400, headers: cors });
  }
  const messages = Array.isArray(body) ? (body as Rpc[]) : [body as Rpc];
  const replies = messages.map(handle).filter((reply) => reply !== null);
  if (replies.length === 0) return new Response(null, { status: 202, headers: cors });
  return Response.json(Array.isArray(body) ? replies : replies[0], { headers: cors });
}

export function GET() {
  // No server-initiated stream is offered; clients should POST.
  return new Response("This MCP endpoint accepts POST requests only.", { status: 405, headers: { ...cors, Allow: "POST, OPTIONS" } });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: cors });
}
