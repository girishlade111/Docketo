import fs from "node:fs";
import path from "node:path";
import { chromium, type Browser, type Page } from "playwright";
import { BASE_URL, SEED_ROUTES } from "./routes-seed";

const ROOT = process.cwd();
const RESEARCH_DIR = path.join(ROOT, "research");

function ensureDir(dirPath: string) {
  fs.mkdirSync(dirPath, { recursive: true });
}

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

async function launchBrowser(): Promise<Browser> {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const exe = findChromiumExecutable();
    if (!exe) throw new Error("No Chromium binary found");
    return await chromium.launch({ executablePath: exe, headless: true });
  }
}

async function inspectTextAndCheckMeta(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  return { status: res.status, url: res.url, contentType: res.headers.get("content-type"), body: text };
}

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const total = document.body.scrollHeight;
    const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
    for (let y = 0; y <= total; y += step) {
      window.scrollTo(0, y);
      await delay(120);
    }
    window.scrollTo(0, 0);
    await delay(200);
  });
}

async function extractPageDetails(page: Page, routeId: string, routePath: string) {
  return await page.evaluate(
    ({ id, rPath }) => {
      const htmlEl = document.documentElement;
      const wfPage = htmlEl.getAttribute("data-wf-page");
      const wfSite = htmlEl.getAttribute("data-wf-site");
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null;
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? null;
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? null;
      const favicon =
        document.querySelector('link[rel="shortcut icon"], link[rel="icon"]')?.getAttribute("href") ?? null;

      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((l) =>
        (l as HTMLLinkElement).href
      );
      const scripts = Array.from(document.querySelectorAll("script[src]")).map((s) =>
        (s as HTMLScriptElement).src
      );

      // Fonts loaded via document.fonts
      const loadedFonts = Array.from(document.fonts).map((f) => ({
        family: f.family,
        weight: f.weight,
        style: f.style,
        status: f.status,
        unicodeRange: f.unicodeRange,
      }));

      // Links
      const links = Array.from(document.querySelectorAll("a")).map((a) => {
        const rect = a.getBoundingClientRect();
        const section = a.closest("header, nav, footer, section, main")?.tagName?.toLowerCase() ?? "other";
        return {
          text: (a.innerText || a.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 120),
          rawHref: a.getAttribute("href") || "",
          resolvedHref: a.href || "",
          target: a.getAttribute("target") || null,
          download: a.getAttribute("download"),
          className: a.className || "",
          section,
          visible: rect.width > 0 && rect.height > 0,
        };
      });

      // Images & media
      const images = Array.from(document.querySelectorAll("img")).map((img) => {
        const cs = getComputedStyle(img);
        const rect = img.getBoundingClientRect();
        return {
          src: img.getAttribute("src") || "",
          currentSrc: img.currentSrc || "",
          srcset: img.getAttribute("srcset") || "",
          alt: img.getAttribute("alt") || "",
          className: img.className || "",
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          renderWidth: Math.round(rect.width),
          renderHeight: Math.round(rect.height),
          objectFit: cs.objectFit,
          objectPosition: cs.objectPosition,
          opacity: cs.opacity,
          loading: img.getAttribute("loading") || "",
        };
      });

      // Inline SVGs
      const inlineSvgs = Array.from(document.querySelectorAll("svg")).map((svg, idx) => {
        const rect = svg.getBoundingClientRect();
        return {
          index: idx,
          className: svg.getAttribute("class") || "",
          viewBox: svg.getAttribute("viewBox") || "",
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          outerHTML: svg.outerHTML.length < 40000 ? svg.outerHTML : `[LARGE SVG ${svg.outerHTML.length} bytes]`,
        };
      });

      // CSS background images in DOM
      const bgImages: Array<{ selector: string; className: string; backgroundImage: string; backgroundColor: string }> = [];
      for (const el of Array.from(document.querySelectorAll("*"))) {
        const cs = getComputedStyle(el);
        if (cs.backgroundImage && cs.backgroundImage !== "none" && cs.backgroundImage.includes("url(")) {
          bgImages.push({
            selector: el.tagName.toLowerCase(),
            className: typeof el.className === "string" ? el.className : "",
            backgroundImage: cs.backgroundImage,
            backgroundColor: cs.backgroundColor,
          });
        }
      }

      // Typography & key element computed styles
      const typographySamples: Array<Record<string, unknown>> = [];
      const sampleTargets = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, label, input, [class*='heading'], [class*='title']");
      let count = 0;
      for (const el of Array.from(sampleTargets)) {
        if (count >= 80) break;
        const text = (el as HTMLElement).innerText?.trim();
        if (!text && el.tagName !== "INPUT") continue;
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;
        typographySamples.push({
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === "string" ? el.className : "",
          text: (text || (el as HTMLInputElement).placeholder || "").replace(/\s+/g, " ").slice(0, 100),
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          borderRadius: cs.borderRadius,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top + window.scrollY),
        });
        count++;
      }

      // Sections inventory
      const sections = Array.from(document.querySelectorAll("section, header, nav, footer, main > div")).map((s, idx) => {
        const cs = getComputedStyle(s);
        const rect = s.getBoundingClientRect();
        return {
          index: idx,
          tag: s.tagName.toLowerCase(),
          id: s.id || null,
          className: typeof s.className === "string" ? s.className : "",
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top + window.scrollY),
          position: cs.position,
          backgroundColor: cs.backgroundColor,
          backgroundImage: cs.backgroundImage !== "none" ? cs.backgroundImage : null,
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          display: cs.display,
          textPreview: ((s as HTMLElement).innerText || "").replace(/\s+/g, " ").trim().slice(0, 180),
        };
      });

      // Body & root styles
      const bodyCS = getComputedStyle(document.body);
      const htmlCS = getComputedStyle(htmlEl);

      // Text content sections for accurate content reconstruction
      const mainText = (document.body.innerText || "").trim();

      return {
        id,
        path: rPath,
        title: document.title,
        canonical,
        metaDesc,
        ogImage,
        favicon,
        wfPage,
        wfSite,
        stylesheets,
        scripts,
        loadedFonts,
        bodyStyle: {
          backgroundColor: bodyCS.backgroundColor,
          color: bodyCS.color,
          fontFamily: bodyCS.fontFamily,
          fontSize: bodyCS.fontSize,
          lineHeight: bodyCS.lineHeight,
        },
        htmlFontSize: htmlCS.fontSize,
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        links,
        images,
        inlineSvgs,
        bgImages,
        typographySamples,
        sections,
        mainText,
      };
    },
    { id: routeId, rPath: routePath }
  );
}

