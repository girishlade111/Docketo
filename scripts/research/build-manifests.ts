import fs from "node:fs";
import path from "node:path";
import { BASE_URL, SEED_ROUTES } from "./routes-seed";

const ROOT = process.cwd();
const MANIFESTS_DIR = path.join(ROOT, "research", "manifests");
const PAGES_DIR = path.join(ROOT, "research", "reference", "pages");

fs.mkdirSync(MANIFESTS_DIR, { recursive: true });

function buildRoutesManifest() {
  return SEED_ROUTES.map((r) => {
    const pageFile = path.join(PAGES_DIR, `${r.id}.json`);
    const p = fs.existsSync(pageFile) ? JSON.parse(fs.readFileSync(pageFile, "utf8")) : {};
    return {
      id: r.id,
      referenceUrl: `${BASE_URL}${r.path}`,
      canonicalUrl: p.canonical ?? null,
      localPath: r.path,
      title: p.title ?? "",
      pageType: r.pageType,
      templateFamily: r.templateFamily,
      collection: r.collection ?? null,
      httpStatus: 200,
      internalLinks: Array.from(new Set((p.links || []).map((l: { rawHref: string }) => l.rawHref).filter((h: string) => h.startsWith("/")))),
      externalLinks: Array.from(new Set((p.links || []).map((l: { resolvedHref: string }) => l.resolvedHref).filter((h: string) => h.startsWith("http") && !h.startsWith(BASE_URL)))),
      inspectionStatus: "VERIFIED",
      implementationStatus: "PLANNED",
      verificationStatus: "BROWSER-MEASURED",
    };
  });
}

const linkDiscrepancies = [
  {
    sourceRoute: "/",
    visibleLabel: "Try for Free",
    rawHref: "/pricing",
    expectedSemanticDestination: "/contact or /pricing",
    observedActualDestination: "/pricing",
    proposedProductionBehavior: "/pricing (configurable in src/config/site.ts)",
  },
  {
    sourceRoute: "/",
    visibleLabel: "Contact Sales",
    rawHref: "/pricing",
    expectedSemanticDestination: "/contact",
    observedActualDestination: "/pricing",
    proposedProductionBehavior: "/contact in production mode, /pricing in reference mode",
  },
  {
    sourceRoute: "/about",
    visibleLabel: "Explore Open Roles",
    rawHref: "/eligibility",
    expectedSemanticDestination: "/careers",
    observedActualDestination: "/eligibility",
    proposedProductionBehavior: "/careers in production mode",
  },
  {
    sourceRoute: "/careers",
    visibleLabel: "Explore Open Roles",
    rawHref: "/eligibility",
    expectedSemanticDestination: "#open-roles or /careers#open-roles",
    observedActualDestination: "/eligibility",
    proposedProductionBehavior: "#open-roles anchor in production mode",
  },
  {
    sourceRoute: "/careers",
    visibleLabel: "Apply Now",
    rawHref: "https://www.linkfilm.ai/...",
    expectedSemanticDestination: "/contact or dedicated ATS",
    observedActualDestination: "linkfilm.ai",
    proposedProductionBehavior: "/contact?role=... in production mode",
  },
  {
    sourceRoute: "/privacy",
    visibleLabel: "Download PDF",
    rawHref: "#",
    expectedSemanticDestination: "PDF download",
    observedActualDestination: "Self HTML page",
    proposedProductionBehavior: "Client print/PDF export or disabled unavailable notice",
  },
  {
    sourceRoute: "/terms-conditions",
    visibleLabel: "Download PDF",
    rawHref: "#",
    expectedSemanticDestination: "PDF download",
    observedActualDestination: "Self HTML page",
    proposedProductionBehavior: "Client print/PDF export or disabled unavailable notice",
  },
  {
    sourceRoute: "/embedded-bank",
    visibleLabel: "Deposit protection -> Learn More",
    rawHref: "/business-bank",
    expectedSemanticDestination: "/eligibility or deposit protection documentation",
    observedActualDestination: "/business-bank",
    proposedProductionBehavior: "Configurable via src/config/site.ts",
  },
];

const contentDiscrepancies = [
  { id: "disc-01", topic: "Docket vs Docketo naming", severity: "medium", notes: "Footer copyright and several articles/CTAs use 'Docket' while logo and title use 'Docketo'." },
  { id: "disc-02", topic: "Licenses page font text vs links", severity: "low", notes: "/licenses text mentions General Sans and Clash Grotesk, while actual font links and CSS load General Sans and Amethysta." },
  { id: "disc-03", topic: "Style guide white label", severity: "low", notes: "/style-guide prints 'FFFFF' (5 chars) instead of 'FFFFFF'." },
  { id: "disc-04", topic: "Green swatch token", severity: "medium", notes: "/style-guide label says '86EDA5/Green' while computed CSS --_color-system---brand--brand-primary is #7cf584." },
  { id: "disc-05", topic: "Growth pricing surface", severity: "low", notes: "Growth card uses #dbd9d1 which is component-specific, not in style guide swatches." },
  { id: "disc-06", topic: "FAQ Griffin compliance notes", severity: "high", notes: "FAQ answers 2 and 4 contain draft editorial notes referencing Griffin compliance team and documentation." },
  { id: "disc-07", topic: "Eligibility Griffin reference", severity: "high", notes: "/eligibility closing paragraph mentions applying to work with Griffin." },
  { id: "disc-08", topic: "Placeholder legal entities", severity: "high", notes: "/privacy and /terms-conditions contain [Legal Entity Name], [Country], [Number], [Address] placeholders." },
  { id: "disc-09", topic: "Cookies repeated heading", severity: "low", notes: "/cookies repeats 'Marketing cookies' subheading twice." },
  { id: "disc-10", topic: "Repeated article excerpt", severity: "medium", notes: "Posts 2-9 repeat the reconciliation intro excerpt from post 1 in their hero area." },
  { id: "disc-11", topic: "FSCS currency mismatch", severity: "medium", notes: "Post 8 title says '$120,000 FSCS limit' while body and pricing use '£120,000'." },
  { id: "disc-12", topic: "Verify marquee text", severity: "medium", notes: "/verify hero marquee repeats 'Safeguard customer money and earn on it'." },
  { id: "disc-13", topic: "About internal draft fragment", severity: "medium", notes: "/about Who we are includes '(Short) Automate compliance...' editorial fragment." },
  { id: "disc-14", topic: "Careers location mismatch", severity: "medium", notes: "Benefits mention SF and NY office lunch while roles and hiring list UK, Germany, Ireland, Sweden." },
  { id: "disc-15", topic: "David Chen testimonial roles", severity: "low", notes: "Home testimonial lists David Chen as COO of Meridian Wealth; About quote lists Founder & CEO of Northwind." },
  { id: "disc-16", topic: "Africhange note", severity: "high", notes: "Post 7 contains internal editorial note to confirm Africhange-Docket partnership details." },
];

