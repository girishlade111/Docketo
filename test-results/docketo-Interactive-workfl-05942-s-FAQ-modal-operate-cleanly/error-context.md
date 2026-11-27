# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Interactive workflows and visual transitions >> homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly
- Location: tests\e2e\docketo.spec.ts:105:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('menuitem', { name: 'Embedded bank accounts' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('menuitem', { name: 'Embedded bank accounts' }) with timeout 10000ms
  - waiting for getByRole('menuitem', { name: 'Embedded bank accounts' })

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- main:
  - region "Docketo Hero":
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
    - heading "Banking for what you're building" [level=1]
    - img "Docketo mark"
    - text: Docketo
    - paragraph: Banking for what you're building
    - button "Watch the video"
    - link "Try for Free":
      - /url: /pricing
    - heading "Ready to see how it works?" [level=2]
    - button "Play Demo"
    - img "Partner Logo 1"
    - img "Partner Logo 2"
    - img "Partner Logo 3"
    - img "Partner Logo 4"
    - img "Partner Logo 5"
    - img "Partner Logo 6"
    - img "Partner Logo 7"
    - img "Partner Logo 8"
  - region "Banking infrastructure stack":
    - article:
      - text: YOUR APP
      - heading "Differentiate" [level=2]
      - paragraph: Banking built into your app. Customers built into your business.
      - img "Differentiate architecture diagram"
    - article:
      - text: YOUR TECH
      - heading "Integrate" [level=2]
      - paragraph: Build your tech on top of our platform with a simple API.
      - img "Integrate architecture diagram"
    - article:
      - text: OUR PLATFORM
      - heading "Power" [level=2]
      - paragraph: Power your offering with best-in-class banking infrastructure.
      - img "Power architecture diagram"
    - article:
      - text: OUR BANK LICENSE
      - heading "Secure" [level=2]
      - paragraph: Protect your customer's money with our regulatory cover.
      - img "Secure architecture diagram"
  - region "Designed to help you build":
    - heading "Designed to help you build" [level=2]
    - tablist "Fintech solutions":
      - tab "Payment platforms" [selected]
      - tab "Wealth and savings apps"
      - tab "Lending"
      - tab "Proptech solutions"
    - tabpanel "Payment platforms":
      - heading "Handle repayments, reporting, and compliance in one place." [level=3]
      - list:
        - listitem: Earn interest or commission
        - listitem: Open new accounts instantly
        - listitem: Own your customer experience
      - img "Payment platforms banking interface illustration"
  - region "Our products":
    - heading "Our products" [level=2]
    - link "Embedded bank accounts Bank accounts to power any product":
      - /url: /embedded-bank
      - heading "Embedded bank accounts" [level=3]
      - paragraph: Bank accounts to power any product
    - link "Safeguarding accounts Ringfenced accounts for EMIs and PIs":
      - /url: /safeguarding
      - heading "Safeguarding accounts" [level=3]
      - paragraph: Ringfenced accounts for EMIs and PIs
    - link "Business bank accounts Your own operational account, access via API or our app":
      - /url: /business-bank
      - heading "Business bank accounts" [level=3]
      - paragraph: Your own operational account, access via API or our app
    - link "Savings accounts Interest-bearing accounts for your customers":
      - /url: /savings-accounts
      - heading "Savings accounts" [level=3]
      - paragraph: Interest-bearing accounts for your customers
    - link "Client money accounts CASS and CMP compliant accounts":
      - /url: /client-money
      - heading "Client money accounts" [level=3]
      - paragraph: CASS and CMP compliant accounts
    - link "Verify Automated customer onboarding and KYC":
      - /url: /verify
      - heading "Verify" [level=3]
      - paragraph: Automated customer onboarding and KYC
  - region "Customer testimonials":
    - blockquote:
      - heading "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”" [level=2]
    - text: Sarah Mitchell Founder & CEO, Loop Payments
    - img "Sarah Mitchell, Founder & CEO, Loop Payments"
    - tablist "Testimonial slides":
      - 'tab "Show testimonial 1: Sarah Mitchell" [selected]'
      - 'tab "Show testimonial 2: Priya Anand"'
      - 'tab "Show testimonial 3: David Chen"'
    - button "Previous testimonial"
    - button "Next testimonial"
  - region "Start coding today":
    - heading "Start coding today" [level=2]
    - list:
      - listitem:
        - heading "Purpose-built API" [level=3]
        - paragraph: Using clean JSON over REST
      - listitem:
        - heading "Clear documentation" [level=3]
        - paragraph: Comprehensive API reference and guides
      - listitem:
        - heading "Immutable architecture" [level=3]
        - paragraph: Core banking system based on a durable event log
      - listitem:
        - heading "Cloud native" [level=3]
        - paragraph: Built on scalable, resilient infrastructure
      - listitem:
        - heading "Free sandbox" [level=3]
        - paragraph: Start testing right away, no fees, no sales pitch, no NDAs
    - img "Code snippet showing an API request to create a payee with a POST request and JSON payload"
  - region "Customer stories":
    - img "Prosper"
    - heading "How Prosper removed payment complexity with Docket embedded bank accounts" [level=2]
    - button "Play Prosper customer story video"
    - tablist "Select customer story":
      - tab "Show Prosper story" [selected]:
        - img "Prosper"
      - tab "Show RettsPay story":
        - img "RettsPay"
      - tab "Show Africhange story":
        - img "Africhange"
  - region "Frequently Asked Questions (FAQ)":
    - heading "Frequently Asked Questions (FAQ)" [level=2]
    - button "What is embedded banking, and how does it work?"
    - button "Do I need my own banking license to build with Docket?"
    - button "How quickly can I integrate and go live?"
    - button "How do client money and safeguarding accounts keep funds protected?"
    - button "What kinds of businesses use Docket?"
    - button "How does Docket help with reconciliation and compliance?"
  - region "Contact Sales":
    - heading "Build, launch and scale your financial products on one powerful platform." [level=2]
    - link "Contact Sales":
      - /url: /pricing
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
- alert
```

# Test source

```ts
  25  |   "/cookies",
  26  |   "/eligibility",
  27  |   "/style-guide",
  28  |   "/changelog",
  29  |   "/401",
  30  |   "/404",
  31  |   "/licenses",
  32  | ];
  33  | 
  34  | test.describe("Docketo 34-route health, typography, and asset integrity", () => {
  35  |   test("every single one of the 34 reconstructed routes loads cleanly on desktop", async ({ page }) => {
  36  |     expect(ALL_34_ROUTES).toHaveLength(34);
  37  |     await page.setViewportSize({ width: 1440, height: 900 });
  38  | 
  39  |     const pageErrors: string[] = [];
  40  |     const consoleErrors: string[] = [];
  41  |     page.on("pageerror", (err) => pageErrors.push(`${err.message}`));
  42  |     page.on("console", (msg) => {
  43  |       if (msg.type() === "error") consoleErrors.push(msg.text());
  44  |     });
  45  | 
  46  |     for (const route of ALL_34_ROUTES) {
  47  |       const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  48  |       expect(response?.status(), `HTTP status for ${route}`).toBe(200);
  49  |       await page.evaluate(() => document.fonts.ready);
  50  | 
  51  |       const metrics = await page.evaluate(() => {
  52  |         const imgs = Array.from(document.querySelectorAll("img"));
  53  |         const brokenImgs = imgs
  54  |           .filter((img) => img.complete && img.naturalWidth === 0)
  55  |           .map((img) => img.getAttribute("src") || img.alt);
  56  |         return {
  57  |           textLen: document.body.innerText.trim().length,
  58  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  59  |           scrollWidth: document.documentElement.scrollWidth,
  60  |           innerWidth: window.innerWidth,
  61  |           brokenImgs,
  62  |         };
  63  |       });
  64  | 
  65  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  66  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  67  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  68  |     }
  69  | 
  70  |     expect(pageErrors, "Page runtime errors").toEqual([]);
  71  |     expect(consoleErrors, "Browser console errors").toEqual([]);
  72  |   });
  73  | 
  74  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  75  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  76  |     expect(response?.status()).toBe(404);
  77  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  78  |   });
  79  | });
  80  | 
  81  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  82  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  83  |   const viewports = [
  84  |     { name: "tablet-768", width: 768, height: 1024 },
  85  |     { name: "mobile-390", width: 390, height: 844 },
  86  |     { name: "mobile-320", width: 320, height: 568 },
  87  |   ];
  88  | 
  89  |   for (const vp of viewports) {
  90  |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  91  |       await page.setViewportSize({ width: vp.width, height: vp.height });
  92  |       for (const route of keyRoutes) {
  93  |         await page.goto(route, { waitUntil: "domcontentloaded" });
  94  |         const overflow = await page.evaluate(() => ({
  95  |           scrollWidth: document.documentElement.scrollWidth,
  96  |           innerWidth: window.innerWidth,
  97  |         }));
  98  |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
  99  |       }
  100 |     });
  101 |   }
  102 | });
  103 | 
  104 | test.describe("Interactive workflows and visual transitions", () => {
  105 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  106 |     await page.setViewportSize({ width: 1440, height: 900 });
  107 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  108 | 
  109 |     // 1. Scroll-shrinking cinematic hero geometry
  110 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  111 |     const boxAtTop = await heroCard.boundingBox();
  112 |     expect(boxAtTop).not.toBeNull();
  113 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  114 | 
  115 |     await page.evaluate(() => window.scrollTo(0, 1000));
  116 |     await page.waitForTimeout(250);
  117 |     const boxScrolled = await heroCard.boundingBox();
  118 |     expect(boxScrolled).not.toBeNull();
  119 |     expect(boxScrolled!.width).toBeLessThan(800);
  120 | 
  121 |     // 2. Header dropdown opens and closes via Escape
  122 |     await page.evaluate(() => window.scrollTo(0, 950));
  123 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  124 |     await productsTrigger.click();
> 125 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
      |                                                                                  ^ Error: expect(locator).toBeVisible() failed
  126 |     await page.keyboard.press("Escape");
  127 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  128 | 
  129 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  130 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  131 |     const dialog = page.getByRole("dialog");
  132 |     await expect(dialog).toBeVisible();
  133 |     await page.keyboard.press("Escape");
  134 |     await expect(dialog).toBeHidden();
  135 | 
  136 |     // 4. Solution tabs switch content (all 4 tabs)
  137 |     const fintechTab = page.getByRole("tab", { name: "Fintechs" });
  138 |     await fintechTab.scrollIntoViewIfNeeded();
  139 |     await fintechTab.click();
  140 |     await expect(page.getByRole("heading", { name: "Scale faster without banking complexity" })).toBeVisible();
  141 | 
  142 |     await page.getByRole("tab", { name: "Platforms & Marketplaces" }).click();
  143 |     await expect(page.getByRole("heading", { name: "Power seamless payouts and account flows" })).toBeVisible();
  144 | 
  145 |     await page.getByRole("tab", { name: "Global Businesses" }).click();
  146 |     await expect(page.getByRole("heading", { name: "Expand into new markets with local accounts" })).toBeVisible();
  147 | 
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
```