import { ImagePosition } from "./Paragraph";
import { Grid } from "@mui/material";
import Image from "next/image";

interface ImageDimensions {
  width: string | number;
  height: string | number;
}
export interface ImageProps extends ImageDimensions {
  src: string;
  alt: string;
}

interface Props extends ImageProps {
  imagePosition: ImagePosition;
}

export const ImageGridItem = ({
  height,
  width,
  src,
  alt,
  imagePosition,
}: Props) => {
  const TARGET_WIDTH = imagePosition === "below" ? 255 : 290;
  const getScaleRatio = (imageWidth: number): number => {
    const ratio = TARGET_WIDTH / imageWidth;
    return ratio;
  };

  const handleImageWidth = ({ width }: ImageDimensions): number => {
    if (width <= TARGET_WIDTH) {
      return Number(width);
    }
    const ratio = getScaleRatio(Number(width));
    return Math.floor(ratio * Number(width));
  };

  const handleImageHeight = ({ width, height }: ImageDimensions): number => {
    if (width <= TARGET_WIDTH) {
      return Number(width);
    }
    const ratio = getScaleRatio(Number(width));
    return Math.floor(ratio * Number(height));
  };
  return (
    <Grid padding={2} item>
      <Image
        src={src}
        alt={alt}
        width={handleImageWidth({ width, height })}
        height={handleImageHeight({ width, height })}
      />
    </Grid>
  );
};
