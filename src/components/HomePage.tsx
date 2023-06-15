import Album from "./Album";
import { DividerPadding } from "./DividerPadding";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Typography, Container } from "@mui/material";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  const { t } = useTranslation("common");
  const years = moment([1994]).fromNow(true);
  return (
    <PageContainer>
      <Paragraph headerText={t("welcome")} />
      <Album
        images={[{ src: "/MarkHeadshot.jpg", alt: "Mark Johnson" }]}
        enlargable={false}
      />
      <Paragraph mainTextBody={t("bio", { years })} />
      <DividerPadding />
      <Link href="/about">
        <Container maxWidth="sm">
          <Typography color="secondary" variant="h5" align="center">
            {t("link.about")}
          </Typography>
        </Container>
      </Link>
      <br />
      <Link href="/order">
        <Typography color="secondary" variant="h5" align="center">
          {t("link.order")}
        </Typography>
      </Link>
    </PageContainer>
  );
};
