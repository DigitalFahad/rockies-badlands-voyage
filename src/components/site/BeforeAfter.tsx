import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow text-sunrise">Season to season</p>
          <h2 className="display-md mt-4 text-foreground">
            The same valley, four months apart
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Drag the handle. On the left, July meltwater at its most saturated turquoise. On the
            right, October — larch gold on the slopes and the first snow above 2,200 metres.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Our guides shoot the same six viewpoints every month of the season, which is how we know
            exactly when to take you there.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="relative isolate aspect-4/3 w-full cursor-ew-resize overflow-hidden rounded-3xl shadow-lift select-none"
            onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
            onPointerDown={(e) => move(e.clientX)}
          >
            <img
              src={images.canmore}
              alt="Golden larch forest and first snow near Canmore in October"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={images.peyto}
                alt="Peyto Lake at peak summer turquoise in July"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-lift"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-lift">
                <MoveHorizontal className="size-5" aria-hidden="true" />
              </span>
            </div>

            <label className="sr-only" htmlFor="before-after-range">
              Compare July and October views
            </label>
            <input
              id="before-after-range"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute bottom-4 left-1/2 w-2/3 -translate-x-1/2 accent-[var(--sunrise)]"
            />

            <span className="absolute top-4 left-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold text-primary">
              July
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold text-primary">
              October
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
