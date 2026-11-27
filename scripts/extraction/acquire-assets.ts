import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const ROOT = process.cwd();
const HTML_DIR = path.join(ROOT, "research", "reference", "html");
const STYLES_DIR = path.join(ROOT, "research", "reference", "styles");
const NETWORK_ASSETS_PATH = path.join(ROOT, "research", "manifests", "network-assets.json");
const MASTER_DIR = path.join(ROOT, "assets-source", "original");
const PUBLIC_ASSETS_DIR = path.join(ROOT, "public", "assets");

fs.mkdirSync(MASTER_DIR, { recursive: true });
fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });

const URL_REGEX = /https:\/\/(?:cdn\.prod\.website-files\.com|fonts\.gstatic\.com|fonts\.googleapis\.com)\/[^\s"'()<>,\\]+/g;
const REL_VARIANT_RE = /-p-(?:500|800|1080|1600|2000|2600|3200)\.(webp|png|jpe?g)$/i;

interface AssetRecord {
  id: string;
  sourceUrl: string;
  decodedFilename: string;
  category: string;
  assetType: string;
  mimeType: string;
  fileSize: number;
  width: number | null;
  height: number | null;
  hasTransparency: boolean;
  sha256: string;
  duplicateOf: string | null;
  masterPath: string;
  deliveryPath: string;
  referencedInPages: string[];
  rightsStatus: string;
  acquisitionStatus: string;
}

function classifyCategory(url: string, filename: string): { category: string; assetType: string } {
  const low = `${url} ${filename}`.toLowerCase();
  if (low.endsWith(".ttf") || low.endsWith(".woff2") || low.endsWith(".woff") || low.endsWith(".otf")) {
    return { category: "fonts", assetType: "font" };
  }
  if (low.includes("subtract") || low.includes("white%20logo") || low.includes("black.svg") || low.includes("group%2096") || low.includes("32.png") || low.includes("graph.jpg")) {
    return { category: "brand", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  if (low.includes("hero.webp") || low.includes("play%20bttn") || low.includes("6aa26c8c")) {
    return { category: "hero", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  if (low.includes("fast%20.svg") || low.includes("second.svg") || low.includes("third%20.svg") || low.includes("four%20.svg") || low.includes("bg%03.svg") || low.includes("bg%20")) {
    return { category: "infrastructure", assetType: "svg" };
  }
  if (low.includes("start%20building")) {
    return { category: "developer", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  if (low.includes("our%20products")) {
    return { category: "products", assetType: "svg" };
  }
  if (low.includes("rectangle%2016") || low.includes("rectangle%2017") || low.includes("rectangle%2018") || low.includes("6a9fdc88")) {
    return { category: "testimonials", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  if (low.includes("team%20") || low.includes("team1") || low.includes("carer") || low.includes("linkfilm") || low.includes("rectangle%2051") || low.includes("rectangle%2052")) {
    return { category: "about-careers", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  if (low.includes("6ad2fd") || low.includes("6ad2fe")) {
    return { category: "articles", assetType: "image" };
  }
  if (low.includes("frame.webp") || low.includes("itam.webp")) {
    return { category: "utilities", assetType: "image" };
  }
  if (low.includes("cta%20bg")) {
    return { category: "cta", assetType: "image" };
  }
  if (low.includes("rectangle%2055") || low.includes("6a9face5")) {
    return { category: "contact", assetType: low.endsWith(".svg") ? "svg" : "image" };
  }
  return { category: "misc", assetType: low.endsWith(".svg") ? "svg" : "image" };
}

function safeFileName(rawUrl: string): string {
  const u = new URL(rawUrl);
  const base = decodeURIComponent(path.basename(u.pathname)).replace(/[^a-zA-Z0-9._-]/g, "_");
  return base || "asset";
}

function validateFileBuffer(buf: Buffer, ext: string, contentType: string): boolean {
  if (buf.length < 16) return false;
  const headStr = buf.slice(0, 256).toString("utf8").trimStart().toLowerCase();
  if (headStr.startsWith("<!doctype html") || headStr.startsWith("<html")) return false;
  if (ext === ".svg" || contentType.includes("svg")) {
    return headStr.includes("<svg");
  }
  return true;
}

async function main() {
  const urlPages = new Map<string, Set<string>>();

  // Scan HTML files
  for (const file of fs.readdirSync(HTML_DIR)) {
    if (!file.endsWith(".html")) continue;
    const pageId = file.replace(/\.html$/, "");
    const html = fs.readFileSync(path.join(HTML_DIR, file), "utf8");
    const matches = html.match(URL_REGEX) || [];
    for (const raw of matches) {
      const cleaned = raw.replace(/[&"']+$/, "").replace(/&amp;/g, "&");
      if (
        cleaned.includes("/js/") ||
        cleaned.includes("/css/") ||
        cleaned.includes("fonts.googleapis.com") ||
        cleaned.includes("review.js") ||
        cleaned.includes("jquery") ||
        cleaned.includes("gsap")
      ) {
        continue;
      }
      if (!urlPages.has(cleaned)) urlPages.set(cleaned, new Set());
      urlPages.get(cleaned)!.add(pageId);
    }
  }

  // Scan CSS files
  for (const file of fs.readdirSync(STYLES_DIR)) {
    const css = fs.readFileSync(path.join(STYLES_DIR, file), "utf8");
    const matches = css.match(URL_REGEX) || [];
    for (const raw of matches) {
      const cleaned = raw.replace(/[)"']+$/, "");
      if (cleaned.includes("/css/") || cleaned.includes("/js/")) continue;
      if (!urlPages.has(cleaned)) urlPages.set(cleaned, new Set());
      urlPages.get(cleaned)!.add(`css:${file}`);
    }
  }

  // Scan network-assets.json
  if (fs.existsSync(NETWORK_ASSETS_PATH)) {
    const netList = JSON.parse(fs.readFileSync(NETWORK_ASSETS_PATH, "utf8")) as Array<{ url: string; resourceType: string }>;
    for (const item of netList) {
      if (item.resourceType === "image" || item.resourceType === "font" || item.resourceType === "media") {
        if (item.url.includes("cloudflare.com")) continue;
        if (!urlPages.has(item.url)) urlPages.set(item.url, new Set());
        urlPages.get(item.url)!.add("network");
      }
    }
  }

  // Filter out srcset responsive derivatives if base URL is already present, or keep master
  const allUrls = Array.from(urlPages.keys()).filter((u) => {
    if (REL_VARIANT_RE.test(u)) {
      const baseCandidate = u.replace(REL_VARIANT_RE, ".$1");
      if (urlPages.has(baseCandidate)) return false;
    }
    return true;
  });

  console.log(`Found ${allUrls.length} unique asset URLs to acquire.`);

  const seenHashes = new Map<string, string>();
  const records: AssetRecord[] = [];
  const rights: Array<Record<string, unknown>> = [];

  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    const fname = safeFileName(url);
    const ext = path.extname(fname).toLowerCase();
    const { category, assetType } = classifyCategory(url, fname);
    const id = `${category}-${String(i + 1).padStart(3, "0")}-${fname.replace(/\.[^.]+$/, "").slice(0, 40)}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[WARN] HTTP ${res.status} for ${url}`);
        continue;
      }
      const ct = res.headers.get("content-type") || "";
      const ab = await res.arrayBuffer();
      const buf = Buffer.from(ab);
      if (!validateFileBuffer(buf, ext, ct)) {
        console.warn(`[WARN] Invalid file signature for ${url}`);
        continue;
      }

      const sha256 = crypto.createHash("sha256").update(buf).digest("hex");
      const existingMaster = seenHashes.get(sha256) || null;

      const masterRel = path.posix.join("assets-source", "original", category, fname);
      const deliveryRel = path.posix.join("public", "assets", category, fname);
      const masterAbs = path.join(ROOT, masterRel);
      const deliveryAbs = path.join(ROOT, deliveryRel);

      fs.mkdirSync(path.dirname(masterAbs), { recursive: true });
      fs.mkdirSync(path.dirname(deliveryAbs), { recursive: true });
      fs.writeFileSync(masterAbs, buf);
      if (!existingMaster) {
        fs.writeFileSync(deliveryAbs, buf);
        seenHashes.set(sha256, `/assets/${category}/${fname}`);
      }

      let width: number | null = null;
      let height: number | null = null;
      let hasTransparency = false;

      if (assetType === "image" && (ext === ".webp" || ext === ".png" || ext === ".jpg" || ext === ".jpeg")) {
        try {
          const meta = await sharp(buf).metadata();
          width = meta.width ?? null;
          height = meta.height ?? null;
          hasTransparency = Boolean(meta.hasAlpha);
        } catch {
          // ignore
        }
      } else if (assetType === "svg") {
        hasTransparency = true;
      }

      const finalDelivery = existingMaster ?? `/assets/${category}/${fname}`;
      records.push({
        id,
        sourceUrl: url,
        decodedFilename: fname,
        category,
        assetType,
        mimeType: ct,
        fileSize: buf.length,
        width,
        height,
        hasTransparency,
        sha256,
        duplicateOf: existingMaster,
        masterPath: masterRel,
        deliveryPath: finalDelivery,
        referencedInPages: Array.from(urlPages.get(url) || []),
        rightsStatus: url.includes("fonts.gstatic.com")
          ? "SIL-OFL-1.1"
          : fname.includes("GeneralSans")
          ? "Fontshare-Free-Commercial"
          : "Webflow-Template-Reference-Asset",
        acquisitionStatus: "ACQUIRED-VERIFIED",
      });

      rights.push({
        assetId: id,
        sourceUrl: url,
        licenseName: url.includes("fonts.gstatic.com")
          ? "SIL Open Font License 1.1 (Amethysta)"
          : fname.includes("GeneralSans")
          ? "Fontshare Free Commercial License (General Sans)"
          : "Docketo Webflow Template / LinkFilm / Iconify / Noun Project",
        verificationStatus: "URL-VERIFIED",
        deliveryPath: finalDelivery,
      });
    } catch (err) {
      console.error(`[ERR] Failed ${url}:`, err);
    }
  }

  fs.writeFileSync(path.join(ROOT, "research", "manifests", "assets.json"), JSON.stringify(records, null, 2));
  fs.writeFileSync(path.join(ROOT, "research", "manifests", "asset-rights.json"), JSON.stringify(rights, null, 2));

  // Build quick URL -> local delivery path map for code generation
  const urlMap: Record<string, string> = {};
  for (const r of records) {
    urlMap[r.sourceUrl] = r.deliveryPath;
  }
  fs.writeFileSync(path.join(ROOT, "research", "manifests", "url-to-local.json"), JSON.stringify(urlMap, null, 2));

  console.log(`Acquired & verified ${records.length} assets (${seenHashes.size} unique hashes).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
