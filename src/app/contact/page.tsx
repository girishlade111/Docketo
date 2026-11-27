import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { ContactForm } from "@/components/forms/ContactForm";
import { DARK_PARTNER_LOGOS } from "@/content/logos";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Book a Demo - Talk to Our Embedded Banking Experts | Docketo",
  description:
    "Schedule a live demo with our financial infrastructure experts to see how Docketo can power your platform's banking capabilities.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className={styles.splitSection}>
        <div className={styles.leftCol}>
          <div className={styles.leftInner}>
            <div className={styles.introText}>
              <h1 className="heading-h1">Tell us what you&apos;re building</h1>
              <p className="text-rg text-secondary">
                Whether you&apos;re ready to build or just exploring, our team is here to help.
              </p>
            </div>
            <div className={styles.logoMarqueeWrap}>
              <LogoMarquee logos={DARK_PARTNER_LOGOS} gap="wide" variant="light-bg" durationSeconds={22} />
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
