import React from "react";
import Link from "next/link";
import { UTILITY_MEDIA } from "@/content/utilities";
import styles from "./NotFoundView.module.css";

export function NotFoundView() {
  return (
    <main id="main-content" className={styles.wrap}>
      <div className={styles.content}>
        <img
          src={UTILITY_MEDIA.notFoundIllustration}
          alt="404 illustration"
          width={447}
          height={227}
          className={styles.illustration}
        />
        <h1 className="heading-h2">Sorry, this page can’t be found.</h1>
        <div>
          <Link href="/" className="btn btn-dark">
            Back To Home
          </Link>
        </div>
      </div>
    </main>
  );
}
