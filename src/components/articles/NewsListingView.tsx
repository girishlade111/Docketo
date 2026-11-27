import React from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { SalesCTA } from "@/components/common/SalesCTA";
import { ARTICLE_CATEGORIES } from "@/content/article-categories";
import { ARTICLES } from "@/content/articles";
import { SITE_CONFIG } from "@/config/site";
import styles from "./NewsListingView.module.css";

interface NewsListingViewProps {
  activeCategorySlug: "all" | "product" | "compliance" | "company" | "guides";
}

export function NewsListingView({ activeCategorySlug }: NewsListingViewProps) {
  const filteredArticles =
    activeCategorySlug === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.categoryId === activeCategorySlug);

  return (
    <SiteLayout>
      <section className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-medium">
              <div className={styles.topArea}>
                <h1 className="heading-h1">All Post</h1>
                <nav className={styles.categoryNav} aria-label="Article categories">
                  {ARTICLE_CATEGORIES.map((cat) => {
                    const isActive = cat.slug === activeCategorySlug;
                    return (
                      <Link
                        key={cat.id}
                        href={cat.href}
                        className={`${styles.catLink} ${isActive ? styles.catActive : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className={styles.grid}>
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SalesCTA href={SITE_CONFIG.routes.homeContactSales} />
    </SiteLayout>
  );
}
