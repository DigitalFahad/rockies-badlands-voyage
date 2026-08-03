import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/site";
import { TourCard } from "./TourCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Signature departures"
          title="Experiences built around the light, not the timetable"
          intro="Six flagship journeys across the Rockies and Badlands. Every departure is capped small, guided by someone who lives here, and timed to the hour the landscape is at its best."
        >
          <Link
            to="/experiences"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary"
          >
            View all experiences
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </SectionHeading>
      </Reveal>

      <ul className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour, i) => (
          <Reveal as="li" key={tour.slug} delay={(i % 3) * 0.1}>
            <TourCard tour={tour} index={i} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
