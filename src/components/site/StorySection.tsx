import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-40">
        <Reveal>
          <p className="eyebrow text-sunrise">The field journal</p>
          <h2 className="display-lg mt-6 max-w-4xl text-foreground">
            At 4:40 in the morning, the Valley of the Ten Peaks belongs to
            <em className="font-light italic text-primary"> almost nobody</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:pt-16" delay={0.1}>
            <motion.div
              {...(reduced ? {} : { style: { y: yA } })}
              className="zoom-parent overflow-hidden rounded-3xl shadow-lift"
            >
              <img
                src={images.peyto}
                alt="Peyto Lake glowing turquoise below layered Canadian Rockies peaks"
                loading="lazy"
                width={1600}
                height={900}
                className="aspect-3/4 w-full object-cover"
              />
            </motion.div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <p className="font-display text-2xl leading-relaxed text-foreground sm:text-[28px]">
                There is a moment, maybe ninety seconds long, when the first sun clears the eastern
                ridge and drops onto the snowfields at the head of the valley. The water hasn't
                started moving yet. Nobody is talking.
              </p>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We built this company around that ninety seconds — and around the ten hours of
                  local knowledge it takes to be standing in the right place when it happens. Which
                  trailhead has parking in August. Which shoulder of the Parkway holds elk at dusk.
                  Which prairie coulee glows the exact colour of rust at 7pm in September.
                </p>
                <p>
                  Fourteen seasons in, our guides have walked every kilometre we sell. They grew up
                  in Morley and Canmore and Drumheller. They can name the peak you're pointing at,
                  the bird you just heard, and the reason that lake is that impossible shade of
                  blue.
                </p>
                <p className="text-foreground">
                  Our promise is simple: you will see this place the way people who live here see
                  it. Early, unhurried, and without a crowd between you and the view.
                </p>
              </div>
              <p className="mt-10 border-l-2 border-sunrise pl-6 font-display text-xl italic text-foreground">
                “The mountains don't perform on schedule. Our job is to have you there anyway.”
                <span className="mt-3 block text-sm font-sans font-bold tracking-wide text-muted-foreground uppercase not-italic">
                  Sarah Whitecalf — Founder & Lead Guide
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <motion.div
                {...(reduced ? {} : { style: { y: yB } })}
                className="zoom-parent overflow-hidden rounded-3xl shadow-lift"
              >
                <img
                  src={images.wildlife}
                  alt="A grizzly bear and bull elk grazing in a sunlit meadow in the Canadian Rockies"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-video w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
