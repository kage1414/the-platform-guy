import { MenuBar } from "@/components/MenuBar";
import { OrderPage } from "@/components/OrderPage";
import { Paper } from "@mui/material";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "order"])),
  },
});

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
