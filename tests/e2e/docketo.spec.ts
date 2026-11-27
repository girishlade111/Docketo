import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { ARTICLES } from "../../src/content/articles";

const ALL_34_ROUTES = [
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/careers",
  "/embedded-bank",
  "/safeguarding",
  "/savings-accounts",
  "/client-money",
  "/business-bank",
  "/verify",
  "/news",
  "/post-categories/product",
  "/post-categories/compliance",
  "/post-categories/company",
  "/post-categories/guides",
  ...ARTICLES.map((a) => `/post/${a.slug}`),
  "/privacy",
  "/terms-conditions",
  "/cookies",
  "/eligibility",
  "/style-guide",
  "/changelog",
  "/401",
  "/404",
  "/licenses",
];

test.describe("Docketo 34-route health, typography, and asset integrity", () => {
  test("every single one of the 34 reconstructed routes loads cleanly on desktop", async ({ page }) => {
    expect(ALL_34_ROUTES).toHaveLength(34);
    await page.setViewportSize({ width: 1440, height: 900 });

    const pageErrors: string[] = [];
    const consoleErrors: string[] = [];
    let currentRoute = "/";
    page.on("pageerror", (err) => pageErrors.push(`${currentRoute}: ${err.message}`));
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        if (currentRoute === "/404" && text.includes("404 (Not Found)")) return;
        consoleErrors.push(`${currentRoute}: ${text}`);
      }
    });

    for (const route of ALL_34_ROUTES) {
      currentRoute = route;
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      const status = response?.status();
      if (route === "/404") {
        expect([200, 404]).toContain(status);
      } else {
        expect(status, `HTTP status for ${route}`).toBe(200);
      }
      await page.evaluate(() => document.fonts.ready);

      const metrics = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll("img"));
        const brokenImgs = imgs
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute("src") || img.alt);
        return {
          textLen: document.body.innerText.trim().length,
          overflowX: document.documentElement.scrollWidth > window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
          brokenImgs,
        };
      });

      expect(metrics.textLen, `Non-empty content on ${route}`).toBeGreaterThan(30);
      expect(metrics.overflowX, `No horizontal overflow on ${route} (${metrics.scrollWidth} > ${metrics.innerWidth})`).toBe(false);
      expect(metrics.brokenImgs, `Broken images on ${route}`).toEqual([]);
    }

    expect(pageErrors, "Page runtime errors").toEqual([]);
    expect(consoleErrors, "Browser console errors").toEqual([]);
  });

  test("unknown routes serve HTTP 404 with Docketo custom 404 view", async ({ page }) => {
    const response = await page.goto("/definitely-missing-page-check", { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("link", { name: "Back To Home" })).toBeVisible();
  });
});

test.describe("Responsive zero-overflow across desktop, tablet, and mobile viewports", () => {
  const keyRoutes = ["/", "/about", "/pricing", "/contact", "/embedded-bank", "/news", "/style-guide"];
  const viewports = [
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-390", width: 390, height: 844 },
    { name: "mobile-320", width: 320, height: 568 },
  ];

  for (const vp of viewports) {
    test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      for (const route of keyRoutes) {
        await page.goto(route, { waitUntil: "domcontentloaded" });
        const overflow = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        }));
        expect(overflow.scrollWidth, `${route} at ${vp.name}`).toBeLessThanOrEqual(overflow.innerWidth);
      }
    });
  }
});

