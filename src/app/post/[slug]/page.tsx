import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { SalesCTA } from "@/components/common/SalesCTA";
import { ARTICLES } from "@/content/articles";
import { SITE_CONFIG } from "@/config/site";
import styles from "./article.module.css";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} - Docketo`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((relSlug) => ARTICLES.find((a) => a.slug === relSlug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <SiteLayout>
      <article className={styles.articlePage}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.readingShell}>
              <header className={styles.heroHeader}>
                <div className="text-sm text-secondary">{article.categoryLabel}</div>
                <h1 className="heading-h1">{article.title}</h1>
                <p className={`text-rg text-secondary ${styles.excerpt}`}>{article.excerpt}</p>
              </header>

              <hr className={styles.divider} />

              <div className={styles.richBody}>
                {article.sections.map((sec, idx) => (
                  <section key={idx} className={styles.bodyBlock}>
                    {sec.heading && <h2 className="heading-h2">{sec.heading}</h2>}
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-rg">
                        {p}
                      </p>
                    ))}
                    {sec.blockquote && (
                      <blockquote className={styles.editorialQuote}>{sec.blockquote}</blockquote>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className={styles.relatedSection} aria-labelledby="related-articles-heading">
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-large">
              <div className={styles.relatedWrap}>
                <h2 id="related-articles-heading" className="heading-h2">
                  {article.relatedHeading}
                </h2>
                <div className={styles.relatedGrid}>
                  {related.map((rel) => (
                    <ArticleCard key={rel.id} article={rel} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SalesCTA href={SITE_CONFIG.routes.homeContactSales} />
    </SiteLayout>
  );
}
