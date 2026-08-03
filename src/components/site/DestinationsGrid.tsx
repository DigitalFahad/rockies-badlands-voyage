import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { destinations } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function DestinationsGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="destinations" className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Where we go"
              title="Seven landscapes, ninety minutes apart"
              intro="From glacier-fed lakes to 75-million-year-old coulees. Choose a region and we'll shape the days around it."
              align="center"
            />
          </Reveal>
        )}

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={(i % 3) * 0.1}>
              <Link
                to="/experiences"
                className="group zoom-parent relative block h-full min-h-[380px] overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.tagline}`}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="image-scrim absolute inset-0" />
                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-7">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-white/80 uppercase">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {d.drive}
                  </p>
                  <h3 className="mt-3 flex items-start gap-2 font-display text-3xl text-white">
                    {d.name}
                    <ArrowUpRight
                      className="mt-1.5 size-5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-sunrise">{d.tagline}</p>
                  <p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {d.description}
                  </p>
                  <p className="mt-5 text-xs font-bold tracking-wide text-white/70 uppercase">
                    {d.tours} experiences
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
