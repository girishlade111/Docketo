import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="page-gutter">
        <div className="container-large">
          <div className={styles.topArea}>
            <div className={styles.brandCol}>
              <Link href="/" aria-label="Docketo home" className={styles.logoLink}>
                <img
                  src="/assets/brand/6a9f978622592099fe8b7af9_White_Logo.svg"
                  alt="Docketo"
                  width={186}
                  height={50}
                  className={styles.footerLogo}
                />
              </Link>
            </div>

            <div className={styles.rightArea}>
              <nav className={styles.columnsGrid} aria-label="Footer">
                {SITE_CONFIG.footerGroups.map((group) => (
                  <div key={group.title} className={styles.group}>
                    <div className={styles.groupTitle}>{group.title}</div>
                    <ul className={styles.linkList}>
                      {group.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link href={link.href} className={styles.footerLink}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              <div className={styles.bottomBar}>
                <p className={styles.copyText}>{SITE_CONFIG.copyright}</p>
                <p className={styles.copyText}>
                  Designed by{" "}
                  <a
                    href={SITE_CONFIG.attribution.designerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.attrLink}
                  >
                    {SITE_CONFIG.attribution.designer}
                  </a>
                  , {SITE_CONFIG.attribution.platformLabel}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.oversizedWrap} aria-hidden="true">
            <img
              src="/assets/brand/6a9f98d9608ffcc774be1282_Group_96.svg"
              alt=""
              width={757}
              height={160}
              className={styles.oversizedLogo}
            />
            <div className={styles.oversizedFade} />
          </div>
        </div>
      </div>
    </footer>
  );
}
