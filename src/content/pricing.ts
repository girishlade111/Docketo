export interface PricingPlanRecord {
  id: string;
  name: string;
  description: string;
  amount: number | null;
  currency: "GBP";
  billingPeriod: string;
  displayPrice: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  surfaceVariant: "white" | "growth" | "enterprise";
  buttonVariant: "dark" | "light";
  referenceOnly: true;
  productionApproved: false;
}

export const PRICING_HERO = {
  heading: "Simple, transparent pricing that scales with you.",
  subtitle: "No hidden fees. No surprises. Just the banking infrastructure you need to build.",
};

export const PRICING_PLANS: PricingPlanRecord[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For early-stage teams testing and building.",
    amount: 0,
    currency: "GBP",
    billingPeriod: "month",
    displayPrice: "£0 / month",
    features: [
      "1 operational bank account",
      "API access with full documentation",
      "Up to 100 customer accounts",
      "Standard KYC & KYB checks",
      "Email support",
      "FSCS-protected deposits up to £120,000",
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
    surfaceVariant: "white",
    buttonVariant: "dark",
    referenceOnly: true,
    productionApproved: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "For scaling fintechs ready to go live.",
    amount: 499,
    currency: "GBP",
    billingPeriod: "month",
    displayPrice: "£499 / month",
    features: [
      "Unlimited customer accounts",
      "Embedded bank accounts & payments",
      "Automated reconciliation",
      "Interest-bearing accounts",
      "Automated KYC & KYB with risk screening",
      "Priority support",
    ],
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
    surfaceVariant: "growth",
    buttonVariant: "dark",
    referenceOnly: true,
    productionApproved: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For established businesses with complex needs.",
    amount: null,
    currency: "GBP",
    billingPeriod: "custom",
    displayPrice: "Custom pricing",
    features: [
      "Safeguarding & client money accounts",
      "Structured lending & overdrafts",
      "Dedicated account manager",
      "Custom SLAs",
      "Advanced compliance & reporting tools",
      "White-glove onboarding",
    ],
    ctaLabel: "Contact US",
    ctaHref: "/contact",
    surfaceVariant: "enterprise",
    buttonVariant: "light",
    referenceOnly: true,
    productionApproved: false,
  },
];
