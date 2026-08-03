import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Camera, Crown, Users, Route as RouteIcon, Car } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

const offerings = [
  { Icon: Crown, title: "Private adventures", body: "Any tour in our collection, exclusively yours, on your schedule." },
  { Icon: Briefcase, title: "Corporate trips", body: "Incentive travel and executive retreats for groups of 4 to 40." },
  { Icon: Users, title: "Family tours", body: "Paced for three generations, with guides who love the questions." },
  { Icon: Camera, title: "Photography tours", body: "Sunrise-to-blue-hour itineraries built around your portfolio." },
  { Icon: RouteIcon, title: "Custom itineraries", body: "Multi-day routes across the Rockies, Badlands and beyond." },
  { Icon: Car, title: "Luxury transportation", body: "Executive Sprinters and private drivers with hotel-door service." },
];

export function PrivateToursTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img
        src={images.privateTour}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-sunrise">Private & bespoke</p>
            <h2 className="display-md mt-4 text-white">
              When the trip should be entirely yours
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              A private guide, an executive vehicle and an itinerary written around your interests,
              your pace and your camera. We plan honeymoons, board retreats, multi-generational
              family weeks and photography expeditions across Alberta and British Columbia.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/private-tours"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-sunrise px-7 py-4 font-bold text-sunrise-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Plan My Trip
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center rounded-full border border-white/50 px-7 py-4 font-bold text-white transition-colors hover:bg-white/15"
              >
                Speak with a planner
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Private departures from CAD $1,290 per vehicle per day, up to 8 guests.
            </p>
          </Reveal>

          <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {offerings.map(({ Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 0.08} y={18}>
                <Icon className="size-6 text-sunrise" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
