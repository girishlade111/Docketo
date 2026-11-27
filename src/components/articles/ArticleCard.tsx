import React from "react";
import Link from "next/link";
import type { ArticleRecord } from "@/content/articles";
import styles from "./ArticleCard.module.css";

interface ArticleCardProps {
  article: ArticleRecord;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/post/${article.slug}`} className={styles.card}>
        <div className={styles.imageWrap}>
          <img
            src={article.coverAsset}
            alt={article.title}
            width={1440}
            height={907}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{article.title}</h3>
          <div className={styles.meta}>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true">.</span>
            <span>{article.categoryLabel}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
