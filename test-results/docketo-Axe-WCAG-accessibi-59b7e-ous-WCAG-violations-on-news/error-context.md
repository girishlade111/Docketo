# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /news
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /news

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
      - generic [ref=e24]:
        - heading "All Post" [level=1] [ref=e25]
        - navigation "Article categories" [ref=e26]:
          - link "All Posts" [ref=e27] [cursor=pointer]:
            - /url: /news
          - link "Product" [ref=e28] [cursor=pointer]:
            - /url: /post-categories/product
          - link "Compliance" [ref=e29] [cursor=pointer]:
            - /url: /post-categories/compliance
          - link "Company" [ref=e30] [cursor=pointer]:
            - /url: /post-categories/company
          - link "Guides" [ref=e31] [cursor=pointer]:
            - /url: /post-categories/guides
      - generic [ref=e32]:
        - link "How embedded bank accounts simplify payment reconciliation How embedded bank accounts simplify payment reconciliation January 15, 2026 Product" [ref=e33] [cursor=pointer]:
          - /url: /post/how-embedded-bank-accounts-simplify-payment-reconciliation
          - img "How embedded bank accounts simplify payment reconciliation" [ref=e35]
          - generic [ref=e36]:
            - heading "How embedded bank accounts simplify payment reconciliation" [level=3] [ref=e37]
            - generic [ref=e38]:
              - generic [ref=e39]: January 15, 2026
              - generic [aria-hidden] [ref=e40]: .
              - generic [ref=e41]: Product
        - 'link "KYC and KYB, automated: a faster path to onboarding the right customers KYC and KYB, automated: a faster path to onboarding the right customers February 26, 2026 Compliance" [ref=e42] [cursor=pointer]':
          - /url: /post/kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers
          - 'img "KYC and KYB, automated: a faster path to onboarding the right customers" [ref=e44]'
          - generic [ref=e45]:
            - 'heading "KYC and KYB, automated: a faster path to onboarding the right customers" [level=3] [ref=e46]'
            - generic [ref=e47]:
              - generic [ref=e48]: February 26, 2026
              - generic [aria-hidden] [ref=e49]: .
              - generic [ref=e50]: Compliance
        - link "Why we built business banking for founders, by founders Why we built business banking for founders, by founders February 26, 2026 Company" [ref=e51] [cursor=pointer]:
          - /url: /post/why-we-built-business-banking-for-founders-by-founders
          - img "Why we built business banking for founders, by founders" [ref=e53]
          - generic [ref=e54]:
            - heading "Why we built business banking for founders, by founders" [level=3] [ref=e55]
            - generic [ref=e56]:
              - generic [ref=e57]: February 26, 2026
              - generic [aria-hidden] [ref=e58]: .
              - generic [ref=e59]: Company
        - 'link "Shrinking the manual review queue: how automated decisions free up your team Shrinking the manual review queue: how automated decisions free up your team February 15, 2026 Product" [ref=e60] [cursor=pointer]':
          - /url: /post/shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team
          - 'img "Shrinking the manual review queue: how automated decisions free up your team" [ref=e62]'
          - generic [ref=e63]:
            - 'heading "Shrinking the manual review queue: how automated decisions free up your team" [level=3] [ref=e64]'
            - generic [ref=e65]:
              - generic [ref=e66]: February 15, 2026
              - generic [aria-hidden] [ref=e67]: .
              - generic [ref=e68]: Product
        - 'link "Giving every customer their own bank account: use cases for embedded banking Giving every customer their own bank account: use cases for embedded banking February 4, 2026 Compliance" [ref=e69] [cursor=pointer]':
          - /url: /post/giving-every-customer-their-own-bank-account-use-cases-for-embedded-banking
          - 'img "Giving every customer their own bank account: use cases for embedded banking" [ref=e71]'
          - generic [ref=e72]:
            - 'heading "Giving every customer their own bank account: use cases for embedded banking" [level=3] [ref=e73]'
            - generic [ref=e74]:
              - generic [ref=e75]: February 4, 2026
              - generic [aria-hidden] [ref=e76]: .
              - generic [ref=e77]: Compliance
        - 'link "Building on our API: a developer''s guide to going live in weeks Building on our API: a developer''s guide to going live in weeks February 24, 2026 Guides" [ref=e78] [cursor=pointer]':
          - /url: /post/building-on-our-api-a-developers-guide-to-going-live-in-weeks
          - 'img "Building on our API: a developer''s guide to going live in weeks" [ref=e80]'
          - generic [ref=e81]:
            - 'heading "Building on our API: a developer''s guide to going live in weeks" [level=3] [ref=e82]'
            - generic [ref=e83]:
              - generic [ref=e84]: February 24, 2026
              - generic [aria-hidden] [ref=e85]: .
              - generic [ref=e86]: Guides
        - 'link "From remittance to banking: how Africhange expanded with Docket From remittance to banking: how Africhange expanded with Docket January 12, 2026 Guides" [ref=e87] [cursor=pointer]':
          - /url: /post/from-remittance-to-banking-how-africhange-expanded-with-docket
          - 'img "From remittance to banking: how Africhange expanded with Docket" [ref=e89]'
          - generic [ref=e90]:
            - 'heading "From remittance to banking: how Africhange expanded with Docket" [level=3] [ref=e91]'
            - generic [ref=e92]:
              - generic [ref=e93]: January 12, 2026
              - generic [aria-hidden] [ref=e94]: .
              - generic [ref=e95]: Guides
        - link "What the new $120,000 FSCS limit means for your customers What the new $120,000 FSCS limit means for your customers February 24, 2026 Company" [ref=e96] [cursor=pointer]:
          - /url: /post/what-the-new-120-000-fscs-limit-means-for-your-customers
          - img "What the new $120,000 FSCS limit means for your customers" [ref=e98]
          - generic [ref=e99]:
            - heading "What the new $120,000 FSCS limit means for your customers" [level=3] [ref=e100]
            - generic [ref=e101]:
              - generic [ref=e102]: February 24, 2026
              - generic [aria-hidden] [ref=e103]: .
              - generic [ref=e104]: Company
        - 'link "Safeguarding vs. client money accounts: which does your business need? Safeguarding vs. client money accounts: which does your business need? March 2, 2026 Compliance" [ref=e105] [cursor=pointer]':
          - /url: /post/safeguarding-vs-client-money-accounts-which-does-your-business-need
          - 'img "Safeguarding vs. client money accounts: which does your business need?" [ref=e107]'
          - generic [ref=e108]:
            - 'heading "Safeguarding vs. client money accounts: which does your business need?" [level=3] [ref=e109]'
            - generic [ref=e110]:
              - generic [ref=e111]: March 2, 2026
              - generic [aria-hidden] [ref=e112]: .
              - generic [ref=e113]: Compliance
    - region "Contact Sales" [ref=e114]:
      - generic [ref=e118]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e119]
        - link "Contact Sales" [ref=e121] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e122]:
    - generic [ref=e125]:
      - link "Docketo home" [ref=e127] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e128]
      - generic [ref=e129]:
        - navigation "Footer" [ref=e130]:
          - generic [ref=e131]:
            - generic [ref=e132]: Product
            - list [ref=e133]:
              - listitem [ref=e134]:
                - link "Embedded bank" [ref=e135] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e136]:
                - link "Safeguarding" [ref=e137] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e138]:
                - link "Savings accounts" [ref=e139] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e140]:
                - link "Client money" [ref=e141] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e142]:
                - link "Business bank" [ref=e143] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e144]:
                - link "Verify" [ref=e145] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e146]:
            - generic [ref=e147]: Explore
            - list [ref=e148]:
              - listitem [ref=e149]:
                - link "Home" [ref=e150] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e151]:
                - link "About" [ref=e152] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e153]:
                - link "Blog" [ref=e154] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e155]:
                - link "Contact us" [ref=e156] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e157]:
                - link "Careers" [ref=e158] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e159]:
                - link "Pricing" [ref=e160] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e161]:
            - generic [ref=e162]: Policies
            - list [ref=e163]:
              - listitem [ref=e164]:
                - link "Privacy policy" [ref=e165] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e166]:
                - link "Terms & Conditions" [ref=e167] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e168]:
                - link "Cookies" [ref=e169] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e170]:
                - link "Eligibility" [ref=e171] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e172]:
            - generic [ref=e173]: Utility page
            - list [ref=e174]:
              - listitem [ref=e175]:
                - link "Style guide" [ref=e176] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e177]:
                - link "Change log" [ref=e178] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e179]:
                - link "Password" [ref=e180] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e181]:
                - link "404 not found" [ref=e182] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e183]:
                - link "Licenses" [ref=e184] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e185]:
          - paragraph [ref=e186]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e187]:
            - text: Designed by
            - link "webocean" [ref=e188] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e190]
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
      |         ^ Error: WCAG serious/critical violations on /news
  249 |     });
  250 |   }
  251 | });
  252 | 
```