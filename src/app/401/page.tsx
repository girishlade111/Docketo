"use client";

import React, { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { UTILITY_MEDIA } from "@/content/utilities";
import styles from "./protected.module.css";

export default function ProtectedPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(true);
    setPassword("");
  }

  return (
    <SiteLayout>
      <section className={styles.section}>
        <div className="page-gutter">
          <div className="container-large">
            <form className={styles.formWrap} onSubmit={handleSubmit}>
              <img
                src={UTILITY_MEDIA.protectedIllustration}
                alt="Protected page illustration"
                width={300}
                height={157}
                className={styles.illustration}
              />
              <h1 className="heading-h2">Protected Page</h1>

              <div className={styles.inputRow}>
                <label htmlFor="protected-password" className="skip-link">
                  Password
                </label>
                <input
                  id="protected-password"
                  type="password"
                  name="pass"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  className={styles.input}
                  required
                />
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>

              {error && (
                <div role="alert" className={styles.errorText}>
                  Incorrect password. This is a template protected-page fixture.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
