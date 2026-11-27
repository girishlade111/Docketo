export interface ProductDirectoryItem {
  slug: string;
  href: string;
  directoryTitle: string;
  directoryDescription: string;
  iconAsset: string;
}

export const PRODUCT_ARROW_ICON = "/assets/products/6aa28e762c30d80d8e50c61b_Our_products_arrow.svg";

export const HOMEPAGE_PRODUCT_DIRECTORY: ProductDirectoryItem[] = [
  {
    slug: "embedded-bank",
    href: "/embedded-bank",
    directoryTitle: "Embedded bank accounts",
    directoryDescription: "Bank accounts to power any product",
    iconAsset: "/assets/products/6aa28e767b983d21eae95e28_Our_products1.svg",
  },
  {
    slug: "safeguarding",
    href: "/safeguarding",
    directoryTitle: "Safeguarding accounts",
    directoryDescription: "Ringfenced accounts for EMIs and PIs",
    iconAsset: "/assets/products/6aa28e76d0394eab149c55e5_Our_products_2.svg",
  },
  {
    slug: "business-bank",
    href: "/business-bank",
    directoryTitle: "Business bank accounts",
    directoryDescription: "Your own operational account, access via API or our app",
    iconAsset: "/assets/products/6aa28e7f3a611c20e8555e34_Our_products_3.svg",
  },
  {
    slug: "savings-accounts",
    href: "/savings-accounts",
    directoryTitle: "Savings accounts",
    directoryDescription: "Interest-bearing accounts for your customers",
    iconAsset: "/assets/products/6aa28e764335d2f1d673cdb1_Our_products_4.svg",
  },
  {
    slug: "client-money",
    href: "/client-money",
    directoryTitle: "Client money accounts",
    directoryDescription: "CASS and CMP compliant accounts",
    iconAsset: "/assets/products/6aa28e76bd2b3406046ee7fd_Our_products5.svg",
  },
  {
    slug: "verify",
    href: "/verify",
    directoryTitle: "Verify",
    directoryDescription: "Automated customer onboarding and KYC",
    iconAsset: "/assets/products/6aa28e803a611c20e8555e69_Our_products6.svg",
  },
];

export type ProductSlug =
  | "embedded-bank"
  | "safeguarding"
  | "savings-accounts"
  | "client-money"
  | "business-bank"
  | "verify";

export interface ProductPageConfig {
  slug: ProductSlug;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  ctaActionType: "demo" | "sales";
  heroImage: string;
  marqueeText: string;
  showLogoStrip: boolean;
  darkHighlights?: {
    sectionTitle?: string;
    layout: "embedded-staggered" | "three-column";
    items: Array<{ title: string; description: string; iconAsset: string }>;
  };
  whoIsThisFor?: {
    title: string;
    description: string;
  };
  workflowFeatures?: Array<{ title: string; description: string }>;
  offeringsSection?: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  useCasesSection?: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  verifyAlternatingFeatures?: Array<{
    title: string;
    description: string;
    bgAsset: string;
    overlayAsset: string;
    reversed?: boolean;
  }>;
  accountTypes?: {
    title: string;
    dedicatedBullets: string[];
    dedicatedBg: string;
    dedicatedDiagram: string;
    pooledBullets: string[];
    pooledBg: string;
    pooledDiagram: string;
  };
  showFaq: boolean;
  showResourceCards: boolean;
}

const BUILT_FOR_ICONS = [
  "/assets/misc/6aa244781c68ed65921f8c06_Built_For_1.svg",
  "/assets/misc/6aa24477febe43e979772751_Built_For02.svg",
  "/assets/misc/6aa24477c2220127b897f977_Built_For03.svg",
];

export const RESOURCE_CARDS = [
  {
    id: "eligibility",
    title: "Eligibility",
    description: "Are we a good fit? Check out our eligibility criteria.",
    href: "/eligibility",
    iconAsset: "/assets/misc/6aa248a974f1a54c8687778f_akar-icons_double-check.svg",
  },
  {
    id: "deposit-protection",
    title: "Deposit protection",
    description: "Your customers' deposits are protected.",
    href: "/business-bank",
    iconAsset: "/assets/misc/6aa248aa3b97c4a6a32ed601_carbon_manage-protection.svg",
  },
];

export const PRODUCT_CHECK_ICON = "/assets/misc/6aa247571c68ed659221167a_icon.svg";
export const PRODUCT_HERO_PLAY_ICON = "/assets/misc/6ab0f547f25fa32ad3f8146d_bi_play-fill.svg";

