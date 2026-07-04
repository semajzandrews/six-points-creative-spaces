"use client";

import { useState } from "react";

const OCCASIONS = [
  "Birthday",
  "Baby / bridal shower",
  "Pop-up shop",
  "Photo / video shoot",
  "Private dinner",
  "Something else",
];

export default function RequestForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-sm border border-[var(--hairline)] bg-ink-2 p-10 text-center">
        <p className="font-[family-name:var(--font-melodrama)] text-2xl text-gold-hi">
          Request received.
        </p>
        <p className="mt-3 text-bone-dim">
          We&apos;ll get back to you shortly. You can also stop by the space —
          547 Bloomfield Ave, Bloomfield.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input className="field" name="name" placeholder="Your name" required aria-label="Your name" />
      <input className="field" name="contact" placeholder="Phone or email" required aria-label="Phone or email" />
      <select className="field" name="occasion" defaultValue="" required aria-label="Occasion">
        <option value="" disabled>
          What&apos;s the occasion?
        </option>
        {OCCASIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <input className="field" name="date" placeholder="Date you have in mind" aria-label="Date" />
      <textarea
        className="field sm:col-span-2"
        name="details"
        rows={4}
        placeholder="Guest count, vision, anything we should know…"
        aria-label="Details"
      />
      <div className="sm:col-span-2">
        <button type="submit" className="btn-gold w-full justify-center sm:w-auto">
          Send request
        </button>
      </div>
    </form>
  );
}
