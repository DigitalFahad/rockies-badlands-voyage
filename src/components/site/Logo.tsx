import { Link } from "@tanstack/react-router";

export function Logo({ onImage = false }: { onImage?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Rockies & Badland Explorers — home"
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full border transition-colors ${
          onImage ? "border-white/40 bg-white/10" : "border-primary/20 bg-primary/5"
        }`}
      >
        <svg viewBox="0 0 32 32" className="size-5" aria-hidden="true" fill="none">
          <path
            d="M2 25 L11 9 L17 19 L20.5 13 L30 25 Z"
            fill={onImage ? "white" : "var(--primary)"}
            opacity="0.92"
          />
          <circle cx="24" cy="7.5" r="3.5" fill="var(--sunrise)" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] tracking-tight ${
            onImage ? "text-white" : "text-foreground"
          }`}
        >
          Rockies <span className="text-sunrise">&</span> Badland
        </span>
        <span
          className={`mt-1 text-[9px] font-bold tracking-[0.28em] uppercase ${
            onImage ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Explorers
        </span>
      </span>
    </Link>
  );
}
