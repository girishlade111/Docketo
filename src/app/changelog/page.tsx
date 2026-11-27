import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CHANGELOG_CONTENT } from "@/content/utilities";
import styles from "./changelog.module.css";

export const metadata: Metadata = {
  title: "Changelog - Docketo",
  description:
    "Track the latest updates, feature releases, improvements, and bug fixes applied to the Docketo template.",
};

export default function ChangelogPage() {
  return (
    <SiteLayout>
      <section className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <div className={styles.card}>
              <div className={styles.versionBadge}>{CHANGELOG_CONTENT.version}</div>
              <h1 className="heading-h1">{CHANGELOG_CONTENT.date}</h1>
              <p className="text-rg text-secondary">{CHANGELOG_CONTENT.title}</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
