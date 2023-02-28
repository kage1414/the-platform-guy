import { ImageProps } from "./ImageGridItem";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Box } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";

const Images: ImageProps[] = [
  {
    width: "422",
    height: "243",
    src: "/nautique.png",
    alt: "Ski Nautique",
  },
  {
    width: "398",
    height: "422",
    src: "/angledPlatform.png",
    alt: "Angled Platform",
  },
  {
    width: "422",
    height: "281",
    src: "/platformVertical.png",
    alt: "Vertical Platform",
  },
  {
    width: "500",
    height: "333",
    src: "/dash.png",
    alt: "Dashboard",
  },
];

export const PhotoPage = (): ReactElement => {
  return (
    <PageContainer>
      <Box>
        <Paragraph
          mainTextBody={`Enjoy some additional photos of platforms and 
        dashboards as well. If you have any questions about any of these
        and how they can be used as a sample for the platform
        you need, please refer to the number or name of the photo.`}
        />
        {Images.map(({ width, height, src, alt }, idx) => (
          <Box key={`${idx} ${src}`} sx={{ padding: 4 }}>
            <Image
              src={src}
              alt={alt}
              width={Number(width)}
              height={Number(height)}
            />
          </Box>
        ))}
      </Box>
    </PageContainer>
  );
};
