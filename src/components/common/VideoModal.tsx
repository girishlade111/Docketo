"use client";

import React, { useEffect } from "react";
import styles from "./VideoModal.module.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  embedUrl: string;
  externalUrl: string;
}

export function VideoModal({ isOpen, onClose, title, embedUrl, externalUrl }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topBar}>
          <span className={styles.modalTitle}>{title}</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close video dialog"
            autoFocus
          >
            Close
          </button>
        </div>
        <div className={styles.frameWrap}>
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
        <div className={styles.fallbackBar}>
          <a href={externalUrl} target="_blank" rel="noreferrer" className={styles.externalLink}>
            Open video on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
