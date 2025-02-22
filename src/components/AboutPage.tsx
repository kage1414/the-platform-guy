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
            alt: "Swim Deck Platform",
          },
          {
            src: "/_MG_9944Grain.png",
            alt: "Wood Grain",
          },
          {
            src: "/JatobaSlab.png",
            alt: "Wood Slab",
          },
        ]}
      />
      <Paragraph
        headerText={t("west-systems.title")}
        mainTextBody={t("west-systems.title")}
      />
      <Album
        images={[
          {
            src: "/_MG_9949chem.png",
            alt: "West Systems Epoxy",
          },
        ]}
      />
    </PageContainer>
  );
};
