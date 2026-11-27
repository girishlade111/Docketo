# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Interactive workflows and visual transitions >> protected 401 page displays static template demonstration notice on submit
- Location: tests\e2e\docketo.spec.ts:204:3

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: locator.click: Test timeout of 45000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Submit Now' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Docketo home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e6]
      - navigation "Primary" [ref=e7]:
        - button "Products" [ref=e9] [cursor=pointer]
        - link "About" [ref=e11] [cursor=pointer]:
          - /url: /about
        - link "Price" [ref=e12] [cursor=pointer]:
          - /url: /pricing
        - link "Blog" [ref=e13] [cursor=pointer]:
          - /url: /news
        - button "pages" [ref=e15] [cursor=pointer]
      - link "Book a Demo" [ref=e18] [cursor=pointer]:
        - /url: /contact
  - main [ref=e19]:
    - generic [ref=e23]:
      - img "Protected page illustration" [ref=e24]
      - heading "Protected Page" [level=1] [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Password
        - textbox "Password" [active] [ref=e28]:
          - /placeholder: Enter your password
          - text: test-pass
        - button "Submit" [ref=e29] [cursor=pointer]
  - contentinfo [ref=e30]:
    - generic [ref=e33]:
      - link "Docketo home" [ref=e35] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e36]
      - generic [ref=e37]:
        - navigation "Footer" [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: Product
            - list [ref=e41]:
              - listitem [ref=e42]:
                - link "Embedded bank" [ref=e43] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e44]:
                - link "Safeguarding" [ref=e45] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e46]:
                - link "Savings accounts" [ref=e47] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e48]:
                - link "Client money" [ref=e49] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e50]:
                - link "Business bank" [ref=e51] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e52]:
                - link "Verify" [ref=e53] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e54]:
            - generic [ref=e55]: Explore
            - list [ref=e56]:
              - listitem [ref=e57]:
                - link "Home" [ref=e58] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e59]:
                - link "About" [ref=e60] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e61]:
                - link "Blog" [ref=e62] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e63]:
                - link "Contact us" [ref=e64] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e65]:
                - link "Careers" [ref=e66] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e67]:
                - link "Pricing" [ref=e68] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e69]:
            - generic [ref=e70]: Policies
            - list [ref=e71]:
              - listitem [ref=e72]:
                - link "Privacy policy" [ref=e73] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e74]:
                - link "Terms & Conditions" [ref=e75] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e76]:
                - link "Cookies" [ref=e77] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e78]:
                - link "Eligibility" [ref=e79] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e80]:
            - generic [ref=e81]: Utility page
            - list [ref=e82]:
              - listitem [ref=e83]:
                - link "Style guide" [ref=e84] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e85]:
                - link "Change log" [ref=e86] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e87]:
                - link "Password" [ref=e88] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e89]:
                - link "404 not found" [ref=e90] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e91]:
                - link "Licenses" [ref=e92] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e93]:
          - paragraph [ref=e94]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e95]:
            - text: Designed by
            - link "webocean" [ref=e96] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e98]
