# Docketo Reconstruction Verification Report

## Scope and Demonstration Boundary
- Target reconstructed: `https://docketo.webflow.io/` (34 public routes: homepage, 6 product pages, 5 corporate/marketing pages, 4 policy pages, 5 utility pages, 4 CMS article-category pages, and 9 CMS article detail pages), plus `/api/contact` and Next.js `not-found.tsx`.
- Demonstration notice: All banking, safeguarding, FSCS, client-money, and pricing statements (`£0 / month`, `£499 / month`, `Custom pricing`) remain illustrative template fixtures. No live banking ledger, KYC/KYB verification backend, credential collection, or external form relay to Webflow is implemented (`POST /api/contact` validates locally via Zod and operates in `demo` mode unless `CONTACT_WEBHOOK_URL` is configured).

## Verification Gate Results (Latest Run After Final Edit)
All checks executed cleanly against the production build (`npm run start`) with zero edits afterward:

- **TypeScript (`npm run typecheck`)**: `tsc --noEmit` exited `0` with zero errors.
- **ESLint (`npm run lint`)**: `next lint` exited `0` (`No ESLint warnings or errors`).
- **Vitest (`npm test`)**: 2 test files passed, 9/9 tests passed:
  - `tests/unit/content.test.ts` (6 tests): 6 products matching `HOMEPAGE_PRODUCT_DIRECTORY` & `PRODUCT_PAGES`, 9 unique articles matching `[2, 3, 2, 2]` category distribution across 5 `ARTICLE_CATEGORIES`, non-production pricing flags, shared FAQs & footer nav groups, zero missing `/assets/` files in `public/`, zero emojis and zero em/en dashes in `src/`.
  - `tests/integration/contact-api.test.ts` (3 tests): valid demonstration POST returns HTTP `200` with `mode: "demo"`, invalid fields return `400`, malformed JSON returns `400`.
- **Production Build (`npm run build`)**: `next build` exited `0`, generating 37 static/SSG route entries plus dynamic `POST /api/contact`.
- **Playwright E2E + Axe WCAG (`npm run test:e2e`)**: 21/21 tests passed (`45.9s`):
  - All 34 reconstructed routes load cleanly on desktop (`1440x900`) with HTTP `200` (and `/404` accepting `[200, 404]`), zero runtime `pageerror`, zero unexpected console errors, zero broken `<img>` elements, and zero horizontal overflow.
  - Unknown route `/definitely-missing-page-check` returns HTTP `404` with `Back To Home`.
  - Responsive zero-overflow verified across `768x1024`, `390x844`, and `320x568` on `/`, `/about`, `/pricing`, `/contact`, `/embedded-bank`, `/news`, and `/style-guide`.
  - Verified interactions: scroll-shrinking desktop hero (`> 1350px` at top -> `< 800px` scrolled), `Products` dropdown open & `Escape` close, `VideoModal` open/close, all 4 `SolutionTabs`, all 3 `TestimonialCarousel` slides, `CustomerStoryCarousel` switching, `SharedFaq` accordion toggles, mobile nav drawer at `390px`, `/news` category filtering counts `[9, 2, 3, 2, 2]`, `/contact` validation + submission, and `/401` static template notice.
  - Axe WCAG 2.0/2.1 AA audit (`@axe-core/playwright`): zero `critical` or `serious` violations across all 11 tested routes (`/`, `/about`, `/pricing`, `/contact`, `/careers`, `/embedded-bank`, `/news`, `/post/how-embedded-bank-accounts-simplify-payment-reconciliation`, `/privacy`, `/style-guide`, `/404`).

## Visual & Geometry Comparison (`scripts/verification/compare-screenshots.ts`)
Measured above-the-fold (`pixelmatch` threshold `0.15`) and full-page bounding height against live Webflow captures (`research/reference/screenshots/`):

| Target | Route | Local Size | Reference Size | Fold Mismatch |
|---|---|---|---|---|
| `desktop-home` | `/` | `1440x10139` | `1440x10415` | `2.82%` |
| `desktop-about` | `/about` | `1440x6461` | `1440x6468` | `24.31%` |
| `desktop-pricing` | `/pricing` | `1440x3080` | `1440x3044` | `20.83%` |
| `desktop-contact` | `/contact` | `1440x1671` | `1440x1548` | `9.6%` |
| `desktop-embedded-bank` | `/embedded-bank` | `1440x5060` | `1440x5208` | `8.8%` |
| `desktop-news` | `/news` | `1440x2740` | `1440x2703` | `46.99%` |
| `desktop-style-guide` | `/style-guide` | `1440x3092` | `1440x3280` | `21.44%` |
| `mobile-home` | `/` | `390x8353` | `780x15944` (2x DPR) | `40.45%` |

## Defects Found and Resolved During Verification
1. **Desktop Hero Initial Overlay (`CinematicHero.module.css`)**: CSS `!important` on base `.smallDemoBlock` previously forced `opacity: 1` on initial load. Scoped the override strictly to `@media (max-width: 991px)` and raised `.revealedTitleWrap` width to `660px` with `topOffsetVh = progress * 31` so the initial hero lockup renders cleanly at `scrollY = 0` and the 2-line heading clears the shrunk video card when scrolled.
2. **Header Hover vs Click Race (`SiteHeader.tsx`)**: Hovering onto `.dropdown` fired `onMouseEnter` immediately before `onClick`, toggling the dropdown shut on click. Fixed via `hoverTimestampRef` plus raising hero `.headerLayer` `z-index` when scrolled past `0.35`.
3. **Product Hero Button Accessible Name (`ProductPageView.tsx`)**: Moved decorative marquee overlay outside the `<button>` element to resolve Axe `label-content-name-mismatch`.
4. **Footer Contrast & Attribution Link (`SiteFooter.module.css`)**: Updated `.groupTitle` and `.copyText` to `#a5a198` on `#100f0d` and underlined `.attrLink` (`#cccac6`) to satisfy WCAG AA contrast and `link-in-text-block`.

## Reference Link & Content Discrepancies Preserved vs Configurable
Documented in `research/manifests/link-discrepancies.json` (8 items) and `research/manifests/content-discrepancies.json` (16 items). Key routing behavior is toggled via `NEXT_PUBLIC_SITE_MODE` (`"reference"` default vs `"production"`) in `src/config/site.ts`.
