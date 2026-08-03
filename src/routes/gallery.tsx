import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/site";

const title = "Photo Gallery | Rockies & Badland Explorers";
const description =
  "Photographs from our own departures across Banff, Lake Louise, Jasper, the Icefields Parkway and the Alberta Badlands.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="From the field"
        title="Every frame shot on tour"
        intro="No stock libraries. Filter by landscape, wildlife, lakes, mountains, badlands, adventure or guests."
        image={images.badlands}
        alt="Golden hour light on striped hoodoos in the Alberta Badlands"
      />
      <GalleryMasonry withHeading={false} />
      <FinalCta />
    </>
  );
}
