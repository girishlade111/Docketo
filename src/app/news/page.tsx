import type { Metadata } from "next";
import { NewsListingView } from "@/components/articles/NewsListingView";
import { ARTICLE_CATEGORIES } from "@/content/article-categories";

const cat = ARTICLE_CATEGORIES[0];

export const metadata: Metadata = {
  title: cat.title,
  description: cat.metaDescription,
};

export default function NewsPage() {
  return <NewsListingView activeCategorySlug="all" />;
}
