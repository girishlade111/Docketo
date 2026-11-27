"use client";

import React, { useState } from "react";
import { FAQ_ICON, SHARED_FAQS } from "@/content/faqs";
import { SITE_MODE } from "@/config/site";
import styles from "./SharedFaq.module.css";

export function SharedFaq() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-large">
            <div className={styles.layout}>
              <h2 id="faq-heading" className="heading-h2">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className={styles.list}>
                {SHARED_FAQS.map((item) => {
                  const isOpen = openIds.has(item.id);
                  const panelId = `${item.id}-panel`;
                  return (
                    <div key={item.id} className={styles.item}>
                      <button
                        type="button"
                        className={styles.trigger}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(item.id)}
                      >
                        <span className={styles.questionText}>{item.question}</span>
                      </button>

                      {isOpen && (
                        <div id={panelId} className={styles.answerRow}>
                          <img
                            src={FAQ_ICON}
                            alt=""
                            width={19}
                            height={20}
                            className={styles.answerIcon}
                          />
                          <div className={styles.answerCard}>
                            <p className="text-rg">
                              {item.answer}
                              {SITE_MODE === "reference" && item.referenceNote ? (
                                <span className={styles.refNote}> [{item.referenceNote}]</span>
                              ) : null}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
