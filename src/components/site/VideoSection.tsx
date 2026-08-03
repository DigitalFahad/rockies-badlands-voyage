import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "motion/react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

const testimonials = [
  { name: "Marianne, France", quote: "The morning we still describe to people.", length: "1:42" },
  { name: "The Ramans, Toronto", quote: "Six of us, not fifty. That's the difference.", length: "2:08" },
  { name: "Hannah, Melbourne", quote: "Real local knowledge, not a script.", length: "1:26" },
];

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl shadow-lift">
          <motion.img
            src={images.icefields}
            alt="Aerial view of the Icefields Parkway winding beside a glacier-fed river"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-video w-full object-cover"
            animate={playing ? { scale: 1.06 } : { scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
          />
          <div className="image-scrim absolute inset-0" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              aria-label={playing ? "Pause the film preview" : "Play the film: A Season in the Rockies"}
              className="group grid size-20 place-items-center rounded-full bg-white/95 shadow-lift transition-transform duration-300 hover:scale-105 sm:size-24"
            >
              {playing ? (
                <Pause className="size-8 text-primary" aria-hidden="true" />
              ) : (
                <Play className="ml-1 size-8 fill-primary text-primary" aria-hidden="true" />
              )}
            </button>
            <p className="eyebrow mt-8 text-white/80">Our film</p>
            <h2 className="display-md mt-3 max-w-2xl text-white">A Season in the Rockies</h2>
            <p className="mt-4 max-w-lg text-white/85">
              Four minutes, shot across one full season by our own guides — from June meltwater to
              October larch gold.
            </p>
          </div>

          <p className="absolute bottom-5 right-6 text-xs font-bold tracking-widest text-white/70 uppercase">
            4:12 · 4K
          </p>
        </div>
      </Reveal>

      <ul className="mt-8 grid gap-5 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 0.09}>
            <button
              type="button"
              aria-label={`Play video testimonial from ${t.name}`}
              className="surface-card group flex w-full items-center gap-4 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sunrise/15 text-sunrise transition-transform group-hover:scale-105">
                <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-base text-foreground">
                  “{t.quote}”
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {t.name} · {t.length}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
