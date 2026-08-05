"use client";

import { useState } from "react";
import { formatAsYouType } from "../lib/phone";

/* PHONE DOCTRINE · Six Points has no published phone number, so there is
   nothing on this site to dial and no number is invented here. What the
   doctrine still governs is the one phone field the site does have: the
   contact line on the request form.

   The field takes a phone OR an email, so the mask has to be conditional.
   The moment the entry is unambiguously a number — digits and phone
   punctuation only, nothing alphabetic — it formats to (973) 000-0000, the
   house format. An email is passed through untouched. */
const LOOKS_LIKE_PHONE = /^[\d\s().+-]*$/;

function maskContact(raw: string): string {
  if (!LOOKS_LIKE_PHONE.test(raw) || raw.replace(/\D/g, "").length < 3) return raw;
  return formatAsYouType(raw);
}

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
  const [contact, setContact] = useState("");

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
      <input
        className="field"
        name="contact"
        value={contact}
        onChange={(e) => setContact(maskContact(e.target.value))}
        placeholder="(973) 000-0000 or your email"
        required
        aria-label="Phone or email"
      />
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
