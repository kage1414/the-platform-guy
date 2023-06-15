import Album from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { useTranslation } from "next-i18next";
import { ReactElement } from "react";

export const AboutPage = (): ReactElement => {
  const { t } = useTranslation("about");
  return (
    <PageContainer>
      <Paragraph
        headerText={t("jatoba.title")}
        mainTextBody={t("jatoba.body")}
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
        mainTextBody={`Platforms are fabricated using West System® Epoxy and stainless
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