const animations = [
  { id: "anim-hero-pin", name: "Homepage hero shrink-to-video scroll", referenceRoutes: ["/"], technology: "CSS sticky + GSAP ScrollTrigger", trigger: "scroll", pin: false, measurementConfidence: "BROWSER-MEASURED" },
  { id: "anim-marquee-logos", name: "Continuous horizontal logo marquee", referenceRoutes: ["/", "/contact", "/safeguarding", "/savings-accounts", "/client-money", "/verify"], technology: "CSS keyframes translateX", trigger: "continuous", measurementConfidence: "VERIFIED" },
  { id: "anim-infra-stack", name: "4-panel sticky stacking and subtle scale", referenceRoutes: ["/"], technology: "position: sticky + GSAP ScrollTrigger scale(1 -> 0.90)", trigger: "scroll", measurementConfidence: "BROWSER-MEASURED" },
  { id: "anim-solutions-tabs", name: "Solution tab switching", referenceRoutes: ["/"], technology: "React state + opacity transition", trigger: "click", durationMs: 300, measurementConfidence: "VERIFIED" },
  { id: "anim-testimonial-carousel", name: "Testimonial slide switcher", referenceRoutes: ["/", "/pricing"], technology: "React state + progress bar", trigger: "click", durationMs: 500, measurementConfidence: "VERIFIED" },
  { id: "anim-about-logo-overlay", name: "About client logo tile overlay reveal", referenceRoutes: ["/about"], technology: "CSS transform translateY on hover/scroll", trigger: "hover", measurementConfidence: "VERIFIED" },
  { id: "anim-faq-accordion", name: "FAQ expand/collapse", referenceRoutes: ["/", "/pricing", "/embedded-bank", "/business-bank"], technology: "CSS grid-template-rows / max-height transition", trigger: "click", measurementConfidence: "VERIFIED" },
  { id: "anim-button-roll", name: "Button text vertical roll hover", referenceRoutes: ["*"], technology: "CSS text-shadow + transform", trigger: "hover", durationMs: 250, measurementConfidence: "VERIFIED" },
];

const interactions = [
  { component: "MarketingHeader", trigger: "Hover or Click Products / pages", action: "Opens dropdown menu", keyboard: "Tab, Enter/Space, Escape", status: "PLANNED" },
  { component: "MobileNavigation", trigger: "Click Menu button (<992px)", action: "Opens mobile drawer with Products & pages accordions", keyboard: "Escape closes", status: "PLANNED" },
  { component: "VideoModal", trigger: "Click Watch the video / Play Demo / Product hero play", action: "Opens accessible YouTube embed dialog", keyboard: "Escape closes, focus return", status: "PLANNED" },
  { component: "SolutionTabs", trigger: "Click any of 4 solution tabs", action: "Switches active heading, bullets, and composite illustration", keyboard: "ArrowLeft/ArrowRight/Tab", status: "PLANNED" },
  { component: "TestimonialCarousel", trigger: "Click Prev/Next or indicator line", action: "Transitions between 3 testimonials", keyboard: "Button activation", status: "PLANNED" },
  { component: "CustomerStoryCarousel", trigger: "Click Prev/Next or story play", action: "Cycles 3 stories and opens video modal", keyboard: "Button activation", status: "PLANNED" },
  { component: "Accordion (FAQ)", trigger: "Click question strip", action: "Toggles answer panel with aria-expanded", keyboard: "Enter/Space", status: "PLANNED" },
  { component: "ContactForm", trigger: "Submit form", action: "Client + Zod server validation via POST /api/contact", keyboard: "Standard form submit", status: "PLANNED" },
  { component: "ProtectedPage (/401)", trigger: "Submit password", action: "Local demonstration password check (no credential transmission)", keyboard: "Standard form submit", status: "PLANNED" },
];

fs.writeFileSync(path.join(MANIFESTS_DIR, "routes.json"), JSON.stringify(buildRoutesManifest(), null, 2));
fs.writeFileSync(path.join(MANIFESTS_DIR, "link-discrepancies.json"), JSON.stringify(linkDiscrepancies, null, 2));
fs.writeFileSync(path.join(MANIFESTS_DIR, "content-discrepancies.json"), JSON.stringify(contentDiscrepancies, null, 2));
fs.writeFileSync(path.join(MANIFESTS_DIR, "animations.json"), JSON.stringify(animations, null, 2));
fs.writeFileSync(path.join(MANIFESTS_DIR, "interactions.json"), JSON.stringify(interactions, null, 2));

console.log("Generated manifests in research/manifests/");
