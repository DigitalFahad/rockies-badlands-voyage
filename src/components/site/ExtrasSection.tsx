import { useState } from "react";
import { toast } from "sonner";
import {
  CloudSun,
  Snowflake,
  Sun,
  Leaf,
  Binoculars,
  Download,
  Instagram,
  Thermometer,
  Wind,
} from "lucide-react";
import { galleryItems } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const forecast = [
  { day: "Today", icon: CloudSun, high: 14, low: 2, note: "Sun breaking through by 9am" },
  { day: "Thu", icon: Sun, high: 17, low: 4, note: "Clear — ideal for sunrise" },
  { day: "Fri", icon: CloudSun, high: 12, low: 1, note: "High cloud, soft light" },
  { day: "Sat", icon: Snowflake, high: 6, low: -3, note: "Fresh snow above 2,200m" },
];

const seasons = [
  {
    Icon: Leaf,
    season: "Spring · April – June",
    body: "Meltwater thunder, bears emerging, and lakes turning from ice to turquoise. Fewest visitors of the year.",
    pick: "Bow Valley Wildlife Safari",
  },
  {
    Icon: Sun,
    season: "Summer · July – August",
    body: "Every trail open, every lake paddleable. We depart pre-dawn to stay ahead of the crowds.",
    pick: "Moraine Lake Sunrise",
  },
  {
    Icon: Wind,
    season: "Autumn · September – October",
    body: "Larch gold, elk rutting and the clearest air of the year. Our guides' favourite six weeks.",
    pick: "Larch Valley & Sentinel Pass",
  },
  {
    Icon: Snowflake,
    season: "Winter · November – March",
    body: "Frozen bubbles at Abraham Lake, ice canyons and the Badlands under snow. Quiet and startling.",
    pick: "Drumheller Badlands & Fossils",
  },
];

const sightings = [
  { animal: "Grizzly (sow + 2 cubs)", where: "Bow Valley Parkway, km 14", when: "2 days ago" },
  { animal: "Bighorn sheep herd", where: "Lake Minnewanka Road", when: "Yesterday" },
  { animal: "Bull elk", where: "Vermilion Lakes, dusk", when: "Today" },
  { animal: "Great grey owl", where: "Kananaskis, Highway 40", when: "4 days ago" },
];

export function ExtrasSection() {
  const [email, setEmail] = useState("");

  const download = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("On its way — the Rockies Adventure Checklist is in your inbox.");
    setEmail("");
  };

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Plan smarter"
            title="Conditions, seasons and what the valley is doing right now"
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Weather */}
          <Reveal>
            <article className="surface-card h-full p-7">
              <h3 className="flex items-center gap-2 font-display text-xl text-foreground">
                <Thermometer className="size-5 text-sunrise" aria-hidden="true" />
                Canmore & Banff forecast
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bow Valley, 1,309 m · updated hourly
              </p>
              <ul className="mt-6 space-y-4">
                {forecast.map(({ day, icon: Icon, high, low, note }) => (
                  <li key={day} className="flex items-center gap-4">
                    <Icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-foreground">{day}</span>
                      <span className="block truncate text-xs text-muted-foreground">{note}</span>
                    </span>
                    <span className="shrink-0 font-display text-lg text-foreground">
                      {high}° <span className="text-muted-foreground">/ {low}°</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Wildlife sightings */}
          <Reveal delay={0.08}>
            <article className="surface-card h-full p-7">
              <h3 className="flex items-center gap-2 font-display text-xl text-foreground">
                <Binoculars className="size-5 text-sunrise" aria-hidden="true" />
                Recent wildlife sightings
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Logged by our guides on tour. Viewed at a respectful distance.
              </p>
              <ul className="mt-6 space-y-4">
                {sightings.map((s) => (
                  <li key={s.animal} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-bold text-foreground">{s.animal}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {s.where} · {s.when}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Checklist download */}
          <Reveal delay={0.16}>
            <article className="surface-card h-full bg-primary p-7 text-white">
              <h3 className="flex items-center gap-2 font-display text-xl">
                <Download className="size-5 text-sunrise" aria-hidden="true" />
                Adventure checklist
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Our guides' 4-season packing and preparation guide — 12 pages, altitude and bear
                safety included. Free.
              </p>
              <form onSubmit={download} className="mt-6">
                <label htmlFor="checklist-email" className="sr-only">
                  Email address for the checklist
                </label>
                <input
                  id="checklist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  maxLength={255}
                  className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-sunrise"
                />
                <button
                  type="submit"
                  className="mt-3 w-full min-h-11 rounded-full bg-sunrise font-bold text-sunrise-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send me the checklist
                </button>
              </form>
              <p className="mt-4 text-xs text-white/60">
                One email, no subscription required.
              </p>
            </article>
          </Reveal>
        </div>

        {/* Seasonal recommendations */}
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map(({ Icon, season, body, pick }, i) => (
            <Reveal as="li" key={season} delay={i * 0.07}>
              <article className="surface-card h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Icon className="size-6 text-forest" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-foreground">{season}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <p className="mt-5 text-[11px] font-bold tracking-[0.14em] text-sunrise uppercase">
                  Guide's pick
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{pick}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Instagram feed */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center text-center">
            <h3 className="flex items-center gap-2 font-display text-2xl text-foreground">
              <Instagram className="size-5 text-sunrise" aria-hidden="true" />
              @rockiesbadlandexplorers
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fresh frames from this week's departures
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {galleryItems.slice(0, 6).map((item) => (
              <li key={item.alt}>
                <a
                  href="#"
                  aria-label={`View on Instagram: ${item.alt}`}
                  className="group zoom-parent relative block overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-primary/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <Instagram className="size-5 text-white" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
