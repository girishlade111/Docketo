# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Docketo 34-route health, typography, and asset integrity >> every single one of the 34 reconstructed routes loads cleanly on desktop
- Location: tests\e2e\docketo.spec.ts:35:3

# Error details

```
Error: Page runtime errors

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 42

- Array []
+ Array [
+   "/verify: Loading chunk 434 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/verify/page-2d3bd23f406237ce.js)",
+   "/post-categories/compliance: Loading chunk 893 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post-categories/%5Bcategory%5D/page-211135b6e4b841a4.js)",
+   "/post-categories/compliance: Loading chunk 893 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post-categories/%5Bcategory%5D/page-211135b6e4b841a4.js)",
+   "/post-categories/company: Loading chunk 893 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post-categories/%5Bcategory%5D/page-211135b6e4b841a4.js)",
+   "/post-categories/guides: Loading chunk 893 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post-categories/%5Bcategory%5D/page-211135b6e4b841a4.js)",
+   "/post/kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/giving-every-customer-their-own-bank-account-use-cases-for-embedded-banking: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/from-remittance-to-banking-how-africhange-expanded-with-docket: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/what-the-new-120-000-fscs-limit-means-for-your-customers: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/safeguarding-vs-client-money-accounts-which-does-your-business-need: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/post/safeguarding-vs-client-money-accounts-which-does-your-business-need: Loading chunk 627 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/post/%5Bslug%5D/page-6024a5db04414388.js)",
+   "/terms-conditions: Loading chunk 877 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/privacy/page-e87e45164acd635d.js)",
+   "/terms-conditions: Loading chunk 563 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/terms-conditions/page-e87e45164acd635d.js)",
+   "/cookies: Loading chunk 674 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/cookies/page-e87e45164acd635d.js)",
+   "/eligibility: Loading chunk 884 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/eligibility/page-e87e45164acd635d.js)",
+   "/style-guide: Loading chunk 773 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/style-guide/page-50df6f6eb5184f40.js)",
+   "/changelog: Loading chunk 679 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/changelog/page-e5da08fd8cc0177c.js)",
+   "/401: Loading chunk 22 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/401/page-a7ade414b289fa0f.js)",
+   "/404: Loading chunk 909 failed.
+ (error: http://127.0.0.1:3000/_next/static/chunks/app/404/page-16d4f26f822c103f.js)",
+ ]
```

# Page snapshot

