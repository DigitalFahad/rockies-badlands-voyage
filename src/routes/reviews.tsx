import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { VideoSection } from "@/components/site/VideoSection";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/site";

const title = "Guest Reviews | Rockies & Badland Explorers";
const description =
  "1,254 verified reviews averaging 4.9 across TripAdvisor, Google and Viator, plus video testimonials from guests around the world.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="4.9 average · 1,254 reviews"
        title="What our guests say afterwards"
        intro="Every review below is verified and collected after departure. We publish them all — including the ones that taught us something."
        image={images.guestsHiking}
        alt="A small guided group of guests smiling together on an alpine ridge in Banff"
      />
      <ReviewsSection withHeading={false} />
      <VideoSection />
      <FinalCta />
    </>
  );
}
