# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Docketo 34-route health, typography, and asset integrity >> every single one of the 34 reconstructed routes loads cleanly on desktop
- Location: tests\e2e\docketo.spec.ts:35:3

# Error details

```
Error: HTTP status for /404

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Page snapshot

```yaml
- generic [active] [ref=f32e1]:
  - link "Skip to main content" [ref=f32e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=f32e3]:
    - generic [ref=f32e4]:
      - img "404 illustration" [ref=f32e5]
      - heading "Sorry, this page can’t be found." [level=1] [ref=f32e6]
      - link "Back To Home" [ref=f32e8] [cursor=pointer]:
        - /url: /
  - alert [ref=f32e9]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import AxeBuilder from "@axe-core/playwright";
  3   | import { ARTICLES } from "../../src/content/articles";
  4   | 
  5   | const ALL_34_ROUTES = [
  6   |   "/",
  7   |   "/about",
  8   |   "/pricing",
  9   |   "/contact",
  10  |   "/careers",
  11  |   "/embedded-bank",
  12  |   "/safeguarding",
  13  |   "/savings-accounts",
  14  |   "/client-money",
  15  |   "/business-bank",
  16  |   "/verify",
  17  |   "/news",
  18  |   "/post-categories/product",
  19  |   "/post-categories/compliance",
  20  |   "/post-categories/company",
  21  |   "/post-categories/guides",
  22  |   ...ARTICLES.map((a) => `/post/${a.slug}`),
  23  |   "/privacy",
  24  |   "/terms-conditions",
  25  |   "/cookies",
  26  |   "/eligibility",
  27  |   "/style-guide",
  28  |   "/changelog",
  29  |   "/401",
  30  |   "/404",
  31  |   "/licenses",
  32  | ];
  33  | 
  34  | test.describe("Docketo 34-route health, typography, and asset integrity", () => {
  35  |   test("every single one of the 34 reconstructed routes loads cleanly on desktop", async ({ page }) => {
  36  |     expect(ALL_34_ROUTES).toHaveLength(34);
  37  |     await page.setViewportSize({ width: 1440, height: 900 });
  38  | 
  39  |     const pageErrors: string[] = [];
  40  |     const consoleErrors: string[] = [];
  41  |     page.on("pageerror", (err) => pageErrors.push(`${err.message}`));
  42  |     page.on("console", (msg) => {
  43  |       if (msg.type() === "error") consoleErrors.push(msg.text());
  44  |     });
  45  | 
  46  |     for (const route of ALL_34_ROUTES) {
  47  |       const response = await page.goto(route, { waitUntil: "domcontentloaded" });
> 48  |       expect(response?.status(), `HTTP status for ${route}`).toBe(200);
      |                                                              ^ Error: HTTP status for /404
  49  |       await page.evaluate(() => document.fonts.ready);
  50  | 
  51  |       const metrics = await page.evaluate(() => {
  52  |         const imgs = Array.from(document.querySelectorAll("img"));
  53  |         const brokenImgs = imgs
  54  |           .filter((img) => img.complete && img.naturalWidth === 0)
  55  |           .map((img) => img.getAttribute("src") || img.alt);
  56  |         return {
  57  |           textLen: document.body.innerText.trim().length,
  58  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  59  |           scrollWidth: document.documentElement.scrollWidth,
  60  |           innerWidth: window.innerWidth,
  61  |           brokenImgs,
  62  |         };
  63  |       });
  64  | 
  65  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  66  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  67  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  68  |     }
  69  | 
  70  |     expect(pageErrors, "Page runtime errors").toEqual([]);
  71  |     expect(consoleErrors, "Browser console errors").toEqual([]);
  72  |   });
  73  | 
  74  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  75  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  76  |     expect(response?.status()).toBe(404);
  77  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  78  |   });
  79  | });
  80  | 
  81  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  82  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  83  |   const viewports = [
  84  |     { name: "tablet-768", width: 768, height: 1024 },
  85  |     { name: "mobile-390", width: 390, height: 844 },
  86  |     { name: "mobile-320", width: 320, height: 568 },
  87  |   ];
  88  | 
  89  |   for (const vp of viewports) {
  90  |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  91  |       await page.setViewportSize({ width: vp.width, height: vp.height });
  92  |       for (const route of keyRoutes) {
  93  |         await page.goto(route, { waitUntil: "domcontentloaded" });
  94  |         const overflow = await page.evaluate(() => ({
  95  |           scrollWidth: document.documentElement.scrollWidth,
  96  |           innerWidth: window.innerWidth,
  97  |         }));
  98  |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
  99  |       }
  100 |     });
  101 |   }
  102 | });
  103 | 
  104 | test.describe("Interactive workflows and visual transitions", () => {
  105 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  106 |     await page.setViewportSize({ width: 1440, height: 900 });
  107 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  108 | 
  109 |     // 1. Scroll-shrinking cinematic hero geometry
  110 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  111 |     const boxAtTop = await heroCard.boundingBox();
  112 |     expect(boxAtTop).not.toBeNull();
  113 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  114 | 
  115 |     await page.evaluate(() => window.scrollTo(0, 1000));
  116 |     await page.waitForTimeout(250);
  117 |     const boxScrolled = await heroCard.boundingBox();
  118 |     expect(boxScrolled).not.toBeNull();
  119 |     expect(boxScrolled!.width).toBeLessThan(800);
  120 | 
  121 |     // 2. Header dropdown opens and closes via Escape
  122 |     await page.evaluate(() => window.scrollTo(0, 950));
  123 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  124 |     await productsTrigger.click();
  125 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
  126 |     await page.keyboard.press("Escape");
  127 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  128 | 
  129 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  130 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  131 |     const dialog = page.getByRole("dialog");
  132 |     await expect(dialog).toBeVisible();
  133 |     await page.keyboard.press("Escape");
  134 |     await expect(dialog).toBeHidden();
  135 | 
  136 |     // 4. Solution tabs switch content (all 4 tabs)
  137 |     const fintechTab = page.getByRole("tab", { name: "Fintechs" });
  138 |     await fintechTab.scrollIntoViewIfNeeded();
  139 |     await fintechTab.click();
  140 |     await expect(page.getByRole("heading", { name: "Scale faster without banking complexity" })).toBeVisible();
  141 | 
  142 |     await page.getByRole("tab", { name: "Platforms & Marketplaces" }).click();
  143 |     await expect(page.getByRole("heading", { name: "Power seamless payouts and account flows" })).toBeVisible();
  144 | 
  145 |     await page.getByRole("tab", { name: "Global Businesses" }).click();
  146 |     await expect(page.getByRole("heading", { name: "Expand into new markets with local accounts" })).toBeVisible();
  147 | 
  148 |     // 5. Testimonial carousel switches across all 3 slides
```