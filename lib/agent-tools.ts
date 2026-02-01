import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Tool definitions for Claude
export const tools: Anthropic.Tool[] = [
  {
    name: "list_files",
    description:
      "List all available marketing and sales documents. Use this first to see what information sources are available before searching or reading specific files.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  {
    name: "search_content",
    description:
      "Search across all documents for specific keywords or phrases. Returns matching lines with context. Use this to find relevant information about a topic across all documents.",
    input_schema: {
      type: "object" as const,
      properties: {
        query: {
          type: "string",
          description:
            "The search term or phrase to look for (case-insensitive)",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "read_file",
    description:
      "Read the full content of a specific document. Use this after list_files or search_content to get complete information from a relevant document.",
    input_schema: {
      type: "object" as const,
      properties: {
        filename: {
          type: "string",
          description: "The filename to read (e.g., 'pricing.md')",
        },
      },
      required: ["filename"],
    },
  },
];

// Tool execution functions
export function executeListFiles(): string {
  try {
    const files = fs.readdirSync(CONTENT_DIR);
    const mdFiles = files.filter((f) => f.endsWith(".md"));

    if (mdFiles.length === 0) {
      return "No documents found in the content directory.";
    }

    const fileList = mdFiles
      .map((f) => {
        const stats = fs.statSync(path.join(CONTENT_DIR, f));
        const sizeKb = Math.round(stats.size / 1024);
        return `- ${f} (${sizeKb}KB)`;
      })
      .join("\n");

    return `Available documents:\n${fileList}`;
  } catch (error) {
    console.error("Error listing files:", error);
    return "Error: Unable to list files.";
  }
}

export function executeSearchContent(query: string): string {
  try {
    const files = fs.readdirSync(CONTENT_DIR);
    const mdFiles = files.filter((f) => f.endsWith(".md"));
    const results: string[] = [];
    const queryLower = query.toLowerCase();

    for (const filename of mdFiles) {
      const content = fs.readFileSync(
        path.join(CONTENT_DIR, filename),
        "utf-8"
      );
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(queryLower)) {
          // Get context: 1 line before and 1 line after
          const start = Math.max(0, i - 1);
          const end = Math.min(lines.length - 1, i + 1);
          const context = lines.slice(start, end + 1).join("\n");

          results.push(`[${filename}:${i + 1}]\n${context}`);

          // Limit results per file to avoid too much output
          if (results.filter((r) => r.startsWith(`[${filename}`)).length >= 5) {
            break;
          }
        }
      }
    }

    if (results.length === 0) {
      return `No matches found for "${query}".`;
    }

    // Limit total results
    const limitedResults = results.slice(0, 15);
    const output = limitedResults.join("\n\n---\n\n");

    if (results.length > 15) {
      return `${output}\n\n... and ${results.length - 15} more matches. Try a more specific search or read the relevant files directly.`;
    }

    return output;
  } catch (error) {
    console.error("Error searching content:", error);
    return "Error: Unable to search content.";
  }
}

export function executeReadFile(filename: string): string {
  try {
    // Security: ensure filename doesn't escape content directory
    const safeName = path.basename(filename);
    const filePath = path.join(CONTENT_DIR, safeName);

    if (!fs.existsSync(filePath)) {
      return `Error: File "${safeName}" not found. Use list_files to see available documents.`;
    }

    const content = fs.readFileSync(filePath, "utf-8");

    // If file is very large, truncate with a note
    if (content.length > 15000) {
      return `${content.slice(0, 15000)}\n\n... [Content truncated. File is ${Math.round(content.length / 1024)}KB. Use search_content to find specific sections.]`;
    }

    return content;
  } catch (error) {
    console.error("Error reading file:", error);
    return `Error: Unable to read file "${filename}".`;
  }
}

// Execute a tool by name
export function executeTool(
  name: string,
  input: Record<string, unknown>
): string {
  switch (name) {
    case "list_files":
      return executeListFiles();
    case "search_content":
      return executeSearchContent(input.query as string);
    case "read_file":
      return executeReadFile(input.filename as string);
    default:
      return `Unknown tool: ${name}`;
  }
}
