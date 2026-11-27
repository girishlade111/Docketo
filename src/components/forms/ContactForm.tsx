"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  phoneNumber: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  jobTitle: "",
  phoneNumber: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Please check all required fields and try again.");
        return;
      }
      setStatus("success");
      setFeedback(data.message || "Thank you. Your demonstration request has been recorded.");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
      setFeedback("Unable to submit right now. Please try again.");
    }
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="contact-first-name" className={styles.label}>
            First Name
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-last-name" className={styles.label}>
            Last Name
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            Business Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Business Email Address"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-company" className={styles.label}>
            Company Name
          </label>
          <input
            id="contact-company"
            name="companyName"
            type="text"
            autoComplete="organization"
            required
            placeholder="Company Name"
            value={form.companyName}
            onChange={(e) => updateField("companyName", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-job-title" className={styles.label}>
            Job Title
          </label>
          <input
            id="contact-job-title"
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="Job Title"
            value={form.jobTitle}
            onChange={(e) => updateField("jobTitle", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-phone" className={styles.label}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phoneNumber"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="contact-message" className={styles.label}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="Message"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`btn btn-dark btn-full ${styles.submitBtn}`}
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      {status === "success" && (
        <div role="status" className={styles.successBox}>
          {feedback}
        </div>
      )}

      {status === "error" && (
        <div role="alert" className={styles.errorBox}>
          {feedback}
        </div>
      )}

      <p className={styles.privacyNote}>
        For details about how we collect, use, and protect your information, please see our{" "}
        <Link href="/privacy" className={styles.privacyLink}>
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
