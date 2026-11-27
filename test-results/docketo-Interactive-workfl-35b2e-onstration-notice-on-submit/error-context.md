# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Interactive workflows and visual transitions >> protected 401 page displays static template demonstration notice on submit
- Location: tests\e2e\docketo.spec.ts:219:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/template protected-page fixture/i)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/template protected-page fixture/i) with timeout 10000ms
  - waiting for getByText(/template protected-page fixture/i)

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - link "Docketo home":
    - /url: /
    - img "Docketo"
  - navigation "Primary":
    - button "Products"
    - link "About":
      - /url: /about
    - link "Price":
      - /url: /pricing
    - link "Blog":
      - /url: /news
    - button "pages"
  - link "Book a Demo":
    - /url: /contact
  - button "Open navigation menu": Menu
- main:
  - img "Protected page illustration"
  - heading "Protected Page" [level=1]
  - text: Password
  - textbox "Password":
    - /placeholder: Enter your password
  - button "Submit"
- contentinfo:
  - link "Docketo home":
    - /url: /
    - img "Docketo"
  - navigation "Footer":
    - text: Product
    - list:
      - listitem:
        - link "Embedded bank":
          - /url: /embedded-bank
      - listitem:
        - link "Safeguarding":
          - /url: /safeguarding
      - listitem:
        - link "Savings accounts":
          - /url: /savings-accounts
      - listitem:
        - link "Client money":
          - /url: /client-money
      - listitem:
        - link "Business bank":
          - /url: /business-bank
      - listitem:
        - link "Verify":
          - /url: /verify
    - text: Explore
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "About":
          - /url: /about
      - listitem:
        - link "Blog":
          - /url: /news
      - listitem:
        - link "Contact us":
          - /url: /contact
      - listitem:
        - link "Careers":
          - /url: /careers
      - listitem:
        - link "Pricing":
          - /url: /pricing
    - text: Policies
    - list:
      - listitem:
        - link "Privacy policy":
          - /url: /privacy
      - listitem:
        - link "Terms & Conditions":
          - /url: /terms-conditions
      - listitem:
        - link "Cookies":
          - /url: /cookies
      - listitem:
        - link "Eligibility":
          - /url: /eligibility
    - text: Utility page
    - list:
      - listitem:
        - link "Style guide":
          - /url: /style-guide
      - listitem:
        - link "Change log":
          - /url: /changelog
      - listitem:
        - link "Password":
          - /url: /401
      - listitem:
        - link "404 not found":
          - /url: /404
      - listitem:
        - link "Licenses":
          - /url: /licenses
  - paragraph: Copyright © 2026 Docket. All rights reserved.
  - paragraph:
    - text: Designed by
    - link "webocean":
      - /url: https://webocean.io/
    - text: ", Powered by Webflow"
