# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /

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
  - main [ref=e3]:
    - region "Docketo Hero" [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e8]:
          - link "Docketo home" [ref=e9] [cursor=pointer]:
            - /url: /
            - img "Docketo" [ref=e10]
          - navigation "Primary" [ref=e11]:
            - button "Products" [ref=e13] [cursor=pointer]
            - link "About" [ref=e15] [cursor=pointer]:
              - /url: /about
            - link "Price" [ref=e16] [cursor=pointer]:
              - /url: /pricing
            - link "Blog" [ref=e17] [cursor=pointer]:
              - /url: /news
            - button "pages" [ref=e19] [cursor=pointer]
          - link "Book a Demo" [ref=e22] [cursor=pointer]:
            - /url: /contact
        - heading "Banking for what you're building" [level=1] [ref=e25]
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]:
              - img "Docketo mark" [ref=e30]
              - generic [ref=e32]: Docketo
            - paragraph [ref=e33]: Banking for what you're building
            - generic [ref=e34]:
              - button "Watch the video" [ref=e35] [cursor=pointer]
              - link "Try for Free" [ref=e36] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e37]:
            - heading "Ready to see how it works?" [level=2] [ref=e38]
            - button "Play Demo" [ref=e39] [cursor=pointer]
        - generic "Partner logos" [ref=e42]:
          - generic [ref=e44]:
            - img "Partner Logo 1" [ref=e46]
            - img "Partner Logo 2" [ref=e48]
            - img "Partner Logo 3" [ref=e50]
            - img "Partner Logo 4" [ref=e52]
            - img "Partner Logo 5" [ref=e54]
            - img "Partner Logo 6" [ref=e56]
            - img "Partner Logo 7" [ref=e58]
            - img "Partner Logo 8" [ref=e60]
    - region "Banking infrastructure stack" [ref=e70]:
      - generic [ref=e74]:
        - article [ref=e75]:
          - generic [ref=e76]: YOUR APP
          - generic [ref=e80]:
            - generic [ref=e81]:
              - heading "Differentiate" [level=2] [ref=e82]
              - paragraph [ref=e83]: Banking built into your app. Customers built into your business.
            - img "Differentiate architecture diagram" [ref=e85]
        - article [ref=e86]:
          - generic [ref=e87]: YOUR TECH
          - generic [ref=e91]:
            - generic [ref=e92]:
              - heading "Integrate" [level=2] [ref=e93]
              - paragraph [ref=e94]: Build your tech on top of our platform with a simple API.
            - img "Integrate architecture diagram" [ref=e96]
        - article [ref=e97]:
          - generic [ref=e98]: OUR PLATFORM
          - generic [ref=e102]:
            - generic [ref=e103]:
              - heading "Power" [level=2] [ref=e104]
              - paragraph [ref=e105]: Power your offering with best-in-class banking infrastructure.
            - img "Power architecture diagram" [ref=e107]
        - article [ref=e108]:
          - generic [ref=e109]: OUR BANK LICENSE
          - generic [ref=e113]:
            - generic [ref=e114]:
              - heading "Secure" [level=2] [ref=e115]
              - paragraph [ref=e116]: Protect your customer's money with our regulatory cover.
            - img "Secure architecture diagram" [ref=e118]
    - region "Designed to help you build" [ref=e119]:
      - generic [ref=e123]:
        - heading "Designed to help you build" [level=2] [ref=e124]
        - generic [ref=e125]:
          - tablist "Fintech solutions" [ref=e126]:
            - tab "Payment platforms" [selected] [ref=e127] [cursor=pointer]
            - tab "Wealth and savings apps" [ref=e128] [cursor=pointer]
            - tab "Lending" [ref=e129] [cursor=pointer]
            - tab "Proptech solutions" [ref=e130] [cursor=pointer]
          - tabpanel "Payment platforms" [ref=e131]:
            - generic [ref=e132]:
              - heading "Handle repayments, reporting, and compliance in one place." [level=3] [ref=e133]
              - list [ref=e134]:
                - listitem [ref=e135]:
                  - generic [ref=e136]: Earn interest or commission
                - listitem [ref=e137]:
                  - generic [ref=e138]: Open new accounts instantly
                - listitem [ref=e139]:
                  - generic [ref=e140]: Own your customer experience
            - img "Payment platforms banking interface illustration" [ref=e142]
    - region "Our products" [ref=e143]:
      - generic [ref=e147]:
        - heading "Our products" [level=2] [ref=e148]
        - generic [ref=e149]:
          - link [ref=e150] [cursor=pointer]:
            - /url: /embedded-bank
            - generic [ref=e152]:
              - heading "Embedded bank accounts" [level=3] [ref=e153]
              - paragraph [ref=e154]: Bank accounts to power any product
          - link [ref=e155] [cursor=pointer]:
            - /url: /safeguarding
            - generic [ref=e157]:
              - heading "Safeguarding accounts" [level=3] [ref=e158]
              - paragraph [ref=e159]: Ringfenced accounts for EMIs and PIs
          - link [ref=e160] [cursor=pointer]:
            - /url: /business-bank
            - generic [ref=e162]:
              - heading "Business bank accounts" [level=3] [ref=e163]
              - paragraph [ref=e164]: Your own operational account, access via API or our app
          - link [ref=e165] [cursor=pointer]:
            - /url: /savings-accounts
            - generic [ref=e167]:
              - heading "Savings accounts" [level=3] [ref=e168]
              - paragraph [ref=e169]: Interest-bearing accounts for your customers
          - link [ref=e170] [cursor=pointer]:
            - /url: /client-money
            - generic [ref=e172]:
              - heading "Client money accounts" [level=3] [ref=e173]
              - paragraph [ref=e174]: CASS and CMP compliant accounts
          - link [ref=e175] [cursor=pointer]:
            - /url: /verify
            - generic [ref=e177]:
              - heading "Verify" [level=3] [ref=e178]
              - paragraph [ref=e179]: Automated customer onboarding and KYC
    - region "Customer testimonials" [ref=e180]:
      - generic [ref=e184]:
        - generic [ref=e185]:
          - generic [ref=e186]:
            - blockquote [ref=e187]:
              - heading "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”" [level=2] [ref=e188]
            - generic [ref=e189]:
              - generic [ref=e190]: Sarah Mitchell
              - generic [ref=e191]: Founder & CEO, Loop Payments
          - img "Sarah Mitchell, Founder & CEO, Loop Payments" [ref=e193]
        - generic [ref=e194]:
          - tablist "Testimonial slides" [ref=e195]:
            - 'tab "Show testimonial 1: Sarah Mitchell" [selected] [ref=e196] [cursor=pointer]'
            - 'tab "Show testimonial 2: Priya Anand" [ref=e197] [cursor=pointer]'
            - 'tab "Show testimonial 3: David Chen" [ref=e198] [cursor=pointer]'
          - generic [ref=e199]:
            - button "Previous testimonial" [ref=e200] [cursor=pointer]
            - button "Next testimonial" [ref=e201] [cursor=pointer]
    - region "Start coding today" [ref=e202]:
      - generic [ref=e206]:
        - generic [ref=e207]:
          - heading "Start coding today" [level=2] [ref=e208]
          - list [ref=e209]:
            - listitem [ref=e210]:
              - generic [ref=e211]:
                - heading "Purpose-built API" [level=3] [ref=e212]
                - paragraph [ref=e213]: Using clean JSON over REST
            - listitem [ref=e214]:
              - generic [ref=e215]:
                - heading "Clear documentation" [level=3] [ref=e216]
                - paragraph [ref=e217]: Comprehensive API reference and guides
            - listitem [ref=e218]:
              - generic [ref=e219]:
                - heading "Immutable architecture" [level=3] [ref=e220]
                - paragraph [ref=e221]: Core banking system based on a durable event log
            - listitem [ref=e222]:
              - generic [ref=e223]:
                - heading "Cloud native" [level=3] [ref=e224]
                - paragraph [ref=e225]: Built on scalable, resilient infrastructure
            - listitem [ref=e226]:
              - generic [ref=e227]:
                - heading "Free sandbox" [level=3] [ref=e228]
                - paragraph [ref=e229]: Start testing right away, no fees, no sales pitch, no NDAs
        - img "Code snippet showing an API request to create a payee with a POST request and JSON payload" [ref=e231]
    - region "Customer stories" [ref=e232]:
      - generic [ref=e234]:
        - generic [ref=e235]:
          - heading [level=2] [ref=e239]: Africhange broadens its offering with UK bank accounts, powered by Docketo
          - generic [ref=e241]:
            - img "Prosper" [ref=e242]
            - generic [ref=e244]:
              - heading "How Prosper removed payment complexity with Docket embedded bank accounts" [level=2] [ref=e245]
              - button "Play Prosper customer story video" [ref=e246] [cursor=pointer]
          - heading [level=2] [ref=e250]: How Docket client money accounts helped RettsPay meet compliance
        - tablist "Select customer story" [ref=e252]:
          - tab "Show Prosper story" [selected] [ref=e253] [cursor=pointer]:
            - img "Prosper" [ref=e254]
          - tab "Show RettsPay story" [ref=e255] [cursor=pointer]:
            - img "RettsPay" [ref=e256]
          - tab "Show Africhange story" [ref=e257] [cursor=pointer]:
            - img "Africhange" [ref=e258]
    - region "Frequently Asked Questions (FAQ)" [ref=e259]:
      - generic [ref=e263]:
        - heading "Frequently Asked Questions (FAQ)" [level=2] [ref=e264]
        - generic [ref=e265]:
          - button "What is embedded banking, and how does it work?" [ref=e267] [cursor=pointer]
          - button "Do I need my own banking license to build with Docket?" [ref=e270] [cursor=pointer]
          - button "How quickly can I integrate and go live?" [ref=e273] [cursor=pointer]
          - button "How do client money and safeguarding accounts keep funds protected?" [ref=e276] [cursor=pointer]
          - button "What kinds of businesses use Docket?" [ref=e279] [cursor=pointer]
          - button "How does Docket help with reconciliation and compliance?" [ref=e282] [cursor=pointer]
    - region "Contact Sales" [ref=e284]:
      - generic [ref=e288]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e289]
        - link "Contact Sales" [ref=e291] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e292]:
    - generic [ref=e295]:
      - link "Docketo home" [ref=e297] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e298]
      - generic [ref=e299]:
        - navigation "Footer" [ref=e300]:
          - generic [ref=e301]:
            - generic [ref=e302]: Product
            - list [ref=e303]:
              - listitem [ref=e304]:
                - link "Embedded bank" [ref=e305] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e306]:
                - link "Safeguarding" [ref=e307] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e308]:
                - link "Savings accounts" [ref=e309] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e310]:
                - link "Client money" [ref=e311] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e312]:
                - link "Business bank" [ref=e313] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e314]:
                - link "Verify" [ref=e315] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e316]:
            - generic [ref=e317]: Explore
            - list [ref=e318]:
              - listitem [ref=e319]:
                - link "Home" [ref=e320] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e321]:
                - link "About" [ref=e322] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e323]:
                - link "Blog" [ref=e324] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e325]:
                - link "Contact us" [ref=e326] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e327]:
                - link "Careers" [ref=e328] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e329]:
                - link "Pricing" [ref=e330] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e331]:
            - generic [ref=e332]: Policies
            - list [ref=e333]:
              - listitem [ref=e334]:
                - link "Privacy policy" [ref=e335] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e336]:
                - link "Terms & Conditions" [ref=e337] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e338]:
                - link "Cookies" [ref=e339] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e340]:
                - link "Eligibility" [ref=e341] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e342]:
            - generic [ref=e343]: Utility page
            - list [ref=e344]:
              - listitem [ref=e345]:
                - link "Style guide" [ref=e346] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e347]:
                - link "Change log" [ref=e348] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e349]:
                - link "Password" [ref=e350] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e351]:
                - link "404 not found" [ref=e352] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e353]:
                - link "Licenses" [ref=e354] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e355]:
          - paragraph [ref=e356]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e357]:
            - text: Designed by
            - link "webocean" [ref=e358] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e360]
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
      |         ^ Error: WCAG serious/critical violations on /
  249 |     });
  250 |   }
  251 | });
  252 | 
```