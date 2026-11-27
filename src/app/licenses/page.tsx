import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LICENSES_CONTENT } from "@/content/utilities";
import styles from "./licenses.module.css";

export const metadata: Metadata = {
  title: "Asset Licenses - Docketo",
  description:
    "Information on image, icon, and font licensing used throughout the Docketo website template.",
};

export default function LicensesPage() {
  return (
    <SiteLayout>
      <section className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.shell}>
              <div className={styles.whiteBox}>
                <p className="text-rg text-secondary">{LICENSES_CONTENT.intro}</p>
              </div>

              <div className={styles.whiteBox}>
                <h1 className="heading-h2">{LICENSES_CONTENT.photography.heading}</h1>
                <p className="text-rg text-secondary">
                  All images used in the template are licensed for personal and commercial use. If
                  you want to use some specific image, you can check the licenses and download the
                  images for free from{" "}
                  <a
                    href={LICENSES_CONTENT.photography.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inlineLink}
                  >
                    {LICENSES_CONTENT.photography.linkLabel}
                  </a>
                </p>
              </div>

              <div className={styles.photoGrid}>
                {LICENSES_CONTENT.photography.images.map((img) => (
                  <div key={img.src} className={styles.photoCard}>
                    <img src={img.src} alt={img.alt} className={styles.photoImg} />
                  </div>
                ))}
              </div>

              <div className={styles.whiteBox}>
                <h2 className="heading-h2">{LICENSES_CONTENT.icons.heading}</h2>
                <p className="text-rg text-secondary">
                  All graphical assets in this template are licensed for personal and commercial use.
                  If you&apos;d like to use a specific asset, please check the license below. All
                  icons are sourced from{" "}
                  <a
                    href={LICENSES_CONTENT.icons.iconifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inlineLink}
                  >
                    Iconify
                  </a>{" "}
                  And{" "}
                  <a
                    href={LICENSES_CONTENT.icons.nounProjectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inlineLink}
                  >
                    Thenounproject
                  </a>
                </p>
              </div>

              <div className={styles.whiteBox}>
                <h2 className="heading-h2">{LICENSES_CONTENT.typography.heading}</h2>
                <p className="text-rg text-secondary">{LICENSES_CONTENT.typography.description}</p>
              </div>

              <div className={styles.fontButtons}>
                {LICENSES_CONTENT.typography.buttons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${btn.variant === "green" ? "btn-green" : "btn-dark"}`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
