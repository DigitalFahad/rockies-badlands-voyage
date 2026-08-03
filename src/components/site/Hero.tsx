import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Star, ArrowRight, ChevronDown } from "lucide-react";
import { images, stats } from "@/data/site";
import { Counter } from "./Counter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <section ref={ref} className="relative isolate min-h-dvh overflow-hidden">
      <motion.div
        {...(reduced ? {} : { style: { y, scale } })}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          src={images.heroLake}
          alt="Golden sunrise light on snow-dusted peaks reflected in the turquoise water of Moraine Lake, Banff National Park"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="size-full object-cover"
          {...(reduced ? {} : { animate: { x: pointer.x * -18, y: pointer.y * -12 } })}
          transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.6 }}
        />
      </motion.div>
      <div className="image-scrim absolute inset-0" />

      <motion.div
        {...(reduced ? {} : { style: { opacity: fade } })}
        className="relative mx-auto flex min-h-dvh max-w-[1400px] flex-col justify-end px-5 pt-32 pb-10 sm:px-8 lg:pb-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-4xl"
        >
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold tracking-[0.22em] text-white/85 uppercase">
            <span className="flex gap-0.5" aria-label="Rated 4.9 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-3.5 fill-sunrise text-sunrise" aria-hidden="true" />
              ))}
            </span>
            4.9 from 1,254 guests · Canmore, Alberta
          </p>

          <h1 className="display-xl mt-7 text-white">
            Explore Canada's most
            <br />
            <em className="font-light italic">extraordinary</em> adventures
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Small group adventures, unforgettable landscapes, and local guides helping you
            experience the Canadian Rockies and Badlands beyond the ordinary.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/book"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-sunrise px-7 py-4 font-bold tracking-tight text-sunrise-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Your Adventure
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/experiences"
              className="inline-flex min-h-11 items-center rounded-full border border-white/55 px-7 py-4 font-bold tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Explore Tours
            </Link>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/25 pt-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl text-white lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase">
          <span>TripAdvisor Travellers' Choice</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/30" />
          <span>Viator Top Rated</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/30" />
          <span>Google 4.9 ★</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/30" />
          <span>Parks Canada Licensed</span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        {...(reduced ? {} : { animate: { y: [0, 9, 0] } })}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-white/70 lg:block"
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
