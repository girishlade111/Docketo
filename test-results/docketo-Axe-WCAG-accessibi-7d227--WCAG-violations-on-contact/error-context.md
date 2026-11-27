# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /contact
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /contact

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
      - generic [ref=e22]:
        - generic [ref=e23]:
          - heading "Tell us what you're building" [level=1] [ref=e24]
          - paragraph [ref=e25]: Whether you're ready to build or just exploring, our team is here to help.
        - generic "Partner logos" [ref=e27]:
          - generic [ref=e29]:
            - img "Client Logo 1" [ref=e31]
            - img "Client Logo 2" [ref=e33]
            - img "Client Logo 3" [ref=e35]
            - img "Client Logo 4" [ref=e37]
            - img "Client Logo 5" [ref=e39]
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: First Name
            - textbox "First Name" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]: Last Name
            - textbox "Last Name" [ref=e54]
          - generic [ref=e55]:
            - generic [ref=e56]: Business Email Address
            - textbox "Business Email Address" [ref=e57]
          - generic [ref=e58]:
            - generic [ref=e59]: Company Name
            - textbox "Company Name" [ref=e60]
          - generic [ref=e61]:
            - generic [ref=e62]: Job Title
            - textbox "Job Title" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]: Phone Number
            - textbox "Phone Number" [ref=e66]
          - generic [ref=e67]:
            - generic [ref=e68]: Message
            - textbox "Message" [ref=e69]
        - button "Submit" [ref=e70] [cursor=pointer]
        - paragraph [ref=e71]:
          - text: For details about how we collect, use, and protect your information, please see our
          - link "privacy policy" [ref=e72] [cursor=pointer]:
            - /url: /privacy
          - text: .
  - contentinfo [ref=e73]:
    - generic [ref=e76]:
      - link "Docketo home" [ref=e78] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e79]
      - generic [ref=e80]:
        - navigation "Footer" [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]: Product
            - list [ref=e84]:
              - listitem [ref=e85]:
                - link "Embedded bank" [ref=e86] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e87]:
                - link "Safeguarding" [ref=e88] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e89]:
                - link "Savings accounts" [ref=e90] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e91]:
                - link "Client money" [ref=e92] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e93]:
                - link "Business bank" [ref=e94] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e95]:
                - link "Verify" [ref=e96] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e97]:
            - generic [ref=e98]: Explore
            - list [ref=e99]:
              - listitem [ref=e100]:
                - link "Home" [ref=e101] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e102]:
                - link "About" [ref=e103] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e104]:
                - link "Blog" [ref=e105] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e106]:
                - link "Contact us" [ref=e107] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e108]:
                - link "Careers" [ref=e109] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e110]:
                - link "Pricing" [ref=e111] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e112]:
            - generic [ref=e113]: Policies
            - list [ref=e114]:
              - listitem [ref=e115]:
                - link "Privacy policy" [ref=e116] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e117]:
                - link "Terms & Conditions" [ref=e118] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e119]:
                - link "Cookies" [ref=e120] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e121]:
                - link "Eligibility" [ref=e122] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e123]:
            - generic [ref=e124]: Utility page
            - list [ref=e125]:
              - listitem [ref=e126]:
                - link "Style guide" [ref=e127] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e128]:
                - link "Change log" [ref=e129] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e130]:
                - link "Password" [ref=e131] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e132]:
                - link "404 not found" [ref=e133] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e134]:
                - link "Licenses" [ref=e135] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e136]:
          - paragraph [ref=e137]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e138]:
            - text: Designed by
            - link "webocean" [ref=e139] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e141]
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
      |         ^ Error: WCAG serious/critical violations on /contact
  249 |     });
  250 |   }
  251 | });
  252 | 
```