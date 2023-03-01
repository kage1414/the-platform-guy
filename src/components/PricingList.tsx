import { List, ListItemText, Typography } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  items: string[];
}

export const PricingList = ({ items }: Props): ReactElement => {
  return (
    <List>
      {items.map((li, idx) => (
        <ListItemText key={`${li} ${idx}`}>
          <Typography
            variant="h6"
            align="center"
            color="text.primary"
            paragraph
          >
            {li}
          </Typography>
        </ListItemText>
      ))}
    </List>
  );
};
