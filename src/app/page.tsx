import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import RequestForm from "@/components/RequestForm";
import SmoothScroll from "@/components/SmoothScroll";
import { MarkDefs, Star } from "@/components/Mark";

const ADDRESS = "547 Bloomfield Ave, Bloomfield, NJ 07003";

const OCCASIONS = [
  {
    title: "Milestone birthdays",
    body: "Thirty, forty, fifty — the ones that deserve more than a reserved table in the back of a restaurant.",
    img: "/img/30142374.jpg",
    alt: "Gold glitter 40th birthday setup with champagne",
  },
  {
    title: "Showers & first birthdays",
    body: "Balloon garlands, dessert tables, a room the photos will love. Set it up your way, we hold the door.",
    img: "/img/34260120.jpg",
    alt: "First birthday balloon garland with ONE marquee letters",
  },
  {
    title: "Pop-ups & shoots",
    body: "A blank canvas on the Avenue for your launch, your content day, your trunk show. Foot traffic included.",
    img: "/img/17056974.jpg",
    alt: "Airy loft venue with round tables and string lights",
  },
];

const GALLERY = [
  { img: "/img/16935897.jpg", alt: "Candlelit banquet hall with purple and gold ambient lighting", span: "md:col-span-2 md:row-span-2" },
  { img: "/img/5970895.jpg", alt: "Friends celebrating with confetti and gold balloons", span: "" },
  { img: "/img/14457436.jpg", alt: "Balloon arch over a dressed party table", span: "md:row-span-2" },
  { img: "/img/17001774.jpg", alt: "Dark wood table set with greenery centerpiece", span: "" },
];

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="kicker mb-3">{kicker}</p>
          <h2 className="text-[clamp(2rem,5vw,3.4rem)]">{title}</h2>
        </div>
        <Star size={30} className="star-slow mb-2 hidden shrink-0 sm:block" />
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <MarkDefs />
      <SmoothScroll />
      <Nav />
      <Hero />

      {/* The Space */}
      <section id="space" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/img/16985178.jpg"
                alt="Warm event venue interior with wood floors and brick"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker mb-3">The Space</p>
              <h2 className="text-[clamp(2rem,5vw,3.4rem)]">
                Six corners of Bloomfield meet here. <span className="gold-grad italic">So do yours.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-bone-dim">
                Right on the Avenue in the heart of Bloomfield Center, Six Points Creative
                Spaces is an intimate room built for the gatherings that matter — dressed up,
                stripped down, or anywhere in between.
              </p>
              <p className="mt-4 text-bone-dim">
                You bring the vision. Decorators, caterers and DJs are welcome; so are folding
                tables and a speaker from home. It&apos;s your room for the day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 grid gap-3 text-sm">
                {[
                  "Street-front on Bloomfield Ave — easy drop-off and foot traffic",
                  "Flexible open floor plan you can dress for any theme",
                  "Steps from Bloomfield Center parking, transit and food",
                  "★★★★★ rated on Google",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Star size={13} className="mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section id="occasions" className="border-y border-[var(--hairline)] bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionHead kicker="Occasions" title="What the room becomes" />
          <div className="grid gap-6 md:grid-cols-3">
            {OCCASIONS.map((o, i) => (
              <Reveal key={o.title} delay={i * 120}>
                <article className="group overflow-hidden rounded-sm border border-[var(--hairline)] bg-ink">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={o.img}
                      alt={o.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl">{o.title}</h3>
                    <p className="mt-3 text-sm text-bone-dim">{o.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHead kicker="Gallery" title="See it dressed" />
        <div className="grid auto-rows-[210px] grid-cols-1 gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.img + i} delay={i * 100} className={g.span}>
              <div className="relative h-full min-h-[210px] w-full overflow-hidden rounded-sm">
                <Image src={g.img} alt={g.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 text-center text-sm italic text-bone-dim">
            Concept styling — come see the room in person and picture your own.
          </p>
        </Reveal>
      </section>

      {/* Request */}
      <section id="request" className="border-y border-[var(--hairline)] bg-ink-2">
        <div className="mx-auto max-w-4xl px-5 py-24 md:py-32">
          <SectionHead kicker="Book it" title="Request the space" />
          <Reveal>
            <RequestForm />
          </Reveal>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHead kicker="Visit" title="On the Avenue" />
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <p className="font-[family-name:var(--font-melodrama)] text-2xl">Six Points Creative Spaces</p>
              <p className="mt-3 text-bone-dim">{ADDRESS}</p>
              <p className="mt-6 text-sm text-bone-dim">
                In the heart of Bloomfield Center — a short walk from the Green and
                Bloomfield Station.
              </p>
              <a
                className="btn-ghost mt-8"
                href={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="map-frame" style={{ height: "clamp(360px, 38vw, 460px)" }}>
              <iframe
                title={`Six Points Creative Spaces location — ${ADDRESS}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--hairline)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center text-sm text-bone-dim sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <Star size={16} className="star-slow" />
            <span>Six Points Creative Spaces · Bloomfield, NJ</span>
          </div>
          <p>
            built by{" "}
            <a href="https://bysemaj.com" className="text-gold transition-colors hover:text-gold-hi" target="_blank" rel="noopener noreferrer">
              bysemaj.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
