import {
  Compass,
  UsersRound,
  Gem,
  Camera,
  BusFront,
  CalendarClock,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

const benefits = [
  {
    Icon: Compass,
    title: "Local expert guides",
    body: "Every guide lives in the Bow Valley and holds interpretive certification. Average tenure with us: six seasons.",
  },
  {
    Icon: UsersRound,
    title: "Small groups only",
    body: "Eight guests maximum on standard departures, four to six on hikes and photography days.",
  },
  {
    Icon: Gem,
    title: "Hidden gems",
    body: "Unmarked viewpoints, quiet lakeshores and the canyon pull-offs the coaches drive straight past.",
  },
  {
    Icon: Camera,
    title: "Photography stops",
    body: "We build the day around light. Real stops, tripod time, and guides who know the angles.",
  },
  {
    Icon: BusFront,
    title: "Comfortable transportation",
    body: "Premium Mercedes Sprinters with panoramic glass, captain's seats and hotel-door pickup.",
  },
  {
    Icon: CalendarClock,
    title: "Flexible itineraries",
    body: "Weather turns, wildlife appears. Our guides re-plan the day in the moment — at no extra cost.",
  },
  {
    Icon: Leaf,
    title: "Eco conscious",
    body: "Carbon-offset fleet, Leave No Trace practice and 1% of revenue to Bow Valley conservation.",
  },
  {
    Icon: ShieldCheck,
    title: "Safety first",
    body: "Wilderness First Responder guides, satellite communicators and daily avalanche assessment.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="zoom-parent overflow-hidden rounded-3xl shadow-lift">
              <img
                src={images.guestsHiking}
                alt="A small guided group of guests smiling together on an alpine ridge in Banff National Park"
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="surface-card absolute -right-3 -bottom-8 w-56 p-5 sm:-right-8">
              <p className="font-display text-4xl text-primary">8</p>
              <p className="mt-1 text-xs font-bold tracking-wide text-muted-foreground uppercase">
                Guests maximum
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                The number that lets a guide actually answer your questions.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-sunrise">Why travel with us</p>
            <h2 className="display-md mt-4 text-foreground">
              The difference is who's driving
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We are not a reseller. Every guide is on our team, every vehicle is ours, and every
              itinerary was walked before it was sold.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {benefits.map(({ Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 0.08} y={18}>
                <Icon className="size-6 text-forest" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
