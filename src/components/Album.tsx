import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActions,
  Button,
  Grid,
  Dialog,
} from "@mui/material";
import { useState } from "react";

export interface ImageProps {
  src: string;
  alt: string;
  description?: string;
}

interface Props {
  images: ImageProps[];
  enlargable?: boolean;
}

export default function Album({ images, enlargable = true }: Props) {
  const [openImage, setOpenImage] = useState<null | string>(null);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4} justifyContent="center">
        {images.map(({ src, alt, description }, idx) => (
          <Grid item key={`${src} ${idx}`} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                cursor: "pointer",
                padding: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
              onClick={() => {
                if (enlargable) {
                  if (openImage) {
                    setOpenImage(null);
                  } else {
                    setOpenImage(src);
                  }
                }
              }}
            >
              <Container>
                <CardMedia component="img" src={src} alt={alt} />
              </Container>
              <Container>
                {description && (
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>{description}</Typography>
                  </CardContent>
                )}
                {enlargable && (
                  <Dialog
                    open={openImage === src}
                    onClose={() => {
                      setOpenImage(null);
                    }}
                  >
                    <Container maxWidth="xl">
                      <CardMedia component="img" src={src} alt={alt} />
                    </Container>
                  </Dialog>
                )}
              </Container>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
