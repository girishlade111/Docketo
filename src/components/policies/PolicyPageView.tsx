"use client";

import React, { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import type { PolicyDocument } from "@/content/policies";
import styles from "./PolicyPageView.module.css";

interface PolicyPageViewProps {
  policy: PolicyDocument;
}

export function PolicyPageView({ policy }: PolicyPageViewProps) {
  const [pdfNotice, setPdfNotice] = useState(false);

  function renderHeading(level: number | undefined, text: string) {
    if (level === 2) return <h2 className="heading-h2">{text}</h2>;
    if (level === 3) return <h3 className="heading-h3">{text}</h3>;
    if (level === 4) return <h4 className="heading-h4">{text}</h4>;
    if (level === 5) return <h5 className="heading-h5">{text}</h5>;
    return <h6 className="heading-h6">{text}</h6>;
  }

  return (
    <SiteLayout>
      <article className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.shell}>
              <header className={styles.header}>
                <div className={styles.titleBlock}>
                  <h1 className="heading-h1">{policy.title}</h1>
                  <p className="text-sm text-secondary">{policy.lastUpdated}</p>
                </div>

                {policy.hasDownloadPdf && (
                  <div className={styles.downloadWrap}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => setPdfNotice(true)}
                    >
                      Download PDF
                    </button>
                  </div>
                )}
              </header>

              {pdfNotice && (
                <div role="status" className={styles.pdfNotice}>
                  <span>
                    PDF download is unavailable in demonstration mode because no finalized legal PDF has been published. You can print or save this page via your browser.
                  </span>
                  <button
                    type="button"
                    className={styles.printBtn}
                    onClick={() => window.print()}
                  >
                    Print / Save as PDF
                  </button>
                </div>
              )}

              <div className={styles.body}>
                {policy.sections.map((sec, idx) => (
                  <section key={idx} className={styles.secBlock}>
                    {sec.heading && renderHeading(sec.level, sec.heading)}
                    {sec.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="text-rg">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && (
                      <ul className={styles.list}>
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-rg">
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
