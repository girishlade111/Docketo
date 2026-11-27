export type SiteMode = "reference" | "production";

export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" ? "production" : "reference";

export const SITE_CONFIG = {
  brandName: "Docketo",
  alternativeBrandName: "Docket",
  tagline: "Banking for what you're building",
  copyright: "Copyright © 2026 Docket. All rights reserved.",
  attribution: {
    designer: "webocean",
    designerUrl: "https://webocean.io/",
    platformLabel: SITE_MODE === "reference" ? "Powered by Webflow" : "Reconstructed in Next.js",
  },
  demoNotice:
    "Demonstration reconstruction of the Docketo fintech marketing template. Banking, safeguarding, and regulatory statements shown here are illustrative template fixtures.",
  videoUrl: "https://www.youtube.com/watch?v=_ZTSG9d0xmg",
  videoEmbedUrl: "https://www.youtube.com/embed/_ZTSG9d0xmg?autoplay=1&rel=0",
  productHeroVideoUrl: "https://www.youtube.com/watch?v=E5WGzdnR2Gw",
  productHeroEmbedUrl: "https://www.youtube.com/embed/E5WGzdnR2Gw?autoplay=1&rel=0",
  storyVideoUrl: "https://www.youtube.com/watch?v=LyS9bT-BvEY",
  storyVideoEmbedUrl: "https://www.youtube.com/embed/LyS9bT-BvEY?autoplay=1&rel=0",
  routes: {
    homeContactSales: SITE_MODE === "reference" ? "/pricing" : "/contact",
    homeTryFree: "/pricing",
    productContactSales: SITE_MODE === "reference" ? "/pricing" : "/contact",
    depositProtectionCard: "/business-bank",
    aboutExploreRoles: SITE_MODE === "reference" ? "/eligibility" : "/careers",
    careersExploreRoles: SITE_MODE === "reference" ? "/eligibility" : "/careers#open-roles",
  },
  headerNav: {
    products: [
      { label: "Embedded bank accounts", href: "/embedded-bank" },
      { label: "Business bank accounts", href: "/business-bank" },
      { label: "Savings accounts", href: "/savings-accounts" },
      { label: "Safeguarding accounts", href: "/safeguarding" },
      { label: "Verify", href: "/verify" },
      { label: "Client money accounts", href: "/client-money" },
    ],
    primaryLinks: [
      { label: "About", href: "/about" },
      { label: "Price", href: "/pricing" },
      { label: "Blog", href: "/news" },
    ],
    pagesDropdown: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/news" },
      { label: "Price", href: "/pricing" },
      { label: "Cookies", href: "/cookies" },
      { label: "Eligibility", href: "/eligibility" },
      { label: "Book demo", href: "/contact" },
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
  },
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "Embedded bank", href: "/embedded-bank" },
        { label: "Safeguarding", href: "/safeguarding" },
        { label: "Savings accounts", href: "/savings-accounts" },
        { label: "Client money", href: "/client-money" },
        { label: "Business bank", href: "/business-bank" },
        { label: "Verify", href: "/verify" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/news" },
        { label: "Contact us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Cookies", href: "/cookies" },
        { label: "Eligibility", href: "/eligibility" },
      ],
    },
    {
      title: "Utility page",
      links: [
        { label: "Style guide", href: "/style-guide" },
        { label: "Change log", href: "/changelog" },
        { label: "Password", href: "/401" },
        { label: "404 not found", href: "/404" },
        { label: "Licenses", href: "/licenses" },
      ],
    },
  ],
} as const;
