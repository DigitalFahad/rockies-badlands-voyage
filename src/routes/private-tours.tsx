import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PrivateToursTeaser } from "@/components/site/PrivateToursTeaser";
import { BookingProcess } from "@/components/site/BookingProcess";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/site";

const title = "Private & Bespoke Tours | Rockies & Badland Explorers";
const description =
  "Private guides, executive vehicles and custom multi-day itineraries for families, photographers and corporate groups across the Canadian Rockies.";

export const Route = createFileRoute("/private-tours")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/private-tours" },
    ],
    links: [{ rel: "canonical", href: "/private-tours" }],
  }),
  component: PrivateToursPage,
});

function PrivateToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Private & bespoke"
        title="An itinerary written for you alone"
        intro="From a single sunrise to a two-week expedition across Alberta and British Columbia — planned by the guides who will drive it."
        image={images.privateTour}
        alt="A private touring van at a Canadian Rockies mountain viewpoint in morning light"
      />
      <PrivateToursTeaser />
      <BookingProcess />
      <ReviewsSection />
      <FinalCta />
    </>
  );
}
