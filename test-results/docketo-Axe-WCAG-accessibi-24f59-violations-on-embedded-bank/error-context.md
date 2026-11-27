# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /embedded-bank
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /embedded-bank

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 25

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
+     "id": "label-content-name-mismatch",
+     "impact": "serious",
+     "nodes": Array [
+       "<button type=\"button\" class=\"ProductPageView_heroBannerBtn__1mPZR\" aria-label=\"Play Bank accounts to power any product video\">",
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
        - heading "Bank accounts to power any product" [level=1] [ref=e25]
        - generic [ref=e26]:
          - paragraph [ref=e27]: Our all-purpose accounts fit wherever you need them, behind the scenes or front of house, powering simpler payments, automated reconciliation, and new features for your customers.
          - link "Book a Demo" [ref=e29] [cursor=pointer]:
            - /url: /contact
      - button "Play Bank accounts to power any product video" [ref=e30] [cursor=pointer]:
        - generic [aria-hidden]:
          - generic:
            - generic: One account, any product
            - generic: One account, any product
            - generic: One account, any product
            - generic: One account, any product
    - generic [ref=e38]:
      - heading "Not just another virtual account" [level=2] [ref=e39]
      - generic [ref=e40]:
        - article [ref=e41]:
          - generic [ref=e42]:
            - heading "Streamline backend operations" [level=3] [ref=e43]
            - paragraph [ref=e44]: Turn complex payment flows into simple ones by giving each customer a dedicated account, built for loan repayments, recurring transactions, rental tracking, and more.
        - article [ref=e45]:
          - generic [ref=e46]:
            - heading "Enhance your customer experience" [level=3] [ref=e47]
            - paragraph [ref=e48]: Real bank accounts mean real banking for your customers. Funds stay on your platform while customers open accounts, make payments, and earn interest without ever leaving your app.
        - article [ref=e49]:
          - generic [ref=e50]:
            - heading "Deposit protection" [level=3] [ref=e51]
            - paragraph [ref=e52]: Let customers rest easy, knowing their deposits are protected up to £120,000 by the FSCS.
        - article [ref=e53]:
          - generic [ref=e54]:
            - heading "Individual accounts" [level=3] [ref=e55]
            - paragraph [ref=e56]: Each account is owned by your customer, with a real sort code and unique account number.
        - article [ref=e57]:
          - generic [ref=e58]:
            - heading "Earn interest" [level=3] [ref=e59]
            - paragraph [ref=e60]: Interest-bearing accounts help you stay competitive and create more value for your customers.
    - generic [ref=e65]:
      - heading "Solutions for complex businesses" [level=2] [ref=e66]
      - generic [ref=e67]:
        - generic [ref=e68]:
          - heading "Lenders" [level=3] [ref=e69]
          - paragraph [ref=e70]: With individual accounts per borrower, lenders are streamlining loan disbursements and automating repayment collection.
        - generic [ref=e71]:
          - heading "Credit card providers" [level=3] [ref=e72]
          - paragraph [ref=e73]: With real bank accounts, customers can unlock higher credit limits by topping their cards with cash.
        - generic [ref=e74]:
          - heading "B2C platforms" [level=3] [ref=e75]
          - paragraph [ref=e76]: Give customers a full range of day-to-day banking services, from opening accounts to making payments, plus opportunities to earn interest, all from your own platform.
        - generic [ref=e77]:
          - heading "Payroll providers" [level=3] [ref=e78]
          - paragraph [ref=e79]: Complex payroll operations are easily automated with a bank account for each employer embedded directly into your workflow.
    - region "Frequently Asked Questions (FAQ)" [ref=e80]:
      - generic [ref=e84]:
        - heading "Frequently Asked Questions (FAQ)" [level=2] [ref=e85]
        - generic [ref=e86]:
          - button "What is embedded banking, and how does it work?" [ref=e88] [cursor=pointer]
          - button "Do I need my own banking license to build with Docket?" [ref=e91] [cursor=pointer]
          - button "How quickly can I integrate and go live?" [ref=e94] [cursor=pointer]
          - button "How do client money and safeguarding accounts keep funds protected?" [ref=e97] [cursor=pointer]
          - button "What kinds of businesses use Docket?" [ref=e100] [cursor=pointer]
          - button "How does Docket help with reconciliation and compliance?" [ref=e103] [cursor=pointer]
    - generic [ref=e109]:
      - article [ref=e110]:
        - generic [ref=e111]:
          - heading "Eligibility" [level=2] [ref=e112]
          - paragraph [ref=e113]: Are we a good fit? Check out our eligibility criteria.
        - link "Learn More" [ref=e115] [cursor=pointer]:
          - /url: /eligibility
      - article [ref=e116]:
        - generic [ref=e117]:
          - heading "Deposit protection" [level=2] [ref=e118]
          - paragraph [ref=e119]: Your customers' deposits are protected.
        - link "Learn More" [ref=e121] [cursor=pointer]:
          - /url: /business-bank
    - region "Contact Sales" [ref=e122]:
      - generic [ref=e126]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e127]
        - link "Contact Sales" [ref=e129] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e130]:
    - generic [ref=e133]:
      - link "Docketo home" [ref=e135] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e136]
      - generic [ref=e137]:
        - navigation "Footer" [ref=e138]:
          - generic [ref=e139]:
            - generic [ref=e140]: Product
            - list [ref=e141]:
              - listitem [ref=e142]:
                - link "Embedded bank" [ref=e143] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e144]:
                - link "Safeguarding" [ref=e145] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e146]:
                - link "Savings accounts" [ref=e147] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e148]:
                - link "Client money" [ref=e149] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e150]:
                - link "Business bank" [ref=e151] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e152]:
                - link "Verify" [ref=e153] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e154]:
            - generic [ref=e155]: Explore
            - list [ref=e156]:
              - listitem [ref=e157]:
                - link "Home" [ref=e158] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e159]:
                - link "About" [ref=e160] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e161]:
                - link "Blog" [ref=e162] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e163]:
                - link "Contact us" [ref=e164] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e165]:
                - link "Careers" [ref=e166] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e167]:
                - link "Pricing" [ref=e168] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e169]:
            - generic [ref=e170]: Policies
            - list [ref=e171]:
              - listitem [ref=e172]:
                - link "Privacy policy" [ref=e173] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e174]:
                - link "Terms & Conditions" [ref=e175] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e176]:
                - link "Cookies" [ref=e177] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e178]:
                - link "Eligibility" [ref=e179] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e180]:
            - generic [ref=e181]: Utility page
            - list [ref=e182]:
              - listitem [ref=e183]:
                - link "Style guide" [ref=e184] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e185]:
                - link "Change log" [ref=e186] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e187]:
                - link "Password" [ref=e188] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e189]:
                - link "404 not found" [ref=e190] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e191]:
                - link "Licenses" [ref=e192] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e193]:
          - paragraph [ref=e194]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e195]:
            - text: Designed by
            - link "webocean" [ref=e196] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e198]
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
      |         ^ Error: WCAG serious/critical violations on /embedded-bank
  249 |     });
  250 |   }
  251 | });
  252 | 
```