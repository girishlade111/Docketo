# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Axe WCAG accessibility audits across key routes >> zero critical or serious WCAG violations on /privacy
- Location: tests\e2e\docketo.spec.ts:228:5

# Error details

```
Error: WCAG serious/critical violations on /privacy

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
          - generic [ref=e25]:
            - heading "Privacy" [level=1] [ref=e26]
            - paragraph [ref=e27]: "Last updated: Oct 03, 2026"
          - button "Download PDF" [ref=e29] [cursor=pointer]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - heading "Introduction" [level=2] [ref=e32]
            - paragraph [ref=e33]: Docket ("Docketo," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your personal data when you use our website, products, and services (together, the "Services"), and describes your rights in relation to that data.
            - paragraph [ref=e34]: Docket is operated by [Legal Entity Name], a company registered in [Country] under company number [Number], with its registered office at [Address]. For the purposes of applicable data protection law, [Legal Entity Name] is the data controller of your personal data. [Add Data Protection Officer contact details if you have appointed one.]
          - generic [ref=e35]:
            - heading "2. Information we collect" [level=3] [ref=e36]
            - paragraph [ref=e37]: "We may collect and process the following categories of personal data:"
            - list [ref=e38]:
              - listitem [ref=e39]: "Information you provide: such as your name, email address, phone number, company details, and any information you submit when creating an account, contacting us, or using the Services."
              - listitem [ref=e40]: "Identity and verification data: where required for compliance, such as identity documents and information gathered during KYC or KYB checks."
              - listitem [ref=e41]: "Transaction and account data: details relating to payments, accounts, and activity carried out through the Services."
              - listitem [ref=e42]: "Technical data: such as IP address, device information, browser type, and usage data collected automatically when you interact with our website or products."
              - listitem [ref=e43]: "Communications: records of your correspondence with us."
          - generic [ref=e44]:
            - heading "3. How we use your information" [level=4] [ref=e45]
            - paragraph [ref=e46]: "We use your personal data to:"
            - list [ref=e47]:
              - listitem [ref=e48]: Provide, operate, and improve the Services;
              - listitem [ref=e49]: Create and manage your account;
              - listitem [ref=e50]: Carry out identity verification and meet our legal and regulatory obligations;
              - listitem [ref=e51]: Process transactions and provide customer support;
              - listitem [ref=e52]: Communicate with you about the Services, including important updates;
              - listitem [ref=e53]: Detect, prevent, and address fraud, security, or technical issues;
              - listitem [ref=e54]: Comply with applicable laws and regulations.
          - generic [ref=e55]:
            - heading "4. Legal bases for processing" [level=5] [ref=e56]
            - paragraph [ref=e57]: "Where applicable data protection law requires it, we rely on the following legal bases: performance of a contract with you; compliance with a legal obligation; our legitimate interests (such as improving and securing the Services); and your consent, where specifically requested. [Confirm and tailor legal bases with your advisor.]"
          - generic [ref=e58]:
            - heading "5. How we share your information" [level=5] [ref=e59]
            - paragraph [ref=e60]: "We may share your personal data with:"
            - list [ref=e61]:
              - listitem [ref=e62]: Service providers who help us operate the Services, under appropriate confidentiality and data protection obligations;
              - listitem [ref=e63]: Financial and regulatory partners where necessary to provide the Services or meet compliance requirements;
              - listitem [ref=e64]: Authorities and regulators where required by law or to protect our legal rights;
              - listitem [ref=e65]: Third parties in connection with a business transfer, such as a merger or acquisition.
          - generic [ref=e66]:
            - heading "6. International transfers" [level=6] [ref=e67]
            - paragraph [ref=e68]: Where we transfer personal data outside [your jurisdiction], we take steps to ensure it is protected by appropriate safeguards, such as standard contractual clauses or equivalent measures. [Detail your actual transfer mechanisms.]
  - contentinfo [ref=e69]:
    - generic [ref=e72]:
      - link "Docketo home" [ref=e74] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e75]
      - generic [ref=e76]:
        - navigation "Footer" [ref=e77]:
          - generic [ref=e78]:
            - generic [ref=e79]: Product
            - list [ref=e80]:
              - listitem [ref=e81]:
                - link "Embedded bank" [ref=e82] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e83]:
                - link "Safeguarding" [ref=e84] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e85]:
                - link "Savings accounts" [ref=e86] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e87]:
                - link "Client money" [ref=e88] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e89]:
                - link "Business bank" [ref=e90] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e91]:
                - link "Verify" [ref=e92] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e93]:
            - generic [ref=e94]: Explore
            - list [ref=e95]:
              - listitem [ref=e96]:
                - link "Home" [ref=e97] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e98]:
                - link "About" [ref=e99] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e100]:
                - link "Blog" [ref=e101] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e102]:
                - link "Contact us" [ref=e103] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e104]:
                - link "Careers" [ref=e105] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e106]:
                - link "Pricing" [ref=e107] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e108]:
            - generic [ref=e109]: Policies
            - list [ref=e110]:
              - listitem [ref=e111]:
                - link "Privacy policy" [ref=e112] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e113]:
                - link "Terms & Conditions" [ref=e114] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e115]:
                - link "Cookies" [ref=e116] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e117]:
                - link "Eligibility" [ref=e118] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e119]:
            - generic [ref=e120]: Utility page
            - list [ref=e121]:
              - listitem [ref=e122]:
                - link "Style guide" [ref=e123] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e124]:
                - link "Change log" [ref=e125] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e126]:
                - link "Password" [ref=e127] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e128]:
                - link "404 not found" [ref=e129] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e130]:
                - link "Licenses" [ref=e131] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e132]:
          - paragraph [ref=e133]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e134]:
            - text: Designed by
            - link "webocean" [ref=e135] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e137]
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
      |         ^ Error: WCAG serious/critical violations on /privacy
  249 |     });
  250 |   }
  251 | });
  252 | 
```