test.describe("Interactive workflows and visual transitions", () => {
  test("homepage hero shrinks on scroll, solution tabs/carousels/FAQ/modal operate cleanly", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // 1. Scroll-shrinking cinematic hero geometry
    const heroCard = page.locator('[class*="heroMainArea"]').first();
    const boxAtTop = await heroCard.boundingBox();
    expect(boxAtTop).not.toBeNull();
    expect(boxAtTop!.width).toBeGreaterThan(1350);

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(250);
    const boxScrolled = await heroCard.boundingBox();
    expect(boxScrolled).not.toBeNull();
    expect(boxScrolled!.width).toBeLessThan(800);

    // 2. Header dropdown opens and closes via Escape
    await page.evaluate(() => window.scrollTo(0, 950));
    const productsTrigger = page.getByRole("button", { name: "Products" }).first();
    await productsTrigger.click();
    await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("menuitem", { name: "Embedded bank accounts" })).toBeHidden();

    // 3. Play Demo opens accessible VideoModal and Escape closes it
    await page.getByRole("button", { name: "Play Demo" }).first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    // 4. Solution tabs switch content (all 4 tabs)
    const wealthTab = page.getByRole("tab", { name: "Wealth and savings apps" });
    await wealthTab.scrollIntoViewIfNeeded();
    await wealthTab.click();
    await expect(
      page.getByRole("heading", { name: "Streamline reconciliation and strengthen retention in one move." })
    ).toBeVisible();

    await page.getByRole("tab", { name: "Lending" }).click();
    await expect(page.getByRole("heading", { name: "One infrastructure, endless payment possibilities." })).toBeVisible();

    await page.getByRole("tab", { name: "Proptech solutions" }).click();
    await expect(
      page.getByRole("heading", { name: "Set your clients up for success with dedicated, compliant accounts." })
    ).toBeVisible();

    // 5. Testimonial carousel switches across all 3 slides
    await page.getByRole("button", { name: "Next testimonial" }).click();
    await expect(page.getByText("Priya Anand")).toBeVisible();
    await page.getByRole("button", { name: "Next testimonial" }).click();
    await expect(page.getByText("David Chen")).toBeVisible();

    // 6. Customer stories switcher
    await page.getByRole("tab", { name: "Show RettsPay story" }).click();
    await expect(page.getByRole("button", { name: "Play RettsPay customer story video" })).toBeVisible();

    // 7. Shared FAQ expand/collapse
    const firstFaq = page.getByRole("button", { name: /What is embedded banking/i });
    await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
    await firstFaq.click();
    await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
    await firstFaq.click();
    await expect(firstFaq).toHaveAttribute("aria-expanded", "false");
  });

  test("mobile navigation opens drawer and product submenu at 390px", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const menuBtn = page.getByRole("button", { name: /menu/i });
    await menuBtn.click();
    await expect(page.getByRole("link", { name: "Book a Demo" }).last()).toBeVisible();
    await page.keyboard.press("Escape");
  });

  test("news category filters match exact Webflow post counts [2, 3, 2, 2]", async ({ page }) => {
    const expectations: Array<[string, number]> = [
      ["/news", 9],
      ["/post-categories/product", 2],
      ["/post-categories/compliance", 3],
      ["/post-categories/company", 2],
      ["/post-categories/guides", 2],
    ];
    for (const [route, count] of expectations) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await expect(page.locator("article")).toHaveCount(count);
    }
  });

  test("contact form validates empty submit and records valid demonstration submission", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText(/First name is required/i)).toBeVisible();

    await page.getByLabel("First Name").fill("Alex");
    await page.getByLabel("Last Name").fill("Mercer");
    await page.getByLabel("Email").fill("alex@fintech-example.test");
    await page.getByLabel("Company Name").fill("Meridian Clearing");
    await page.getByLabel("Message").fill("Interested in embedded safeguarding APIs.");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText(/demonstration request has been validated locally/i)).toBeVisible();
  });

  test("protected 401 page displays static template demonstration notice on submit", async ({ page }) => {
    await page.goto("/401", { waitUntil: "domcontentloaded" });
    await page.getByPlaceholder("Enter your password").fill("test-pass");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText(/template protected-page fixture/i)).toBeVisible();
  });
});

test.describe("Axe WCAG accessibility audits across key routes", () => {
  const a11yRoutes = [
    "/",
    "/about",
    "/pricing",
    "/contact",
    "/careers",
    "/embedded-bank",
    "/news",
    "/post/how-embedded-bank-accounts-simplify-payment-reconciliation",
    "/privacy",
    "/style-guide",
    "/404",
  ];

  for (const route of a11yRoutes) {
    test(`zero critical or serious WCAG violations on ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const seriousOrCritical = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );

      expect(
        seriousOrCritical.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.slice(0, 3).map((n) => n.html),
        })),
        `WCAG serious/critical violations on ${route}`
      ).toEqual([]);
    });
  }
});
