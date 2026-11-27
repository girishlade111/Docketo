"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { SharedFaq } from "@/components/common/SharedFaq";
import { SalesCTA } from "@/components/common/SalesCTA";
import { VideoModal } from "@/components/common/VideoModal";
import { DARK_PARTNER_LOGOS } from "@/content/logos";
import {
  PRODUCT_CHECK_ICON,
  PRODUCT_HERO_PLAY_ICON,
  RESOURCE_CARDS,
  type ProductPageConfig,
} from "@/content/products";
import { SITE_CONFIG } from "@/config/site";
import styles from "./ProductPageView.module.css";

interface ProductPageViewProps {
  config: ProductPageConfig;
}

export function ProductPageView({ config }: ProductPageViewProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  const primaryCtaHref =
    config.ctaActionType === "demo" ? "/contact" : SITE_CONFIG.routes.productContactSales;

  return (
    <SiteLayout>
      {/* Hero Top + Banner */}
      <section className={styles.heroSection}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.heroComponent}>
              <div className={styles.heroTopRow}>
                <h1 className={`heading-h1 ${styles.heroTitle}`}>{config.heroTitle}</h1>
                <div className={styles.heroRight}>
                  <p className="text-rg text-secondary">{config.heroSubtitle}</p>
                  <div>
                    <Link href={primaryCtaHref} className="btn btn-dark">
                      {config.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={styles.heroBannerBtn}
                onClick={() => setVideoOpen(true)}
                aria-label={`Play ${config.heroTitle} video`}
              >
                <img src={config.heroImage} alt="" className={styles.heroBannerImg} />
                <div className={styles.heroBannerDim} />
                <div className={styles.marqueeOverlay} aria-hidden="true">
                  <div className={styles.marqueeTrack}>
                    <span>{config.marqueeText}</span>
                    <span>{config.marqueeText}</span>
                    <span>{config.marqueeText}</span>
                    <span>{config.marqueeText}</span>
                  </div>
                </div>
                <span className={styles.playCircle}>
                  <img src={PRODUCT_HERO_PLAY_ICON} alt="" width={28} height={28} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {config.showLogoStrip && (
          <div className={styles.logoStripWrap}>
            <LogoMarquee logos={DARK_PARTNER_LOGOS} gap="wide" variant="light-bg" durationSeconds={24} />
          </div>
        )}
      </section>

      {/* Dark Highlights / Who Is This For / Workflows / Offerings */}
      {(config.darkHighlights || config.whoIsThisFor || config.workflowFeatures || config.offeringsSection) && (
        <section className={styles.darkSection}>
          <div className="page-gutter">
            <div className="container-large">
              <div className="section-pad-large">
                <div className={styles.darkStack}>
                  {config.darkHighlights && (
                    <div className={styles.highlightsWrap}>
                      {config.darkHighlights.sectionTitle && (
                        <h2 className={`heading-h2 text-white ${styles.centeredTitle}`}>
                          {config.darkHighlights.sectionTitle}
                        </h2>
                      )}

                      {config.darkHighlights.layout === "embedded-staggered" ? (
                        <div className={styles.staggeredGrid}>
                          {config.darkHighlights.items.map((item) => (
                            <article key={item.title} className={styles.staggeredCard}>
                              <img src={item.iconAsset} alt="" width={22} height={22} />
                              <div className={styles.cardCopy}>
                                <h3 className="heading-h5 text-white">{item.title}</h3>
                                <p className="text-sm text-muted">{item.description}</p>
                              </div>
                            </article>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.threeColGrid}>
                          {config.darkHighlights.items.map((item) => (
                            <article key={item.title} className={styles.threeColItem}>
                              <img src={item.iconAsset} alt="" width={22} height={22} />
                              <h3 className="text-rg text-white" style={{ fontWeight: 500 }}>
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted">{item.description}</p>
                            </article>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {config.whoIsThisFor && (
                    <div className={styles.whoRow}>
                      <h2 className="heading-h2 text-white">{config.whoIsThisFor.title}</h2>
                      <p className={`text-rg text-muted ${styles.whoDesc}`}>
                        {config.whoIsThisFor.description}
                      </p>
                    </div>
                  )}

                  {config.workflowFeatures && (
                    <div className={styles.darkRowsList}>
                      {config.workflowFeatures.map((wf) => (
                        <div key={wf.title} className={styles.darkRowItem}>
                          <h3 className="heading-h5 text-white">{wf.title}</h3>
                          <p className="text-sm text-muted">{wf.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {config.offeringsSection && (
                    <div className={styles.offeringsWrap}>
                      <h2 className="heading-h2 text-white">{config.offeringsSection.title}</h2>
                      <div className={styles.threeColGrid}>
                        {config.offeringsSection.items.map((offer) => (
                          <article key={offer.title} className={styles.offeringCard}>
                            <h3 className="heading-h5 text-white">{offer.title}</h3>
                            <p className="text-sm text-muted">{offer.description}</p>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Verify Alternating Split Features */}
      {config.verifyAlternatingFeatures && (
        <section className={styles.darkSection}>
          <div className="page-gutter">
            <div className="container-large">
              <div className="section-pad-large">
                <div className={styles.verifyStack}>
                  {config.verifyAlternatingFeatures.map((feat) => (
                    <article
                      key={feat.title}
                      className={`${styles.verifyRow} ${feat.reversed ? styles.verifyRowReversed : ""}`}
                    >
                      <div className={styles.verifyCopy}>
                        <h2 className="heading-h2 text-white">{feat.title}</h2>
                        <p className="text-rg text-muted">{feat.description}</p>
                      </div>
                      <div
                        className={styles.verifyArtWrap}
                        style={{ backgroundImage: `url("${feat.bgAsset}")` }}
                      >
                        <img
                          src={feat.overlayAsset}
                          alt={feat.title}
                          className={styles.verifyOverlayImg}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dedicated or Pooled Accounts */}
      {config.accountTypes && (
        <section className={styles.lightSection}>
          <div className="page-gutter">
            <div className="container-large">
              <div className="section-pad-large">
                <div className={styles.accountTypesWrap}>
                  <h2 className={`heading-h2 ${styles.centeredTitle}`}>{config.accountTypes.title}</h2>

                  <div className={styles.accountCardsStack}>
                    <article className={styles.accountCard}>
                      <div className={styles.accountLeft}>
                        <h3 className="heading-h3">Dedicated</h3>
                        <ul className={styles.checkList}>
                          {config.accountTypes.dedicatedBullets.map((b) => (
                            <li key={b} className={styles.checkItem}>
                              <img src={PRODUCT_CHECK_ICON} alt="" width={15} height={11} />
                              <span className="text-sm text-secondary">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={styles.accountArtWrap}
                        style={{ backgroundImage: `url("${config.accountTypes.dedicatedBg}")` }}
                      >
                        <img
                          src={config.accountTypes.dedicatedDiagram}
                          alt="Dedicated safeguarding account architecture"
                          className={styles.accountDiagram}
                        />
                      </div>
                    </article>

                    <article className={styles.accountCard}>
                      <div className={styles.accountLeft}>
                        <h3 className="heading-h3">Pooled</h3>
                        <ul className={styles.checkList}>
                          {config.accountTypes.pooledBullets.map((b) => (
                            <li key={b} className={styles.checkItem}>
                              <img src={PRODUCT_CHECK_ICON} alt="" width={15} height={11} />
                              <span className="text-sm text-secondary">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={styles.accountArtWrap}
                        style={{ backgroundImage: `url("${config.accountTypes.pooledBg}")` }}
                      >
                        <img
                          src={config.accountTypes.pooledDiagram}
                          alt="Pooled safeguarding account architecture"
                          className={styles.accountDiagram}
                        />
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases / What You Get / Native Workflows */}
      {config.useCasesSection && (
        <section className={styles.lightSection}>
          <div className="page-gutter">
            <div className="container-large">
              <div className="section-pad-large">
                <div className={styles.useCasesWrap}>
                  <h2 className="heading-h2">{config.useCasesSection.title}</h2>
                  <div className={styles.useCaseRows}>
                    {config.useCasesSection.items.map((item) => (
                      <div key={item.title} className={styles.useCaseRow}>
                        <h3 className="heading-h5">{item.title}</h3>
                        <p className="text-sm text-secondary">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {config.showFaq && <SharedFaq />}

      {/* Resource Cards */}
      {config.showResourceCards && (
        <section className={styles.lightSection}>
          <div className="page-gutter">
            <div className="container-large">
              <div className="section-pad-medium">
                <div className={styles.resourceGrid}>
                  {RESOURCE_CARDS.map((card) => {
                    const href =
                      card.id === "deposit-protection"
                        ? SITE_CONFIG.routes.depositProtectionCard
                        : card.href;
                    return (
                      <article key={card.id} className={styles.resourceCard}>
                        <img src={card.iconAsset} alt="" width={24} height={24} />
                        <div className={styles.resourceBody}>
                          <h2 className="heading-h3 text-white">{card.title}</h2>
                          <p className="text-sm text-muted">{card.description}</p>
                        </div>
                        <div>
                          <Link href={href} className="btn btn-light">
                            Learn More
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <SalesCTA href={SITE_CONFIG.routes.productContactSales} />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={config.heroTitle}
        embedUrl={SITE_CONFIG.productHeroEmbedUrl}
        externalUrl={SITE_CONFIG.productHeroVideoUrl}
      />
    </SiteLayout>
  );
}
