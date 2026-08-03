import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { JournalTeaser } from "@/components/site/JournalTeaser";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCta } from "@/components/site/FinalCta";
import { blogPosts, images } from "@/data/site";

const title = "The Journal | Canadian Rockies Travel Tips & Field Notes";
const description =
  "Guide-written articles on Moraine Lake access, larch season timing, wildlife photography ethics, packing lists and travelling the Alberta Badlands.";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Field notes, trail intel and travel tips"
        intro="Written by our guides between departures — the practical detail that makes a Rockies trip work."
        image={images.photography}
        alt="A photographer shooting sunrise over an alpine lake in the Canadian Rockies"
      />
      <JournalTeaser />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="All articles" title="Browse the archive" align="center" />
          </Reveal>
          <ul className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
                <article className="surface-card zoom-parent h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover"
                  />
                  <div className="p-7">
                    <p className="text-[11px] font-bold tracking-[0.16em] text-sunrise uppercase">
                      {p.category}
                    </p>
                    <h3 className="mt-4 font-display text-xl leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <p className="mt-5 text-xs text-muted-foreground">
                      {p.date} · {p.read}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
