import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ContentFile {
  filename: string;
  content: string;
}

export function loadMarketingContent(): string {
  try {
    const files = fs.readdirSync(CONTENT_DIR);
    const mdFiles = files.filter((f) => f.endsWith(".md"));

    const contents: ContentFile[] = mdFiles.map((filename) => ({
      filename,
      content: fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8"),
    }));

    if (contents.length === 0) {
      return "";
    }

    const formattedContent = contents
      .map(
        ({ filename, content }) =>
          `## Source: ${filename}\n\n${content}`
      )
      .join("\n\n---\n\n");

    return `
<kognitos_knowledge_base>
The following is official Kognitos marketing and sales information. Use this as your primary source of truth when answering questions about Kognitos.

${formattedContent}
</kognitos_knowledge_base>
`;
  } catch (error) {
    console.error("Error loading marketing content:", error);
    return "";
  }
}

// Cache the content at startup
let cachedContent: string | null = null;

export function getMarketingContent(): string {
  if (cachedContent === null) {
    cachedContent = loadMarketingContent();
  }
  return cachedContent;
}
