import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HTML_DIR = path.join(ROOT, "research", "reference", "html");
const PAGES_DIR = path.join(ROOT, "research", "reference", "pages");

function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+\n/g, "\n")
    .trim();
}

function extractLightboxes() {
  const results: Record<string, unknown[]> = {};
  for (const file of fs.readdirSync(HTML_DIR)) {
    if (!file.endsWith(".html")) continue;
    const html = fs.readFileSync(path.join(HTML_DIR, file), "utf8");
    const matches = [...html.matchAll(/<script type="application\/json" class="w-json">([\s\S]*?)<\/script>/g)];
    if (matches.length > 0) {
      results[file.replace(/\.html$/, "")] = matches.map((m) => {
        try {
          return JSON.parse(m[1]);
        } catch {
          return m[1];
        }
      });
    }
  }
  return results;
}

function extractNewsAndPosts() {
  const newsHtml = fs.readFileSync(path.join(HTML_DIR, "news.html"), "utf8");
  const cardMatches = [...newsHtml.matchAll(/<div role="listitem" class="news-item w-dyn-item">([\s\S]*?)<\/div>\s*<\/a>\s*<\/div>/g)];
  const cards = cardMatches.map((m, idx) => {
    const chunk = m[0];
    const href = chunk.match(/href="([^"]+)"/)?.[1] || "";
    const img = chunk.match(/<img[^>]+src="([^"]+)"/)?.[1] || "";
    const coverLabel = chunk.match(/class="news-image-text"[^>]*>([^<]+)</)?.[1] || "";
    const title = chunk.match(/class="text-size-rg[^"]*"[^>]*>([^<]+)</)?.[1] || "";
    const date = chunk.match(/class="news-date"[^>]*>([^<]+)</)?.[1] || "";
    const cat = chunk.match(/class="news-category"[^>]*>([^<]+)</)?.[1] || "";
    return { order: idx + 1, href, img, coverLabel, title, date, cat };
  });

  const postDetails: Array<Record<string, unknown>> = [];
  for (let i = 1; i <= 9; i++) {
    const html = fs.readFileSync(path.join(HTML_DIR, `post-${i}.html`), "utf8");
    const pageJson = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, `post-${i}.json`), "utf8"));
    const category = html.match(/class="blog-hero-category[^"]*"[^>]*>([^<]+)</)?.[1] || "";
    const title = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim() || "";
    const excerpt = html.match(/class="blog-hero-text[^"]*"[^>]*>([\s\S]*?)<\/div>/)?.[1]?.trim() || "";
    const richBodyMatch = html.match(/<div class="blog-rich-text w-richtext">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
    const richBodyHtml = richBodyMatch?.[1] || "";
    const relatedHeading = html.match(/<h2[^>]*class="[^"]*related[^"]*"[^>]*>([^<]+)</)?.[1] ||
      html.match(/More Articles|Check Others one/)?.[0] || "More Articles";
    const relatedSlugs = (pageJson.links as Array<{ rawHref: string }>)
      .filter((l) => l.rawHref.startsWith("/post/") && l.rawHref !== pageJson.path)
      .map((l) => l.rawHref);

    postDetails.push({
      id: `post-${i}`,
      slug: pageJson.path.replace("/post/", ""),
      title: stripTags(title),
      category: stripTags(category),
      excerpt: stripTags(excerpt),
      richBodyHtml,
      relatedHeading,
      relatedSlugs: Array.from(new Set(relatedSlugs)),
    });
  }

  return { cards, postDetails };
}

function extractPolicies() {
  const policies: Record<string, unknown> = {};
  for (const id of ["privacy", "terms-conditions", "cookies", "eligibility"]) {
    const html = fs.readFileSync(path.join(HTML_DIR, `${id}.html`), "utf8");
    const pageJson = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, `${id}.json`), "utf8"));
    const title = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim() || "";
    const lastUpdated = html.match(/Last updated:[^<]+/)?.[0] || "";
    const richText = html.match(/w-richtext">([\s\S]*?)<\/div>\s*<\/div>/)?.[1] || "";
    policies[id] = {
      id,
      slug: `/${id}`,
      title: stripTags(title),
      lastUpdated,
      richTextHtml: richText,
      mainText: pageJson.mainText,
    };
  }
  return policies;
}

function main() {
  const lightboxes = extractLightboxes();
  const newsAndPosts = extractNewsAndPosts();
  const policies = extractPolicies();

  fs.writeFileSync(
    path.join(ROOT, "research", "reference", "extracted-content.json"),
    JSON.stringify({ lightboxes, newsAndPosts, policies }, null, 2)
  );
  console.log("Extracted lightboxes, 9 posts, and 4 policies to research/reference/extracted-content.json");
}

main();