```

# Test source

```ts
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
  149 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  150 |     await expect(page.getByText("Elena Vance")).toBeVisible();
  151 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  152 |     await expect(page.getByText("David Okafor")).toBeVisible();
  153 | 
  154 |     // 6. Customer stories switcher
  155 |     await page.getByRole("tab", { name: "Show ClearLedger story" }).click();
  156 |     await expect(page.getByRole("button", { name: "Play ClearLedger customer story video" })).toBeVisible();
  157 | 
  158 |     // 7. Shared FAQ expand/collapse
  159 |     const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
  160 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  161 |     await firstFaq.click();
  162 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
  163 |     await firstFaq.click();
  164 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  165 |   });
  166 | 
  167 |   test("mobile navigation opens drawer and product submenu at 390px", async ({ page }) => {
  168 |     await page.setViewportSize({ width: 390, height: 844 });
  169 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  170 |     const menuBtn = page.getByRole("button", { name: /menu/i });
  171 |     await menuBtn.click();
  172 |     await expect(page.getByRole("link", { name: "Book a Demo" }).last()).toBeVisible();
  173 |     await page.keyboard.press("Escape");
  174 |   });
  175 | 
  176 |   test("news category filters match exact Webflow post counts [2, 3, 2, 2]", async ({ page }) => {
  177 |     const expectations: Array<[string, number]> = [
  178 |       ["/news", 9],
  179 |       ["/post-categories/product", 2],
  180 |       ["/post-categories/compliance", 3],
  181 |       ["/post-categories/company", 2],
  182 |       ["/post-categories/guides", 2],
  183 |     ];
  184 |     for (const [route, count] of expectations) {
  185 |       await page.goto(route, { waitUntil: "domcontentloaded" });
  186 |       await expect(page.locator("article")).toHaveCount(count);
  187 |     }
  188 |   });
  189 | 
  190 |   test("contact form validates empty submit and records valid demonstration submission", async ({ page }) => {
  191 |     await page.goto("/contact", { waitUntil: "domcontentloaded" });
  192 |     await page.getByRole("button", { name: "Submit" }).click();
  193 |     await expect(page.getByText(/First name is required/i)).toBeVisible();
  194 | 
  195 |     await page.getByLabel("First Name").fill("Alex");
  196 |     await page.getByLabel("Last Name").fill("Mercer");
  197 |     await page.getByLabel("Email").fill("alex@fintech-example.test");
  198 |     await page.getByLabel("Company name").fill("Meridian Clearing");
  199 |     await page.getByLabel("Your Message").fill("Interested in embedded safeguarding APIs.");
  200 |     await page.getByRole("button", { name: "Submit" }).click();
  201 |     await expect(page.getByText(/demonstration request has been validated locally/i)).toBeVisible();
  202 |   });
  203 | 
  204 |   test("protected 401 page displays static template demonstration notice on submit", async ({ page }) => {
  205 |     await page.goto("/401", { waitUntil: "domcontentloaded" });
  206 |     await page.getByPlaceholder("Enter your password").fill("test-pass");
> 207 |     await page.getByRole("button", { name: "Submit Now" }).click();
      |                                                            ^ Error: locator.click: Test timeout of 45000ms exceeded.
  208 |     await expect(page.getByText(/static template demonstration/i)).toBeVisible();
  209 |   });
  210 | });
  211 | 
  212 | test.describe("Axe WCAG accessibility audits across key routes", () => {
  213 |   const a11yRoutes = [
  214 |     "/",
  215 |     "/about",
  216 |     "/pricing",
  217 |     "/contact",
  218 |     "/careers",
  219 |     "/embedded-bank",
  220 |     "/news",
  221 |     "/post/how-embedded-bank-accounts-simplify-payment-reconciliation",
  222 |     "/privacy",
  223 |     "/style-guide",
  224 |     "/404",
  225 |   ];
  226 | 
  227 |   for (const route of a11yRoutes) {
  228 |     test(`zero critical or serious WCAG violations on ${route}`, async ({ page }) => {
  229 |       await page.setViewportSize({ width: 1440, height: 900 });
  230 |       await page.goto(route, { waitUntil: "networkidle" });
  231 |       await page.evaluate(() => document.fonts.ready);
  232 | 
  233 |       const results = await new AxeBuilder({ page })
  234 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  235 |         .analyze();
  236 | 
  237 |       const seriousOrCritical = results.violations.filter(
  238 |         (v) => v.impact === "critical" || v.impact === "serious"
  239 |       );
  240 | 
  241 |       expect(
  242 |         seriousOrCritical.map((v) => ({
  243 |           id: v.id,
  244 |           impact: v.impact,
  245 |           nodes: v.nodes.slice(0, 3).map((n) => n.html),
  246 |         })),
  247 |         `WCAG serious/critical violations on ${route}`
  248 |       ).toEqual([]);
  249 |     });
  250 |   }
  251 | });
  252 | 
```