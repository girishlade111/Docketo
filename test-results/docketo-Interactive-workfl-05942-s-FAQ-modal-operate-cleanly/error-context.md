# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Interactive workflows and visual transitions >> homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly
- Location: tests\e2e\docketo.spec.ts:110:3

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 45000ms exceeded.
Call log:
  - waiting for getByRole('tab', { name: 'Fintechs' })

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
          - generic:
            - generic:
              - img "Docketo mark"
              - generic: Docketo
            - paragraph: Banking for what you're building
            - generic:
              - button "Watch the video"
              - link "Try for Free":
                - /url: /pricing
          - generic [ref=e28]:
            - heading "Ready to see how it works?" [level=2] [ref=e29]
            - button "Play Demo" [ref=e30] [cursor=pointer]
        - generic "Partner logos" [ref=e33]:
          - generic [ref=e35]:
            - img "Partner Logo 1" [ref=e37]
            - img "Partner Logo 2" [ref=e39]
            - img "Partner Logo 3" [ref=e41]
            - img "Partner Logo 4" [ref=e43]
            - img "Partner Logo 5" [ref=e45]
            - img "Partner Logo 6" [ref=e47]
            - img "Partner Logo 7" [ref=e49]
            - img "Partner Logo 8" [ref=e51]
    - region "Banking infrastructure stack" [ref=e61]:
      - generic [ref=e65]:
        - article [ref=e66]:
          - generic [ref=e67]: YOUR APP
          - generic [ref=e71]:
            - generic [ref=e72]:
              - heading "Differentiate" [level=2] [ref=e73]
              - paragraph [ref=e74]: Banking built into your app. Customers built into your business.
            - img "Differentiate architecture diagram" [ref=e76]
        - article [ref=e77]:
          - generic [ref=e78]: YOUR TECH
          - generic [ref=e82]:
            - generic [ref=e83]:
              - heading "Integrate" [level=2] [ref=e84]
              - paragraph [ref=e85]: Build your tech on top of our platform with a simple API.
            - img "Integrate architecture diagram" [ref=e87]
        - article [ref=e88]:
          - generic [ref=e89]: OUR PLATFORM
          - generic [ref=e93]:
            - generic [ref=e94]:
              - heading "Power" [level=2] [ref=e95]
              - paragraph [ref=e96]: Power your offering with best-in-class banking infrastructure.
            - img "Power architecture diagram" [ref=e98]
        - article [ref=e99]:
          - generic [ref=e100]: OUR BANK LICENSE
          - generic [ref=e104]:
            - generic [ref=e105]:
              - heading "Secure" [level=2] [ref=e106]
              - paragraph [ref=e107]: Protect your customer's money with our regulatory cover.
            - img "Secure architecture diagram" [ref=e109]
    - region "Designed to help you build" [ref=e110]:
      - generic [ref=e114]:
        - heading "Designed to help you build" [level=2] [ref=e115]
        - generic [ref=e116]:
          - tablist "Fintech solutions" [ref=e117]:
            - tab "Payment platforms" [selected] [ref=e118] [cursor=pointer]
            - tab "Wealth and savings apps" [ref=e119] [cursor=pointer]
            - tab "Lending" [ref=e120] [cursor=pointer]
            - tab "Proptech solutions" [ref=e121] [cursor=pointer]
          - tabpanel "Payment platforms" [ref=e122]:
            - generic [ref=e123]:
              - heading "Handle repayments, reporting, and compliance in one place." [level=3] [ref=e124]
              - list [ref=e125]:
                - listitem [ref=e126]:
                  - generic [ref=e127]: Earn interest or commission
                - listitem [ref=e128]:
                  - generic [ref=e129]: Open new accounts instantly
                - listitem [ref=e130]:
                  - generic [ref=e131]: Own your customer experience
            - img "Payment platforms banking interface illustration" [ref=e133]
    - region "Our products" [ref=e134]:
      - generic [ref=e138]:
        - heading "Our products" [level=2] [ref=e139]
        - generic [ref=e140]:
          - link [ref=e141] [cursor=pointer]:
            - /url: /embedded-bank
            - generic [ref=e143]:
              - heading "Embedded bank accounts" [level=3] [ref=e144]
              - paragraph [ref=e145]: Bank accounts to power any product
          - link [ref=e146] [cursor=pointer]:
            - /url: /safeguarding
            - generic [ref=e148]:
              - heading "Safeguarding accounts" [level=3] [ref=e149]
              - paragraph [ref=e150]: Ringfenced accounts for EMIs and PIs
          - link [ref=e151] [cursor=pointer]:
            - /url: /business-bank
            - generic [ref=e153]:
              - heading "Business bank accounts" [level=3] [ref=e154]
              - paragraph [ref=e155]: Your own operational account, access via API or our app
          - link [ref=e156] [cursor=pointer]:
            - /url: /savings-accounts
            - generic [ref=e158]:
              - heading "Savings accounts" [level=3] [ref=e159]
              - paragraph [ref=e160]: Interest-bearing accounts for your customers
          - link [ref=e161] [cursor=pointer]:
            - /url: /client-money
            - generic [ref=e163]:
              - heading "Client money accounts" [level=3] [ref=e164]
              - paragraph [ref=e165]: CASS and CMP compliant accounts
          - link [ref=e166] [cursor=pointer]:
            - /url: /verify
            - generic [ref=e168]:
              - heading "Verify" [level=3] [ref=e169]
              - paragraph [ref=e170]: Automated customer onboarding and KYC
    - region "Customer testimonials" [ref=e171]:
      - generic [ref=e175]:
        - generic [ref=e176]:
          - generic [ref=e177]:
            - blockquote [ref=e178]:
              - heading "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”" [level=2] [ref=e179]
            - generic [ref=e180]:
              - generic [ref=e181]: Sarah Mitchell
              - generic [ref=e182]: Founder & CEO, Loop Payments
          - img "Sarah Mitchell, Founder & CEO, Loop Payments" [ref=e184]
        - generic [ref=e185]:
          - tablist "Testimonial slides" [ref=e186]:
            - 'tab "Show testimonial 1: Sarah Mitchell" [selected] [ref=e187] [cursor=pointer]'
            - 'tab "Show testimonial 2: Priya Anand" [ref=e188] [cursor=pointer]'
            - 'tab "Show testimonial 3: David Chen" [ref=e189] [cursor=pointer]'
          - generic [ref=e190]:
            - button "Previous testimonial" [ref=e191] [cursor=pointer]
            - button "Next testimonial" [ref=e192] [cursor=pointer]
    - region "Start coding today" [ref=e193]:
      - generic [ref=e197]:
        - generic [ref=e198]:
          - heading "Start coding today" [level=2] [ref=e199]
          - list [ref=e200]:
            - listitem [ref=e201]:
              - generic [ref=e202]:
                - heading "Purpose-built API" [level=3] [ref=e203]
                - paragraph [ref=e204]: Using clean JSON over REST
            - listitem [ref=e205]:
              - generic [ref=e206]:
                - heading "Clear documentation" [level=3] [ref=e207]
                - paragraph [ref=e208]: Comprehensive API reference and guides
            - listitem [ref=e209]:
              - generic [ref=e210]:
                - heading "Immutable architecture" [level=3] [ref=e211]
                - paragraph [ref=e212]: Core banking system based on a durable event log
            - listitem [ref=e213]:
              - generic [ref=e214]:
                - heading "Cloud native" [level=3] [ref=e215]
                - paragraph [ref=e216]: Built on scalable, resilient infrastructure
            - listitem [ref=e217]:
              - generic [ref=e218]:
                - heading "Free sandbox" [level=3] [ref=e219]
                - paragraph [ref=e220]: Start testing right away, no fees, no sales pitch, no NDAs
        - img "Code snippet showing an API request to create a payee with a POST request and JSON payload" [ref=e222]
    - region "Customer stories" [ref=e223]:
      - generic [ref=e225]:
        - generic [ref=e226]:
          - heading [level=2] [ref=e230]: Africhange broadens its offering with UK bank accounts, powered by Docketo
          - generic [ref=e232]:
            - img "Prosper" [ref=e233]
            - generic [ref=e235]:
              - heading "How Prosper removed payment complexity with Docket embedded bank accounts" [level=2] [ref=e236]
              - button "Play Prosper customer story video" [ref=e237] [cursor=pointer]
          - heading [level=2] [ref=e241]: How Docket client money accounts helped RettsPay meet compliance
        - tablist "Select customer story" [ref=e243]:
          - tab "Show Prosper story" [selected] [ref=e244] [cursor=pointer]:
            - img "Prosper" [ref=e245]
          - tab "Show RettsPay story" [ref=e246] [cursor=pointer]:
            - img "RettsPay" [ref=e247]
          - tab "Show Africhange story" [ref=e248] [cursor=pointer]:
            - img "Africhange" [ref=e249]
    - region "Frequently Asked Questions (FAQ)" [ref=e250]:
      - generic [ref=e254]:
        - heading "Frequently Asked Questions (FAQ)" [level=2] [ref=e255]
        - generic [ref=e256]:
          - button "What is embedded banking, and how does it work?" [ref=e258] [cursor=pointer]
          - button "Do I need my own banking license to build with Docket?" [ref=e261] [cursor=pointer]
          - button "How quickly can I integrate and go live?" [ref=e264] [cursor=pointer]
          - button "How do client money and safeguarding accounts keep funds protected?" [ref=e267] [cursor=pointer]
          - button "What kinds of businesses use Docket?" [ref=e270] [cursor=pointer]
          - button "How does Docket help with reconciliation and compliance?" [ref=e273] [cursor=pointer]
    - region "Contact Sales" [ref=e275]:
      - generic [ref=e279]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e280]
        - link "Contact Sales" [ref=e282] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e283]:
    - generic [ref=e286]:
      - link "Docketo home" [ref=e288] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e289]
      - generic [ref=e290]:
        - navigation "Footer" [ref=e291]:
          - generic [ref=e292]:
            - generic [ref=e293]: Product
            - list [ref=e294]:
              - listitem [ref=e295]:
                - link "Embedded bank" [ref=e296] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e297]:
                - link "Safeguarding" [ref=e298] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e299]:
                - link "Savings accounts" [ref=e300] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e301]:
                - link "Client money" [ref=e302] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e303]:
                - link "Business bank" [ref=e304] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e305]:
                - link "Verify" [ref=e306] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e307]:
            - generic [ref=e308]: Explore
            - list [ref=e309]:
              - listitem [ref=e310]:
                - link "Home" [ref=e311] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e312]:
                - link "About" [ref=e313] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e314]:
                - link "Blog" [ref=e315] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e316]:
                - link "Contact us" [ref=e317] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e318]:
                - link "Careers" [ref=e319] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e320]:
                - link "Pricing" [ref=e321] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e322]:
            - generic [ref=e323]: Policies
            - list [ref=e324]:
              - listitem [ref=e325]:
                - link "Privacy policy" [ref=e326] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e327]:
                - link "Terms & Conditions" [ref=e328] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e329]:
                - link "Cookies" [ref=e330] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e331]:
                - link "Eligibility" [ref=e332] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e333]:
            - generic [ref=e334]: Utility page
            - list [ref=e335]:
              - listitem [ref=e336]:
                - link "Style guide" [ref=e337] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e338]:
                - link "Change log" [ref=e339] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e340]:
                - link "Password" [ref=e341] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e342]:
                - link "404 not found" [ref=e343] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e344]:
                - link "Licenses" [ref=e345] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e346]:
          - paragraph [ref=e347]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e348]:
            - text: Designed by
            - link "webocean" [ref=e349] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
  - alert [ref=e351]
