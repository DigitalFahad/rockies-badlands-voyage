import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Mountain, Star, Sun } from "lucide-react";
import type { Tour } from "@/data/site";

export function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <article className="group surface-card flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="zoom-parent relative aspect-[4/3]">
        <img
          src={tour.image}
          alt={`${tour.title} — ${tour.location}`}
          loading={index < 3 ? "eager" : "lazy"}
          width={1200}
          height={900}
          className="size-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-bold tracking-wide text-primary backdrop-blur">
            {tour.category}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-primary/85 px-3 py-1.5 text-[11px] font-bold text-primary-foreground backdrop-blur">
            <Star className="size-3 fill-current text-sunrise" aria-hidden="true" />
            {tour.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
          <MapPin className="size-3.5 text-sunrise" aria-hidden="true" />
          {tour.location}
        </p>
        <h3 className="mt-3 font-display text-[22px] leading-snug text-foreground">
          {tour.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tour.blurb}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-4 text-[11px]">
          <div className="min-w-0">
            <dt className="flex items-center gap-1 font-bold tracking-wide text-muted-foreground uppercase">
              <Clock className="size-3" aria-hidden="true" /> Duration
            </dt>
            <dd className="mt-1 truncate text-[13px] font-semibold text-foreground">{tour.duration}</dd>
          </div>
          <div className="min-w-0">
            <dt className="flex items-center gap-1 font-bold tracking-wide text-muted-foreground uppercase">
              <Mountain className="size-3" aria-hidden="true" /> Level
            </dt>
            <dd className="mt-1 truncate text-[13px] font-semibold text-foreground">{tour.difficulty}</dd>
          </div>
          <div className="min-w-0">
            <dt className="flex items-center gap-1 font-bold tracking-wide text-muted-foreground uppercase">
              <Sun className="size-3" aria-hidden="true" /> Season
            </dt>
            <dd className="mt-1 truncate text-[13px] font-semibold text-foreground">{tour.season}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p>
            <span className="block text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
              From
            </span>
            <span className="font-display text-3xl text-primary">${tour.price}</span>
            <span className="ml-1 text-xs text-muted-foreground">CAD / guest</span>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/experiences"
              className="rounded-full border border-input px-3.5 py-2.5 text-[12px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Details
            </Link>
            <Link
              to="/book"
              search={{ tour: tour.slug }}
              className="rounded-full bg-primary px-4 py-2.5 text-[12px] font-bold text-primary-foreground transition-all hover:bg-forest"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
