import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "research", "comparisons");
const REF_DESKTOP = path.join(ROOT, "research", "reference", "screenshots", "desktop");
const REF_MOBILE = path.join(ROOT, "research", "reference", "screenshots", "mobile");

function findChromiumExecutable(): string | undefined {
  const localAppData = process.env.LOCALAPPDATA;
  if (!localAppData) return undefined;
  const cacheDir = path.join(localAppData, "ms-playwright");
  if (!fs.existsSync(cacheDir)) return undefined;
  const entries = fs
    .readdirSync(cacheDir)
    .filter((d) => d.startsWith("chromium-"))
    .sort()
    .reverse();
  for (const entry of entries) {
    const exe = path.join(cacheDir, entry, "chrome-win64", "chrome.exe");
    if (fs.existsSync(exe)) return exe;
    const exeAlt = path.join(cacheDir, entry, "chrome-win", "chrome.exe");
    if (fs.existsSync(exeAlt)) return exeAlt;
  }
  return undefined;
}

interface CompareTarget {
  name: string;
  route: string;
  refFile: string;
  viewport: { width: number; height: number };
}

const TARGETS: CompareTarget[] = [
  { name: "desktop-home", route: "/", refFile: path.join(REF_DESKTOP, "home.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-about", route: "/about", refFile: path.join(REF_DESKTOP, "about.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-pricing", route: "/pricing", refFile: path.join(REF_DESKTOP, "pricing.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-contact", route: "/contact", refFile: path.join(REF_DESKTOP, "contact.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-embedded-bank", route: "/embedded-bank", refFile: path.join(REF_DESKTOP, "embedded-bank.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-news", route: "/news", refFile: path.join(REF_DESKTOP, "news.png"), viewport: { width: 1440, height: 900 } },
  { name: "desktop-style-guide", route: "/style-guide", refFile: path.join(REF_DESKTOP, "style-guide.png"), viewport: { width: 1440, height: 900 } },
  { name: "mobile-home", route: "/", refFile: path.join(REF_MOBILE, "home.png"), viewport: { width: 390, height: 844 } },
];

async function compareFoldAndFull(localBuf: Buffer, refPath: string, diffOutPath: string) {
  const localMeta = await sharp(localBuf).metadata();
  const refMeta = await sharp(refPath).metadata();

  const w = Math.min(localMeta.width || 1440, refMeta.width || 1440);
  const foldH = Math.min(localMeta.height || 900, refMeta.height || 900, 900);

  const localCrop = await sharp(localBuf)
    .extract({ left: 0, top: 0, width: w, height: foldH })
    .ensureAlpha()
    .raw()
    .toBuffer();
  const refCrop = await sharp(refPath)
    .extract({ left: 0, top: 0, width: w, height: foldH })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const diffPng = new PNG({ width: w, height: foldH });
  const mismatched = pixelmatch(localCrop, refCrop, diffPng.data, w, foldH, { threshold: 0.15 });
  fs.writeFileSync(diffOutPath, PNG.sync.write(diffPng));

  const diffPct = Number(((mismatched / (w * foldH)) * 100).toFixed(2));
  return {
    localSize: { width: localMeta.width, height: localMeta.height },
    refSize: { width: refMeta.width, height: refMeta.height },
    foldBox: { width: w, height: foldH },
    foldMismatchPct: diffPct,
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const exe = findChromiumExecutable();
  const browser = await chromium.launch(exe ? { executablePath: exe, headless: true } : { headless: true });

  const results = [];
  for (const t of TARGETS) {
    const context = await browser.newContext({ viewport: t.viewport });
    await context.addInitScript("window.__name = window.__name || function(t){ return t; };");
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:3000${t.route}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const localShotPath = path.join(OUT_DIR, `${t.name}-local.png`);
    const diffOutPath = path.join(OUT_DIR, `${t.name}-diff.png`);
    const localBuf = await page.screenshot({ fullPage: true, path: localShotPath });

    // Also capture viewport fold snapshot for quick human/agent visual review
    await page.screenshot({ fullPage: false, path: path.join(OUT_DIR, `${t.name}-fold.png`) });

    // Capture scrolled desktop hero check on desktop-home
    if (t.name === "desktop-home") {
      await page.evaluate(() => window.scrollTo(0, 1000));
      await page.waitForTimeout(300);
      await page.screenshot({ fullPage: false, path: path.join(OUT_DIR, "desktop-home-scrolled-hero.png") });
    }

    let comparison = null;
    if (fs.existsSync(t.refFile)) {
      comparison = await compareFoldAndFull(localBuf, t.refFile, diffOutPath);
    }

    results.push({ target: t.name, route: t.route, comparison });
    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT_DIR, "report.json"), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
