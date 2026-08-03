import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedExperiences } from "@/components/site/FeaturedExperiences";
import { BookingProcess } from "@/components/site/BookingProcess";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/site";

const title = "Guided Experiences | Rockies & Badland Explorers";
const description =
  "Six signature small-group departures: Moraine Lake sunrise, the Icefields Parkway, Larch Valley, Bow Valley wildlife, the Drumheller Badlands and a photography masterclass.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="The collection"
        title="Guided experiences across the Rockies and Badlands"
        intro="Capped small, timed to the light, and guided by people who live here year-round. Park fees, transport and refreshments included in every price."
        image={images.lakeLouise}
        alt="Red canoes resting on the turquoise water of Lake Louise beneath Victoria Glacier"
      />
      <FeaturedExperiences />
      <BookingProcess />
      <FaqSection />
      <FinalCta />
    </>
  );
}
