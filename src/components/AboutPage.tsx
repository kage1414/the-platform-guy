import Album from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { ReactElement } from "react";

export const AboutPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph
        headerText="Jatoba"
        mainTextBody={`Jatoba is a cost-effective alternative to Teak. Native to South
          America, it works very well for swim platforms due to its ability to
          resist rot. Jatoba's color and grain is very similar to Teak and
          is often mistaken for Teak. It features a tan to salmon color with
          black accent stripes that over time turn to a deep and vibrant red.
          Jatoba is more dense than Teak and often outlasts teak when used for
          ski boat swim platforms.`}
      />
      <Album
        images={[
          {
            src: "/platform.png",
            alt: "Platform",
          },
          {
            src: "/_MG_9944Grain.png",
            alt: "Grain",
          },
          {
            src: "/JatobaSlab.png",
            alt: "Slab",
          },
        ]}
      />
      <Paragraph
        mainTextBody={`The platforms are fabricated using West System® Epoxy and stainless
          steel screws. West systems is designed specifically for wooden boat
          construction by Gougeon Brothers Inc.`}
        headerText="West System® Epoxy"
      />
      <Album
        images={[
          {
            src: "/_MG_9949chem.png",
            alt: "West Systems",
          },
        ]}
      />
    </PageContainer>
  );
};
