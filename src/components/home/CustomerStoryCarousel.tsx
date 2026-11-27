"use client";

import React, { useState } from "react";
import { CUSTOMER_STORIES, STORY_PLAY_ICON } from "@/content/customer-stories";
import { VideoModal } from "@/components/common/VideoModal";
import { SITE_CONFIG } from "@/config/site";
import styles from "./CustomerStoryCarousel.module.css";

export function CustomerStoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const prevIdx = (activeIndex - 1 + CUSTOMER_STORIES.length) % CUSTOMER_STORIES.length;
  const nextIdx = (activeIndex + 1) % CUSTOMER_STORIES.length;

  const leftStory = CUSTOMER_STORIES[prevIdx];
  const centerStory = CUSTOMER_STORIES[activeIndex];
  const rightStory = CUSTOMER_STORIES[nextIdx];

  return (
    <>
      <section className={styles.section} aria-label="Customer stories">
        <div className="section-pad-medium">
          <div className={styles.wrapper}>
            <div className={styles.trackRow}>
              <div className={`${styles.sideCard} ${styles.leftSide}`} aria-hidden="true">
                <img
                  src={leftStory.backgroundAsset}
                  alt=""
                  className={styles.slideBg}
                />
                <div className={styles.dimOverlay} />
                <div className={styles.slideContent}>
                  <h2 className="heading-h2 text-white">{leftStory.headline}</h2>
                  <div className={styles.playBtnCircle}>
                    <img src={STORY_PLAY_ICON} alt="" width={16} height={18} />
                  </div>
                </div>
              </div>

              <div className={styles.centerCard}>
                <img
                  src={centerStory.backgroundAsset}
                  alt={centerStory.company}
                  className={styles.slideBg}
                />
                <div className={styles.dimOverlay} />
                <div className={styles.slideContent}>
                  <h2 className="heading-h2 text-white">{centerStory.headline}</h2>
                  <button
                    type="button"
                    className={styles.playBtnCircle}
                    onClick={() => setVideoOpen(true)}
                    aria-label={`Play ${centerStory.company} customer story video`}
                  >
                    <img src={STORY_PLAY_ICON} alt="" width={16} height={18} />
                  </button>
                </div>
              </div>

              <div className={`${styles.sideCard} ${styles.rightSide}`} aria-hidden="true">
                <img
                  src={rightStory.backgroundAsset}
                  alt=""
                  className={styles.slideBg}
                />
                <div className={styles.dimOverlay} />
                <div className={styles.slideContent}>
                  <h2 className="heading-h2 text-white">{rightStory.headline}</h2>
                  <div className={styles.playBtnCircle}>
                    <img src={STORY_PLAY_ICON} alt="" width={16} height={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.logoSelectorRow} role="tablist" aria-label="Select customer story">
              {CUSTOMER_STORIES.map((story, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={story.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${story.company} story`}
                    className={`${styles.logoBtn} ${isActive ? styles.logoBtnActive : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <img
                      src={story.logoAsset}
                      alt={story.company}
                      className={styles.storyLogo}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={`${centerStory.company} Customer Story`}
        embedUrl={SITE_CONFIG.storyVideoEmbedUrl}
        externalUrl={centerStory.videoUrl}
      />
    </>
  );
}