```yaml
- 'heading "Application error: a client-side exception has occurred while loading 127.0.0.1 (see the browser console for more information)." [level=2] [ref=f33e4]'
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
  41  |     let currentRoute = "/";
  42  |     page.on("pageerror", (err) => pageErrors.push(`${currentRoute}: ${err.message}`));
  43  |     page.on("console", (msg) => {
  44  |       if (msg.type() === "error") {
  45  |         const text = msg.text();
  46  |         if (currentRoute === "/404" && text.includes("404 (Not Found)")) return;
  47  |         consoleErrors.push(`${currentRoute}: ${text}`);
  48  |       }
  49  |     });
  50  | 
  51  |     for (const route of ALL_34_ROUTES) {
  52  |       currentRoute = route;
  53  |       const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  54  |       const status = response?.status();
  55  |       if (route === "/404") {
  56  |         expect([200, 404]).toContain(status);
  57  |       } else {
  58  |         expect(status, `HTTP status for ${route}`).toBe(200);
  59  |       }
  60  |       await page.evaluate(() => document.fonts.ready);
  61  | 
  62  |       const metrics = await page.evaluate(() => {
  63  |         const imgs = Array.from(document.querySelectorAll("img"));
  64  |         const brokenImgs = imgs
  65  |           .filter((img) => img.complete && img.naturalWidth === 0)
  66  |           .map((img) => img.getAttribute("src") || img.alt);
  67  |         return {
  68  |           textLen: document.body.innerText.trim().length,
  69  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  70  |           scrollWidth: document.documentElement.scrollWidth,
  71  |           innerWidth: window.innerWidth,
  72  |           brokenImgs,
  73  |         };
  74  |       });
  75  | 
  76  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  77  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  78  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  79  |     }
  80  | 
> 81  |     expect(pageErrors, "Page runtime errors").toEqual([]);
      |                                               ^ Error: Page runtime errors
  82  |     expect(consoleErrors, "Browser console errors").toEqual([]);
  83  |   });
  84  | 
  85  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  86  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  87  |     expect(response?.status()).toBe(404);
  88  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  89  |   });
  90  | });
  91  | 
  92  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  93  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  94  |   const viewports = [
  95  |     { name: "tablet-768", width: 768, height: 1024 },
  96  |     { name: "mobile-390", width: 390, height: 844 },
  97  |     { name: "mobile-320", width: 320, height: 568 },
  98  |   ];
  99  | 
  100 |   for (const vp of viewports) {
  101 |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  102 |       await page.setViewportSize({ width: vp.width, height: vp.height });
  103 |       for (const route of keyRoutes) {
  104 |         await page.goto(route, { waitUntil: "domcontentloaded" });
  105 |         const overflow = await page.evaluate(() => ({
  106 |           scrollWidth: document.documentElement.scrollWidth,
  107 |           innerWidth: window.innerWidth,
  108 |         }));
  109 |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
  110 |       }
  111 |     });
  112 |   }
  113 | });
  114 | 
  115 | test.describe("Interactive workflows and visual transitions", () => {
  116 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  117 |     await page.setViewportSize({ width: 1440, height: 900 });
  118 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  119 | 
  120 |     // 1. Scroll-shrinking cinematic hero geometry
  121 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  122 |     const boxAtTop = await heroCard.boundingBox();
  123 |     expect(boxAtTop).not.toBeNull();
  124 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  125 | 
  126 |     await page.evaluate(() => window.scrollTo(0, 1000));
  127 |     await page.waitForTimeout(250);
  128 |     const boxScrolled = await heroCard.boundingBox();
  129 |     expect(boxScrolled).not.toBeNull();
  130 |     expect(boxScrolled!.width).toBeLessThan(800);
  131 | 
  132 |     // 2. Header dropdown opens and closes via Escape
  133 |     await page.evaluate(() => window.scrollTo(0, 950));
  134 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  135 |     await productsTrigger.click();
  136 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
  137 |     await page.keyboard.press("Escape");
  138 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  139 | 
  140 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  141 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  142 |     const dialog = page.getByRole("dialog");
  143 |     await expect(dialog).toBeVisible();
  144 |     await page.keyboard.press("Escape");
  145 |     await expect(dialog).toBeHidden();
  146 | 
  147 |     // 4. Solution tabs switch content (all 4 tabs)
  148 |     const wealthTab = page.getByRole("tab", { name: "Wealth and savings apps" });
  149 |     await wealthTab.scrollIntoViewIfNeeded();
  150 |     await wealthTab.click();
  151 |     await expect(
  152 |       page.getByRole("heading", { name: "Streamline reconciliation and strengthen retention in one move." })
  153 |     ).toBeVisible();
  154 | 
  155 |     await page.getByRole("tab", { name: "Lending" }).click();
  156 |     await expect(page.getByRole("heading", { name: "One infrastructure, endless payment possibilities." })).toBeVisible();
  157 | 
  158 |     await page.getByRole("tab", { name: "Proptech solutions" }).click();
  159 |     await expect(
  160 |       page.getByRole("heading", { name: "Set your clients up for success with dedicated, compliant accounts." })
  161 |     ).toBeVisible();
  162 | 
  163 |     // 5. Testimonial carousel switches across all 3 slides
  164 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  165 |     await expect(page.getByText("Priya Anand")).toBeVisible();
  166 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  167 |     await expect(page.getByText("David Chen")).toBeVisible();
  168 | 
  169 |     // 6. Customer stories switcher
  170 |     await page.getByRole("tab", { name: "Show RettsPay story" }).click();
  171 |     await expect(page.getByRole("button", { name: "Play RettsPay customer story video" })).toBeVisible();
  172 | 
  173 |     // 7. Shared FAQ expand/collapse
  174 |     const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
  175 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  176 |     await firstFaq.click();
  177 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
  178 |     await firstFaq.click();
  179 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  180 |   });
  181 | 
```