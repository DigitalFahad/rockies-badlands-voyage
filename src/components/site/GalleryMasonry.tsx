import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryCategories, galleryItems } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function GalleryMasonry({ withHeading = true }: { withHeading?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((v) => (v === null ? v : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="From the field"
            title="Photographs taken on our own departures"
            intro="No stock libraries. Every frame below was shot by a guide or a guest on a tour we ran."
            align="center"
          />
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        {items.map((item, i) => (
          <motion.button
            key={item.alt}
            type="button"
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActive(i)}
            aria-label={`View larger: ${item.alt}`}
            className="group zoom-parent relative mb-5 block w-full break-inside-avoid rounded-2xl shadow-soft transition-shadow hover:shadow-lift"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={`w-full object-cover ${item.span === "tall" ? "aspect-4/5" : "aspect-4/3"}`}
            />
            <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-primary/25 opacity-0 backdrop-blur-[1px] transition-opacity group-hover:opacity-100">
              <Expand className="size-6 text-white" aria-hidden="true" />
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold text-primary">
              {item.category}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[active].src}
                alt={items[active].alt}
                className="max-h-[76dvh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-white/85">
                {items[active].alt}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close viewer"
              className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((v) => (v === null ? v : (v - 1 + items.length) % items.length));
              }}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((v) => (v === null ? v : (v + 1) % items.length));
              }}
              aria-label="Next image"
              className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
