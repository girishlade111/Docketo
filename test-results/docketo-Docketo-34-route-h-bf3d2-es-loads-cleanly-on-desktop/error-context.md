# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Docketo 34-route health, typography, and asset integrity >> every single one of the 34 reconstructed routes loads cleanly on desktop
- Location: tests\e2e\docketo.spec.ts:35:3

# Error details

```
Error: Browser console errors

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "Failed to load resource: the server responded with a status of 404 (Not Found)",
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=f33e1]:
  - link "Skip to main content" [ref=f33e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=f33e3]:
    - generic [ref=f33e4]:
      - link "Docketo home" [ref=f33e5] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=f33e6]
      - navigation "Primary" [ref=f33e7]:
        - button "Products" [ref=f33e9] [cursor=pointer]
        - link "About" [ref=f33e11] [cursor=pointer]:
          - /url: /about
        - link "Price" [ref=f33e12] [cursor=pointer]:
          - /url: /pricing
        - link "Blog" [ref=f33e13] [cursor=pointer]:
          - /url: /news
        - button "pages" [ref=f33e15] [cursor=pointer]
      - link "Book a Demo" [ref=f33e18] [cursor=pointer]:
        - /url: /contact
  - main [ref=f33e19]:
    - generic [ref=f33e23]:
      - paragraph [ref=f33e25]: All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
      - generic [ref=f33e26]:
        - heading "Photography" [level=1] [ref=f33e27]
        - paragraph [ref=f33e28]:
          - text: All images used in the template are licensed for personal and commercial use. If you want to use some specific image, you can check the licenses and download the images for free from
          - link "LinkFilm" [ref=f33e29] [cursor=pointer]:
            - /url: https://www.linkfilm.ai/
      - generic [ref=f33e30]:
        - img "Licenses Image 1" [ref=f33e32]
        - img "Licenses Image 2" [ref=f33e34]
        - img "Licenses Image 3" [ref=f33e36]
        - img "Licenses Image 4" [ref=f33e38]
        - img "Licenses Image 5" [ref=f33e40]
        - img "Licenses Image 6" [ref=f33e42]
      - generic [ref=f33e43]:
        - heading "Icons" [level=2] [ref=f33e44]
        - paragraph [ref=f33e45]:
          - text: All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below. All icons are sourced from
          - link "Iconify" [ref=f33e46] [cursor=pointer]:
            - /url: https://iconify.design/
          - text: And
          - link "Thenounproject" [ref=f33e47] [cursor=pointer]:
            - /url: https://thenounproject.com/
      - generic [ref=f33e48]:
        - heading "Typography" [level=2] [ref=f33e49]
        - paragraph [ref=f33e50]: This template uses General Sans and Amethysta (documented as Clash Grotesk in the original text) which you can obtain from Fontshare and Google Fonts.
      - generic [ref=f33e51]:
        - link "General Sans" [ref=f33e52] [cursor=pointer]:
          - /url: https://www.fontshare.com/?q=General+Sans
        - link "Amethysta" [ref=f33e53] [cursor=pointer]:
          - /url: https://fonts.google.com/specimen/Amethysta?preview.script=Latn
  - contentinfo [ref=f33e54]:
    - generic [ref=f33e57]:
      - link "Docketo home" [ref=f33e59] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=f33e60]
      - generic [ref=f33e61]:
        - navigation "Footer" [ref=f33e62]:
          - generic [ref=f33e63]:
            - generic [ref=f33e64]: Product
            - list [ref=f33e65]:
              - listitem [ref=f33e66]:
                - link "Embedded bank" [ref=f33e67] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=f33e68]:
                - link "Safeguarding" [ref=f33e69] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=f33e70]:
                - link "Savings accounts" [ref=f33e71] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=f33e72]:
                - link "Client money" [ref=f33e73] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=f33e74]:
                - link "Business bank" [ref=f33e75] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=f33e76]:
                - link "Verify" [ref=f33e77] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=f33e78]:
            - generic [ref=f33e79]: Explore
            - list [ref=f33e80]:
              - listitem [ref=f33e81]:
                - link "Home" [ref=f33e82] [cursor=pointer]:
                  - /url: /
              - listitem [ref=f33e83]:
                - link "About" [ref=f33e84] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=f33e85]:
                - link "Blog" [ref=f33e86] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=f33e87]:
                - link "Contact us" [ref=f33e88] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=f33e89]:
                - link "Careers" [ref=f33e90] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=f33e91]:
                - link "Pricing" [ref=f33e92] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=f33e93]:
            - generic [ref=f33e94]: Policies
            - list [ref=f33e95]:
              - listitem [ref=f33e96]:
                - link "Privacy policy" [ref=f33e97] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=f33e98]:
                - link "Terms & Conditions" [ref=f33e99] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=f33e100]:
                - link "Cookies" [ref=f33e101] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=f33e102]:
                - link "Eligibility" [ref=f33e103] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=f33e104]:
            - generic [ref=f33e105]: Utility page
            - list [ref=f33e106]:
              - listitem [ref=f33e107]:
                - link "Style guide" [ref=f33e108] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=f33e109]:
                - link "Change log" [ref=f33e110] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=f33e111]:
                - link "Password" [ref=f33e112] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=f33e113]:
                - link "404 not found" [ref=f33e114] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=f33e115]:
                - link "Licenses" [ref=f33e116] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=f33e117]:
          - paragraph [ref=f33e118]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=f33e119]:
            - text: Designed by
            - link "webocean" [ref=f33e120] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=f33e122]
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
  48  |       const status = response?.status();
  49  |       if (route === "/404") {
  50  |         expect([200, 404]).toContain(status);
  51  |       } else {
  52  |         expect(status, `HTTP status for ${route}`).toBe(200);
  53  |       }
  54  |       await page.evaluate(() => document.fonts.ready);
  55  | 
  56  |       const metrics = await page.evaluate(() => {
  57  |         const imgs = Array.from(document.querySelectorAll("img"));
  58  |         const brokenImgs = imgs
  59  |           .filter((img) => img.complete && img.naturalWidth === 0)
  60  |           .map((img) => img.getAttribute("src") || img.alt);
  61  |         return {
  62  |           textLen: document.body.innerText.trim().length,
  63  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  64  |           scrollWidth: document.documentElement.scrollWidth,
  65  |           innerWidth: window.innerWidth,
  66  |           brokenImgs,
  67  |         };
  68  |       });
  69  | 
  70  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  71  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  72  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  73  |     }
  74  | 
  75  |     expect(pageErrors, "Page runtime errors").toEqual([]);
> 76  |     expect(consoleErrors, "Browser console errors").toEqual([]);
      |                                                     ^ Error: Browser console errors
  77  |   });
  78  | 
  79  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  80  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  81  |     expect(response?.status()).toBe(404);
  82  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  83  |   });
  84  | });
  85  | 
  86  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  87  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  88  |   const viewports = [
  89  |     { name: "tablet-768", width: 768, height: 1024 },
  90  |     { name: "mobile-390", width: 390, height: 844 },
  91  |     { name: "mobile-320", width: 320, height: 568 },
  92  |   ];
  93  | 
  94  |   for (const vp of viewports) {
  95  |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  96  |       await page.setViewportSize({ width: vp.width, height: vp.height });
  97  |       for (const route of keyRoutes) {
  98  |         await page.goto(route, { waitUntil: "domcontentloaded" });
  99  |         const overflow = await page.evaluate(() => ({
  100 |           scrollWidth: document.documentElement.scrollWidth,
  101 |           innerWidth: window.innerWidth,
  102 |         }));
  103 |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
  104 |       }
  105 |     });
  106 |   }
  107 | });
  108 | 
  109 | test.describe("Interactive workflows and visual transitions", () => {
  110 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  111 |     await page.setViewportSize({ width: 1440, height: 900 });
  112 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  113 | 
  114 |     // 1. Scroll-shrinking cinematic hero geometry
  115 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  116 |     const boxAtTop = await heroCard.boundingBox();
  117 |     expect(boxAtTop).not.toBeNull();
  118 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  119 | 
  120 |     await page.evaluate(() => window.scrollTo(0, 1000));
  121 |     await page.waitForTimeout(250);
  122 |     const boxScrolled = await heroCard.boundingBox();
  123 |     expect(boxScrolled).not.toBeNull();
  124 |     expect(boxScrolled!.width).toBeLessThan(800);
  125 | 
  126 |     // 2. Header dropdown opens and closes via Escape
  127 |     await page.evaluate(() => window.scrollTo(0, 950));
  128 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  129 |     await productsTrigger.click();
  130 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
  131 |     await page.keyboard.press("Escape");
  132 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  133 | 
  134 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  135 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  136 |     const dialog = page.getByRole("dialog");
  137 |     await expect(dialog).toBeVisible();
  138 |     await page.keyboard.press("Escape");
  139 |     await expect(dialog).toBeHidden();
  140 | 
  141 |     // 4. Solution tabs switch content (all 4 tabs)
  142 |     const fintechTab = page.getByRole("tab", { name: "Fintechs" });
  143 |     await fintechTab.scrollIntoViewIfNeeded();
  144 |     await fintechTab.click();
  145 |     await expect(page.getByRole("heading", { name: "Scale faster without banking complexity" })).toBeVisible();
  146 | 
  147 |     await page.getByRole("tab", { name: "Platforms & Marketplaces" }).click();
  148 |     await expect(page.getByRole("heading", { name: "Power seamless payouts and account flows" })).toBeVisible();
  149 | 
  150 |     await page.getByRole("tab", { name: "Global Businesses" }).click();
  151 |     await expect(page.getByRole("heading", { name: "Expand into new markets with local accounts" })).toBeVisible();
  152 | 
  153 |     // 5. Testimonial carousel switches across all 3 slides
  154 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  155 |     await expect(page.getByText("Elena Vance")).toBeVisible();
  156 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  157 |     await expect(page.getByText("David Okafor")).toBeVisible();
  158 | 
  159 |     // 6. Customer stories switcher
  160 |     await page.getByRole("tab", { name: "Show ClearLedger story" }).click();
  161 |     await expect(page.getByRole("button", { name: "Play ClearLedger customer story video" })).toBeVisible();
  162 | 
  163 |     // 7. Shared FAQ expand/collapse
  164 |     const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
  165 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  166 |     await firstFaq.click();
  167 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
  168 |     await firstFaq.click();
  169 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  170 |   });
  171 | 
  172 |   test("mobile navigation opens drawer and product submenu at 390px", async ({ page }) => {
  173 |     await page.setViewportSize({ width: 390, height: 844 });
  174 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  175 |     const menuBtn = page.getByRole("button", { name: /menu/i });
  176 |     await menuBtn.click();
```