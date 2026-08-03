import { Star, Quote } from "lucide-react";
import { reviews, stats } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "./Counter";

const sources = [
  { name: "TripAdvisor", rating: "4.9", count: "612 reviews" },
  { name: "Google Reviews", rating: "4.9", count: "428 reviews" },
  { name: "Viator", rating: "4.8", count: "214 reviews" },
];

export function ReviewsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Guest reviews"
              title="1,254 reviews. An average of 4.9."
              intro="Verified reviews from TripAdvisor, Google and Viator — collected after every departure since 2012."
              align="center"
            />
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {sources.map((s) => (
              <div key={s.name} className="surface-card p-6 text-center">
                <p className="flex justify-center gap-0.5" aria-label={`${s.rating} out of 5`}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-sunrise text-sunrise" aria-hidden="true" />
                  ))}
                </p>
                <p className="mt-4 font-display text-4xl text-primary">{s.rating}</p>
                <p className="mt-2 text-sm font-bold text-foreground">{s.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.count}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 3) * 0.09}>
              <article className="surface-card flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="size-7 text-glacier" aria-hidden="true" />
                <p
                  className="mt-4 flex gap-0.5"
                  aria-label={`Rated ${r.rating} out of 5 stars`}
                >
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-sunrise text-sunrise" aria-hidden="true" />
                  ))}
                </p>
                <h3 className="mt-4 font-display text-xl text-foreground">{r.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm text-primary">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-foreground">
                      {r.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {r.origin} · {r.source} · {r.date}
                    </span>
                  </span>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-border pt-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="font-display text-5xl text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
