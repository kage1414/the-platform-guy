import AddressForm from "./AddressForm";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { ReactElement } from "react";

export const OrderPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph
        mainTextBody="Our platforms are made to precise measurements into one of 3 pre-defined dimensions or custom measurements."
        secondaryText="The above sizes take 2 weeks to build. Custom sizes take 3-4 weeks."
        pricingList={[
          `24" x 60" - $350`,
          `32" x 68" - $400`,
          `36" x 75" - $450`,
          `Custom - quote`,
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
      <AddressForm />
    </PageContainer>
  );
};
