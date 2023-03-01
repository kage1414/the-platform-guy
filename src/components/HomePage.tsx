import Album from "./Album";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { Divider } from "@mui/material";
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
            swim platforms for ${years}, focusing on Correct Craft Boats. I am
            expanding my business to other ski boats. All of my platforms are
            built using Jatoba, West systems epoxy, and stainless steel
            screws.`}
      />
      <Divider />
      <Link href="/about">
        <Paragraph subHeaderText="Our Platforms" />
      </Link>
      <Link href="/order">
        <Paragraph subHeaderText="Place an Order" />
      </Link>
    </PageContainer>
  );
};
