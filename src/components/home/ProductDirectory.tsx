import React from "react";
import Link from "next/link";
import { HOMEPAGE_PRODUCT_DIRECTORY, PRODUCT_ARROW_ICON } from "@/content/products";
import styles from "./ProductDirectory.module.css";

export function ProductDirectory() {
  return (
    <section className={styles.section} aria-labelledby="our-products-heading">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-large">
            <div className={styles.wrapper}>
              <h2 id="our-products-heading" className="heading-h2 text-white">
                Our products
              </h2>

              <div className={styles.grid}>
                {HOMEPAGE_PRODUCT_DIRECTORY.map((product) => (
                  <Link key={product.slug} href={product.href} className={styles.item}>
                    <div className={styles.iconBox}>
                      <img
                        src={product.iconAsset}
                        alt=""
                        width={22}
                        height={22}
                        className={styles.defaultIcon}
                      />
                      <img
                        src={PRODUCT_ARROW_ICON}
                        alt=""
                        width={21}
                        height={21}
                        className={styles.hoverArrow}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3 className={styles.title}>{product.directoryTitle}</h3>
                      <p className={styles.description}>{product.directoryDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
