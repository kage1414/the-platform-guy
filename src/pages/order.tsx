import { MenuBar } from "@/components/MenuBar";
import { OrderPage } from "@/components/OrderPage";
import { Paper } from "@mui/material";
import { ReactElement } from "react";

export default function Platform(): ReactElement {
  return (
    <>
      <Paper>
        <MenuBar />
        <OrderPage />
      </Paper>
    </>
  );
}
