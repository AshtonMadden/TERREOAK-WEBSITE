"use client";

import { useEffect } from "react";
import { agentTools } from "../lib/agent";

type ModelContext = { registerTool?: (tool: unknown) => unknown; unregisterTool?: (name: string) => void };

/**
 * Registers the site's read-only tools with WebMCP (navigator.modelContext) for AI agents running
 * in the visitor's browser. Does nothing in browsers that don't support it. Renders nothing.
 */
export default function WebMcpTools() {
  useEffect(() => {
    const context = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const registered: string[] = [];
    for (const tool of agentTools) {
      try {
        context.registerTool({
          name: tool.name,
          description: tool.description,
          inputSchema: tool.inputSchema,
          annotations: { readOnlyHint: true },
          execute: async (args: Record<string, unknown> = {}) => ({ content: [{ type: "text", text: JSON.stringify(tool.run(args), null, 2) }] }),
        });
        registered.push(tool.name);
      } catch {
        // Already registered, or the browser rejected it: nothing to do.
      }
    }
    return () => {
      for (const name of registered) {
        try {
          context.unregisterTool?.(name);
        } catch {
          // Ignore.
        }
      }
    };
  }, []);

  return null;
}
