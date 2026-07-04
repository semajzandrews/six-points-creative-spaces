"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

export default function Hero() {
  const vid = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <video
        ref={vid}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/poster.jpg"
        preload="metadata"
      >
        <source src="/video/hero-360.mp4" media="(max-width: 640px)" type="video/mp4" />
        <source src="/video/hero-720.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--ink) 4%, rgba(16,14,12,0.55) 40%, rgba(16,14,12,0.35))",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36">
        <Reveal>
          <p className="kicker mb-5">Bloomfield Center · Est. on the Avenue</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-3xl text-[clamp(2.9rem,9vw,6.2rem)]">
            Your occasion, <span className="gold-grad italic">your room.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-lg text-bone-dim">
            An intimate creative event space at 547 Bloomfield Ave. Birthdays, showers,
            pop-ups, photo shoots — bring the moment, we hold the space.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#request" className="btn-gold">Request the Space</a>
            <a href="#gallery" className="btn-ghost">See it dressed</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
