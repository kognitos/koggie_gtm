import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Tool definitions for Claude
export const tools: Anthropic.Tool[] = [
  {
    name: "list_files",
    description:
      "List all available marketing and sales documents. Returns a tree of files organized by category. Use this first to see what information sources are available.",
    input_schema: {
      type: "object" as const,
      properties: {
        directory: {
          type: "string",
          description:
            "Optional subdirectory to list (e.g., 'blog', 'solutions'). Leave empty to see top-level categories.",
        },
      },
      required: [],
    },
  },
  {
    name: "search_content",
    description:
      "Search across all documents for specific keywords or phrases. Returns matching lines with context and file paths. Use this to find relevant information about a topic.",
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
];

// Recursively get all markdown files
function getAllMarkdownFiles(dir: string, baseDir: string = ""): string[] {
  const files: string[] = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const relativePath = baseDir ? `${baseDir}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        files.push(...getAllMarkdownFiles(path.join(dir, entry.name), relativePath));
      } else if (entry.name.endsWith(".md")) {
        files.push(relativePath);
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }
  return files;
}

// Tool execution functions
export function executeListFiles(directory?: string): string {
  try {
    const targetDir = directory
      ? path.join(CONTENT_DIR, directory)
      : CONTENT_DIR;

    if (!fs.existsSync(targetDir)) {
      return `Directory "${directory}" not found. Use list_files without arguments to see available directories.`;
    }

    const entries = fs.readdirSync(targetDir, { withFileTypes: true });
    const dirs: string[] = [];
    const files: string[] = [];

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      if (entry.isDirectory()) {
        // Count files in subdirectory
        const subFiles = getAllMarkdownFiles(path.join(targetDir, entry.name));
        dirs.push(`📁 ${entry.name}/ (${subFiles.length} files)`);
      } else if (entry.name.endsWith(".md")) {
        const stats = fs.statSync(path.join(targetDir, entry.name));
        const sizeKb = Math.round(stats.size / 1024);
        files.push(`📄 ${entry.name} (${sizeKb}KB)`);
      }
    }

    const currentPath = directory ? `content/${directory}/` : "content/";
    let output = `Contents of ${currentPath}:\n\n`;

    if (dirs.length > 0) {
      output += "**Directories:**\n" + dirs.join("\n") + "\n\n";
    }
    if (files.length > 0) {
      output += "**Files:**\n" + files.join("\n");
    }

    if (dirs.length === 0 && files.length === 0) {
      output += "No markdown files found.";
    }

    return output;
  } catch (error) {
    console.error("Error listing files:", error);
    return "Error: Unable to list files.";
  }
}

export function executeSearchContent(query: string): string {
  try {
    const allFiles = getAllMarkdownFiles(CONTENT_DIR);
    const results: string[] = [];
    const queryLower = query.toLowerCase();

    for (const relativePath of allFiles) {
      const fullPath = path.join(CONTENT_DIR, relativePath);
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n");

      let fileMatches = 0;
      for (let i = 0; i < lines.length && fileMatches < 3; i++) {
        if (lines[i].toLowerCase().includes(queryLower)) {
          // Get context: 1 line before and 1 line after
          const start = Math.max(0, i - 1);
          const end = Math.min(lines.length - 1, i + 1);
          const context = lines.slice(start, end + 1).join("\n");

          results.push(`**[${relativePath}:${i + 1}]**\n${context}`);
          fileMatches++;
        }
      }

      // Limit total results
      if (results.length >= 20) break;
    }

    if (results.length === 0) {
      return `No matches found for "${query}". Try different keywords or use list_files to browse available documents.`;
    }

    const output = results.join("\n\n---\n\n");

    if (results.length >= 20) {
      return `${output}\n\n*Showing first 20 matches. Try a more specific search or read relevant files directly.*`;
    }

    return output;
  } catch (error) {
    console.error("Error searching content:", error);
    return "Error: Unable to search content.";
  }
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
      return `Error: File "${filepath}" not found. Use list_files to see available documents.`;
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

// Execute a tool by name
export function executeTool(
  name: string,
  input: Record<string, unknown>
): string {
  switch (name) {
    case "list_files":
      return executeListFiles(input.directory as string | undefined);
    case "search_content":
      return executeSearchContent(input.query as string);
    case "read_file":
      return executeReadFile(input.filepath as string);
    default:
      return `Unknown tool: ${name}`;
  }
}
