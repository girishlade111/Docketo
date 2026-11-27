# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docketo.spec.ts >> Responsive zero-overflow across desktop, tablet, and mobile viewports >> no horizontal overflow at mobile-320
- Location: tests\e2e\docketo.spec.ts:101:5

# Error details

```
Error: / at mobile-320

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 320
Received:    2888
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
            - button "Products" [ref=e13]
            - link "About" [ref=e14] [cursor=pointer]:
              - /url: /about
            - link "Price" [ref=e15] [cursor=pointer]:
              - /url: /pricing
            - link "Blog" [ref=e16] [cursor=pointer]:
              - /url: /news
            - button "pages" [ref=e18]
          - link "Book a Demo" [ref=e20] [cursor=pointer]:
            - /url: /contact
          - button "Open navigation menu" [ref=e21]: Menu
        - heading "Banking for what you're building" [level=1] [ref=e24]
        - generic [ref=e26]:
          - generic [ref=e27]:
            - generic [ref=e28]:
              - img "Docketo mark" [ref=e29]
              - text: Docketo
            - paragraph [ref=e30]: Banking for what you're building
            - generic [ref=e31]:
              - button "Watch the video" [ref=e32]
              - link "Try for Free" [ref=e33] [cursor=pointer]:
                - /url: /pricing
          - generic:
            - heading "Ready to see how it works?" [level=2]
            - button "Play Demo"
        - generic "Partner logos" [ref=e35]:
          - generic [ref=e37]:
            - img "Partner Logo 1" [ref=e39]
            - img "Partner Logo 2" [ref=e41]
            - img "Partner Logo 3" [ref=e43]
            - img "Partner Logo 4" [ref=e45]
            - img "Partner Logo 5" [ref=e47]
            - img "Partner Logo 6" [ref=e49]
            - img "Partner Logo 7" [ref=e51]
            - img "Partner Logo 8" [ref=e53]
    - region "Banking infrastructure stack" [ref=e63]:
      - generic [ref=e67]:
        - article [ref=e68]:
          - generic [ref=e69]: YOUR APP
          - generic [ref=e71]:
            - generic [ref=e72]:
              - heading "Differentiate" [level=2] [ref=e73]
              - paragraph [ref=e74]: Banking built into your app. Customers built into your business.
            - img "Differentiate architecture diagram" [ref=e76]
        - article [ref=e77]:
          - generic [ref=e78]: YOUR TECH
          - generic [ref=e80]:
            - generic [ref=e81]:
              - heading "Integrate" [level=2] [ref=e82]
              - paragraph [ref=e83]: Build your tech on top of our platform with a simple API.
            - img "Integrate architecture diagram" [ref=e85]
        - article [ref=e86]:
          - generic [ref=e87]: OUR PLATFORM
          - generic [ref=e89]:
            - generic [ref=e90]:
              - heading "Power" [level=2] [ref=e91]
              - paragraph [ref=e92]: Power your offering with best-in-class banking infrastructure.
            - img "Power architecture diagram" [ref=e94]
        - article [ref=e95]:
          - generic [ref=e96]: OUR BANK LICENSE
          - generic [ref=e98]:
            - generic [ref=e99]:
              - heading "Secure" [level=2] [ref=e100]
              - paragraph [ref=e101]: Protect your customer's money with our regulatory cover.
            - img "Secure architecture diagram" [ref=e103]
    - region "Designed to help you build" [ref=e104]:
      - generic [ref=e108]:
        - heading "Designed to help you build" [level=2] [ref=e109]
        - generic [ref=e110]:
          - tablist "Fintech solutions" [ref=e111]:
            - tab "Payment platforms" [selected] [ref=e112]
            - tab "Wealth and savings apps" [ref=e113]
            - tab "Lending" [ref=e114]
            - tab "Proptech solutions" [ref=e115]
          - tabpanel "Payment platforms" [ref=e116]:
            - generic [ref=e117]:
              - heading "Handle repayments, reporting, and compliance in one place." [level=3] [ref=e118]
              - list [ref=e119]:
                - listitem [ref=e120]: Earn interest or commission
                - listitem [ref=e121]: Open new accounts instantly
                - listitem [ref=e122]: Own your customer experience
            - img "Payment platforms banking interface illustration" [ref=e124]
    - region "Our products" [ref=e125]:
      - generic [ref=e129]:
        - heading "Our products" [level=2] [ref=e130]
        - generic [ref=e131]:
          - link [ref=e132] [cursor=pointer]:
            - /url: /embedded-bank
            - generic [ref=e134]:
              - heading "Embedded bank accounts" [level=3] [ref=e135]
              - paragraph [ref=e136]: Bank accounts to power any product
          - link [ref=e137] [cursor=pointer]:
            - /url: /safeguarding
            - generic [ref=e139]:
              - heading "Safeguarding accounts" [level=3] [ref=e140]
              - paragraph [ref=e141]: Ringfenced accounts for EMIs and PIs
          - link [ref=e142] [cursor=pointer]:
            - /url: /business-bank
            - generic [ref=e144]:
              - heading "Business bank accounts" [level=3] [ref=e145]
              - paragraph [ref=e146]: Your own operational account, access via API or our app
          - link [ref=e147] [cursor=pointer]:
            - /url: /savings-accounts
            - generic [ref=e149]:
              - heading "Savings accounts" [level=3] [ref=e150]
              - paragraph [ref=e151]: Interest-bearing accounts for your customers
          - link [ref=e152] [cursor=pointer]:
            - /url: /client-money
            - generic [ref=e154]:
              - heading "Client money accounts" [level=3] [ref=e155]
              - paragraph [ref=e156]: CASS and CMP compliant accounts
          - link [ref=e157] [cursor=pointer]:
            - /url: /verify
            - generic [ref=e159]:
              - heading "Verify" [level=3] [ref=e160]
              - paragraph [ref=e161]: Automated customer onboarding and KYC
    - region "Customer testimonials" [ref=e162]:
      - generic [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - blockquote [ref=e169]:
              - heading "“We embedded banking directly into our product and finally own the customer relationship end to end. Retention is up and our team spends far less time on back-office headaches.”" [level=2] [ref=e170]
            - generic [ref=e171]:
              - generic [ref=e172]: Sarah Mitchell
              - generic [ref=e173]: Founder & CEO, Loop Payments
          - img "Sarah Mitchell, Founder & CEO, Loop Payments" [ref=e175]
        - generic [ref=e176]:
          - tablist "Testimonial slides" [ref=e177]:
            - 'tab "Show testimonial 1: Sarah Mitchell" [selected] [ref=e178]'
            - 'tab "Show testimonial 2: Priya Anand" [ref=e179]'
            - 'tab "Show testimonial 3: David Chen" [ref=e180]'
          - generic [ref=e181]:
            - button "Previous testimonial" [ref=e182]
            - button "Next testimonial" [ref=e183]
    - region "Start coding today" [ref=e184]:
      - generic [ref=e188]:
        - generic [ref=e189]:
          - heading "Start coding today" [level=2] [ref=e190]
          - list [ref=e191]:
            - listitem [ref=e192]:
              - generic [ref=e193]:
                - heading "Purpose-built API" [level=3] [ref=e194]
                - paragraph [ref=e195]: Using clean JSON over REST
            - listitem [ref=e196]:
              - generic [ref=e197]:
                - heading "Clear documentation" [level=3] [ref=e198]
                - paragraph [ref=e199]: Comprehensive API reference and guides
            - listitem [ref=e200]:
              - generic [ref=e201]:
                - heading "Immutable architecture" [level=3] [ref=e202]
                - paragraph [ref=e203]: Core banking system based on a durable event log
            - listitem [ref=e204]:
              - generic [ref=e205]:
                - heading "Cloud native" [level=3] [ref=e206]
                - paragraph [ref=e207]: Built on scalable, resilient infrastructure
            - listitem [ref=e208]:
              - generic [ref=e209]:
                - heading "Free sandbox" [level=3] [ref=e210]
                - paragraph [ref=e211]: Start testing right away, no fees, no sales pitch, no NDAs
        - img "Code snippet showing an API request to create a payee with a POST request and JSON payload" [ref=e213]
    - region "Customer stories" [ref=e214]:
      - generic [ref=e216]:
        - generic [ref=e217]:
          - heading [level=2] [ref=e220]: Africhange broadens its offering with UK bank accounts, powered by Docketo
          - generic [ref=e222]:
            - img "Prosper"
            - generic [ref=e223]:
              - heading "How Prosper removed payment complexity with Docket embedded bank accounts" [level=2] [ref=e224]
              - button "Play Prosper customer story video" [ref=e225]
          - heading [level=2] [ref=e228]: How Docket client money accounts helped RettsPay meet compliance
        - tablist "Select customer story" [ref=e230]:
          - tab "Show Prosper story" [selected] [ref=e231]:
            - img "Prosper"
          - tab "Show RettsPay story" [ref=e232]:
            - img "RettsPay"
          - tab "Show Africhange story" [ref=e233]:
            - img "Africhange"
    - region "Frequently Asked Questions (FAQ)" [ref=e234]:
      - generic [ref=e238]:
        - heading "Frequently Asked Questions (FAQ)" [level=2] [ref=e239]
        - generic [ref=e240]:
          - button "What is embedded banking, and how does it work?" [ref=e242]
          - button "Do I need my own banking license to build with Docket?" [ref=e244]
          - button "How quickly can I integrate and go live?" [ref=e246]
          - button "How do client money and safeguarding accounts keep funds protected?" [ref=e248]
          - button "What kinds of businesses use Docket?" [ref=e250]
          - button "How does Docket help with reconciliation and compliance?" [ref=e252]
    - region "Contact Sales" [ref=e253]:
      - generic [ref=e257]:
        - heading "Build, launch and scale your financial products on one powerful platform." [level=2] [ref=e258]
        - link "Contact Sales" [ref=e260] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e261]:
    - generic [ref=e264]:
      - link "Docketo home" [ref=e266] [cursor=pointer]:
        - /url: /
        - img "Docketo" [ref=e267]
      - generic [ref=e268]:
        - navigation "Footer" [ref=e269]:
          - generic [ref=e270]:
            - generic [ref=e271]: Product
            - list [ref=e272]:
              - listitem [ref=e273]:
                - link "Embedded bank" [ref=e274] [cursor=pointer]:
                  - /url: /embedded-bank
              - listitem [ref=e275]:
                - link "Safeguarding" [ref=e276] [cursor=pointer]:
                  - /url: /safeguarding
              - listitem [ref=e277]:
                - link "Savings accounts" [ref=e278] [cursor=pointer]:
                  - /url: /savings-accounts
              - listitem [ref=e279]:
                - link "Client money" [ref=e280] [cursor=pointer]:
                  - /url: /client-money
              - listitem [ref=e281]:
                - link "Business bank" [ref=e282] [cursor=pointer]:
                  - /url: /business-bank
              - listitem [ref=e283]:
                - link "Verify" [ref=e284] [cursor=pointer]:
                  - /url: /verify
          - generic [ref=e285]:
            - generic [ref=e286]: Explore
            - list [ref=e287]:
              - listitem [ref=e288]:
                - link "Home" [ref=e289] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e290]:
                - link "About" [ref=e291] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e292]:
                - link "Blog" [ref=e293] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e294]:
                - link "Contact us" [ref=e295] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e296]:
                - link "Careers" [ref=e297] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e298]:
                - link "Pricing" [ref=e299] [cursor=pointer]:
                  - /url: /pricing
          - generic [ref=e300]:
            - generic [ref=e301]: Policies
            - list [ref=e302]:
              - listitem [ref=e303]:
                - link "Privacy policy" [ref=e304] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e305]:
                - link "Terms & Conditions" [ref=e306] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e307]:
                - link "Cookies" [ref=e308] [cursor=pointer]:
                  - /url: /cookies
              - listitem [ref=e309]:
                - link "Eligibility" [ref=e310] [cursor=pointer]:
                  - /url: /eligibility
          - generic [ref=e311]:
            - generic [ref=e312]: Utility page
            - list [ref=e313]:
              - listitem [ref=e314]:
                - link "Style guide" [ref=e315] [cursor=pointer]:
                  - /url: /style-guide
              - listitem [ref=e316]:
                - link "Change log" [ref=e317] [cursor=pointer]:
                  - /url: /changelog
              - listitem [ref=e318]:
                - link "Password" [ref=e319] [cursor=pointer]:
                  - /url: /401
              - listitem [ref=e320]:
                - link "404 not found" [ref=e321] [cursor=pointer]:
                  - /url: /404
              - listitem [ref=e322]:
                - link "Licenses" [ref=e323] [cursor=pointer]:
                  - /url: /licenses
        - generic [ref=e324]:
          - paragraph [ref=e325]: Copyright © 2026 Docket. All rights reserved.
          - paragraph [ref=e326]:
            - text: Designed by
            - link "webocean" [ref=e327] [cursor=pointer]:
              - /url: https://webocean.io/
            - text: ", Powered by Webflow"
```

