import Album from "./Album";
import { ImageProps } from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Box } from "@mui/material";
import { ReactElement } from "react";

const Images: ImageProps[] = [
  {
    src: "/nautique.png",
    alt: "Ski Nautique",
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
    src: "/dash.png",
    alt: "Dashboard",
  },
];

export const PhotoPage = (): ReactElement => {
  return (
    <PageContainer>
      <Box>
        <Paragraph
          mainTextBody={`Enjoy some additional photos of platforms and dashboards as well.
              If you have any questions about any of these and how they can be
              used as a sample for the platform you need, please refer to the
              number or name of the photo.`}
        />
        <Album images={Images} />
      </Box>
    </PageContainer>
  );
};
