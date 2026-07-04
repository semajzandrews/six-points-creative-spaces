"use client";

import { useEffect, useState } from "react";
import { Star } from "./Mark";

const LINKS = [
  { href: "#space", label: "The Space" },
  { href: "#occasions", label: "Occasions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-[var(--hairline)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Star size={22} className="star-slow" />
          <span className="font-[family-name:var(--font-melodrama)] text-lg tracking-wide">
            Six Points
          </span>
        </a>
        <div className="hidden gap-8 text-sm text-bone/90 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold-hi">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#request" className="btn-gold !px-4 !py-2 text-sm">
          Request the Space
        </a>
      </nav>
    </header>
  );
}
