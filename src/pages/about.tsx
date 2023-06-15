import { AboutPage } from "@/components/AboutPage";
import { MenuBar } from "@/components/MenuBar";
import { Paper } from "@mui/material";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "about"])),
  },
});

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
