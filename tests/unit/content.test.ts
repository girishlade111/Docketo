import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { ARTICLES } from "@/content/articles";
import { ARTICLE_CATEGORIES } from "@/content/article-categories";
import { HOMEPAGE_PRODUCT_DIRECTORY, PRODUCT_PAGES } from "@/content/products";
import { SHARED_FAQS } from "@/content/faqs";
import { PRICING_PLANS } from "@/content/pricing";
import { SITE_CONFIG } from "@/config/site";

const ROOT = process.cwd();

function collectSourceFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectSourceFiles(full));
    } else if (/\.(ts|tsx|css)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

describe("Docketo CMS and product content integrity", () => {
  it("defines all 6 banking product routes consistently", () => {
    expect(HOMEPAGE_PRODUCT_DIRECTORY).toHaveLength(6);
    expect(Object.keys(PRODUCT_PAGES)).toHaveLength(6);
    for (const item of HOMEPAGE_PRODUCT_DIRECTORY) {
      expect(PRODUCT_PAGES[item.slug as keyof typeof PRODUCT_PAGES]).toBeDefined();
    }
  });

  it("defines 9 CMS articles across 4 categories matching Webflow counts", () => {
    expect(ARTICLES).toHaveLength(9);
    expect(ARTICLE_CATEGORIES).toHaveLength(5);

    const counts: Record<string, number> = {
      product: 0,
      compliance: 0,
      company: 0,
      guides: 0,
    };
    const slugs = new Set<string>();
    for (const article of ARTICLES) {
      expect(slugs.has(article.slug)).toBe(false);
      slugs.add(article.slug);
      counts[article.categoryId] += 1;
      for (const rel of article.relatedSlugs) {
        expect(ARTICLES.some((candidate) => candidate.slug === rel)).toBe(true);
      }
    }

    expect(counts).toEqual({
      product: 2,
      compliance: 3,
      company: 2,
      guides: 2,
    });
  });

  it("keeps demonstration pricing flags explicitly non-production", () => {
    expect(PRICING_PLANS).toHaveLength(3);
    for (const plan of PRICING_PLANS) {
      expect(plan.referenceOnly).toBe(true);
      expect(plan.productionApproved).toBe(false);
    }
  });

  it("defines shared FAQs and footer navigation groups", () => {
    expect(SHARED_FAQS.length).toBeGreaterThanOrEqual(5);
    expect(SITE_CONFIG.footerGroups).toHaveLength(4);
  });

  it("resolves every referenced /assets/ path to an existing file in public/", () => {
    const files = collectSourceFiles(path.join(ROOT, "src"));
    const missing: string[] = [];
    const assetPattern = /\/assets\/[A-Za-z0-9_./-]+/g;

    for (const file of files) {
      const content = fs.readFileSync(file, "utf8");
      const matches = content.match(assetPattern) || [];
      for (const relAsset of matches) {
        const diskPath = path.join(ROOT, "public", relAsset.replace(/^\/+/, ""));
        if (!fs.existsSync(diskPath)) {
          missing.push(`${path.relative(ROOT, file)} -> ${relAsset}`);
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it("contains zero emojis and zero em/en dashes in src/", () => {
    const files = collectSourceFiles(path.join(ROOT, "src"));
    const violations: string[] = [];
    const forbidden = /[\u2013\u2014\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

    for (const file of files) {
      const content = fs.readFileSync(file, "utf8");
      if (forbidden.test(content)) {
        violations.push(path.relative(ROOT, file));
      }
    }

    expect(violations).toEqual([]);
  });
});
