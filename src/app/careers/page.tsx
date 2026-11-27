import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CAREERS_CONTENT } from "@/content/careers";
import { SITE_CONFIG, SITE_MODE } from "@/config/site";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers at Docketo - Join the Future of Banking Infrastructure",
  description:
    "Explore open roles at Docketo and help us build next-generation financial tools for businesses worldwide.",
};

export default function CareersPage() {
  const departments = ["Engineering", "Marketing", "Finance"] as const;

  return (
    <SiteLayout>
      {/* Hero + Photo Strip + Highlights */}
      <section className="section-pad-medium">
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.heroWrap}>
              <h1 className="heading-h1">{CAREERS_CONTENT.heroHeading}</h1>
              <p className="text-rg text-secondary">{CAREERS_CONTENT.heroSubtitle}</p>
              <div>
                <Link href={SITE_CONFIG.routes.careersExploreRoles} className="btn btn-dark">
                  {CAREERS_CONTENT.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.photoStrip}>
          {CAREERS_CONTENT.photoStrip.map((img) => (
            <div key={img.src} className={styles.photoCard}>
              <img src={img.src} alt={img.alt} className={styles.photoImg} />
            </div>
          ))}
        </div>

        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.highlightsGrid}>
              {CAREERS_CONTENT.highlights.map((card) => (
                <article key={card.title} className={styles.highlightCard}>
                  <img src={card.icon} alt="" width={27} height={27} />
                  <h2 className="heading-h5 text-white">{card.title}</h2>
                  <p className="text-sm text-muted">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad-large">
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.splitSection}>
              <div className={styles.stickyLeft}>
                <h2 className="heading-h2">{CAREERS_CONTENT.valuesHeading}</h2>
              </div>

              <div className={styles.valuesList}>
                {CAREERS_CONTENT.values.map((val) => (
                  <article key={val.title} className={styles.valueBlock}>
                    <div className={styles.valueHeader}>
                      <h3 className="heading-h5">{val.title}</h3>
                      <span className="text-sm text-secondary">{val.index}</span>
                    </div>
                    <p className="text-rg text-secondary">{val.description}</p>
                    <ul className={styles.valueBullets}>
                      {val.bullets.map((b) => (
                        <li key={b} className="text-sm">
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.valueImageWrap}>
                      <img src={val.imageAsset} alt={val.title} className={styles.valueImage} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className={styles.benefitsSection}>
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-large">
              <div className={styles.splitSection}>
                <div>
                  <h2 className="heading-h2">{CAREERS_CONTENT.benefitsHeading}</h2>
                </div>
                <div className={styles.benefitsGroups}>
                  {CAREERS_CONTENT.benefitsGroups.map((group) => (
                    <div key={group.title} className={styles.benefitGroup}>
                      <h3 className="text-sm text-secondary">{group.title}</h3>
                      <ul className={styles.benefitList}>
                        {group.items.map((item) => (
                          <li key={item} className="heading-h6">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className={styles.jobsSection}>
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-large">
              <div className={styles.jobsWrap}>
                <h2 className={`heading-h2 text-white ${styles.jobsTitle}`}>
                  {CAREERS_CONTENT.jobsHeading}
                </h2>

                <div className={styles.departmentsList}>
                  {departments.map((dept) => {
                    const deptRoles = CAREERS_CONTENT.roles.filter((r) => r.department === dept);
                    return (
                      <div key={dept} className={styles.deptBlock}>
                        <h3 className="text-sm text-muted">{dept}</h3>
                        <div className={styles.rolesList}>
                          {deptRoles.map((role) => {
                            const href =
                              SITE_MODE === "reference"
                                ? role.referenceApplyUrl
                                : role.productionApplyUrl;
                            const isExternal = href.startsWith("http");
                            return (
                              <div key={role.id} className={styles.roleRow}>
                                <div className="heading-h4 text-white">{role.title}</div>
                                <div className={styles.roleMeta}>
                                  <span className={styles.locationWrap}>
                                    <img
                                      src={CAREERS_CONTENT.mapPinIcon}
                                      alt=""
                                      width={20}
                                      height={20}
                                    />
                                    <span className="text-sm text-muted">{role.location}</span>
                                  </span>
                                  {isExternal ? (
                                    <a
                                      href={href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="btn btn-light"
                                    >
                                      Apply Now
                                    </a>
                                  ) : (
                                    <Link href={href} className="btn btn-light">
                                      Apply Now
                                    </Link>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
