import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Divider } from "@mui/material";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph
        mainTextBody="Welcome to The Platform Guy, my name is Mark. I have been building
            swim platforms for 15 years, focusing on Correct Craft Boats. I am
            expanding my business to other ski boats. All of my platforms are
            built using Jatoba, West systems expoxy, and stainless steel
            screws. Jatoba is a cost-effective alternative to Teak."
      />
      <Divider />
      <Paragraph
        mainTextBody="Jatoba is native to South America. It works very well for swim
            platforms due to its ability to resist rot. Jatoba's color
            and grain is very similar to Teak and is often mistaken for Teak.
            The color is an attractive burgundy, deep red, or orange tone.
            Jatoba is more dense than Teak and often outlasts teak when used
        for the ski boat swim platforms. Jatoba is also used because it is
        more cost effective."
        headerText="Jatoba"
        images={[
          {
            src: "/platform.png",
            alt: "Platform",
            width: 350,
            height: 150,
          },
          {
            src: "/_MG_9944Grain.png",
            alt: "Grain",
            width: 255,
            height: 170,
          },
        ]}
      />
      <Divider />
      <Paragraph
        mainTextBody="The platforms are fabricated using West System® Epoxy and
            stainless steel screws. West systems is designed by Gougeon
            Brothers Inc specifically for wooden boat building."
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
