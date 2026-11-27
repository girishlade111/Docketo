import React from "react";
import styles from "./DeveloperShowcase.module.css";

const DEVELOPER_BENEFITS = [
  { title: "Purpose-built API", description: "Using clean JSON over REST" },
  { title: "Clear documentation", description: "Comprehensive API reference and guides" },
  { title: "Immutable architecture", description: "Core banking system based on a durable event log" },
  { title: "Cloud native", description: "Built on scalable, resilient infrastructure" },
  { title: "Free sandbox", description: "Start testing right away, no fees, no sales pitch, no NDAs" },
];

export function DeveloperShowcase() {
  return (
    <section className={styles.section} aria-labelledby="start-coding-heading">
      <div className="page-gutter">
        <div className="container-large">
          <div className="section-pad-large">
            <div className={styles.layout}>
              <div className={styles.leftCol}>
                <h2 id="start-coding-heading" className="heading-h2 text-white">
                  Start coding today
                </h2>

                <ul className={styles.list}>
                  {DEVELOPER_BENEFITS.map((item) => (
                    <li key={item.title} className={styles.item}>
                      <img
                        src="/assets/misc/6aa290efab9b9e9386713cc4_0.svg"
                        alt=""
                        width={29}
                        height={29}
                        className={styles.icon}
                      />
                      <div className={styles.itemCopy}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDesc}>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.artWrap}>
                <img
                  src="/assets/developer/6aa290efe2a810d6d71cac72_Start_Building_.webp"
                  alt="Code snippet showing an API request to create a payee with a POST request and JSON payload"
                  width={340}
                  height={404}
                  className={styles.codeImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
