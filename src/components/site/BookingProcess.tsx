import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Choose your tour",
    body: "Browse our collection or tell us what you want to feel. A planner replies within four hours.",
  },
  {
    n: "02",
    title: "Reserve your date",
    body: "Hold your spot with no deposit. Payment is taken seven days before departure; cancel free up to 48 hours.",
  },
  {
    n: "03",
    title: "Meet your guide",
    body: "We collect you from your hotel door with coffee, binoculars and the day's real weather plan.",
  },
  {
    n: "04",
    title: "Explore",
    body: "Small group, unhurried pace, and a guide who reshapes the day around the light and the wildlife.",
  },
  {
    n: "05",
    title: "Share the memories",
    body: "Your guide's photographs arrive by email within 48 hours. Yours to keep and print.",
  },
];

export function BookingProcess() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="Five steps from curiosity to sunrise"
          align="center"
        />
      </Reveal>

      <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
        <span
          aria-hidden="true"
          className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
        />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 0.1} className="relative">
            <span className="relative grid size-12 place-items-center rounded-full border border-border bg-card font-display text-sm text-primary shadow-soft">
              {s.n}
            </span>
            <h3 className="mt-6 font-display text-xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
