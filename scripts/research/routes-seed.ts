export interface SeedRoute {
  id: string;
  path: string;
  pageType: string;
  templateFamily: string;
  collection?: string;
}

export const BASE_URL = "https://docketo.webflow.io";

export const SEED_ROUTES: SeedRoute[] = [
  { id: "home", path: "/", pageType: "marketing", templateFamily: "home" },
  { id: "about", path: "/about", pageType: "corporate", templateFamily: "about" },
  { id: "pricing", path: "/pricing", pageType: "marketing", templateFamily: "pricing" },
  { id: "news", path: "/news", pageType: "cms-index", templateFamily: "news-index", collection: "posts" },
  { id: "contact", path: "/contact", pageType: "form", templateFamily: "contact" },
  { id: "careers", path: "/careers", pageType: "corporate", templateFamily: "careers" },

  { id: "embedded-bank", path: "/embedded-bank", pageType: "product", templateFamily: "product" },
  { id: "safeguarding", path: "/safeguarding", pageType: "product", templateFamily: "product" },
  { id: "savings-accounts", path: "/savings-accounts", pageType: "product", templateFamily: "product" },
  { id: "client-money", path: "/client-money", pageType: "product", templateFamily: "product" },
  { id: "business-bank", path: "/business-bank", pageType: "product", templateFamily: "product" },
  { id: "verify", path: "/verify", pageType: "product", templateFamily: "product" },

  { id: "privacy", path: "/privacy", pageType: "legal", templateFamily: "policy" },
  { id: "terms-conditions", path: "/terms-conditions", pageType: "legal", templateFamily: "policy" },
  { id: "cookies", path: "/cookies", pageType: "legal", templateFamily: "policy" },
  { id: "eligibility", path: "/eligibility", pageType: "legal", templateFamily: "policy" },

  { id: "style-guide", path: "/style-guide", pageType: "utility", templateFamily: "style-guide" },
  { id: "changelog", path: "/changelog", pageType: "utility", templateFamily: "changelog" },
  { id: "401", path: "/401", pageType: "utility", templateFamily: "protected" },
  { id: "404", path: "/404", pageType: "utility", templateFamily: "not-found" },
  { id: "licenses", path: "/licenses", pageType: "utility", templateFamily: "licenses" },

  { id: "cat-product", path: "/post-categories/product", pageType: "cms-category", templateFamily: "news-index", collection: "post-categories" },
  { id: "cat-compliance", path: "/post-categories/compliance", pageType: "cms-category", templateFamily: "news-index", collection: "post-categories" },
  { id: "cat-company", path: "/post-categories/company", pageType: "cms-category", templateFamily: "news-index", collection: "post-categories" },
  { id: "cat-guides", path: "/post-categories/guides", pageType: "cms-category", templateFamily: "news-index", collection: "post-categories" },

  { id: "post-1", path: "/post/how-embedded-bank-accounts-simplify-payment-reconciliation", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-2", path: "/post/kyc-and-kyb-automated-a-faster-path-to-onboarding-the-right-customers", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-3", path: "/post/why-we-built-business-banking-for-founders-by-founders", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-4", path: "/post/shrinking-the-manual-review-queue-how-automated-decisions-free-up-your-team", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-5", path: "/post/giving-every-customer-their-own-bank-account-use-cases-for-embedded-banking", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-6", path: "/post/building-on-our-api-a-developers-guide-to-going-live-in-weeks", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-7", path: "/post/from-remittance-to-banking-how-africhange-expanded-with-docket", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-8", path: "/post/what-the-new-120-000-fscs-limit-means-for-your-customers", pageType: "cms-detail", templateFamily: "article", collection: "posts" },
  { id: "post-9", path: "/post/safeguarding-vs-client-money-accounts-which-does-your-business-need", pageType: "cms-detail", templateFamily: "article", collection: "posts" }
];
