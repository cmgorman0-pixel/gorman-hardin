"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // Honeypot -- real visitors never see or fill this field (hidden
      // off-screen below); bots that fill every input usually do.
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      if (json.skipped) {
        setStatus("unavailable");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-navy/10 bg-white p-8 text-center">
        <p className="font-semibold text-navy">Message sent.</p>
        <p className="mt-2 text-sm text-charcoal/70">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-lg border border-navy/10 bg-white p-8 text-center">
        <p className="font-semibold text-charcoal">This form isn&apos;t connected yet.</p>
        <p className="mt-2 text-sm text-charcoal/70">
          Please email us directly or call us in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-navy/10 bg-white p-8 text-left"
    >
      <div aria-hidden="true" className="absolute left-[-9999px]" style={{ height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-charcoal">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            maxLength={200}
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-charcoal">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            maxLength={200}
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="company" className="text-sm font-medium text-charcoal">
          Company name (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={200}
          className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          className="mt-1 w-full rounded-md border border-navy/20 px-3 py-2 text-sm outline-none focus:border-navy"
        />
      </div>

      {status === "error" && <p className="mt-3 text-sm text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
