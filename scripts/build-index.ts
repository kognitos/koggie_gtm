import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const INDEX_PATH = path.join(process.cwd(), "content-index.json");

interface IndexEntry {
  path: string;
  title: string;
  category: string;
  snippets: string[]; // Searchable text chunks
  size: number;
}

interface ContentIndex {
  buildTime: string;
  totalFiles: number;
  entries: IndexEntry[];
}

function extractTitle(content: string): string {
  // Try to find first heading
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) return h1Match[1].trim();
  
  const h2Match = content.match(/^##\s+(.+)$/m);
  if (h2Match) return h2Match[1].trim();
  
  // Fall back to first non-empty line
  const firstLine = content.split("\n").find(line => line.trim().length > 0);
  return firstLine?.slice(0, 100) || "Untitled";
}

function extractSnippets(content: string): string[] {
  const snippets: string[] = [];
  const lines = content.split("\n");
  
  // Get headings
  for (const line of lines) {
    if (line.startsWith("#")) {
      snippets.push(line.replace(/^#+\s*/, "").trim().toLowerCase());
    }
  }
  
  // Get paragraphs (non-empty lines that aren't headings or formatting)
  let currentParagraph = "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("|") && !trimmed.startsWith("-") && !trimmed.startsWith("*")) {
      currentParagraph += " " + trimmed;
      if (currentParagraph.length > 200) {
        snippets.push(currentParagraph.trim().toLowerCase());
        currentParagraph = "";
      }
    } else if (currentParagraph.length > 50) {
      snippets.push(currentParagraph.trim().toLowerCase());
      currentParagraph = "";
    }
  }
  if (currentParagraph.length > 30) {
    snippets.push(currentParagraph.trim().toLowerCase());
  }
  
  return snippets;
}

function getAllMarkdownFiles(dir: string, baseDir: string = ""): string[] {
  const files: string[] = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
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

function buildIndex(): void {
  console.log("🔍 Building content search index...");
  const startTime = Date.now();
  
  const allFiles = getAllMarkdownFiles(CONTENT_DIR);
  const entries: IndexEntry[] = [];
  
  for (const relativePath of allFiles) {
    const fullPath = path.join(CONTENT_DIR, relativePath);
    try {
      const content = fs.readFileSync(fullPath, "utf-8");
      const stats = fs.statSync(fullPath);
      
      // Extract category from path
      const pathParts = relativePath.split("/");
      const category = pathParts.length > 1 ? pathParts[0] : "root";
      
      entries.push({
        path: relativePath,
        title: extractTitle(content),
        category,
        snippets: extractSnippets(content),
        size: stats.size,
      });
    } catch (error) {
      console.error(`Error processing ${relativePath}:`, error);
    }
  }
  
  const index: ContentIndex = {
    buildTime: new Date().toISOString(),
    totalFiles: entries.length,
    entries,
  };
  
  fs.writeFileSync(INDEX_PATH, JSON.stringify(index));
  
  const elapsed = Date.now() - startTime;
  const sizeKb = Math.round(fs.statSync(INDEX_PATH).size / 1024);
  
  console.log(`✅ Index built: ${entries.length} files, ${sizeKb}KB, ${elapsed}ms`);
}

buildIndex();
