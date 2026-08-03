import { Users, Award, Compass, UsersRound, CalendarCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { Icon: Users, label: "11,000+ happy guests" },
  { Icon: Award, label: "Top rated experiences" },
  { Icon: Compass, label: "Local expert guides" },
  { Icon: UsersRound, label: "Small group tours" },
  { Icon: CalendarCheck, label: "Flexible booking" },
  { Icon: ShieldCheck, label: "Secure payments" },
];

export function TrustBar() {
  return (
    <section aria-label="Why guests trust us" className="border-y border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ Icon, label }, i) => (
            <Reveal as="li" key={label} delay={i * 0.06} y={14}>
              <span className="flex min-w-0 items-center gap-3">
                <Icon className="size-5 shrink-0 text-sunrise" aria-hidden="true" />
                <span className="text-[13px] leading-tight font-semibold tracking-tight text-foreground">
                  {label}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
