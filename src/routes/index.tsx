import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { FeaturedExperiences } from "@/components/site/FeaturedExperiences";
import { DestinationsGrid } from "@/components/site/DestinationsGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { StorySection } from "@/components/site/StorySection";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { VideoSection } from "@/components/site/VideoSection";
import { PrivateToursTeaser } from "@/components/site/PrivateToursTeaser";
import { BookingProcess } from "@/components/site/BookingProcess";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ExtrasSection } from "@/components/site/ExtrasSection";
import { FaqSection } from "@/components/site/FaqSection";
import { JournalTeaser } from "@/components/site/JournalTeaser";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Rockies & Badland Explorers | Small-Group Canadian Rockies Tours";
const description =
  "Award-winning small-group and private tours of Banff, Lake Louise, Jasper, the Icefields Parkway and the Alberta Badlands, led by local expert guides.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedExperiences />
      <DestinationsGrid />
      <WhyChooseUs />
      <StorySection />
      <VideoSection />
      <GalleryMasonry />
      <ReviewsSection />
      <PrivateToursTeaser />
      <BookingProcess />
      <BeforeAfter />
      <ExtrasSection />
      <FaqSection />
      <JournalTeaser />
      <FinalCta />
    </>
  );
}
