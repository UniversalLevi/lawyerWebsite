"use client";

import { FormEvent, useState } from "react";
import { contactMethods, matterTypes } from "@/content/forms";
import { legalCopy } from "@/content/legal";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm({ initialSuccess = false }: { initialSuccess?: boolean }) {
  const [status, setStatus] = useState<Status>(
    initialSuccess
      ? { type: "success", message: legalCopy.formSuccess }
      : { type: "idle" },
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "submitting" });

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.message ?? "The enquiry could not be sent. Please telephone the office.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: payload.message ?? legalCopy.formSuccess,
      });
    } catch {
      setStatus({
        type: "error",
        message: "The enquiry could not be sent. Please telephone the office.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p>{status.message}</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      method="post"
      action="/api/contact"
      aria-busy={status.type === "submitting"}
    >
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required maxLength={80} />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={20} />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} />
      </div>

      <div className="field">
        <label htmlFor="matter">Type of legal matter</label>
        <select id="matter" name="matter" required defaultValue="">
          <option value="" disabled>
            Select a matter
          </option>
          {matterTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="description">Brief description</label>
        <textarea id="description" name="description" required maxLength={1000} />
      </div>

      <div className="field">
        <label htmlFor="preferredMethod">Preferred contact method</label>
        <select id="preferredMethod" name="preferredMethod" required defaultValue="phone">
          {contactMethods.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <p className="hp-warn">{legalCopy.formWarning}</p>

      {status.type === "error" ? (
        <p className="form-error" role="alert">
          {status.message}
        </p>
      ) : null}

      <button className="btn btn-solid" type="submit" disabled={status.type === "submitting"}>
        {status.type === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