```

# Test source

```ts
  123 |     expect(boxAtTop).not.toBeNull();
  124 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  125 | 
  126 |     await page.evaluate(() => window.scrollTo(0, 1000));
  127 |     await page.waitForTimeout(250);
  128 |     const boxScrolled = await heroCard.boundingBox();
  129 |     expect(boxScrolled).not.toBeNull();
  130 |     expect(boxScrolled!.width).toBeLessThan(800);
  131 | 
  132 |     // 2. Header dropdown opens and closes via Escape
  133 |     await page.evaluate(() => window.scrollTo(0, 950));
  134 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  135 |     await productsTrigger.click();
  136 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
  137 |     await page.keyboard.press("Escape");
  138 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  139 | 
  140 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  141 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  142 |     const dialog = page.getByRole("dialog");
  143 |     await expect(dialog).toBeVisible();
  144 |     await page.keyboard.press("Escape");
  145 |     await expect(dialog).toBeHidden();
  146 | 
  147 |     // 4. Solution tabs switch content (all 4 tabs)
  148 |     const wealthTab = page.getByRole("tab", { name: "Wealth and savings apps" });
  149 |     await wealthTab.scrollIntoViewIfNeeded();
  150 |     await wealthTab.click();
  151 |     await expect(
  152 |       page.getByRole("heading", { name: "Streamline reconciliation and strengthen retention in one move." })
  153 |     ).toBeVisible();
  154 | 
  155 |     await page.getByRole("tab", { name: "Lending" }).click();
  156 |     await expect(page.getByRole("heading", { name: "One infrastructure, endless payment possibilities." })).toBeVisible();
  157 | 
  158 |     await page.getByRole("tab", { name: "Proptech solutions" }).click();
  159 |     await expect(
  160 |       page.getByRole("heading", { name: "Set your clients up for success with dedicated, compliant accounts." })
  161 |     ).toBeVisible();
  162 | 
  163 |     // 5. Testimonial carousel switches across all 3 slides
  164 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  165 |     await expect(page.getByText("Priya Anand")).toBeVisible();
  166 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  167 |     await expect(page.getByText("David Chen")).toBeVisible();
  168 | 
  169 |     // 6. Customer stories switcher
  170 |     await page.getByRole("tab", { name: "Show RettsPay story" }).click();
  171 |     await expect(page.getByRole("button", { name: "Play RettsPay customer story video" })).toBeVisible();
  172 | 
  173 |     // 7. Shared FAQ expand/collapse
  174 |     const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
  175 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  176 |     await firstFaq.click();
  177 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
  178 |     await firstFaq.click();
  179 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  180 |   });
  181 | 
  182 |   test("mobile navigation opens drawer and product submenu at 390px", async ({ page }) => {
  183 |     await page.setViewportSize({ width: 390, height: 844 });
  184 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  185 |     const menuBtn = page.getByRole("button", { name: /menu/i });
  186 |     await menuBtn.click();
  187 |     await expect(page.getByRole("link", { name: "Book a Demo" }).last()).toBeVisible();
  188 |     await page.keyboard.press("Escape");
  189 |   });
  190 | 
  191 |   test("news category filters match exact Webflow post counts [2, 3, 2, 2]", async ({ page }) => {
  192 |     const expectations: Array<[string, number]> = [
  193 |       ["/news", 9],
  194 |       ["/post-categories/product", 2],
  195 |       ["/post-categories/compliance", 3],
  196 |       ["/post-categories/company", 2],
  197 |       ["/post-categories/guides", 2],
  198 |     ];
  199 |     for (const [route, count] of expectations) {
  200 |       await page.goto(route, { waitUntil: "domcontentloaded" });
  201 |       await expect(page.locator("article")).toHaveCount(count);
  202 |     }
  203 |   });
  204 | 
  205 |   test("contact form validates empty submit and records valid demonstration submission", async ({ page }) => {
  206 |     await page.goto("/contact", { waitUntil: "domcontentloaded" });
  207 |     await page.getByRole("button", { name: "Submit" }).click();
  208 |     await expect(page.getByText(/First name is required/i)).toBeVisible();
  209 | 
  210 |     await page.getByLabel("First Name").fill("Alex");
  211 |     await page.getByLabel("Last Name").fill("Mercer");
  212 |     await page.getByLabel("Email").fill("alex@fintech-example.test");
  213 |     await page.getByLabel("Company Name").fill("Meridian Clearing");
  214 |     await page.getByLabel("Message").fill("Interested in embedded safeguarding APIs.");
  215 |     await page.getByRole("button", { name: "Submit" }).click();
  216 |     await expect(page.getByText(/demonstration request has been validated locally/i)).toBeVisible();
  217 |   });
  218 | 
  219 |   test("protected 401 page displays static template demonstration notice on submit", async ({ page }) => {
  220 |     await page.goto("/401", { waitUntil: "domcontentloaded" });
  221 |     await page.getByPlaceholder("Enter your password").fill("test-pass");
  222 |     await page.getByRole("button", { name: "Submit" }).click();
> 223 |     await expect(page.getByText(/template protected-page fixture/i)).toBeVisible();
      |                                                                      ^ Error: expect(locator).toBeVisible() failed
  224 |   });
  225 | });
  226 | 
  227 | test.describe("Axe WCAG accessibility audits across key routes", () => {
  228 |   const a11yRoutes = [
  229 |     "/",
  230 |     "/about",
  231 |     "/pricing",
  232 |     "/contact",
  233 |     "/careers",
  234 |     "/embedded-bank",
  235 |     "/news",
  236 |     "/post/how-embedded-bank-accounts-simplify-payment-reconciliation",
  237 |     "/privacy",
  238 |     "/style-guide",
  239 |     "/404",
  240 |   ];
  241 | 
  242 |   for (const route of a11yRoutes) {
  243 |     test(`zero critical or serious WCAG violations on ${route}`, async ({ page }) => {
  244 |       await page.setViewportSize({ width: 1440, height: 900 });
  245 |       await page.goto(route, { waitUntil: "networkidle" });
  246 |       await page.evaluate(() => document.fonts.ready);
  247 | 
  248 |       const results = await new AxeBuilder({ page })
  249 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  250 |         .analyze();
  251 | 
  252 |       const seriousOrCritical = results.violations.filter(
  253 |         (v) => v.impact === "critical" || v.impact === "serious"
  254 |       );
  255 | 
  256 |       expect(
  257 |         seriousOrCritical.map((v) => ({
  258 |           id: v.id,
  259 |           impact: v.impact,
  260 |           nodes: v.nodes.slice(0, 3).map((n) => n.html),
  261 |         })),
  262 |         `WCAG serious/critical violations on ${route}`
  263 |       ).toEqual([]);
  264 |     });
  265 |   }
  266 | });
  267 | 
```