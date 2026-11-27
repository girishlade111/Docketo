# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /careers
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /careers

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
        - heading "Careers at Docket" [level=1] [ref=e24]
        - paragraph [ref=e25]: We're changing the future of banking, and we're looking for kind, thoughtful, resilient people to help us get there.
        - link "Explore Open Roles" [ref=e27] [cursor=pointer]:
          - /url: /eligibility
      - generic [ref=e28]:
        - img "Team collaboration" [ref=e30]
        - img "Product engineering meeting" [ref=e32]
        - img "Focused workspace" [ref=e34]
      - generic [ref=e37]:
        - article [ref=e38]:
          - heading "Our culture" [level=2] [ref=e39]
          - paragraph [ref=e40]: Our culture is our most valuable asset. Learn more about our core values and behaviours.
        - article [ref=e41]:
          - heading "Where we hire" [level=2] [ref=e42]
          - paragraph [ref=e43]: Outside the UK, we can currently hire people based in Germany, Ireland, and Sweden.
    - generic [ref=e47]:
      - heading "Our values are a commitment to our customers and a signal of the culture we're building." [level=2] [ref=e49]
      - generic [ref=e50]:
        - article [ref=e51]:
          - generic [ref=e52]:
            - heading "Transparency" [level=3] [ref=e53]
            - generic [ref=e54]: "01"
          - paragraph [ref=e55]: We empower our people to do their best work by being as transparent as we can internally.
          - list [ref=e56]:
            - listitem [ref=e57]: No hidden fees, no surprises, just clear pricing and honest answers.
            - listitem [ref=e58]: We tell you exactly how things work, so you always know where you stand.
            - listitem [ref=e59]: Clear Pricing, open communication, and no fine print.
            - listitem [ref=e60]: What you see is what you get, always.
          - img "Transparency" [ref=e62]
        - article [ref=e63]:
          - generic [ref=e64]:
            - heading "Flexibility" [level=3] [ref=e65]
            - generic [ref=e66]: "02"
          - paragraph [ref=e67]: We care about your insights and your impact, not how many hours you spend at your desk.
          - list [ref=e68]:
            - listitem [ref=e69]: Build the way you want, with infrastructure that adapts to your needs.
            - listitem [ref=e70]: One platform, endless use cases shaped around how you work.
            - listitem [ref=e71]: From startup to scale, our products flex to fit your business.
            - listitem [ref=e72]: Integrate anywhere, build anything on your terms.
          - img "Flexibility" [ref=e74]
        - article [ref=e75]:
          - generic [ref=e76]:
            - heading "Trust" [level=3] [ref=e77]
            - generic [ref=e78]: "03"
          - paragraph [ref=e79]: We assume everyone who works here will act in the best interest of the company by default.
          - list [ref=e80]:
            - listitem [ref=e81]: Bank-grade security and full compliance, built in from day one.
            - listitem [ref=e82]: Your funds protected, your data secure, your business covered.
            - listitem [ref=e83]: Regulated, reliable, and built to keep your customers' money safe.
            - listitem [ref=e84]: The dependable foundation your customers can bank on.
          - img "Trust" [ref=e86]
    - generic [ref=e91]:
      - heading "Benefits & Perks" [level=2] [ref=e93]
      - generic [ref=e94]:
        - generic [ref=e95]:
          - heading "For Employees" [level=3] [ref=e96]
          - list [ref=e97]:
            - listitem [ref=e98]: Comprehensive health, dental, and vision insurance
            - listitem [ref=e99]: Mental health support
            - listitem [ref=e100]: Company sponsored retirement plan
            - listitem [ref=e101]: Daily lunch in-office (in SF and NY)
        - generic [ref=e102]:
          - heading "Family and Time Off" [level=3] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]: 18 weeks paid parental leave
            - listitem [ref=e106]: Flexible time off
            - listitem [ref=e107]: Fertility benefits
            - listitem [ref=e108]: Sabbatical after 4 years of service
        - generic [ref=e109]:
          - heading "Culture and Personal Development" [level=3] [ref=e110]
          - list [ref=e111]:
            - listitem [ref=e112]: Annual learning & development stipend
            - listitem [ref=e113]: AI skill development and enablement
            - listitem [ref=e114]: Personalized Funko Pop on 3-year anniversary
            - listitem [ref=e115]: "\"Raising The Bar\" professional development program"
    - generic [ref=e120]:
      - heading "Join our team." [level=2] [ref=e121]
      - generic [ref=e122]:
        - generic [ref=e123]:
          - heading "Engineering" [level=3] [ref=e124]
          - generic [ref=e125]:
            - generic [ref=e126]:
              - generic [ref=e127]: Engineering Manager
              - generic [ref=e128]:
                - generic [ref=e129]: London or remote within the UK
                - link "Apply Now" [ref=e131] [cursor=pointer]:
                  - /url: https://www.linkfilm.ai/
            - generic [ref=e132]:
              - generic [ref=e133]: Software Engineer
              - generic [ref=e134]:
                - generic [ref=e135]: London or remote within the UK
                - link "Apply Now" [ref=e137] [cursor=pointer]:
                  - /url: https://www.linkfilm.ai/
        - generic [ref=e138]:
          - heading "Marketing" [level=3] [ref=e139]
          - generic [ref=e141]:
            - generic [ref=e142]: Marketing Associate
            - generic [ref=e143]:
              - generic [ref=e144]: London or remote within the UK
              - link "Apply Now" [ref=e146] [cursor=pointer]:
                - /url: https://www.linkfilm.ai/
        - generic [ref=e147]:
          - heading "Finance" [level=3] [ref=e148]
          - generic [ref=e150]:
            - generic [ref=e151]: Treasury Manager
            - generic [ref=e152]:
              - generic [ref=e153]: London or remote within the UK
              - link "Apply Now" [ref=e155] [cursor=pointer]:
                - /url: https://www.linkfilm.ai/
  - contentinfo [ref=e156]:
    - generic [ref=e159]:
      - link "Docketo home" [ref=e161] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e162]
      - generic [ref=e163]:
        - navigation "Footer" [ref=e164]:
          - generic [ref=e165]:
            - generic [ref=e166]: Product
            - list [ref=e167]:
              - listitem [ref=e168]:
                - link "Embedded bank" [ref=e169] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e170]:
                - link "Safeguarding" [ref=e171] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e172]:
                - link "Savings accounts" [ref=e173] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e174]:
                - link "Client money" [ref=e175] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e176]:
                - link "Business bank" [ref=e177] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e178]:
                - link "Verify" [ref=e179] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e180]:
            - generic [ref=e181]: Explore
            - list [ref=e182]:
              - listitem [ref=e183]:
                - link "Home" [ref=e184] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e185]:
                - link "About" [ref=e186] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e187]:
                - link "Blog" [ref=e188] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e189]:
                - link "Contact us" [ref=e190] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e191]:
                - link "Careers" [ref=e192] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e193]:
                - link "Pricing" [ref=e194] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e195]:
            - generic [ref=e196]: Policies
            - list [ref=e197]:
              - listitem [ref=e198]:
                - link "Privacy policy" [ref=e199] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e200]:
                - link "Terms & Conditions" [ref=e201] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e202]:
                - link "Cookies" [ref=e203] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e204]:
                - link "Eligibility" [ref=e205] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e206]:
            - generic [ref=e207]: Utility page
            - list [ref=e208]:
              - listitem [ref=e209]:
                - link "Style guide" [ref=e210] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e211]:
                - link "Change log" [ref=e212] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e213]:
                - link "Password" [ref=e214] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e215]:
                - link "404 not found" [ref=e216] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e217]:
                - link "Licenses" [ref=e218] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e219]:
          - paragraph [ref=e220]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e221]:
            - text: Designed by
            - link "webocean" [ref=e222] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e224]
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
      |         ^ Error: WCAG serious/critical violations on /careers
  249 |     });
  250 |   }
  251 | });
  252 | 
```