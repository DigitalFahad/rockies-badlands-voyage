import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="image-scrim absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-40 pb-20 sm:px-8 lg:pt-52 lg:pb-28">
        <Reveal>
          <p className="eyebrow text-white/80">{eyebrow}</p>
          <h1 className="display-lg mt-5 max-w-3xl text-white">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
