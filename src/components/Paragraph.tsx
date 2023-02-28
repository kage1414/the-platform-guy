import { Typography, Box, List, ListItemText } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}

interface Props {
  mainTextBody?: string;
  secondaryText?: string;
  headerText?: string;
  images?: ImageProps[];
  pricingList?: string[];
  imagePosition?: "below" | "right";
}

export const Paragraph = ({
  mainTextBody,
  secondaryText,
  headerText,
  images,
  pricingList,
  imagePosition = "below",
}: Props): ReactElement => {
  const below = imagePosition === 'below'
  return (
    <Box
      display="flex"
      flexDirection={below ? "column" : "row"}
      flexWrap="wrap"
    >
      <Box >
        {headerText && <Typography variant="h6">{headerText}</Typography>}
        {mainTextBody && <Typography>{mainTextBody}</Typography>}
        {pricingList && (
          <List>
            {pricingList.map((li, idx) => (
              <ListItemText key={`${li} ${idx}`}>{li}</ListItemText>
            ))}
          </List>
        )}
        {secondaryText && <Typography>{secondaryText}</Typography>}
      </Box>
      <Box>
        {images && (
          <Box
            display="flex"
            flexDirection={below ? "row" : "column"}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-around"
          >
            {images.map(({ src, alt, width, height }, idx) => (
              <Box padding={2} key={idx + src} display="inline-block">
                <Image
                  src={src}
                  alt={alt}
                  width={Number(width)}
                  height={Number(height)}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
