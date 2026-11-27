"use client";

import React, { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { STYLE_GUIDE_CONTENT } from "@/content/utilities";
import styles from "./style-guide.module.css";

export default function StyleGuidePage() {
  const [activeAnchor, setActiveAnchor] = useState<"colors" | "typography" | "buttons">("colors");

  return (
    <SiteLayout>
      <section className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.layout}>
              <aside className={styles.sidebar} aria-label="Style guide navigation">
                <div className={styles.menuGroup}>
                  <h2 className="heading-h6">Theme Styles</h2>
                  <hr className={styles.menuRule} />
                  <nav className={styles.menuLinks}>
                    <a
                      href="#colors"
                      className={`${styles.menuLink} ${activeAnchor === "colors" ? styles.menuLinkActive : ""}`}
                      onClick={() => setActiveAnchor("colors")}
                    >
                      Colors
                    </a>
                    <a
                      href="#typography"
                      className={`${styles.menuLink} ${activeAnchor === "typography" ? styles.menuLinkActive : ""}`}
                      onClick={() => setActiveAnchor("typography")}
                    >
                      Typography
                    </a>
                  </nav>
                </div>

                <div className={styles.menuGroup}>
                  <h2 className="heading-h6">Symbols</h2>
                  <hr className={styles.menuRule} />
                  <nav className={styles.menuLinks}>
                    <a
                      href="#buttons"
                      className={`${styles.menuLink} ${activeAnchor === "buttons" ? styles.menuLinkActive : ""}`}
                      onClick={() => setActiveAnchor("buttons")}
                    >
                      Buttons
                    </a>
                  </nav>
                </div>
              </aside>

              <div className={styles.mainPanel}>
                <div className={styles.noteBox}>
                  <p className="text-sm">{STYLE_GUIDE_CONTENT.note}</p>
                </div>

                <div id="colors" className={styles.block}>
                  <div className={styles.headingStrip}>
                    <h1 className="heading-h2">Colors</h1>
                  </div>
                  <div className={styles.swatchGrid}>
                    {STYLE_GUIDE_CONTENT.swatches.map((swatch) => (
                      <div key={swatch.label} className={styles.swatchCard}>
                        <div
                          className={`${styles.swatchColor} ${swatch.bordered ? styles.swatchBordered : ""}`}
                          style={{ backgroundColor: swatch.cssValue }}
                        />
                        <div className={styles.swatchLabel}>{swatch.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="typography" className={styles.block}>
                  <div className={styles.headingStrip}>
                    <h2 className="heading-h2">Typography</h2>
                  </div>

                  <div className={styles.typeSpecimens}>
                    {STYLE_GUIDE_CONTENT.headings.map((h) => (
                      <div key={h.role} className={styles.typeItem}>
                        <div className="text-sm text-secondary">{h.role}</div>
                        <div className={h.className}>{h.sample}</div>
                      </div>
                    ))}

                    {STYLE_GUIDE_CONTENT.paragraphs.map((p) => (
                      <div key={p.name} className={styles.typeItem}>
                        <div className="text-rg" style={{ fontWeight: 500 }}>
                          {p.name}
                        </div>
                        <div className="text-sm text-secondary">{p.meta}</div>
                        <p className={p.className} style={{ margin: 0 }}>
                          {p.sample}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="buttons" className={styles.block}>
                  <div className={styles.headingStrip}>
                    <h2 className="heading-h2">Button</h2>
                  </div>
                  <div className={styles.buttonRow}>
                    <a href="#buttons" className="btn btn-green">
                      Button 1st
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
