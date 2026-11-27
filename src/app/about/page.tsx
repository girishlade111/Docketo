import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ABOUT_CONTENT } from "@/content/about";
import { LEADERSHIP_TEAM } from "@/content/leadership";
import { ARTICLES } from "@/content/articles";
import { SITE_CONFIG, SITE_MODE } from "@/config/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Docketo - Empowering Fintech with API-Driven Banking",
  description:
    "Learn about Docketo’s mission to simplify financial infrastructure. We provide secure, regulatory-compliant banking solutions for tech companies and modern platforms.",
};

export default function AboutPage() {
  const newInsights = ARTICLES.slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero + Stats + Collage */}
      <section className={styles.heroSection}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.heroHeader}>
              <h1 className="heading-h1">{ABOUT_CONTENT.heroHeading}</h1>
              <div className={styles.statsRow}>
                {ABOUT_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <div className="heading-h2">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.collageStrip} aria-label="Team photography collage">
          <div className={styles.collageLeft}>
            <img
              src={ABOUT_CONTENT.collageImages[0].src}
              alt={ABOUT_CONTENT.collageImages[0].alt}
              className={styles.collageImg}
            />
          </div>
          <div className={styles.collageCenter}>
            <img
              src={ABOUT_CONTENT.collageImages[1].src}
              alt={ABOUT_CONTENT.collageImages[1].alt}
              className={styles.collageImg}
            />
          </div>
          <div className={styles.collageRight}>
            <img
              src={ABOUT_CONTENT.collageImages[2].src}
              alt={ABOUT_CONTENT.collageImages[2].alt}
              className={styles.collageImg}
            />
          </div>
        </div>

        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.collageProgressRow} aria-hidden="true">
              <span className={styles.collageBarActive} />
              <span className={styles.collageBar} />
              <span className={styles.collageBar} />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Logo Grid + Editorial Quote */}
      <section className="section-pad-large">
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.whoWeAreWrap}>
              <div className={styles.whoWeAreTop}>
                <h2 className="heading-h2">{ABOUT_CONTENT.whoWeAreHeading}</h2>
                <div className={styles.whoWeAreCopy}>
                  {ABOUT_CONTENT.whoWeAreParagraphs.map((p, idx) => (
                    <p key={idx} className="text-rg">
                      {p}
                    </p>
                  ))}
                  {SITE_MODE === "reference" && (
                    <p className="text-rg text-secondary">{ABOUT_CONTENT.whoWeAreDraftVariant}</p>
                  )}
                </div>
              </div>

              <div className={styles.logoTilesGrid}>
                {ABOUT_CONTENT.clientLogoTiles.map((tile) => (
                  <div key={tile.id} className={styles.logoTile} tabIndex={0}>
                    <div className={styles.tileMediaWrap}>
                      <img src={tile.hoverBg} alt="" className={styles.tileBgImg} />
                      <div className={styles.tileBlackOverlay} />
                    </div>
                    <img src={tile.logo} alt="Partner logo" className={styles.tileLogo} />
                  </div>
                ))}
              </div>

              <blockquote className={styles.editorialQuote}>
                <p className="heading-h2">{ABOUT_CONTENT.quotation.quote}</p>
                <footer className="text-rg text-secondary">{ABOUT_CONTENT.quotation.attribution}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Dark Section */}
      <section className={styles.leadershipSection} aria-labelledby="leadership-heading">
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-large">
              <div className={styles.leadershipWrap}>
                <h2 id="leadership-heading" className="heading-h2 text-white">
                  Leadership
                </h2>
                <div className={styles.leadershipGrid}>
                  {LEADERSHIP_TEAM.map((person) => (
                    <article key={person.id} className={styles.leaderCard}>
                      <div className={styles.leaderImageWrap}>
                        <img
                          src={person.portraitAsset}
                          alt={person.name}
                          width={705}
                          height={774}
                          className={styles.leaderImage}
                        />
                      </div>
                      <div className={styles.leaderInfo}>
                        <h3 className={styles.leaderName}>{person.name}</h3>
                        <p className={styles.leaderRole}>{person.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Insights + Recruitment CTA */}
      <section className="section-pad-large">
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.insightsWrap}>
              <h2 className="heading-h2">New Insights</h2>
              <div className={styles.insightsGrid}>
                {newInsights.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <div className={styles.recruitmentSection}>
              <div className={styles.recruitmentHeader}>
                <h2 className="heading-h2">{ABOUT_CONTENT.recruitment.heading}</h2>
                <Link href={SITE_CONFIG.routes.aboutExploreRoles} className="btn btn-dark">
                  {ABOUT_CONTENT.recruitment.ctaLabel}
                </Link>
              </div>

              <div className={styles.officeGrid}>
                <div className={styles.officeLeft}>
                  <img
                    src={ABOUT_CONTENT.recruitment.leftImage.src}
                    alt={ABOUT_CONTENT.recruitment.leftImage.alt}
                    className={styles.officeImg}
                  />
                </div>
                <div className={styles.officeRight}>
                  <img
                    src={ABOUT_CONTENT.recruitment.rightImage.src}
                    alt={ABOUT_CONTENT.recruitment.rightImage.alt}
                    className={styles.officeImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
