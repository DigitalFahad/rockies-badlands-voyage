import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function JournalTeaser() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]!;
  const rest = blogPosts.filter((p) => p.slug !== featured.slug).slice(0, 3);


  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="The journal"
          title="Field notes from people who live here"
          intro="Trail conditions, larch timing, wildlife ethics and the packing advice nobody else gives you."
        >
          <Link
            to="/journal"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary"
          >
            Read the journal
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </SectionHeading>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <Link
            to="/journal"
            className="group surface-card zoom-parent block h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="aspect-16/10 w-full object-cover"
            />
            <div className="p-8">
              <p className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase">
                <span className="rounded-full bg-sunrise/15 px-3 py-1 text-sunrise">Featured</span>
                <span className="text-muted-foreground">{featured.category}</span>
                <span className="text-muted-foreground">{featured.read}</span>
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-foreground">
                {featured.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">{featured.date}</p>
            </div>
          </Link>
        </Reveal>

        <ul className="flex flex-col gap-6">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={0.08 * (i + 1)} className="flex-1">
              <Link
                to="/journal"
                className="group surface-card zoom-parent flex h-full gap-5 overflow-hidden p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-28 shrink-0 rounded-xl object-cover sm:size-36"
                />
                <span className="flex min-w-0 flex-col justify-center pr-2">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-sunrise uppercase">
                    {p.category}
                  </span>
                  <span className="mt-2 font-display text-lg leading-snug text-foreground">
                    {p.title}
                  </span>
                  <span className="mt-2 text-xs text-muted-foreground">
                    {p.date} · {p.read}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
