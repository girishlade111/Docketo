"use client";

import React, { useState } from "react";
import { TESTIMONIALS, TESTIMONIAL_ARROWS } from "@/content/testimonials";
import styles from "./TestimonialCarousel.module.css";

interface TestimonialCarouselProps {
  initialIndex?: number;
}

export function TestimonialCarousel({ initialIndex = 0 }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(initialIndex, 0), TESTIMONIALS.length - 1)
  );

  const current = TESTIMONIALS[activeIndex];

  function prev() {
    setActiveIndex((cur) => (cur - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    setActiveIndex((cur) => (cur + 1) % TESTIMONIALS.length);
  }

  return (
    <section className={styles.section} aria-label="Customer testimonials">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-medium">
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <div className={styles.leftContent}>
                  <blockquote className={styles.quote}>
                    <h2 className="heading-h2">{current.quote}</h2>
                  </blockquote>
                  <div className={styles.authorBlock}>
                    <div className={styles.authorName}>{current.name}</div>
                    <div className={styles.authorRole}>{current.role}</div>
                  </div>
                </div>

                <div className={styles.imageWrap}>
                  <img
                    src={current.portraitAsset}
                    alt={`${current.name}, ${current.role}`}
                    width={639}
                    height={773}
                    className={styles.portrait}
                  />
                </div>
              </div>

              <div className={styles.controlsRow}>
                <div className={styles.indicators} role="tablist" aria-label="Testimonial slides">
                  {TESTIMONIALS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`Show testimonial ${idx + 1}: ${item.name}`}
                      className={`${styles.indicatorBtn} ${idx === activeIndex ? styles.indicatorActive : ""}`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>

                <div className={styles.arrows}>
                  <button
                    type="button"
                    className={styles.arrowBtn}
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <img src={TESTIMONIAL_ARROWS.prev} alt="" width={8} height={14} />
                  </button>
                  <button
                    type="button"
                    className={styles.arrowBtn}
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <img src={TESTIMONIAL_ARROWS.next} alt="" width={8} height={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
