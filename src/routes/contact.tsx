import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { company, images } from "@/data/site";

const title = "Contact Us | Rockies & Badland Explorers";
const description =
  "Call, email or message our Canmore team. Business hours, emergency contact and an inquiry form answered within four hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, "A little more detail helps us help you").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Thank you — a planner will reply within four hours.");
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to a guide, not a call centre"
        intro="We answer the phone in Canmore between 7am and 8pm Mountain Time, and reply to every inquiry within four hours."
        image={images.jasper}
        alt="Maligne Lake in Jasper National Park with Spirit Island and snowy peaks"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="display-md text-foreground">Reach us directly</h2>
            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-sunrise" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Phone
                  </span>
                  <a
                    href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                    className="font-display text-xl text-foreground hover:text-primary"
                  >
                    {company.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-sunrise" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-display text-xl break-all text-foreground hover:text-primary"
                  >
                    {company.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-sunrise" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Base
                  </span>
                  <span className="text-[15px] text-foreground">{company.address}</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-sunrise" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Business hours
                  </span>
                  <span className="mt-1 block space-y-1 text-[15px] text-foreground">
                    {company.hours.map((h) => (
                      <span key={h.day} className="block">
                        {h.day} — {h.time}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>

            <div className="surface-card mt-10 flex gap-4 bg-sunrise/10 p-6">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-sunrise" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-foreground">
                <strong className="font-bold">On-tour emergency line</strong>
                <br />
                <a
                  href={`tel:${company.emergency.replace(/[^+\d]/g, "")}`}
                  className="font-display text-lg hover:text-primary"
                >
                  {company.emergency}
                </a>
                <br />
                Answered 24 hours a day during the operating season.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Map showing our Canmore office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-115.40%2C51.06%2C-115.31%2C51.11&layer=mapnik"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} noValidate className="surface-card p-8 lg:p-10">
              <h2 className="font-display text-2xl text-foreground">Send an inquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your dates and what you'd like to see. We'll reply with suggestions.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Full name
                  </label>
                  <input id="name" name="name" className={field} placeholder="Jane Fraser" />
                  {errors['name'] && <p className="mt-2 text-xs text-destructive">{errors['name']}</p>}
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={field}
                      placeholder="you@example.com"
                    />
                    {errors['email'] && (
                      <p className="mt-2 text-xs text-destructive">{errors['email']}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="phone" name="phone" className={field} placeholder="+1 403 000 0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={1000}
                    className={field}
                    placeholder="We're in Banff from July 8–13 with two teenagers and would love a sunrise tour and a wildlife day…"
                  />
                  {errors['message'] && (
                    <p className="mt-2 text-xs text-destructive">{errors['message']}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 min-h-11 w-full rounded-full bg-sunrise px-6 font-bold text-sunrise-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Send inquiry
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                We reply within four hours during business hours.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
