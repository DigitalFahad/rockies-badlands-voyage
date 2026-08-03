import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { company, destinations, tours } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Welcome aboard — check your inbox for our seasonal field notes.");
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Small-group and private adventures through the Canadian Rockies and Alberta Badlands,
              led by guides who live here year-round.
            </p>

            <form onSubmit={subscribe} className="mt-8 max-w-sm">
              <label
                htmlFor="footer-newsletter"
                className="eyebrow block text-foreground/70"
              >
                Field notes newsletter
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-input bg-card p-1.5 shadow-soft focus-within:border-primary">
                <input
                  id="footer-newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  maxLength={255}
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to the newsletter"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Seasonal conditions, larch timing and wildlife reports. Twice a season, never spam.
              </p>
            </form>

            <div className="mt-8 flex gap-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${company.short} on ${label}`}
                  className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Experiences">
              <h2 className="eyebrow text-foreground/70">Experiences</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {tours.slice(0, 5).map((t) => (
                  <li key={t.slug}>
                    <Link
                      to="/experiences"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t.title.split(" & ")[0]}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/private-tours" className="font-semibold text-primary">
                    Private & custom trips
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Destinations">
              <h2 className="eyebrow text-foreground/70">Destinations</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {destinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to="/destinations"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-foreground/70">Company</h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary">
                    About & team
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="text-muted-foreground hover:text-primary">
                    Guest reviews
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-muted-foreground hover:text-primary">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="text-muted-foreground hover:text-primary">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>

              <h2 className="eyebrow mt-9 text-foreground/70">Reach us</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-sunrise" aria-hidden="true" />
                  <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-sunrise" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="break-all hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sunrise" aria-hidden="true" />
                  {company.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <span>Licensed Alberta tour operator</span>
            <span>Parks Canada business licence #BNP-2011-4417</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
