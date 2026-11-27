import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HTML_DIR = path.join(ROOT, "research", "reference", "html");
const PAGES_DIR = path.join(ROOT, "research", "reference", "pages");
const urlMap = JSON.parse(fs.readFileSync(path.join(ROOT, "research", "manifests", "url-to-local.json"), "utf8")) as Record<string, string>;

function mapImg(url: string): string {
  return urlMap[url] || url;
}

// 1. Parse News Cards from news.html
const newsHtml = fs.readFileSync(path.join(HTML_DIR, "news.html"), "utf8");
const newsItems = [...newsHtml.matchAll(/<div role="listitem" class="[^"]*w-dyn-item[^"]*">([\s\S]*?)<\/a>\s*<\/div>/g)];
const newsCards = newsItems.map((m, i) => {
  const c = m[0];
  const href = c.match(/href="([^"]+)"/)?.[1] || "";
  const imgSrc = c.match(/<img[^>]+src="([^"]+)"/)?.[1] || "";
  const texts = [...c.matchAll(/>([^<]+)</g)].map((x) => x[1].trim()).filter(Boolean);
  return { order: i + 1, href, localImg: mapImg(imgSrc), texts };
});

// 2. Parse all 9 post details
const posts = [];
for (let i = 1; i <= 9; i++) {
  const html = fs.readFileSync(path.join(HTML_DIR, `post-${i}.html`), "utf8");
  const pg = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, `post-${i}.json`), "utf8"));
  const richStart = html.indexOf("w-richtext");
  let richHtml = "";
  if (richStart >= 0) {
    const gt = html.indexOf(">", richStart);
    const nextSection = html.indexOf('<div class="section-related', gt);
    const endDiv = nextSection > gt ? nextSection : html.indexOf('<section', gt);
    richHtml = html.slice(gt + 1, endDiv > gt ? endDiv : gt + 8000);
    // trim trailing closing divs
    richHtml = richHtml.replace(/(<\/div>\s*)+$/, "");
  }
  const hasCheckOthers = html.includes("Check Others one");
  const relatedHeading = hasCheckOthers ? "Check Others one" : "More Articles";
  const category = pg.mainText.split("\n")[6] || "";
  const excerptMatch = html.match(/<div class="[^"]*blog[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  posts.push({
    id: `post-${i}`,
    slug: pg.path.replace("/post/", ""),
    title: pg.title.replace(/– Docketo$/, "").trim(),
    category,
    excerpt: excerptMatch?.[1]?.replace(/<[^>]+>/g, "").trim() || "",
    richHtml,
    relatedHeading,
    mainText: pg.mainText,
  });
}

// 3. Parse Home Testimonials & Customer Stories & Dropdowns
const homeHtml = fs.readFileSync(path.join(HTML_DIR, "home.html"), "utf8");
const reviewSlides = [...homeHtml.matchAll(/<div class="review-slide w-slide"[\s\S]*?(?=<div class="review-slide w-slide"|<div class="review-slider-arrow)/g)].map((m) => {
  const c = m[0];
  const texts = [...c.matchAll(/>([^<]+)</g)].map((x) => x[1].trim()).filter(Boolean);
  const img = c.match(/<img[^>]+src="([^"]+)"/)?.[1] || "";
  return { texts, img: mapImg(img) };
});

const impactSlides = [...homeHtml.matchAll(/<div class="real-impact-slide w-slide"[\s\S]*?(?=<div class="real-impact-slide w-slide"|<div class="real-impact-left-arrow)/g)].map((m) => {
  const c = m[0];
  const texts = [...c.matchAll(/>([^<]+)</g)].map((x) => x[1].trim()).filter(Boolean);
  const img = c.match(/<img[^>]+src="([^"]+)"/)?.[1] || "";
  return { texts, img: mapImg(img) };
});

// 4. Parse About Logo Grid
const aboutHtml = fs.readFileSync(path.join(HTML_DIR, "about.html"), "utf8");
const awordStart = aboutHtml.indexOf("aword-grid");
const awordSection = awordStart >= 0 ? aboutHtml.slice(awordStart, awordStart + 4000) : "";

// 5. Extract key CSS classes from webflow stylesheet
const css = fs.readFileSync(path.join(ROOT, "research", "reference", "styles", "docketo.webflow.shared.a20365209.css"), "utf8");
const classPatterns = [
  "navbar", "nav-menu", "nav-link", "dropdown-list-wrap", "secondary-button", "third-button", "primary-button",
  "hero-", "section-hero", "sticky-wrap", "app-features", "our-solutions", "our-products", "review-", "start-building",
  "real-impact", "faq-", "section-cta", "footer-", "pricing-", "contact-", "careers-", "style-guide-", "utility-404",
  "global-header", "built-for", "account-types", "the-better-way", "about-", "aword-", "leadership-", "news-"
];
const matchedRules: string[] = [];
const ruleRe = /([^{}]+)\{([^{}]+)\}/g;
let rm: RegExpExecArray | null;
while ((rm = ruleRe.exec(css)) !== null) {
  const sel = rm[1].trim();
  if (classPatterns.some((p) => sel.includes(p))) {
    matchedRules.push(`${sel} { ${rm[2].trim()} }`);
  }
}

fs.writeFileSync(
  path.join(ROOT, "research", "reference", "detailed-parsed.json"),
  JSON.stringify({ newsCards, posts, reviewSlides, impactSlides, awordSection }, null, 2)
);
fs.writeFileSync(path.join(ROOT, "research", "reference", "extracted-css-rules.txt"), matchedRules.join("\n\n"));
console.log(`Parsed ${newsCards.length} newsCards, ${posts.length} posts, ${reviewSlides.length} reviewSlides, ${impactSlides.length} impactSlides, ${matchedRules.length} CSS rules.`);
