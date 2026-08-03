import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { company } from "@/data/site";

const links = [
  { label: "Experiences", to: "/experiences" },
  { label: "Destinations", to: "/destinations" },
  { label: "Private Tours", to: "/private-tours" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparentRoute = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onImage = transparentRoute && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onImage
          ? "bg-transparent py-4"
          : "border-b border-border/70 bg-background/85 py-2 shadow-soft backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 sm:px-8">
        <Logo onImage={onImage} />

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-tight transition-colors ${
                  onImage
                    ? "text-white/85 hover:text-white"
                    : active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
                {active && !onImage && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-sunrise" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors xl:flex ${
              onImage ? "text-white/85 hover:text-white" : "text-foreground/70 hover:text-primary"
            }`}
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {company.phone}
          </a>
          <Link
            to="/book"
            className={`hidden rounded-full px-5 py-2.5 text-[13px] font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex ${
              onImage
                ? "bg-white text-primary shadow-lift hover:bg-white"
                : "bg-sunrise text-sunrise-foreground shadow-glow"
            }`}
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid size-11 place-items-center rounded-full border transition-colors lg:hidden ${
              onImage ? "border-white/40 text-white" : "border-border text-foreground"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-[1400px] px-5 pt-4 pb-6 sm:px-8">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="block border-b border-border/70 py-3.5 font-display text-xl text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-5 flex min-h-11 items-center justify-center rounded-full bg-sunrise px-5 font-bold text-sunrise-foreground shadow-glow"
              >
                Book Your Adventure
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
