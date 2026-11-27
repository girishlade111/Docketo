"use client";

import React, { useState } from "react";
import { SOLUTION_BULLET_ICON, SOLUTION_TABS } from "@/content/solutions";
import styles from "./SolutionTabs.module.css";

export function SolutionTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = SOLUTION_TABS[activeIndex];

  function handleKeyDown(e: React.KeyboardEvent, idx: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((idx + 1) % SOLUTION_TABS.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((idx - 1 + SOLUTION_TABS.length) % SOLUTION_TABS.length);
    }
  }

  return (
    <section className={styles.section} aria-labelledby="solutions-heading">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-medium">
            <div className={styles.container}>
              <h2 id="solutions-heading" className={`heading-h2 text-white ${styles.heading}`}>
                Designed to help you build
              </h2>

              <div className={styles.tabsWrap}>
                <div className={styles.tabMenu} role="tablist" aria-label="Fintech solutions">
                  {SOLUTION_TABS.map((tab, idx) => {
                    const selected = idx === activeIndex;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        id={`solution-tab-${tab.id}`}
                        aria-selected={selected}
                        aria-controls={`solution-panel-${tab.id}`}
                        tabIndex={selected ? 0 : -1}
                        className={`${styles.tabButton} ${selected ? styles.tabActive : ""}`}
                        onClick={() => setActiveIndex(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                      >
                        {tab.tabLabel}
                      </button>
                    );
                  })}
                </div>

                <div
                  role="tabpanel"
                  id={`solution-panel-${current.id}`}
                  aria-labelledby={`solution-tab-${current.id}`}
                  className={styles.tabPanel}
                >
                  <div className={styles.leftCol}>
                    <h3 className="heading-h3 text-white">{current.heading}</h3>
                    <ul className={styles.bulletList}>
                      {current.bullets.map((bullet) => (
                        <li key={bullet} className={styles.bulletItem}>
                          <img
                            src={SOLUTION_BULLET_ICON}
                            alt=""
                            width={12}
                            height={12}
                            className={styles.bulletIcon}
                          />
                          <span className="text-rg text-white">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={styles.artWrap}
                    style={{ backgroundImage: `url("${current.backgroundAsset}")` }}
                  >
                    <img
                      src={current.overlayAsset}
                      alt={`${current.tabLabel} banking interface illustration`}
                      className={styles.overlayImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
