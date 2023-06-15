import Album from "./Album";
import { ImageProps } from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { ReactElement } from "react";

const Images: ImageProps[] = [
  {
    src: "/nautique.png",
    alt: "Ski Nautique",
  },
  {
    src: "/platformInWater.JPG",
    alt: "Platform in Water",
  },
  {
    src: "/angledPlatform.png",
    alt: "Angled Platform",
  },
  {
    src: "/platformVertical.png",
    alt: "Vertical Platform",
  },
  {
    src: "/platformOnLawn.JPEG",
    alt: "Platform On Lawn",
  },
  {
    src: "satinPlatform.jpg",
    alt: "Finished Platform Left",
  },
  {
    src: "/finishedPlatform.JPEG",
    alt: "Finished Platform Right",
  },
];

export const PhotoPage = (): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <PageContainer>
      <Box>
        <Paragraph mainTextBody={t("photos")} />
        <Album images={Images} />
      </Box>
    </PageContainer>
  );
};