async function main() {
  ensureDir(path.join(RESEARCH_DIR, "reference", "pages"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "screenshots", "desktop"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "screenshots", "mobile"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "screenshots", "scroll-progress"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "screenshots", "interaction-states"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "html"));
  ensureDir(path.join(RESEARCH_DIR, "reference", "styles"));
  ensureDir(path.join(RESEARCH_DIR, "manifests"));

  const [sitemapInfo, robotsInfo] = await Promise.all([
    inspectTextAndCheckMeta(`${BASE_URL}/sitemap.xml`).catch((e) => ({ error: String(e) })),
    inspectTextAndCheckMeta(`${BASE_URL}/robots.txt`).catch((e) => ({ error: String(e) })),
  ]);
  fs.writeFileSync(
    path.join(RESEARCH_DIR, "reference", "sitemap-robots.json"),
    JSON.stringify({ sitemapInfo, robotsInfo }, null, 2)
  );

  const browser = await launchBrowser();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: "en-US",
    timezoneId: "UTC",
  });

  const networkAssets = new Map<string, Record<string, unknown>>();
  const routeResults: Array<Record<string, unknown>> = [];
  const discoveredInternalPaths = new Set<string>();
  const stylesheetsFetched = new Map<string, string>();

  const page = await context.newPage();
  page.on("response", async (res) => {
    try {
      const url = res.url();
      const req = res.request();
      const resourceType = req.resourceType();
      const status = res.status();
      const ct = res.headers()["content-type"] || "";
      if (
        resourceType === "stylesheet" ||
        resourceType === "image" ||
        resourceType === "font" ||
        resourceType === "media" ||
        url.includes("website-files.com") ||
        url.includes("fonts.googleapis") ||
        url.includes("fonts.gstatic") ||
        url.includes("fontshare")
      ) {
        if (!networkAssets.has(url)) {
          networkAssets.set(url, {
            url,
            resourceType,
            status,
            contentType: ct,
            contentLength: res.headers()["content-length"] || null,
          });
        }
        if (resourceType === "stylesheet" && status === 200 && !stylesheetsFetched.has(url)) {
          const cssText = await res.text().catch(() => "");
          if (cssText) stylesheetsFetched.set(url, cssText);
        }
      }
    } catch {
      // ignore closed response
    }
  });

  // 1. Inspect all 34 seed routes at 1440x900
  for (const route of SEED_ROUTES) {
    const fullUrl = `${BASE_URL}${route.path}`;
    console.log(`[Capture] ${route.id} -> ${fullUrl}`);
    try {
      const response = await page.goto(fullUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready);
      await autoScroll(page);
      await page.waitForTimeout(500);

      const rawHtml = await page.content();
      fs.writeFileSync(path.join(RESEARCH_DIR, "reference", "html", `${route.id}.html`), rawHtml);

      const details = await extractPageDetails(page, route.id, route.path);
      fs.writeFileSync(
        path.join(RESEARCH_DIR, "reference", "pages", `${route.id}.json`),
        JSON.stringify(details, null, 2)
      );

      for (const l of details.links) {
        if (l.resolvedHref.startsWith(BASE_URL)) {
          const u = new URL(l.resolvedHref);
          discoveredInternalPaths.add(u.pathname);
        }
      }

      // Take desktop full-page screenshot for main pages + key templates
      const screenshotTargets = new Set([
        "home",
        "about",
        "pricing",
        "news",
        "contact",
        "careers",
        "embedded-bank",
        "safeguarding",
        "savings-accounts",
        "client-money",
        "business-bank",
        "verify",
        "privacy",
        "style-guide",
        "changelog",
        "401",
        "404",
        "licenses",
        "post-1",
      ]);

      if (screenshotTargets.has(route.id)) {
        await page.screenshot({
          path: path.join(RESEARCH_DIR, "reference", "screenshots", "desktop", `${route.id}.png`),
          fullPage: true,
        });
      }

      routeResults.push({
        id: route.id,
        path: route.path,
        httpStatus: response?.status() ?? null,
        finalUrl: page.url(),
        title: details.title,
        scrollWidth: details.scrollWidth,
        scrollHeight: details.scrollHeight,
        imageCount: details.images.length,
        svgCount: details.inlineSvgs.length,
        linkCount: details.links.length,
      });
    } catch (err) {
      console.error(`[Error] ${route.id}:`, err);
      routeResults.push({
        id: route.id,
        path: route.path,
        error: String(err),
      });
    }
  }

  // 2. Deep interactive + scroll investigation on HOME
  console.log("[Deep Inspect] Home scroll & interactions...");
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);

  // Measure header & hero at y=0
  const homeInitial = await page.evaluate(() => {
    const nav = document.querySelector("nav, .w-nav, header");
    const hero = document.querySelector("section, [class*='hero']");
    const navCS = nav ? getComputedStyle(nav) : null;
    const navRect = nav ? nav.getBoundingClientRect() : null;
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const docHeight = document.documentElement.scrollHeight;
    return {
      docHeight,
      navExists: !!nav,
      navClass: nav?.className || null,
      navRect: navRect ? { top: navRect.top, height: navRect.height, width: navRect.width } : null,
      navStyle: navCS
        ? { position: navCS.position, backgroundColor: navCS.backgroundColor, opacity: navCS.opacity, display: navCS.display, visibility: navCS.visibility }
        : null,
      heroRect: heroRect ? { top: heroRect.top, height: heroRect.height, width: heroRect.width } : null,
      animationsCount: document.getAnimations().length,
      animations: document.getAnimations().slice(0, 20).map((a) => ({
        id: a.id,
        playState: a.playState,
        timing: a.effect?.getTiming(),
      })),
    };
  });

  // Progressive scroll captures on Home to solve whitespace/pinning mystery
  const scrollSnapshots: Array<Record<string, unknown>> = [];
  const totalH = (homeInitial.docHeight as number) || 8000;
  const fractions = [0, 0.08, 0.14, 0.2, 0.26, 0.34, 0.45, 0.6, 0.78, 0.92];
  for (let i = 0; i < fractions.length; i++) {
    const y = Math.round(totalH * fractions[i]);
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(350);
    const snapState = await page.evaluate(() => {
      const nav = document.querySelector("nav, .w-nav, header");
      const navCS = nav ? getComputedStyle(nav) : null;
      const navRect = nav ? nav.getBoundingClientRect() : null;
      const stickyEls = Array.from(document.querySelectorAll("*"))
        .filter((el) => {
          const pos = getComputedStyle(el).position;
          return pos === "sticky" || pos === "fixed";
        })
        .map((el) => {
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return {
            tag: el.tagName.toLowerCase(),
            className: typeof el.className === "string" ? el.className : "",
            position: cs.position,
            top: cs.top,
            rectTop: Math.round(r.top),
            rectHeight: Math.round(r.height),
            transform: cs.transform,
            opacity: cs.opacity,
          };
        });
      return {
        scrollY: window.scrollY,
        navTop: navRect ? Math.round(navRect.top) : null,
        navBg: navCS?.backgroundColor || null,
        navOpacity: navCS?.opacity || null,
        stickyEls: stickyEls.slice(0, 25),
      };
    });
    scrollSnapshots.push({ fraction: fractions[i], ...snapState });
    await page.screenshot({
      path: path.join(RESEARCH_DIR, "reference", "screenshots", "scroll-progress", `home-${i}-${Math.round(fractions[i] * 100)}pct.png`),
      fullPage: false,
    });
  }

  // Test interactive controls on Home: Watch video, Solution tabs, FAQ
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  // Check video button
  const videoInspect = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll("a, button")).filter((el) =>
      /watch the video|play demo/i.test((el as HTMLElement).innerText || "")
    );
    return links.map((el) => ({
      tag: el.tagName.toLowerCase(),
      text: (el as HTMLElement).innerText.trim(),
      href: el.getAttribute("href"),
      className: el.className,
      dataWId: el.getAttribute("data-w-id"),
    }));
  });

  // Check Solution Tabs
  const tabLinks = page.locator(".w-tab-link");
  const tabCount = await tabLinks.count();
  const tabStates: Array<Record<string, unknown>> = [];
  for (let i = 0; i < tabCount; i++) {
    const tab = tabLinks.nth(i);
    await tab.scrollIntoViewIfNeeded();
    await tab.click();
    await page.waitForTimeout(350);
    const activePane = await page.evaluate(() => {
      const pane = document.querySelector(".w-tab-pane.w--tab-active");
      return {
        activeTabText: document.querySelector(".w-tab-link.w--current")?.textContent?.trim(),
        paneText: pane?.textContent?.replace(/\s+/g, " ").trim().slice(0, 400),
        paneImg: pane?.querySelector("img")?.getAttribute("src"),
      };
    });
    tabStates.push(activePane);
    await page.screenshot({
      path: path.join(RESEARCH_DIR, "reference", "screenshots", "interaction-states", `solution-tab-${i + 1}.png`),
      fullPage: false,
    });
  }

  // Check Dropdowns on /about (since inner page clearly has header)
  await page.goto(`${BASE_URL}/about`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  const dropdownCount = await page.locator(".w-dropdown").count();
  const dropdownStates: Array<Record<string, unknown>> = [];
  for (let i = 0; i < dropdownCount; i++) {
    const dd = page.locator(".w-dropdown").nth(i);
    const toggle = dd.locator(".w-dropdown-toggle").first();
    await toggle.click();
    await page.waitForTimeout(300);
    const ddInfo = await dd.evaluate((el) => {
      const list = el.querySelector(".w-dropdown-list");
      const cs = list ? getComputedStyle(list) : null;
      const rect = list ? list.getBoundingClientRect() : null;
      const items = Array.from(el.querySelectorAll(".w-dropdown-list a")).map((a) => ({
        text: a.textContent?.trim(),
        href: a.getAttribute("href"),
      }));
      return {
        toggleText: el.querySelector(".w-dropdown-toggle")?.textContent?.trim(),
        listDisplay: cs?.display,
        listBg: cs?.backgroundColor,
        listWidth: rect ? Math.round(rect.width) : null,
        listHeight: rect ? Math.round(rect.height) : null,
        items,
      };
    });
    dropdownStates.push(ddInfo);
    await page.screenshot({
      path: path.join(RESEARCH_DIR, "reference", "screenshots", "interaction-states", `dropdown-${i + 1}.png`),
      fullPage: false,
    });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(150);
  }

  // Check Style Guide exact swatches & typography CSS
  await page.goto(`${BASE_URL}/style-guide`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  const styleGuideData = await page.evaluate(() => {
    const swatches = Array.from(document.querySelectorAll("[class*='color'], [class*='swatch']")).map((el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        className: el.className,
        text: (el as HTMLElement).innerText?.trim(),
        bg: cs.backgroundColor,
        color: cs.color,
        borderColor: cs.borderColor,
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    });
    const buttons = Array.from(document.querySelectorAll("a[class*='button'], button, .w-button")).map((el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        className: el.className,
        text: (el as HTMLElement).innerText?.trim(),
        bg: cs.backgroundColor,
        color: cs.color,
        borderRadius: cs.borderRadius,
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
        fontSize: cs.fontSize,
        fontFamily: cs.fontFamily,
        height: Math.round(r.height),
      };
    });
    return { swatches: swatches.slice(0, 60), buttons: buttons.slice(0, 30) };
  });

  // Mobile 390x844 capture on Home, About, Pricing, Contact
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mPage = await mobileContext.newPage();
  for (const rPath of [
    { id: "home", path: "/" },
    { id: "about", path: "/about" },
    { id: "pricing", path: "/pricing" },
    { id: "contact", path: "/contact" },
  ]) {
    await mPage.goto(`${BASE_URL}${rPath.path}`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await mPage.evaluate(() => document.fonts.ready);
    await autoScroll(mPage);
    await mPage.screenshot({
      path: path.join(RESEARCH_DIR, "reference", "screenshots", "mobile", `${rPath.id}.png`),
      fullPage: true,
    });
  }
  // Mobile menu open check on /about
  await mPage.goto(`${BASE_URL}/about`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  const menuBtn = mPage.locator(".w-nav-button").first();
  if ((await menuBtn.count()) > 0) {
    await menuBtn.click();
    await mPage.waitForTimeout(350);
    await mPage.screenshot({
      path: path.join(RESEARCH_DIR, "reference", "screenshots", "interaction-states", "mobile-menu-open.png"),
      fullPage: false,
    });
  }
  await mobileContext.close();

  // Save stylesheets and parse @font-face & CSS variables
  const cssDump: Array<{ url: string; length: number; fontFaces: string[]; rootVars: string[] }> = [];
  for (const [url, cssText] of stylesheetsFetched.entries()) {
    const safeName = url.split("/").pop()?.split("?")[0] || "style.css";
    fs.writeFileSync(path.join(RESEARCH_DIR, "reference", "styles", safeName), cssText);
    const fontFaces = cssText.match(/@font-face\s*\{[^}]*\}/g) || [];
    const rootVars = cssText.match(/--[a-zA-Z0-9-_]+\s*:\s*[^;]+;/g) || [];
    cssDump.push({ url, length: cssText.length, fontFaces, rootVars: rootVars.slice(0, 200) });
  }

  fs.writeFileSync(
    path.join(RESEARCH_DIR, "reference", "deep-inspect.json"),
    JSON.stringify(
      {
        capturedAt: new Date().toISOString(),
        browserVersion: browser.version(),
        discoveredInternalPaths: Array.from(discoveredInternalPaths).sort(),
        routeResults,
        homeInitial,
        scrollSnapshots,
        videoInspect,
        tabStates,
        dropdownStates,
        styleGuideData,
        cssDump,
        networkAssetsCount: networkAssets.size,
      },
      null,
      2
    )
  );

  fs.writeFileSync(
    path.join(RESEARCH_DIR, "manifests", "network-assets.json"),
    JSON.stringify(Array.from(networkAssets.values()), null, 2)
  );

  await browser.close();
  console.log("Capture complete! Discovered paths:", Array.from(discoveredInternalPaths).sort());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
