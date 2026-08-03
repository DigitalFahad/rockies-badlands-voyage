import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { images } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.ctaValley}
        alt="Sunrise over layered Canadian Rockies ridgelines"
        loading="lazy"
        width={1920}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="image-scrim absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-40">
        <Reveal>
          <p className="eyebrow text-white/80">Your next morning in the mountains</p>
          <h2 className="display-lg mt-6 text-white">
            Ready to experience the Rockies like never before?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Tell us how long you have and what you want to feel. We'll build the days around it —
            and drive.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="min-h-11 rounded-full bg-sunrise px-8 py-4 font-bold text-sunrise-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="min-h-11 rounded-full border border-white/60 px-8 py-4 font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
