# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /style-guide
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /style-guide

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 18

- Array []
+ Array [
+   Object {
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       "<div class=\"SiteFooter_groupTitle__n_pSG\">Product</div>",
+       "<div class=\"SiteFooter_groupTitle__n_pSG\">Explore</div>",
+       "<div class=\"SiteFooter_groupTitle__n_pSG\">Policies</div>",
+     ],
+   },
+   Object {
+     "id": "link-in-text-block",
+     "impact": "serious",
+     "nodes": Array [
+       "<a href=\"https://webocean.io/\" target=\"_blank\" rel=\"noreferrer\" class=\"SiteFooter_attrLink__fBmPV\">webocean</a>",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - complementary "Style guide navigation" [ref=e24]:
        - generic [ref=e25]:
          - heading "Theme Styles" [level=2] [ref=e26]
          - separator [ref=e27]
          - navigation [ref=e28]:
            - link "Colors" [ref=e29] [cursor=pointer]:
              - /url: "#colors"
            - link "Typography" [ref=e30] [cursor=pointer]:
              - /url: "#typography"
        - generic [ref=e31]:
          - heading "Symbols" [level=2] [ref=e32]
          - separator [ref=e33]
          - navigation [ref=e34]:
            - link "Buttons" [ref=e35] [cursor=pointer]:
              - /url: "#buttons"
      - generic [ref=e36]:
        - paragraph [ref=e38]: "Note: Change the colors through the swatches panel. This will change all locations where the color is used on the website. You can learn more about global swatches on Webflow University."
        - generic [ref=e39]:
          - heading "Colors" [level=1] [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: FFFFFF
            - generic [ref=e46]: FAFAF9
            - generic [ref=e49]: CCCAC6
            - generic [ref=e52]: 33312C
            - generic [ref=e55]: "191815"
            - generic [ref=e58]: 100F0D
            - generic [ref=e61]: 7CF584/Green
            - generic [ref=e64]: Success/Form
            - generic [ref=e67]: Error/Form
        - generic [ref=e70]:
          - heading "Typography" [level=2] [ref=e72]
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]: Heading 1 - Font size 62 px / line height 72
              - generic [ref=e76]: Heading H1 - Aa
            - generic [ref=e77]:
              - generic [ref=e78]: Heading 2 - Font size 40 px / line height 48
              - generic [ref=e79]: Heading H2 - Aa
            - generic [ref=e80]:
              - generic [ref=e81]: Heading 3 - Font size 32 px / line height 40
              - generic [ref=e82]: Heading H3 - Aa Bb Cc
            - generic [ref=e83]:
              - generic [ref=e84]: Heading 4 - Font size 28 px / line height 36
              - generic [ref=e85]: Heading H4 - Aa Bb Cc
            - generic [ref=e86]:
              - generic [ref=e87]: Heading 5 - Font size 24 px / line height 32
              - generic [ref=e88]: Heading H5 - Aa Bb Cc Dd
            - generic [ref=e89]:
              - generic [ref=e90]: Heading 6 - Font size 20 px / line height 26
              - generic [ref=e91]: Heading H6 - Aa Bb Cc Dd
            - generic [ref=e92]:
              - generic [ref=e93]: CP Paragraph
              - generic [ref=e94]: Subtitle Font size 12 px / line height 20
              - paragraph [ref=e95]: Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.
            - generic [ref=e96]:
              - generic [ref=e97]: RG Paragraph
              - generic [ref=e98]: Subtitle Font size 16 px / line height 22
              - paragraph [ref=e99]: Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.
            - generic [ref=e100]:
              - generic [ref=e101]: Small Paragraph
              - generic [ref=e102]: Body Font size 14 px / line height 18
              - paragraph [ref=e103]: Lorem ipsum dolor sit amet consectetur. Lacus iaculis placerat condimentum integer. Amet odio pretium sit arcu turpis. Quam feugiat at ullamcorper fermentum arcu.
        - generic [ref=e104]:
          - heading "Button" [level=2] [ref=e106]
          - link "Button 1st" [ref=e108] [cursor=pointer]:
            - /url: "#buttons"
  - contentinfo [ref=e109]:
    - generic [ref=e112]:
      - link "Docketo home" [ref=e114] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e115]
      - generic [ref=e116]:
        - navigation "Footer" [ref=e117]:
          - generic [ref=e118]:
            - generic [ref=e119]: Product
            - list [ref=e120]:
              - listitem [ref=e121]:
                - link "Embedded bank" [ref=e122] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e123]:
                - link "Safeguarding" [ref=e124] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e125]:
                - link "Savings accounts" [ref=e126] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e127]:
                - link "Client money" [ref=e128] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e129]:
                - link "Business bank" [ref=e130] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e131]:
                - link "Verify" [ref=e132] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e133]:
            - generic [ref=e134]: Explore
            - list [ref=e135]:
              - listitem [ref=e136]:
                - link "Home" [ref=e137] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e138]:
                - link "About" [ref=e139] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e140]:
                - link "Blog" [ref=e141] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e142]:
                - link "Contact us" [ref=e143] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e144]:
                - link "Careers" [ref=e145] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e146]:
                - link "Pricing" [ref=e147] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e148]:
            - generic [ref=e149]: Policies
            - list [ref=e150]:
              - listitem [ref=e151]:
                - link "Privacy policy" [ref=e152] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e153]:
                - link "Terms & Conditions" [ref=e154] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e155]:
                - link "Cookies" [ref=e156] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e157]:
                - link "Eligibility" [ref=e158] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e159]:
            - generic [ref=e160]: Utility page
            - list [ref=e161]:
              - listitem [ref=e162]:
                - link "Style guide" [ref=e163] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e164]:
                - link "Change log" [ref=e165] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e166]:
                - link "Password" [ref=e167] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e168]:
                - link "404 not found" [ref=e169] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e170]:
                - link "Licenses" [ref=e171] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e172]:
          - paragraph [ref=e173]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e174]:
            - text: Designed by
            - link "webocean" [ref=e175] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e177]
```

# Test source

```ts
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
  207 |     await page.getByRole("button", { name: "Submit Now" }).click();
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
> 248 |       ).toEqual([]);
      |         ^ Error: WCAG serious/critical violations on /style-guide
  249 |     });
  250 |   }
  251 | });
  252 | 
```