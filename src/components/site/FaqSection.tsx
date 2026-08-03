import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-sunrise">Good to know</p>
            <h2 className="display-md mt-4 text-foreground">Questions guests ask us most</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Still unsure about something? Call us — a guide answers the phone, not a call centre.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-lg text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
