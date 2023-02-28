import { ImageGridItem } from "./ImageGridItem";
import { ImageProps } from "./ImageGridItem";
import { Typography, Box, List, ListItemText, Grid } from "@mui/material";
import { ReactElement } from "react";

export type ImagePosition = "below" | "right";

interface Props {
  mainTextBody?: string;
  secondaryText?: string;
  headerText?: string;
  images?: ImageProps[];
  pricingList?: string[];
  imagePosition?: ImagePosition;
}

export const Paragraph = ({
  mainTextBody,
  secondaryText,
  headerText,
  images = [],
  pricingList,
  imagePosition = "below",
}: Props): ReactElement => {
  const below = imagePosition === "below";

  return (
    <Box
      display="flex"
      flexDirection={below ? "column" : "row"}
      flexWrap="wrap"
    >
      <Box>
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
        {images.length > 0 && (
          <Grid container alignItems={"center"}>
            {images.map(({ src, alt, height, width }, idx) => (
              <ImageGridItem
                imagePosition={imagePosition}
                key={idx + src}
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
