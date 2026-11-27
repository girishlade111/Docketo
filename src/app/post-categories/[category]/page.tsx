import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsListingView } from "@/components/articles/NewsListingView";
import { ARTICLE_CATEGORIES } from "@/content/article-categories";

type CategorySlug = "product" | "compliance" | "company" | "guides";

export function generateStaticParams() {
  return ARTICLE_CATEGORIES.filter((c) => c.slug !== "all").map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const found = ARTICLE_CATEGORIES.find((c) => c.slug === category && c.slug !== "all");
  if (!found) return { title: "Not Found" };
  return { title: found.title, description: found.metaDescription };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const found = ARTICLE_CATEGORIES.find((c) => c.slug === category && c.slug !== "all");
  if (!found) notFound();

  return <NewsListingView activeCategorySlug={found.slug as CategorySlug} />;
}
