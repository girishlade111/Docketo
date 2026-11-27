# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /about
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /about

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
    - generic [ref=e20]:
      - generic [ref=e23]:
        - heading "We’re the bank for companies who want to build and launch financial products." [level=1] [ref=e24]
        - generic [ref=e25]:
          - generic [ref=e26]:
            - generic [ref=e27]: 2,400+
            - generic [ref=e28]: Customers
          - generic [ref=e29]:
            - generic [ref=e30]: 70+
            - generic [ref=e31]: Countries
          - generic [ref=e32]:
            - generic [ref=e33]: 75+
            - generic [ref=e34]: bank firms using Docket
      - generic "Team photography collage" [ref=e35]:
        - img "Team member in bright office" [ref=e37]
        - img "Collaborative engineering discussion" [ref=e39]
        - img "Specialist working on laptop" [ref=e41]
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Who we are" [level=2] [ref=e53]
        - generic [ref=e54]:
          - paragraph [ref=e55]: Integrate with Docket via simple APIs to embed bank accounts, payments, and more into your products.
          - paragraph [ref=e56]: Automate and streamline key compliance processes and stay on top of your regulatory obligations with our financial crime prevention tools.
          - paragraph [ref=e57]: Our financial crime prevention products take the friction out of compliance, helping you meet regulatory obligations with ease.
          - paragraph [ref=e58]: Meet your regulatory obligations faster, with financial crime prevention tools that automate the heavy lifting. Streamline compliance and stay ahead of financial crime, all in one place.
          - paragraph [ref=e59]: (Short) Automate compliance. Prevent financial crime. Meet your obligations.
      - generic [ref=e60]:
        - img "Partner logo" [ref=e64]
        - img "Partner logo" [ref=e68]
        - img "Partner logo" [ref=e72]
        - img "Partner logo" [ref=e76]
        - img "Partner logo" [ref=e80]
        - img "Partner logo" [ref=e84]
      - blockquote [ref=e85]:
        - paragraph [ref=e86]: "\"We embedded bank accounts straight into our app and our customers never have to leave. Reconciliation that used to eat our week now runs itself.\""
        - generic [ref=e87]: "- David Chen, Founder & CEO, Northwind"
    - region "Leadership" [ref=e88]:
      - generic [ref=e92]:
        - heading "Leadership" [level=2] [ref=e93]
        - generic [ref=e94]:
          - article [ref=e95]:
            - img "David Jarvis" [ref=e97]
            - generic [ref=e98]:
              - heading "David Jarvis" [level=3] [ref=e99]
              - paragraph [ref=e100]: Founder, Chief Executive Officer
          - article [ref=e101]:
            - img "Allen Rohner" [ref=e103]
            - generic [ref=e104]:
              - heading "Allen Rohner" [level=3] [ref=e105]
              - paragraph [ref=e106]: Founder, Chief Technology Officer
          - article [ref=e107]:
            - img "Phoebe Wallis" [ref=e109]
            - generic [ref=e110]:
              - heading "Phoebe Wallis" [level=3] [ref=e111]
              - paragraph [ref=e112]: Chief Revenue Officer
          - article [ref=e113]:
            - img "Ed Carter" [ref=e115]
            - generic [ref=e116]:
              - heading "Ed Carter" [level=3] [ref=e117]
              - paragraph [ref=e118]: Chief Operating Officer
          - article [ref=e119]:
            - img "Jenna Baker" [ref=e121]
            - generic [ref=e122]:
              - heading "Jenna Baker" [level=3] [ref=e123]
              - paragraph [ref=e124]: Chief People Officer
          - article [ref=e125]:
            - img "Bob VanBreda" [ref=e127]
            - generic [ref=e128]:
              - heading "Bob VanBreda" [level=3] [ref=e129]
              - paragraph [ref=e130]: Interim Chief Financial Officer
    - generic [ref=e133]:
      - generic [ref=e134]:
        - heading "New Insights" [level=2] [ref=e135]
        - generic [ref=e136]:
          - link "How embedded bank accounts simplify payment reconciliation How embedded bank accounts simplify payment reconciliation January 15, 2026 Product" [ref=e137] [cursor=pointer]:
            - /url: /post/how-embedded-bank-accounts-simplify-payment-reconciliation
            - img "How embedded bank accounts simplify payment reconciliation" [ref=e139]
            - generic [ref=e140]:
              - heading "How embedded bank accounts simplify payment reconciliation" [level=3] [ref=e141]
              - generic [ref=e142]:
                - generic [ref=e143]: January 15, 2026
                - generic [aria-hidden] [ref=e144]: .
                - generic [ref=e145]: Product
          - 'link "KYC and KYB, automated: a faster path to onboarding the right customers KYC and KYB, automated: a faster path to onboarding the right customers February 26, 2026 Compliance" [ref=e146] [cursor=pointer]':
            - /url: /post/kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers
            - 'img "KYC and KYB, automated: a faster path to onboarding the right customers" [ref=e148]'
            - generic [ref=e149]:
              - 'heading "KYC and KYB, automated: a faster path to onboarding the right customers" [level=3] [ref=e150]'
              - generic [ref=e151]:
                - generic [ref=e152]: February 26, 2026
                - generic [aria-hidden] [ref=e153]: .
                - generic [ref=e154]: Compliance
          - link "Why we built business banking for founders, by founders Why we built business banking for founders, by founders February 26, 2026 Company" [ref=e155] [cursor=pointer]:
            - /url: /post/why-we-built-business-banking-for-founders-by-founders
            - img "Why we built business banking for founders, by founders" [ref=e157]
            - generic [ref=e158]:
              - heading "Why we built business banking for founders, by founders" [level=3] [ref=e159]
              - generic [ref=e160]:
                - generic [ref=e161]: February 26, 2026
                - generic [aria-hidden] [ref=e162]: .
                - generic [ref=e163]: Company
      - generic [ref=e164]:
        - generic [ref=e165]:
          - heading "Join Our Team. Help Shape The Future Of Banking Services." [level=2] [ref=e166]
          - link "Explore Open Roles" [ref=e167] [cursor=pointer]:
            - /url: /eligibility
        - generic [ref=e168]:
          - img "Modern wooden arch office interior" [ref=e170]
          - img "Team working in office lounge" [ref=e172]
  - contentinfo [ref=e173]:
    - generic [ref=e176]:
      - link "Docketo home" [ref=e178] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e179]
      - generic [ref=e180]:
        - navigation "Footer" [ref=e181]:
          - generic [ref=e182]:
            - generic [ref=e183]: Product
            - list [ref=e184]:
              - listitem [ref=e185]:
                - link "Embedded bank" [ref=e186] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e187]:
                - link "Safeguarding" [ref=e188] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e189]:
                - link "Savings accounts" [ref=e190] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e191]:
                - link "Client money" [ref=e192] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e193]:
                - link "Business bank" [ref=e194] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e195]:
                - link "Verify" [ref=e196] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e197]:
            - generic [ref=e198]: Explore
            - list [ref=e199]:
              - listitem [ref=e200]:
                - link "Home" [ref=e201] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e202]:
                - link "About" [ref=e203] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e204]:
                - link "Blog" [ref=e205] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e206]:
                - link "Contact us" [ref=e207] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e208]:
                - link "Careers" [ref=e209] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e210]:
                - link "Pricing" [ref=e211] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e212]:
            - generic [ref=e213]: Policies
            - list [ref=e214]:
              - listitem [ref=e215]:
                - link "Privacy policy" [ref=e216] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e217]:
                - link "Terms & Conditions" [ref=e218] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e219]:
                - link "Cookies" [ref=e220] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e221]:
                - link "Eligibility" [ref=e222] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e223]:
            - generic [ref=e224]: Utility page
            - list [ref=e225]:
              - listitem [ref=e226]:
                - link "Style guide" [ref=e227] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e228]:
                - link "Change log" [ref=e229] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e230]:
                - link "Password" [ref=e231] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e232]:
                - link "404 not found" [ref=e233] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e234]:
                - link "Licenses" [ref=e235] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e236]:
          - paragraph [ref=e237]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e238]:
            - text: Designed by
            - link "webocean" [ref=e239] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e241]
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
      |         ^ Error: WCAG serious/critical violations on /about
  249 |     });
  250 |   }
  251 | });
  252 | 
```