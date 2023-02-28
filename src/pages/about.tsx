import { AboutPage } from "@/components/AboutPage";
import { MenuBar } from "@/components/MenuBar";
import { Paper } from "@mui/material";
import { ReactElement } from "react";

export default function Platform(): ReactElement {
  return (
    <>
      <Paper>
        <MenuBar />
        <AboutPage />
      </Paper>
    </>
  );
}
