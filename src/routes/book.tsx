import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Users, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { pickupPoints, tours } from "@/data/site";

const title = "Book Your Adventure | Rockies & Badland Explorers";
const description =
  "Reserve a small-group or private Canadian Rockies tour. No deposit required, free cancellation up to 48 hours before departure.";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>) => ({
    tour: typeof search['tour'] === "string" ? search['tour'] : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/book" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const schema = z.object({
  tour: z.string().min(1, "Choose a tour"),
  date: z.string().min(1, "Choose a date"),
  guests: z.coerce.number().int().min(1, "At least one guest").max(8, "Maximum 8 guests"),
  pickup: z.string().min(1, "Choose a pickup location"),
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a contact number").max(40),
  requests: z.string().trim().max(1000).optional(),
});

function BookPage() {
  const { tour: presetTour } = Route.useSearch();
  const [selected, setSelected] = useState(presetTour ?? tours[0]!.slug);
  const [guests, setGuests] = useState(2);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<{ ref: string; date: string } | null>(null);

  const tour = tours.find((t) => t.slug === selected) ?? tours[0]!;
  const total = tour.price * guests;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse({ ...data, tour: selected, guests });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setConfirmation({
      ref: `RBE-${Math.floor(100000 + Math.random() * 899999)}`,
      date: String(result.data['date']),
    });
    toast.success("Reservation held — confirmation sent by email.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  if (confirmation) {
    return (
      <section className="mx-auto max-w-2xl px-5 pt-40 pb-24 text-center sm:px-8">
        <Reveal>
          <CheckCircle2 className="mx-auto size-14 text-forest" aria-hidden="true" />
          <h1 className="display-md mt-8 text-foreground">Your adventure is reserved</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Confirmation <strong className="text-foreground">{confirmation.ref}</strong> is on its
            way to your inbox. No payment is taken until seven days before departure.
          </p>
          <dl className="surface-card mt-10 space-y-4 p-8 text-left">
            <div className="flex justify-between gap-4">
              <dt className="text-sm text-muted-foreground">Experience</dt>
              <dd className="text-right text-sm font-semibold text-foreground">{tour.title}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-sm text-muted-foreground">Date</dt>
              <dd className="text-sm font-semibold text-foreground">{confirmation.date}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-sm text-muted-foreground">Guests</dt>
              <dd className="text-sm font-semibold text-foreground">{guests}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border pt-4">
              <dt className="font-semibold text-foreground">Total due</dt>
              <dd className="font-display text-2xl text-primary">${total} CAD</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/experiences"
              className="min-h-11 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground"
            >
              Add another day
            </Link>
            <Link
              to="/journal"
              className="min-h-11 rounded-full border border-input px-6 py-3.5 font-bold text-foreground"
            >
              Read our packing guide
            </Link>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-24 sm:px-8 lg:pt-44">
      <Reveal>
        <p className="eyebrow text-sunrise">Reservations</p>
        <h1 className="display-lg mt-4 max-w-3xl text-foreground">Book your adventure</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          No deposit today. Free cancellation up to 48 hours before departure, and a guide on the
          phone whenever you need one.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal>
          <form onSubmit={submit} noValidate className="surface-card p-7 lg:p-10">
            <fieldset>
              <legend className="font-display text-xl text-foreground">1. Choose your tour</legend>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tours.map((t) => (
                  <label
                    key={t.slug}
                    className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition-all ${
                      selected === t.slug
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tourChoice"
                      value={t.slug}
                      checked={selected === t.slug}
                      onChange={() => setSelected(t.slug)}
                      className="mt-1 size-4 shrink-0 accent-[var(--primary)]"
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-foreground">
                        {t.title.split(" & ")[0]}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {t.duration} · {t.difficulty} · ${t.price} CAD
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="font-display text-xl text-foreground">2. Date & guests</legend>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="text-sm font-semibold text-foreground">
                    Departure date
                  </label>
                  <input id="date" name="date" type="date" className={field} />
                  {errors['date'] && <p className="mt-2 text-xs text-destructive">{errors['date']}</p>}
                </div>
                <div>
                  <label htmlFor="guests" className="text-sm font-semibold text-foreground">
                    Guests (max 8)
                  </label>
                  <input
                    id="guests"
                    name="guestsInput"
                    type="number"
                    min={1}
                    max={8}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className={field}
                  />
                  {errors['guests'] && (
                    <p className="mt-2 text-xs text-destructive">{errors['guests']}</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="pickup" className="text-sm font-semibold text-foreground">
                  Pickup location
                </label>
                <select id="pickup" name="pickup" defaultValue="" className={field}>
                  <option value="">Select a pickup point…</option>
                  {pickupPoints.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors['pickup'] && <p className="mt-2 text-xs text-destructive">{errors['pickup']}</p>}
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="font-display text-xl text-foreground">3. Your details</legend>
              <div className="mt-5 space-y-6">
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
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className={field}
                      placeholder="+1 403 000 0000"
                    />
                    {errors['phone'] && (
                      <p className="mt-2 text-xs text-destructive">{errors['phone']}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="requests" className="text-sm font-semibold text-foreground">
                    Special requests <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    maxLength={1000}
                    className={field}
                    placeholder="Dietary requirements, mobility needs, celebrating something…"
                  />
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-10 min-h-11 w-full rounded-full bg-sunrise px-6 font-bold text-sunrise-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Reserve my spot
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-forest" aria-hidden="true" />
              No card required today · Secure payment 7 days before departure
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="surface-card sticky top-28 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              loading="lazy"
              className="aspect-16/10 w-full object-cover"
            />
            <div className="p-7">
              <h2 className="font-display text-xl text-foreground">{tour.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-sunrise" aria-hidden="true" />
                  {tour.location}
                </li>
                <li className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-sunrise" aria-hidden="true" />
                  {tour.duration} · {tour.season}
                </li>
                <li className="flex items-center gap-2">
                  <Users className="size-4 text-sunrise" aria-hidden="true" />
                  {guests} {guests === 1 ? "guest" : "guests"} · max 8
                </li>
              </ul>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">
                    ${tour.price} × {guests}
                  </dt>
                  <dd className="font-semibold text-foreground">${total} CAD</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Park fees & refreshments</dt>
                  <dd className="font-semibold text-forest">Included</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3">
                  <dt className="font-bold text-foreground">Total</dt>
                  <dd className="font-display text-2xl text-primary">${total}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
