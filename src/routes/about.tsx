import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { StorySection } from "@/components/site/StorySection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { FinalCta } from "@/components/site/FinalCta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, team } from "@/data/site";

const title = "About Us & Our Guides | Rockies & Badland Explorers";
const description =
  "Founded in Canmore in 2012. Meet the guides, and read our commitments on safety, sustainability and small-group travel in the Canadian Rockies.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Our mission",
    body: "To put a small number of people in the right place at the right hour, with someone who can tell them why it matters.",
  },
  {
    title: "Safety",
    body: "Every guide holds Wilderness First Responder certification. Satellite communicators on every vehicle, daily conditions briefing, and an operations director who will cancel a day rather than push it.",
  },
  {
    title: "Sustainability",
    body: "Carbon-offset fleet, Leave No Trace practice on every departure, strict wildlife distance policy, and 1% of revenue to Bow Valley conservation and Indigenous-led land stewardship.",
  },
  {
    title: "Community",
    body: "We hire locally, buy our lunches from Canmore bakeries, and work with Stoney Nakoda interpreters on our cultural programming.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 2012"
        title="A Canmore company, run by guides"
        intro="Fourteen seasons, eleven thousand guests, and a team that still gets up at 3:30am because the light is worth it."
        image={images.banff}
        alt="Banff Avenue with Cascade Mountain rising behind the townsite on a clear morning"
      />
      <StorySection />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading eyebrow="The team" title="Meet your guides" align="center" />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.08}>
              <article className="surface-card h-full p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-14 place-items-center rounded-full bg-primary/10 font-display text-lg text-primary">
                  {m.initials}
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">{m.name}</h3>
                <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-sunrise uppercase">
                  {m.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Commitments we can be held to"
              align="center"
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 2) * 0.08}>
                <article className="surface-card h-full p-8">
                  <h3 className="font-display text-2xl text-foreground">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <FinalCta />
    </>
  );
}
