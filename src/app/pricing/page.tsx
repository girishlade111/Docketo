import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { SharedFaq } from "@/components/common/SharedFaq";
import { PRICING_HERO, PRICING_PLANS } from "@/content/pricing";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Docketo Pricing - Flexible Infrastructure Plans for Growth",
  description:
    "Transparent pricing models built for startups and enterprise fintechs. Scale your financial products seamlessly with no hidden fees.",
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <section className={styles.pricingSection}>
        <div className="page-gutter">
          <div className="container-large">
            <div className="section-pad-medium">
              <div className={styles.component}>
                <div className={styles.titleWrap}>
                  <h1 className="heading-h2">{PRICING_HERO.heading}</h1>
                  <p className="text-rg text-secondary">{PRICING_HERO.subtitle}</p>
                </div>

                <div className={styles.grid}>
                  {PRICING_PLANS.map((plan) => {
                    const isEnterprise = plan.surfaceVariant === "enterprise";
                    const cardClass =
                      plan.surfaceVariant === "growth"
                        ? `${styles.card} ${styles.cardGrowth}`
                        : isEnterprise
                        ? `${styles.card} ${styles.cardEnterprise}`
                        : styles.card;

                    return (
                      <article key={plan.id} className={cardClass}>
                        <div className={styles.topContent}>
                          <h2 className={styles.planName}>{plan.name}</h2>
                          <p className={styles.planDesc}>{plan.description}</p>
                        </div>

                        <div className={styles.priceWrap}>
                          <div className="heading-h5">{plan.displayPrice}</div>
                        </div>

                        <div className={styles.bottomArea}>
                          <div className={styles.featuresArea}>
                            <div
                              className={`${styles.includedHeader} ${
                                isEnterprise ? styles.includedHeaderDark : ""
                              }`}
                            >
                              <span className="text-sm">What’s included:</span>
                            </div>
                            <ul className={styles.featureList}>
                              {plan.features.map((feat) => (
                                <li key={feat} className="text-rg">
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link
                            href={plan.ctaHref}
                            className={`btn btn-full ${
                              plan.buttonVariant === "light" ? "btn-light" : "btn-dark"
                            }`}
                          >
                            {plan.ctaLabel}
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel initialIndex={0} />
      <SharedFaq />
    </SiteLayout>
  );
}
