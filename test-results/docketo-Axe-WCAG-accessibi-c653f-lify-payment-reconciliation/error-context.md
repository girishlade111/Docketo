# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /post/how-embedded-bank-accounts-simplify-payment-reconciliation
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /post/how-embedded-bank-accounts-simplify-payment-reconciliation

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
    - article [ref=e20]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]: Product
          - heading "How embedded bank accounts simplify payment reconciliation" [level=1] [ref=e26]
          - paragraph [ref=e27]: Reconciliation is one of those problems that stays invisible until it isn't. When you're processing a handful of payments a day, matching money in to money owed is a manageable chore.
        - separator [ref=e28]
        - generic [ref=e29]:
          - paragraph [ref=e31]: Payment reconciliation can become complicated when a business handles transactions across multiple accounts, payment providers, and internal systems. Embedded bank accounts offer a more structured way to connect incoming and outgoing payments with the customers and transactions they belong to.
          - generic [ref=e32]:
            - heading "The challenge of traditional reconciliation" [level=2] [ref=e33]
            - paragraph [ref=e34]: Many businesses still rely on spreadsheets, exported bank statements, and manual checks to match payments. As transaction volumes increase, these processes become slower and more prone to errors. Finance teams spend valuable time investigating unmatched payments instead of focusing on reporting and business growth.
          - generic [ref=e35]:
            - heading "How embedded accounts improve visibility" [level=2] [ref=e36]
            - paragraph [ref=e37]: Dedicated bank accounts can help businesses associate transactions with specific customers, projects, or payment flows. When account data is connected to internal systems, teams can identify where funds originated and which transaction they relate to more efficiently.
          - generic [ref=e38]:
            - heading "Automating transaction matching" [level=2] [ref=e39]
            - paragraph [ref=e40]: With a suitable banking API integration, transaction data can flow directly into a company's operational systems. Businesses can use account identifiers, transaction references, and payment amounts to automate matching rules and flag exceptions that require human review.
          - generic [ref=e41]:
            - heading "Reducing errors and operational workload" [level=2] [ref=e42]
            - paragraph [ref=e43]: A more connected reconciliation process reduces repetitive data entry and makes discrepancies easier to investigate. Teams can spend less time gathering information from different sources and more time resolving the exceptions that genuinely need attention.
          - generic [ref=e44]:
            - heading "Getting started with a better workflow" [level=2] [ref=e45]
            - paragraph [ref=e46]: Start by mapping your current payment process and identifying where manual matching creates delays. Then evaluate how dedicated accounts, transaction-level data, and API integrations could improve visibility. A phased implementation allows teams to test the workflow before expanding it across the business.
    - region "More Articles" [ref=e47]:
      - generic [ref=e51]:
        - heading "More Articles" [level=2] [ref=e52]
        - generic [ref=e53]:
          - 'link "KYC and KYB, automated: a faster path to onboarding the right customers KYC and KYB, automated: a faster path to onboarding the right customers February 26, 2026 Compliance" [ref=e54] [cursor=pointer]':
            - /url: /post/kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers
            - 'img "KYC and KYB, automated: a faster path to onboarding the right customers" [ref=e56]'
            - generic [ref=e57]:
              - 'heading "KYC and KYB, automated: a faster path to onboarding the right customers" [level=3] [ref=e58]'
              - generic [ref=e59]:
                - generic [ref=e60]: February 26, 2026
                - generic [aria-hidden] [ref=e61]: .
                - generic [ref=e62]: Compliance
          - link "Why we built business banking for founders, by founders Why we built business banking for founders, by founders February 26, 2026 Company" [ref=e63] [cursor=pointer]:
            - /url: /post/why-we-built-business-banking-for-founders-by-founders
            - img "Why we built business banking for founders, by founders" [ref=e65]
            - generic [ref=e66]:
              - heading "Why we built business banking for founders, by founders" [level=3] [ref=e67]
              - generic [ref=e68]:
                - generic [ref=e69]: February 26, 2026
                - generic [aria-hidden] [ref=e70]: .
                - generic [ref=e71]: Company
          - 'link "Shrinking the manual review queue: how automated decisions free up your team Shrinking the manual review queue: how automated decisions free up your team February 15, 2026 Product" [ref=e72] [cursor=pointer]':
            - /url: /post/shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team
            - 'img "Shrinking the manual review queue: how automated decisions free up your team" [ref=e74]'
            - generic [ref=e75]:
              - 'heading "Shrinking the manual review queue: how automated decisions free up your team" [level=3] [ref=e76]'
              - generic [ref=e77]:
                - generic [ref=e78]: February 15, 2026
                - generic [aria-hidden] [ref=e79]: .
                - generic [ref=e80]: Product
    - region "Contact Sales" [ref=e81]:
      - generic [ref=e85]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e86]
        - link "Contact Sales" [ref=e88] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e89]:
    - generic [ref=e92]:
      - link "Docketo home" [ref=e94] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e95]
      - generic [ref=e96]:
        - navigation "Footer" [ref=e97]:
          - generic [ref=e98]:
            - generic [ref=e99]: Product
            - list [ref=e100]:
              - listitem [ref=e101]:
                - link "Embedded bank" [ref=e102] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e103]:
                - link "Safeguarding" [ref=e104] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e105]:
                - link "Savings accounts" [ref=e106] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e107]:
                - link "Client money" [ref=e108] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e109]:
                - link "Business bank" [ref=e110] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e111]:
                - link "Verify" [ref=e112] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e113]:
            - generic [ref=e114]: Explore
            - list [ref=e115]:
              - listitem [ref=e116]:
                - link "Home" [ref=e117] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e118]:
                - link "About" [ref=e119] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e120]:
                - link "Blog" [ref=e121] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e122]:
                - link "Contact us" [ref=e123] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e124]:
                - link "Careers" [ref=e125] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e126]:
                - link "Pricing" [ref=e127] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e128]:
            - generic [ref=e129]: Policies
            - list [ref=e130]:
              - listitem [ref=e131]:
                - link "Privacy policy" [ref=e132] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e133]:
                - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e135]:
                - link "Cookies" [ref=e136] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e137]:
                - link "Eligibility" [ref=e138] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e139]:
            - generic [ref=e140]: Utility page
            - list [ref=e141]:
              - listitem [ref=e142]:
                - link "Style guide" [ref=e143] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e144]:
                - link "Change log" [ref=e145] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e146]:
                - link "Password" [ref=e147] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e148]:
                - link "404 not found" [ref=e149] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e150]:
                - link "Licenses" [ref=e151] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e152]:
          - paragraph [ref=e153]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e154]:
            - text: Designed by
            - link "webocean" [ref=e155] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e157]
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
      |         ^ Error: WCAG serious/critical violations on /post/how-embedded-bank-accounts-simplify-payment-reconciliation
  249 |     });
  250 |   }
  251 | });
  252 | 
```