"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { VideoModal } from "@/components/common/VideoModal";
import { HOME_WHITE_LOGOS } from "@/content/logos";
import { SITE_CONFIG } from "@/config/site";
import styles from "./CinematicHero.module.css";

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (!sectionRef.current || window.innerWidth < 992) {
        setProgress(0);
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const raw = -rect.top / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
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

  // Interpolate hero card dimensions smoothly on desktop as user scrolls through hero
  const cardWidthPct = 100 - progress * 54; // 100vw -> 46vw
  const cardHeightVh = 100 - progress * 56; // 100vh -> 44vh
  const topOffsetVh = progress * 25; // 0vh -> 25vh
  const desktopBrandOpacity = Math.max(0, 1 - progress * 2.4);
  const smallDemoOpacity = Math.max(0, Math.min(1, (progress - 0.35) * 2.2));

  return (
    <>
      <section ref={sectionRef} className={styles.sectionHero} aria-label="Docketo Hero">
        <div className={styles.stickyWrap}>
          <div className={styles.headerLayer} style={{ zIndex: progress > 0.35 ? 15 : 2 }}>
            <SiteHeader />
          </div>

          <div className={styles.revealedHeadingArea}>
            <div className={styles.revealedTitleWrap}>
              <h1 className="heading-h1">{SITE_CONFIG.tagline}</h1>
            </div>
          </div>

          <div
            className={styles.heroMainArea}
            style={
              {
                "--hero-w": `${cardWidthPct}vw`,
                "--hero-h": `${cardHeightVh}vh`,
                "--hero-top": `${topOffsetVh}vh`,
              } as React.CSSProperties
            }
          >
            <img
              src="/assets/hero/6aa255a39bbbfbc567027087_Hero.webp"
              alt=""
              width={2880}
              height={2048}
              className={styles.heroBgImage}
            />

            <div className={styles.heroContentOverlay}>
              <div
                className={styles.desktopBrandBlock}
                style={{
                  opacity: desktopBrandOpacity,
                  pointerEvents: desktopBrandOpacity > 0.15 ? "auto" : "none",
                }}
              >
                <div className={styles.brandRow}>
                  <img
                    src="/assets/brand/6ab0f0cb1031e9bd214b7669_Subtract.svg"
                    alt="Docketo mark"
                    width={79}
                    height={87}
                    className={styles.brandMark}
                  />
                  <span className={styles.brandDivider} aria-hidden="true" />
                  <span className={styles.brandWordmark}>Docketo</span>
                </div>
                <p className={styles.heroSubtitle}>{SITE_CONFIG.tagline}</p>
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setVideoOpen(true)}
                  >
                    Watch the video
                  </button>
                  <Link href={SITE_CONFIG.routes.homeTryFree} className="btn btn-light">
                    Try for Free
                  </Link>
                </div>
              </div>

              <div
                className={styles.smallDemoBlock}
                style={{
                  opacity: smallDemoOpacity,
                  pointerEvents: smallDemoOpacity > 0.25 ? "auto" : "none",
                }}
              >
                <h2 className="heading-h2 text-white">Ready to see how it works?</h2>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setVideoOpen(true)}
                >
                  <img
                    src="/assets/hero/6aa26c8cc9fc07bcca2e4361_Vector.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span>Play Demo</span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.heroBottomBg}>
            <LogoMarquee logos={HOME_WHITE_LOGOS} gap="compact" variant="dark-bg" durationSeconds={28} />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title="Docketo Product Demo"
        embedUrl={SITE_CONFIG.videoEmbedUrl}
        externalUrl={SITE_CONFIG.videoUrl}
      />
    </>
  );
}
