import Album from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Divider, Typography, Container } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  const years = moment([1994]).fromNow(true);
  return (
    <PageContainer>
      <Paragraph headerText="Welcome to The Platform Guy!" />
      <Album
        images={[{ src: "/MarkHeadshot.jpg", alt: "Mark Johnson" }]}
        enlargable={false}
      />
      <Paragraph
        mainTextBody={`My name is Mark. I've been building
            swim platforms for ${years}. I specialize in Correct Craft 
            boats, but can build platforms for all major ski and wake boat 
            brands. All of my platforms are built using Jatoba, West 
            systems epoxy, and stainless steel screws.`}
      />
      <Divider />
      <br />
      <Link href="/about">
        <Container maxWidth="sm">
          <Typography color="secondary" variant="h5" align="center">
            Our Platforms
          </Typography>
        </Container>
      </Link>
      <br />
      <Link href="/order">
        <Typography color="secondary" variant="h5" align="center">
          Place an Order
        </Typography>
      </Link>
    </PageContainer>
  );
};