```

# Test source

```ts
  43  |       if (msg.type() === "error") consoleErrors.push(msg.text());
  44  |     });
  45  | 
  46  |     for (const route of ALL_34_ROUTES) {
  47  |       const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  48  |       const status = response?.status();
  49  |       if (route === "/404") {
  50  |         expect([200, 404]).toContain(status);
  51  |       } else {
  52  |         expect(status, `HTTP status for ${route}`).toBe(200);
  53  |       }
  54  |       await page.evaluate(() => document.fonts.ready);
  55  | 
  56  |       const metrics = await page.evaluate(() => {
  57  |         const imgs = Array.from(document.querySelectorAll("img"));
  58  |         const brokenImgs = imgs
  59  |           .filter((img) => img.complete && img.naturalWidth === 0)
  60  |           .map((img) => img.getAttribute("src") || img.alt);
  61  |         return {
  62  |           textLen: document.body.innerText.trim().length,
  63  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  64  |           scrollWidth: document.documentElement.scrollWidth,
  65  |           innerWidth: window.innerWidth,
  66  |           brokenImgs,
  67  |         };
  68  |       });
  69  | 
  70  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  71  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  72  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  73  |     }
  74  | 
  75  |     expect(pageErrors, "Page runtime errors").toEqual([]);
  76  |     expect(consoleErrors, "Browser console errors").toEqual([]);
  77  |   });
  78  | 
  79  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  80  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  81  |     expect(response?.status()).toBe(404);
  82  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  83  |   });
  84  | });
  85  | 
  86  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  87  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  88  |   const viewports = [
  89  |     { name: "tablet-768", width: 768, height: 1024 },
  90  |     { name: "mobile-390", width: 390, height: 844 },
  91  |     { name: "mobile-320", width: 320, height: 568 },
  92  |   ];
  93  | 
  94  |   for (const vp of viewports) {
  95  |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  96  |       await page.setViewportSize({ width: vp.width, height: vp.height });
  97  |       for (const route of keyRoutes) {
  98  |         await page.goto(route, { waitUntil: "domcontentloaded" });
  99  |         const overflow = await page.evaluate(() => ({
  100 |           scrollWidth: document.documentElement.scrollWidth,
  101 |           innerWidth: window.innerWidth,
  102 |         }));
  103 |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
  104 |       }
  105 |     });
  106 |   }
  107 | });
  108 | 
  109 | test.describe("Interactive workflows and visual transitions", () => {
  110 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  111 |     await page.setViewportSize({ width: 1440, height: 900 });
  112 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  113 | 
  114 |     // 1. Scroll-shrinking cinematic hero geometry
  115 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  116 |     const boxAtTop = await heroCard.boundingBox();
  117 |     expect(boxAtTop).not.toBeNull();
  118 |     expect(boxAtTop!.width).toBeGreaterThan(1350);
  119 | 
  120 |     await page.evaluate(() => window.scrollTo(0, 1000));
  121 |     await page.waitForTimeout(250);
  122 |     const boxScrolled = await heroCard.boundingBox();
  123 |     expect(boxScrolled).not.toBeNull();
  124 |     expect(boxScrolled!.width).toBeLessThan(800);
  125 | 
  126 |     // 2. Header dropdown opens and closes via Escape
  127 |     await page.evaluate(() => window.scrollTo(0, 950));
  128 |     const productsTrigger = page.getByRole("button", { name: "Products" }).first();
  129 |     await productsTrigger.click();
  130 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
  131 |     await page.keyboard.press("Escape");
  132 |     await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();
  133 | 
  134 |     // 3. Play Demo opens accessible VideoModal and Escape closes it
  135 |     await page.getByRole("button", { name: "Play Demo" }).first().click();
  136 |     const dialog = page.getByRole("dialog");
  137 |     await expect(dialog).toBeVisible();
  138 |     await page.keyboard.press("Escape");
  139 |     await expect(dialog).toBeHidden();
  140 | 
  141 |     // 4. Solution tabs switch content (all 4 tabs)
  142 |     const fintechTab = page.getByRole("tab", { name: "Fintechs" });
> 143 |     await fintechTab.scrollIntoViewIfNeeded();
      |                      ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 45000ms exceeded.
  144 |     await fintechTab.click();
  145 |     await expect(page.getByRole("heading", { name: "Scale faster without banking complexity" })).toBeVisible();
  146 | 
  147 |     await page.getByRole("tab", { name: "Platforms & Marketplaces" }).click();
  148 |     await expect(page.getByRole("heading", { name: "Power seamless payouts and account flows" })).toBeVisible();
  149 | 
  150 |     await page.getByRole("tab", { name: "Global Businesses" }).click();
  151 |     await expect(page.getByRole("heading", { name: "Expand into new markets with local accounts" })).toBeVisible();
  152 | 
  153 |     // 5. Testimonial carousel switches across all 3 slides
  154 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  155 |     await expect(page.getByText("Elena Vance")).toBeVisible();
  156 |     await page.getByRole("button", { name: "Next testimonial" }).click();
  157 |     await expect(page.getByText("David Okafor")).toBeVisible();
  158 | 
  159 |     // 6. Customer stories switcher
  160 |     await page.getByRole("tab", { name: "Show ClearLedger story" }).click();
  161 |     await expect(page.getByRole("button", { name: "Play ClearLedger customer story video" })).toBeVisible();
  162 | 
  163 |     // 7. Shared FAQ expand/collapse
  164 |     const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
  165 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  166 |     await firstFaq.click();
  167 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
  168 |     await firstFaq.click();
  169 |     await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  170 |   });
  171 | 
  172 |   test("mobile navigation opens drawer and product submenu at 390px", async ({ page }) => {
  173 |     await page.setViewportSize({ width: 390, height: 844 });
  174 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  175 |     const menuBtn = page.getByRole("button", { name: /menu/i });
  176 |     await menuBtn.click();
  177 |     await expect(page.getByRole("link", { name: "Book a Demo" }).last()).toBeVisible();
  178 |     await page.keyboard.press("Escape");
  179 |   });
  180 | 
  181 |   test("news category filters match exact Webflow post counts [2, 3, 2, 2]", async ({ page }) => {
  182 |     const expectations: Array<[string, number]> = [
  183 |       ["/news", 9],
  184 |       ["/post-categories/product", 2],
  185 |       ["/post-categories/compliance", 3],
  186 |       ["/post-categories/company", 2],
  187 |       ["/post-categories/guides", 2],
  188 |     ];
  189 |     for (const [route, count] of expectations) {
  190 |       await page.goto(route, { waitUntil: "domcontentloaded" });
  191 |       await expect(page.locator("article")).toHaveCount(count);
  192 |     }
  193 |   });
  194 | 
  195 |   test("contact form validates empty submit and records valid demonstration submission", async ({ page }) => {
  196 |     await page.goto("/contact", { waitUntil: "domcontentloaded" });
  197 |     await page.getByRole("button", { name: "Submit" }).click();
  198 |     await expect(page.getByText(/First name is required/i)).toBeVisible();
  199 | 
  200 |     await page.getByLabel("First Name").fill("Alex");
  201 |     await page.getByLabel("Last Name").fill("Mercer");
  202 |     await page.getByLabel("Email").fill("alex@fintech-example.test");
  203 |     await page.getByLabel("Company Name").fill("Meridian Clearing");
  204 |     await page.getByLabel("Message").fill("Interested in embedded safeguarding APIs.");
  205 |     await page.getByRole("button", { name: "Submit" }).click();
  206 |     await expect(page.getByText(/demonstration request has been validated locally/i)).toBeVisible();
  207 |   });
  208 | 
  209 |   test("protected 401 page displays static template demonstration notice on submit", async ({ page }) => {
  210 |     await page.goto("/401", { waitUntil: "domcontentloaded" });
  211 |     await page.getByPlaceholder("Enter your password").fill("test-pass");
  212 |     await page.getByRole("button", { name: "Submit" }).click();
  213 |     await expect(page.getByText(/template protected-page fixture/i)).toBeVisible();
  214 |   });
  215 | });
  216 | 
  217 | test.describe("Axe WCAG accessibility audits across key routes", () => {
  218 |   const a11yRoutes = [
  219 |     "/",
  220 |     "/about",
  221 |     "/pricing",
  222 |     "/contact",
  223 |     "/careers",
  224 |     "/embedded-bank",
  225 |     "/news",
  226 |     "/post/how-embedded-bank-accounts-simplify-payment-reconciliation",
  227 |     "/privacy",
  228 |     "/style-guide",
  229 |     "/404",
  230 |   ];
  231 | 
  232 |   for (const route of a11yRoutes) {
  233 |     test(`zero critical or serious WCAG violations on ${route}`, async ({ page }) => {
  234 |       await page.setViewportSize({ width: 1440, height: 900 });
  235 |       await page.goto(route, { waitUntil: "networkidle" });
  236 |       await page.evaluate(() => document.fonts.ready);
  237 | 
  238 |       const results = await new AxeBuilder({ page })
  239 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  240 |         .analyze();
  241 | 
  242 |       const seriousOrCritical = results.violations.filter(
  243 |         (v) => v.impact === "critical" || v.impact === "serious"
```