# Test source

```ts
  9   |   "/contact",
  10  |   "/careers",
  11  |   "/embedded-bank",
  12  |   "/safeguarding",
  13  |   "/savings-accounts",
  14  |   "/client-money",
  15  |   "/business-bank",
  16  |   "/verify",
  17  |   "/news",
  18  |   "/post-categories/product",
  19  |   "/post-categories/compliance",
  20  |   "/post-categories/company",
  21  |   "/post-categories/guides",
  22  |   ...ARTICLES.map((a) => `/post/${a.slug}`),
  23  |   "/privacy",
  24  |   "/terms-conditions",
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
  41  |     let currentRoute = "/";
  42  |     page.on("pageerror", (err) => pageErrors.push(`${currentRoute}: ${err.message}`));
  43  |     page.on("console", (msg) => {
  44  |       if (msg.type() === "error") {
  45  |         const text = msg.text();
  46  |         if (currentRoute === "/404" && text.includes("404 (Not Found)")) return;
  47  |         consoleErrors.push(`${currentRoute}: ${text}`);
  48  |       }
  49  |     });
  50  | 
  51  |     for (const route of ALL_34_ROUTES) {
  52  |       currentRoute = route;
  53  |       const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  54  |       const status = response?.status();
  55  |       if (route === "/404") {
  56  |         expect([200, 404]).toContain(status);
  57  |       } else {
  58  |         expect(status, `HTTP status for ${route}`).toBe(200);
  59  |       }
  60  |       await page.evaluate(() => document.fonts.ready);
  61  | 
  62  |       const metrics = await page.evaluate(() => {
  63  |         const imgs = Array.from(document.querySelectorAll("img"));
  64  |         const brokenImgs = imgs
  65  |           .filter((img) => img.complete && img.naturalWidth === 0)
  66  |           .map((img) => img.getAttribute("src") || img.alt);
  67  |         return {
  68  |           textLen: document.body.innerText.trim().length,
  69  |           overflowX: document.documentElement.scrollWidth > window.innerWidth,
  70  |           scrollWidth: document.documentElement.scrollWidth,
  71  |           innerWidth: window.innerWidth,
  72  |           brokenImgs,
  73  |         };
  74  |       });
  75  | 
  76  |       expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
  77  |       expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
  78  |       expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
  79  |     }
  80  | 
  81  |     expect(pageErrors, "Page runtime errors").toEqual([]);
  82  |     expect(consoleErrors, "Browser console errors").toEqual([]);
  83  |   });
  84  | 
  85  |   test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
  86  |     const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
  87  |     expect(response?.status()).toBe(404);
  88  |     await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  89  |   });
  90  | });
  91  | 
  92  | test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  93  |   const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  94  |   const viewports = [
  95  |     { name: "tablet-768", width: 768, height: 1024 },
  96  |     { name: "mobile-390", width: 390, height: 844 },
  97  |     { name: "mobile-320", width: 320, height: 568 },
  98  |   ];
  99  | 
  100 |   for (const vp of viewports) {
  101 |     test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
  102 |       await page.setViewportSize({ width: vp.width, height: vp.height });
  103 |       for (const route of keyRoutes) {
  104 |         await page.goto(route, { waitUntil: "domcontentloaded" });
  105 |         const overflow = await page.evaluate(() => ({
  106 |           scrollWidth: document.documentElement.scrollWidth,
  107 |           innerWidth: window.innerWidth,
  108 |         }));
> 109 |         expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
      |                                                                ^ Error: / at mobile-320
  110 |       }
  111 |     });
  112 |   }
  113 | });
  114 | 
  115 | test.describe("Interactive workflows and visual transitions", () => {
  116 |   test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
  117 |     await page.setViewportSize({ width: 1440, height: 900 });
  118 |     await page.goto("/", { waitUntil: "domcontentloaded" });
  119 | 
  120 |     // 1. Scroll-shrinking cinematic hero geometry
  121 |     const heroCard = page.locator('[class*="heroMainArea"]').first();
  122 |     const boxAtTop = await heroCard.boundingBox();
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
```