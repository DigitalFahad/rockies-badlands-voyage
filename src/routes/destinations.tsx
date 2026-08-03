import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { DestinationsGrid } from "@/components/site/DestinationsGrid";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ExtrasSection } from "@/components/site/ExtrasSection";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/site";

const title = "Destinations | Banff, Jasper, Lake Louise & the Alberta Badlands";
const description =
  "Explore the seven regions we guide: Banff, Lake Louise, Jasper, Canmore, the Icefields Parkway, Drumheller and the Alberta Badlands.";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we go"
        title="Seven landscapes within a morning's drive"
        intro="Glacier-fed lakes, alpine passes, dark-sky valleys and 75-million-year-old coulees — all reachable from our Canmore base."
        image={images.peyto}
        alt="Peyto Lake glowing turquoise below layered Canadian Rockies peaks"
      />
      <DestinationsGrid />
      <BeforeAfter />
      <ExtrasSection />
      <FinalCta />
    </>
  );
}