export const PRODUCT_PAGES: Record<ProductSlug, ProductPageConfig> = {
  "embedded-bank": {
    slug: "embedded-bank",
    metaTitle: "Embedded Bank Accounts - Banking Built into Your Platform | Docketo",
    metaDescription:
      "Enable seamless financial experiences within your app. Offer instant account creation, integrated payments, and full control over your customer experience.",
    heroTitle: "Bank accounts to power any product",
    heroSubtitle:
      "Our all-purpose accounts fit wherever you need them, behind the scenes or front of house, powering simpler payments, automated reconciliation, and new features for your customers.",
    ctaLabel: "Book a Demo",
    ctaActionType: "demo",
    heroImage: "/assets/misc/6aa24d4563d38f57df1795c0_EM.webp",
    marqueeText: "One account, any product",
    showLogoStrip: false,
    darkHighlights: {
      sectionTitle: "Not just another virtual account",
      layout: "embedded-staggered",
      items: [
        {
          title: "Streamline backend operations",
          description:
            "Turn complex payment flows into simple ones by giving each customer a dedicated account, built for loan repayments, recurring transactions, rental tracking, and more.",
          iconAsset: BUILT_FOR_ICONS[0],
        },
        {
          title: "Enhance your customer experience",
          description:
            "Real bank accounts mean real banking for your customers. Funds stay on your platform while customers open accounts, make payments, and earn interest without ever leaving your app.",
          iconAsset: BUILT_FOR_ICONS[1],
        },
        {
          title: "Deposit protection",
          description:
            "Let customers rest easy, knowing their deposits are protected up to £120,000 by the FSCS.",
          iconAsset: BUILT_FOR_ICONS[2],
        },
        {
          title: "Individual accounts",
          description:
            "Each account is owned by your customer, with a real sort code and unique account number.",
          iconAsset: BUILT_FOR_ICONS[0],
        },
        {
          title: "Earn interest",
          description:
            "Interest-bearing accounts help you stay competitive and create more value for your customers.",
          iconAsset: BUILT_FOR_ICONS[1],
        },
      ],
    },
    useCasesSection: {
      title: "Solutions for complex businesses",
      items: [
        {
          title: "Lenders",
          description:
            "With individual accounts per borrower, lenders are streamlining loan disbursements and automating repayment collection.",
        },
        {
          title: "Credit card providers",
          description:
            "With real bank accounts, customers can unlock higher credit limits by topping their cards with cash.",
        },
        {
          title: "B2C platforms",
          description:
            "Give customers a full range of day-to-day banking services, from opening accounts to making payments, plus opportunities to earn interest, all from your own platform.",
        },
        {
          title: "Payroll providers",
          description:
            "Complex payroll operations are easily automated with a bank account for each employer embedded directly into your workflow.",
        },
      ],
    },
    showFaq: true,
    showResourceCards: true,
  },
  safeguarding: {
    slug: "safeguarding",
    metaTitle: "Safeguarding Accounts for EMIs & PIs - Regulatory Protection | Docketo",
    metaDescription:
      "Protect client funds with fully ringfenced safeguarding accounts designed specifically for Payment Institutions (PIs) and Electronic Money Institutions (EMIs).",
    heroTitle: "Safeguard customer money and earn on it",
    heroSubtitle:
      "Protecting customer funds is simple: quick onboarding, easy API integration, and effortless reconciliation.",
    ctaLabel: "Contact Sales",
    ctaActionType: "sales",
    heroImage: "/assets/misc/6aa1433b837a12fa3a6e8b9e_Global_Header_1.webp",
    marqueeText: "Safeguard customer money and earn on it",
    showLogoStrip: true,
    darkHighlights: {
      layout: "three-column",
      items: [
        {
          title: "Earn interest",
          description: "Maximise your earnings with competitive interest rates.",
          iconAsset: BUILT_FOR_ICONS[0],
        },
        {
          title: "Simplify reconciliation",
          description: "Instantly reconcile customer funds with our ledger, or integrate your own solution via API.",
          iconAsset: BUILT_FOR_ICONS[1],
        },
        {
          title: "Get set up fast",
          description: "Onboard with us in days, not months.",
          iconAsset: BUILT_FOR_ICONS[2],
        },
      ],
    },
    whoIsThisFor: {
      title: "Who is this for?",
      description:
        "Our safeguarding services are for FCA regulated electronic money institutions and payments institutions.",
    },
    accountTypes: {
      title: "Dedicated or pooled accounts",
      dedicatedBullets: [
        "Individual bank accounts for each of your customers",
        "Unique account number and sort code combinations",
        "Integrated ledger for instant reconciliation and easy reporting",
      ],
      dedicatedBg: "/assets/misc/6aa247aa2f1bebbb77fc172f_Mask_group.webp",
      dedicatedDiagram: "/assets/misc/6ac37b1598066bdb8556eae6_Group_120.webp",
      pooledBullets: [
        "One pooled safeguarding account for all customer funds",
        "Integrates with your existing ledger and accounting systems via API",
      ],
      pooledBg: "/assets/misc/6aa247aaf73b0a09ced6ca09_Mask_group2.webp",
      pooledDiagram: "/assets/misc/6aa247aa3e29ca49be940bd6_Group_125.webp",
    },
    showFaq: false,
    showResourceCards: true,
  },
  "savings-accounts": {
    slug: "savings-accounts",
    metaTitle: "High-Yield Savings Accounts - Interest-Bearing Solutions | Docketo",
    metaDescription:
      "Offer high-yield savings accounts to your users. Provide competitive interest rates and flexible account structures integrated directly into your product.",
    heroTitle: "Add savings accounts to your product",
    heroSubtitle:
      "Give customers more from their money with interest-bearing savings accounts, built right into your product.",
    ctaLabel: "Contact Sales",
    ctaActionType: "sales",
    heroImage: "/assets/misc/6aa249e0b5d1ef6b91badf24_Saving_Account_.webp",
    marqueeText: "Add savings accounts to your product",
    showLogoStrip: true,
    darkHighlights: {
      layout: "three-column",
      items: [
        {
          title: "Help your customers save",
          description: "Engage and retain customers with competitive interest rates.",
          iconAsset: BUILT_FOR_ICONS[0],
        },
        {
          title: "Own your user experience",
          description: "Embed white-label savings accounts directly into your app or product.",
          iconAsset: BUILT_FOR_ICONS[1],
        },
        {
          title: "Guarantee protection",
          description: "Give your customers peace of mind with deposits covered by the FSCS.",
          iconAsset: BUILT_FOR_ICONS[2],
        },
      ],
    },
    whoIsThisFor: {
      title: "Who is this for?",
      description:
        "Our embedded savings accounts are for UK limited companies who serve SMEs or consumers. As this is a white-label product, you don’t need any specific regulatory permissions.",
    },
    offeringsSection: {
      title: "What’s on offer",
      items: [
        {
          title: "Easy access savings accounts",
          description:
            "Give your customers maximum flexibility and easy access to their funds, while still offering competitive interest rates.",
        },
        {
          title: "Term deposit accounts",
          description:
            "Secure high returns for your customers with long-term savings options at a fixed rate of interest.",
        },
        {
          title: "Notice accounts",
          description:
            "Offer the optimal blend of earnings and access: your customers can earn higher interest and still make scheduled withdrawals.",
        },
      ],
    },
    showFaq: false,
    showResourceCards: true,
  },
  "client-money": {
    slug: "client-money",
    metaTitle: "Client Money Accounts - CASS & CMP Compliant Banking | Docketo",
    metaDescription:
      "Streamline client funds management with compliant, dedicated accounts. Simplify reconciliation and lower regulatory risks for proptech, legal, and financial platforms.",
    heroTitle: "Manage client money with ease",
    heroSubtitle:
      "Manage client money the compliant way, with API-enabled bank accounts built for it.",
    ctaLabel: "Contact Sales",
    ctaActionType: "sales",
    heroImage: "/assets/misc/6aa24336c9fc07bcca127991_002.webp",
    marqueeText: "Manage client money with ease",
    showLogoStrip: true,
    darkHighlights: {
      layout: "three-column",
      items: [
        {
          title: "Open dedicated accounts",
          description: "Get a separate account for each client, with unique account numbers to minimise payment errors.",
          iconAsset: BUILT_FOR_ICONS[0],
        },
        {
          title: "Simplify reconciliation",
          description: "Instantly reconcile client funds with our ledger, or integrate your own solution via API.",
          iconAsset: BUILT_FOR_ICONS[1],
        },
        {
          title: "Earn interest",
          description: "Competitive interest rates mean new revenue streams for you.",
          iconAsset: BUILT_FOR_ICONS[2],
        },
      ],
    },
    whoIsThisFor: {
      title: "Who is this for?",
      description:
        "These accounts are for firms that need to comply with industry regulations on handling client money, such as CASS, CMP, or SRA.",
    },
    workflowFeatures: [
      {
        title: "Ready-to-go workflows",
        description: "Use our pre-approved onboarding workflows that are designed to work with our banking products.",
      },
      {
        title: "Early, fast access to Docket BaaS platform",
        description: "Reduce the time it takes to go through due diligence for our banking products.",
      },
      {
        title: "Always up to date with the latest checks",
        description: "We keep our preset workflows up to date with the latest requirements for checks and screening.",
      },
    ],
    accountTypes: {
      title: "Dedicated or pooled accounts",
      dedicatedBullets: [
        "Individual bank accounts for each of your customers",
        "Unique account number and sort code combinations",
        "Integrated ledger for instant reconciliation and easy reporting",
      ],
      dedicatedBg: "/assets/misc/6aa247aa2f1bebbb77fc172f_Mask_group.webp",
      dedicatedDiagram: "/assets/misc/6aa247aafde3e066243f6aad_eb26ae778052bce3f8f95311df264051_Group_120.webp",
      pooledBullets: [
        "One pooled safeguarding account for all customer funds",
        "Integrates with your existing ledger and accounting systems via API",
      ],
      pooledBg: "/assets/misc/6aa247aaf73b0a09ced6ca09_Mask_group2.webp",
      pooledDiagram: "/assets/misc/6aa247aa3e29ca49be940bd6_Group_125.webp",
    },
    showFaq: false,
    showResourceCards: true,
  },
  "business-bank": {
    slug: "business-bank",
    metaTitle: "Business Bank Accounts - Operational Banking via API & App | Docketo",
    metaDescription:
      "Manage your business operations with flexible, high-yield business bank accounts. Access funds instantly via API or web portal with enterprise-grade security.",
    heroTitle: "Business banking made by founders who get it",
    heroSubtitle:
      "Operational accounts made for the way fintechs and startups work: online, API-first, and earning interest while you build.",
    ctaLabel: "Book a Demo",
    ctaActionType: "demo",
    heroImage: "/assets/misc/6aa24c37c9fc07bcca16b6f1_Business_.webp",
    marqueeText: "Business banking made by founders who get it",
    showLogoStrip: false,
    useCasesSection: {
      title: "What you get",
      items: [
        {
          title: "Fintech and startup friendly",
          description:
            "We’ve been where you are, building product-market fit and showing traction. We’re here to help you get going fast.",
        },
        {
          title: "Earn interest",
          description:
            "Earn 1.76% AER (variable) on all your funds, not some. Tracks Bank of England base rate.",
        },
        {
          title: "Access via the website or API",
          description:
            "Use your account how you want. Customise it via our API or take advantage of our app. There are no limits.",
        },
        {
          title: "Cards",
          description: "Debit cards linked to your operational account for your day-to-day spending.",
        },
      ],
    },
    showFaq: true,
    showResourceCards: true,
  },
  verify: {
    slug: "verify",
    metaTitle: "Instant Account & Identity Verification - Docketo Security",
    metaDescription:
      "Ensure fast, compliant onboarding and automated background verification for business and consumer accounts through Docketo’s verification API.",
    heroTitle: "End-to-end onboarding, built for fintechs",
    heroSubtitle:
      "Verify gives fintechs the tools to manage risk, automate KYC and KYB, and approve good customers fast.",
    ctaLabel: "Book a Demo",
    ctaActionType: "demo",
    heroImage: "/assets/misc/6aa1433b837a12fa3a6e8b9e_Global_Header_1.webp",
    marqueeText: "Safeguard customer money and earn on it",
    showLogoStrip: true,
    verifyAlternatingFeatures: [
      {
        title: "Growth without the risk",
        description:
          "Speed up onboarding and stay on top of risk, with screening checks that take just seconds.",
        bgAsset: "/assets/misc/6aa23f1df63ba45cf8bd3071_The_Better_Way_1.webp",
        overlayAsset: "/assets/misc/6aa23f1dfebe43e9797516d1_The_Better_Way01.webp",
        reversed: false,
      },
      {
        title: "No more manual errors.",
        description:
          "Automate routine decisions and shrink your review queue, giving your team time for what matters most.",
        bgAsset: "/assets/misc/6aa23f64f4068703fc1c897e_02.webp",
        overlayAsset: "/assets/misc/6aa23f1d5266f6afdff1d65d_The_Better_Way02.webp",
        reversed: true,
      },
      {
        title: "Get started in no time",
        description: "Get integrated quickly, with a developer-friendly API and docs that make sense.",
        bgAsset: "/assets/misc/6aa23f641d37a1c56f981d89_03.webp",
        overlayAsset: "/assets/misc/6aa23f1df63ba45cf8bd304d_The_Better_Way03.webp",
        reversed: false,
      },
    ],
    useCasesSection: {
      title: "Native to Docket banking products",
      items: [
        {
          title: "Ready-to-go workflows",
          description:
            "Use our pre-approved onboarding workflows that are designed to work with our banking products.",
        },
        {
          title: "Early, fast access to Docket BaaS platform",
          description: "Reduce the time it takes to go through due diligence for our banking products.",
        },
        {
          title: "Always up to date with the latest checks",
          description:
            "We keep our preset workflows up to date with the latest requirements for checks and screening.",
        },
      ],
    },
    showFaq: false,
    showResourceCards: false,
  },
};
