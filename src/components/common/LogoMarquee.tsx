import React from "react";
import type { LogoAssetItem } from "@/content/logos";
import styles from "./LogoMarquee.module.css";

interface LogoMarqueeProps {
  logos: LogoAssetItem[];
  gap?: "compact" | "wide";
  variant?: "dark-bg" | "light-bg";
  durationSeconds?: number;
}

export function LogoMarquee({
  logos,
  gap = "wide",
  variant = "light-bg",
  durationSeconds = 26,
}: LogoMarqueeProps) {
  const trackStyle = {
    animationDuration: `${durationSeconds}s`,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.marquee} ${variant === "dark-bg" ? styles.darkBg : styles.lightBg}`}
      aria-label="Partner logos"
    >
      <div
        className={`${styles.track} ${gap === "compact" ? styles.gapCompact : styles.gapWide}`}
        style={trackStyle}
      >
        <div className={styles.group}>
          {logos.map((logo) => (
            <div key={logo.id} className={styles.logoItem}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
        <div className={styles.group} aria-hidden="true">
          {logos.map((logo) => (
            <div key={`${logo.id}-dup`} className={styles.logoItem}>
              <img
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
