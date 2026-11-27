# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /pricing
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /pricing

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
    - generic [ref=e24]:
      - generic [ref=e25]:
        - heading "Simple, transparent pricing that scales with you." [level=1] [ref=e26]
        - paragraph [ref=e27]: No hidden fees. No surprises. Just the banking infrastructure you need to build.
      - generic [ref=e28]:
        - article [ref=e29]:
          - generic [ref=e30]:
            - heading "Starter" [level=2] [ref=e31]
            - paragraph [ref=e32]: For early-stage teams testing and building.
          - generic [ref=e33]: £0 / month
          - generic [ref=e35]:
            - generic [ref=e36]:
              - generic [ref=e37]: "What’s included:"
              - list [ref=e38]:
                - listitem [ref=e39]: 1 operational bank account
                - listitem [ref=e40]: API access with full documentation
                - listitem [ref=e41]: Up to 100 customer accounts
                - listitem [ref=e42]: Standard KYC & KYB checks
                - listitem [ref=e43]: Email support
                - listitem [ref=e44]: FSCS-protected deposits up to £120,000
            - link "Book a Demo" [ref=e45] [cursor=pointer]:
              - /url: /contact
        - article [ref=e46]:
          - generic [ref=e47]:
            - heading "Growth" [level=2] [ref=e48]
            - paragraph [ref=e49]: For scaling fintechs ready to go live.
          - generic [ref=e50]: £499 / month
          - generic [ref=e52]:
            - generic [ref=e53]:
              - generic [ref=e54]: "What’s included:"
              - list [ref=e55]:
                - listitem [ref=e56]: Unlimited customer accounts
                - listitem [ref=e57]: Embedded bank accounts & payments
                - listitem [ref=e58]: Automated reconciliation
                - listitem [ref=e59]: Interest-bearing accounts
                - listitem [ref=e60]: Automated KYC & KYB with risk screening
                - listitem [ref=e61]: Priority support
            - link "Book a Demo" [ref=e62] [cursor=pointer]:
              - /url: /contact
        - article [ref=e63]:
          - generic [ref=e64]:
            - heading "Enterprise" [level=2] [ref=e65]
            - paragraph [ref=e66]: For established businesses with complex needs.
          - generic [ref=e67]: Custom pricing
          - generic [ref=e69]:
            - generic [ref=e70]:
              - generic [ref=e71]: "What’s included:"
              - list [ref=e72]:
                - listitem [ref=e73]: Safeguarding & client money accounts
                - listitem [ref=e74]: Structured lending & overdrafts
                - listitem [ref=e75]: Dedicated account manager
                - listitem [ref=e76]: Custom SLAs
                - listitem [ref=e77]: Advanced compliance & reporting tools
                - listitem [ref=e78]: White-glove onboarding
            - link "Contact US" [ref=e79] [cursor=pointer]:
              - /url: /contact
    - region "Customer testimonials" [ref=e80]:
      - generic [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]:
            - blockquote [ref=e87]:
              - heading "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”" [level=2] [ref=e88]
            - generic [ref=e89]:
              - generic [ref=e90]: Sarah Mitchell
              - generic [ref=e91]: Founder & CEO, Loop Payments
          - img "Sarah Mitchell, Founder & CEO, Loop Payments" [ref=e93]
        - generic [ref=e94]:
          - tablist "Testimonial slides" [ref=e95]:
            - 'tab "Show testimonial 1: Sarah Mitchell" [selected] [ref=e96] [cursor=pointer]'
            - 'tab "Show testimonial 2: Priya Anand" [ref=e97] [cursor=pointer]'
            - 'tab "Show testimonial 3: David Chen" [ref=e98] [cursor=pointer]'
          - generic [ref=e99]:
            - button "Previous testimonial" [ref=e100] [cursor=pointer]
            - button "Next testimonial" [ref=e101] [cursor=pointer]
    - region "Frequently Asked Questions (FAQ)" [ref=e102]:
      - generic [ref=e106]:
        - heading "Frequently Asked Questions (FAQ)" [level=2] [ref=e107]
        - generic [ref=e108]:
          - button "What is embedded banking, and how does it work?" [ref=e110] [cursor=pointer]
          - button "Do I need my own banking license to build with Docket?" [ref=e113] [cursor=pointer]
          - button "How quickly can I integrate and go live?" [ref=e116] [cursor=pointer]
          - button "How do client money and safeguarding accounts keep funds protected?" [ref=e119] [cursor=pointer]
          - button "What kinds of businesses use Docket?" [ref=e122] [cursor=pointer]
          - button "How does Docket help with reconciliation and compliance?" [ref=e125] [cursor=pointer]
  - contentinfo [ref=e127]:
    - generic [ref=e130]:
      - link "Docketo home" [ref=e132] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e133]
      - generic [ref=e134]:
        - navigation "Footer" [ref=e135]:
          - generic [ref=e136]:
            - generic [ref=e137]: Product
            - list [ref=e138]:
              - listitem [ref=e139]:
                - link "Embedded bank" [ref=e140] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e141]:
                - link "Safeguarding" [ref=e142] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e143]:
                - link "Savings accounts" [ref=e144] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e145]:
                - link "Client money" [ref=e146] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e147]:
                - link "Business bank" [ref=e148] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e149]:
                - link "Verify" [ref=e150] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e151]:
            - generic [ref=e152]: Explore
            - list [ref=e153]:
              - listitem [ref=e154]:
                - link "Home" [ref=e155] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e156]:
                - link "About" [ref=e157] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e158]:
                - link "Blog" [ref=e159] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e160]:
                - link "Contact us" [ref=e161] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e162]:
                - link "Careers" [ref=e163] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e164]:
                - link "Pricing" [ref=e165] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e166]:
            - generic [ref=e167]: Policies
            - list [ref=e168]:
              - listitem [ref=e169]:
                - link "Privacy policy" [ref=e170] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e171]:
                - link "Terms & Conditions" [ref=e172] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e173]:
                - link "Cookies" [ref=e174] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e175]:
                - link "Eligibility" [ref=e176] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e177]:
            - generic [ref=e178]: Utility page
            - list [ref=e179]:
              - listitem [ref=e180]:
                - link "Style guide" [ref=e181] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e182]:
                - link "Change log" [ref=e183] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e184]:
                - link "Password" [ref=e185] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e186]:
                - link "404 not found" [ref=e187] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e188]:
                - link "Licenses" [ref=e189] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e190]:
          - paragraph [ref=e191]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e192]:
            - text: Designed by
            - link "webocean" [ref=e193] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e195]
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
      |         ^ Error: WCAG serious/critical violations on /pricing
  249 |     });
  250 |   }
  251 | });
  252 | 
```