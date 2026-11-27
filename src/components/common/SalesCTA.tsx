import React from "react";
import Link from "next/link";
import styles from "./SalesCTA.module.css";

interface SalesCTAProps {
  href: string;
}

export function SalesCTA({ href }: SalesCTAProps) {
  return (
    <section className={styles.section} aria-label="Contact Sales">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-large">
            <div className={styles.content}>
              <h2 className="heading-h2 text-white">
                Build, launch and scale your financial products on one powerful platform.
              </h2>
              <div className={styles.btnWrap}>
                <Link href={href} className="btn btn-light">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
