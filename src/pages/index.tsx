import { HomePage } from "@/components/HomePage";
import { MenuBar } from "@/components/MenuBar";
import { Paper } from "@mui/material";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default function Home() {
  return (
    <>
      <Paper>
        <MenuBar />
        <HomePage />
      </Paper>
    </>
  );
}
