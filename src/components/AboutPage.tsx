import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Divider } from "@mui/material";
import { ReactElement } from "react";

export const AboutPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph
        mainTextBody={`Jatoba is a cost-effective alternative to Teak. Native to South America, it works very well for swim
            platforms due to its ability to resist rot. Jatoba's color
            and grain is very similar to Teak and is often mistaken for Teak.
            The color is an attractive burgundy, deep red, or orange tone.
            Jatoba is more dense than Teak and often outlasts teak when used
            for the ski boat swim platforms.`}
        headerText="Jatoba"
        images={[
          {
            src: "/platform.png",
            alt: "Platform",
            width: 511,
            height: 220,
          },
          {
            src: "/_MG_9944Grain.png",
            alt: "Grain",
            width: 511,
            height: 341,
          },
        ]}
      />
      <Divider />
      <Paragraph
        mainTextBody={`The platforms are fabricated using West System® Epoxy and
            stainless steel screws. West systems is designed specifically for wooden boat construction by Gougeon
            Brothers Inc.`}
        headerText="West System® Epoxy"
        images={[
          {
            src: "/_MG_9949chem.png",
            alt: "West Systems",
            width: 395,
            height: 511,
          },
        ]}
      />
    </PageContainer>
  );
};
