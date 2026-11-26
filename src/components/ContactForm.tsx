"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    const body = {
      name: f.get("name"),
      email: f.get("email"),
      company: f.get("company"),
      role: f.get("role"),
      interest: f.get("interest"),
      message: f.get("message"),
      consent: f.get("consent") === "on",
      website: f.get("website"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="card" role="status">Thank you. We will get back to you shortly.</p>;
  }

  const field = "block text-sm font-medium";
  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={field}>Full name<input name="name" required maxLength={120} className="input mt-1" /></label>
        <label className={field}>Business email<input name="email" type="email" required maxLength={200} className="input mt-1" /></label>
        <label className={field}>Company<input name="company" required maxLength={160} className="input mt-1" /></label>
        <label className={field}>Job title<input name="role" maxLength={120} className="input mt-1" /></label>
      </div>
      <label className={field}>
        Solution of interest
        <select name="interest" defaultValue="not-sure" className="input mt-1">
          <option value="onderzoeker">Onderzoeker Powered by AI</option>
          <option value="omzetter">Agentic Omzetter</option>
          <option value="kwalificatiestrijder">Kwalificatiestrijder</option>
          <option value="devops">DevOps</option>
          <option value="platform">Platform</option>
          <option value="support">Support</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>
      <label className={field}>
        Business challenge
        <textarea name="message" rows={4} maxLength={2000} className="input mt-1" />
      </label>
      <div className="hidden" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree that my details are used to respond to this request, as described in the{" "}
          <Link href="/privacy" className="text-accent underline">privacy notice</Link>.
        </span>
      </label>
      {status === "error" && <p role="alert" className="text-sm text-red-500">Something went wrong. Please check the form and try again.</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Request a demo"}
      </button>
    </form>
  );
}
