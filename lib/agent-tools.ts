import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";
import { getSupabaseClient } from "./supabase";

const CONTENT_DIR = path.join(process.cwd(), "content");
const INDEX_PATH = path.join(process.cwd(), "content-index.json");

interface IndexEntry {
  path: string;
  title: string;
  category: string;
  snippets: string[];
  size: number;
}

interface ContentIndex {
  buildTime: string;
  totalFiles: number;
  entries: IndexEntry[];
}

// Cache the index in memory
let cachedIndex: ContentIndex | null = null;

function getIndex(): ContentIndex | null {
  if (cachedIndex) return cachedIndex;
  
  try {
    if (fs.existsSync(INDEX_PATH)) {
      const data = fs.readFileSync(INDEX_PATH, "utf-8");
      cachedIndex = JSON.parse(data);
      return cachedIndex;
    }
  } catch (error) {
    console.error("Error loading index:", error);
  }
  return null;
}

// Tool definitions for Claude
export const tools: Anthropic.Tool[] = [
  {
    name: "list_files",
    description:
      "List all available marketing and sales documents. Returns files organized by category. Use this first to see what information sources are available.",
    input_schema: {
      type: "object" as const,
      properties: {
        category: {
          type: "string",
          description:
            "Optional category to filter by (e.g., 'blog', 'solutions', 'product', 'resources'). Leave empty to see all categories.",
        },
      },
      required: [],
    },
  },
  {
    name: "search_content",
    description:
      "Search across all documents for specific keywords or phrases. Returns matching documents with titles and relevance. Very fast - uses pre-built index.",
    input_schema: {
      type: "object" as const,
      properties: {
        query: {
          type: "string",
          description:
            "The search term or phrase to look for (case-insensitive). Can be multiple words.",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "read_file",
    description:
      "Read the full content of a specific document. Use the path from list_files or search_content results.",
    input_schema: {
      type: "object" as const,
      properties: {
        filepath: {
          type: "string",
          description:
            "The file path relative to content directory (e.g., 'solutions/finance.md' or 'INDEX.md')",
        },
      },
      required: ["filepath"],
    },
  },
  {
    name: "capture_lead",
    description:
      "Capture a prospect's email address. Use this when: (1) the user explicitly asks for a summary or report of the conversation to be sent to them, (2) the user wants someone to reach out about a demo or follow-up, or (3) the user volunteers their email. NEVER ask for email unprompted—only use when the user initiates.",
    input_schema: {
      type: "object" as const,
      properties: {
        email: {
          type: "string",
          description: "The user's email address",
        },
        reason: {
          type: "string",
          enum: ["report_request", "demo_request", "follow_up", "general_interest"],
          description: "Why the user provided their email",
        },
        context: {
          type: "string",
          description: "Brief note about what they're interested in (e.g., 'AP automation for healthcare')",
        },
      },
      required: ["email", "reason"],
    },
  },
];

// Tool execution functions
export function executeListFiles(category?: string): string {
  const index = getIndex();
  
  if (!index) {
    return "Error: Search index not available. The content may not have been indexed yet.";
  }

  if (category) {
    const filtered = index.entries.filter(e => e.category === category);
    if (filtered.length === 0) {
      const categories = [...new Set(index.entries.map(e => e.category))];
      return `Category "${category}" not found. Available categories: ${categories.join(", ")}`;
    }
    
    const files = filtered
      .map(e => `- **${e.title}** (${e.path})`)
      .slice(0, 50);
    
    let output = `**${category}/** - ${filtered.length} documents:\n\n${files.join("\n")}`;
    if (filtered.length > 50) {
      output += `\n\n... and ${filtered.length - 50} more. Use search_content to find specific topics.`;
    }
    return output;
  }

  // Show categories overview
  const categories = new Map<string, number>();
  for (const entry of index.entries) {
    categories.set(entry.category, (categories.get(entry.category) || 0) + 1);
  }

  const categoryList = Array.from(categories.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([cat, count]) => `- **${cat}/** (${count} files)`)
    .join("\n");

  return `**Content Library** - ${index.totalFiles} documents\n\nCategories:\n${categoryList}\n\nUse list_files with a category name to see files, or search_content to find specific topics.`;
}

export function executeSearchContent(query: string): string {
  const index = getIndex();
  
  if (!index) {
    return "Error: Search index not available.";
  }

  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
  
  // Score each entry
  const scored: { entry: IndexEntry; score: number; matchedSnippet: string }[] = [];
  
  for (const entry of index.entries) {
    let score = 0;
    let matchedSnippet = "";
    
    // Check title (high weight)
    const titleLower = entry.title.toLowerCase();
    if (titleLower.includes(queryLower)) {
      score += 10;
      matchedSnippet = entry.title;
    } else {
      for (const word of queryWords) {
        if (titleLower.includes(word)) score += 3;
      }
    }
    
    // Check path (medium weight)
    const pathLower = entry.path.toLowerCase();
    if (pathLower.includes(queryLower)) {
      score += 5;
    }
    
    // Check snippets (standard weight)
    for (const snippet of entry.snippets) {
      if (snippet.includes(queryLower)) {
        score += 5;
        if (!matchedSnippet) {
          // Extract context around match
          const idx = snippet.indexOf(queryLower);
          const start = Math.max(0, idx - 50);
          const end = Math.min(snippet.length, idx + queryLower.length + 50);
          matchedSnippet = "..." + snippet.slice(start, end) + "...";
        }
      } else {
        for (const word of queryWords) {
          if (snippet.includes(word)) score += 1;
        }
      }
    }
    
    if (score > 0) {
      scored.push({ entry, score, matchedSnippet });
    }
  }
  
  // Sort by score
  scored.sort((a, b) => b.score - a.score);
  
  if (scored.length === 0) {
    return `No matches found for "${query}". Try different keywords or use list_files to browse by category.`;
  }
  
  // Return top results
  const top = scored.slice(0, 15);
  const results = top.map(({ entry, matchedSnippet }) => {
    let result = `**${entry.title}**\n  Path: ${entry.path}`;
    if (matchedSnippet) {
      result += `\n  Match: ${matchedSnippet}`;
    }
    return result;
  });
  
  let output = `Found ${scored.length} results for "${query}":\n\n${results.join("\n\n")}`;
  
  if (scored.length > 15) {
    output += `\n\n*Showing top 15 of ${scored.length} results. Try a more specific query or read relevant files.*`;
  }
  
  return output;
}

export function executeReadFile(filepath: string): string {
  try {
    // Security: normalize and ensure path stays within content directory
    const normalizedPath = path.normalize(filepath).replace(/^(\.\.[\/\\])+/, "");
    const fullPath = path.join(CONTENT_DIR, normalizedPath);

    // Verify the resolved path is still within CONTENT_DIR
    if (!fullPath.startsWith(CONTENT_DIR)) {
      return "Error: Invalid file path.";
    }

    if (!fs.existsSync(fullPath)) {
      return `Error: File "${filepath}" not found. Use list_files or search_content to find available documents.`;
    }

    const content = fs.readFileSync(fullPath, "utf-8");

    // If file is very large, truncate with a note
    if (content.length > 20000) {
      return `${content.slice(0, 20000)}\n\n... [Content truncated. File is ${Math.round(content.length / 1024)}KB. Use search_content to find specific sections.]`;
    }

    return content;
  } catch (error) {
    console.error("Error reading file:", error);
    return `Error: Unable to read file "${filepath}".`;
  }
}

export async function executeCaptureLead(
  email: string,
  reason: string,
  context: string | undefined,
  sessionId: string | undefined
): Promise<string> {
  try {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Error: That doesn't look like a valid email address. Could you double-check it?";
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("Supabase client not available for lead capture");
      return "I've noted your interest. Our team will follow up soon.";
    }

    const { error } = await supabase.from("leads").insert([
      {
        email,
        session_id: sessionId || null,
        source: reason,
        metadata: {
          context: context || null,
          captured_via: "chat",
        },
      },
    ]);

    if (error) {
      console.error("Error inserting lead:", error);
      return "I've noted your interest. Our team will follow up soon.";
    }

    // Return appropriate confirmation based on reason
    switch (reason) {
      case "report_request":
        return `Got it. I'll send a summary of our conversation to ${email}.`;
      case "demo_request":
        return `Thanks. Someone from our team will reach out to ${email} to schedule a demo.`;
      case "follow_up":
        return `Noted. We'll follow up at ${email} with more information.`;
      default:
        return `Thanks. We'll be in touch at ${email}.`;
    }
  } catch (error) {
    console.error("Error capturing lead:", error);
    return "I've noted your interest. Our team will follow up soon.";
  }
}

// Execute a tool by name
export async function executeTool(
  name: string,
  input: Record<string, unknown>,
  sessionId?: string
): Promise<string> {
  switch (name) {
    case "list_files":
      return executeListFiles(input.category as string | undefined);
    case "search_content":
      return executeSearchContent(input.query as string);
    case "read_file":
      return executeReadFile(input.filepath as string);
    case "capture_lead":
      return await executeCaptureLead(
        input.email as string,
        input.reason as string,
        input.context as string | undefined,
        sessionId
      );
    default:
      return `Unknown tool: ${name}`;
  }
}
