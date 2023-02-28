import { MenuBar } from "@/components/MenuBar";
import { PhotoPage } from "@/components/PhotoPage";
import { Paper } from "@mui/material";
import { ReactElement } from "react";

export default function Platform(): ReactElement {
  return (
    <>
      <Paper>
        <MenuBar />
        <PhotoPage />
      </Paper>
    </>
  );
}
