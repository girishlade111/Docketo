"use client";

import React, { useEffect, useRef, useState } from "react";
import { INFRASTRUCTURE_DOT_BG, INFRASTRUCTURE_PANELS } from "@/content/infrastructure";
import styles from "./InfrastructureStory.module.css";

export function InfrastructureStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scales, setScales] = useState<number[]>([1, 1, 1, 1]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (!containerRef.current || window.innerWidth < 992) {
        setScales([1, 1, 1, 1]);
        return;
      }
      const cards = Array.from(containerRef.current.querySelectorAll<HTMLElement>("[data-infra-card]"));
      const nextScales = cards.map((card, i) => {
        const nextCard = cards[i + 1];
        if (!nextCard) return 1;
        const cardTop = card.getBoundingClientRect().top;
        const nextTop = nextCard.getBoundingClientRect().top;
        const dist = nextTop - cardTop;
        const maxDist = 620;
        const ratio = Math.max(0, Math.min(1, 1 - dist / maxDist));
        return Number((1 - ratio * 0.1).toFixed(4));
      });
      setScales(nextScales);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.section} aria-label="Banking infrastructure stack">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-large">
            <div ref={containerRef} className={styles.stackContainer}>
              {INFRASTRUCTURE_PANELS.map((panel, idx) => (
                <article
                  key={panel.id}
                  data-infra-card
                  className={styles.panelWrapper}
                  style={{
                    transform: `scale(${scales[idx] ?? 1})`,
                  }}
                >
                  <div
                    className={`${styles.tabRow} ${
                      panel.labelAlignment === "right" ? styles.tabRight : styles.tabLeft
                    }`}
                  >
                    <div className={styles.labelTab}>
                      <span className={styles.diamondIcon} aria-hidden="true" />
                      <span className={styles.labelText}>{panel.layerLabel}</span>
                    </div>
                  </div>

                  <div
                    className={styles.panelBody}
                    style={{ backgroundImage: `url("${INFRASTRUCTURE_DOT_BG}")` }}
                  >
                    <div className={styles.textCol}>
                      <h2 className="heading-h2 text-white">{panel.title}</h2>
                      <p className={styles.description}>{panel.description}</p>
                    </div>
                    <div className={styles.diagramCol}>
                      <img
                        src={panel.diagramAsset}
                        alt={`${panel.title} architecture diagram`}
                        className={styles.diagramImg}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
