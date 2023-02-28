import { MenuBar } from "@/components/MenuBar";
import { PlatformPage } from "@/components/PlatformPage";
import { Paper } from "@mui/material";
import { ReactElement } from "react";

export default function Platform(): ReactElement {
  return (
    <>
      <Paper>
        <MenuBar />
        <PlatformPage />
      </Paper>
    </>
  );
}
