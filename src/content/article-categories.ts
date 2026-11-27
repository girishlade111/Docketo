export interface ArticleCategoryRecord {
  id: string;
  slug: string;
  name: string;
  href: string;
  title: string;
  metaDescription: string;
}

export const ARTICLE_CATEGORIES: ArticleCategoryRecord[] = [
  {
    id: "all",
    slug: "all",
    name: "All Posts",
    href: "/news",
    title: "Docketo News & Insights - Fintech, API Banking & Embedded Finance",
    metaDescription:
      "Stay updated with the latest trends, guides, and updates on embedded finance, regulatory compliance, and banking API integration.",
  },
  {
    id: "product",
    slug: "product",
    name: "Product",
    href: "/post-categories/product",
    title: "Product - Docketo Insights",
    metaDescription: "Product insights on embedded bank accounts, reconciliation, and automated decisioning.",
  },
  {
    id: "compliance",
    slug: "compliance",
    name: "Compliance",
    href: "/post-categories/compliance",
    title: "Compliance - Docketo Insights",
    metaDescription: "Compliance guides covering KYC, KYB, safeguarding, and client money accounts.",
  },
  {
    id: "company",
    slug: "company",
    name: "Company",
    href: "/post-categories/company",
    title: "Company - Docketo Insights",
    metaDescription: "Company stories, founder perspectives, and industry protection updates.",
  },
  {
    id: "guides",
    slug: "guides",
    name: "Guides",
    href: "/post-categories/guides",
    title: "Guides - Docketo Insights",
    metaDescription: "Practical guides on API integration, sandbox testing, and scaling financial offerings.",
  },
];
