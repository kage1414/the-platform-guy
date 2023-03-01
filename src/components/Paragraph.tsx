import { Typography, Container } from "@mui/material";
import { ReactElement } from "react";

export type ImagePosition = "below" | "right";

interface Props {
  mainTextBody?: string;
  headerText?: string;
  subHeaderText?: string;
}

export const Paragraph = ({
  mainTextBody,
  headerText,
  subHeaderText,
}: Props): ReactElement => {
  return (
    <Container maxWidth="sm">
      {headerText && (
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {headerText}
        </Typography>
      )}
      {subHeaderText && (
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {subHeaderText}
        </Typography>
      )}
      {mainTextBody && (
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {mainTextBody}
        </Typography>
      )}
    </Container>
  );
};
