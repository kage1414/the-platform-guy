import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { ReactElement } from "react";

export const PlatformPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph
        mainTextBody="Our platforms are made to precise measurements into one of 3 pre-defined dimensions or custom measurements."
        secondaryText="The above sizes take 2 weeks to build. However, for a custom size, we generally take about 3 weeks."
        pricingList={[
          "< 1300 sq/in- $350",
          " 1300 - 1399 sq/in - $400",
          "1400 - 1999 sq/in - $450",
          "2000 sq/in and up - call",
        ]}
        images={[
          {
            src: "/platform.png",
            alt: "Platform",
            width: 511,
            height: 220,
          },
        ]}
        imagePosition="right"
      />
    </PageContainer>
  );
};
