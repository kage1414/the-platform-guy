import AddressForm from "./AddressForm";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { PricingList } from "./PricingList";
import { ReactElement } from "react";
import { PlatformSizes } from "@/utils/PlatformSizes";

export const OrderPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph mainTextBody="Our platforms are made to precise measurements into one of 3 pre-defined dimensions or custom measurements." />
      <PricingList
        items={Object.values(PlatformSizes)}
      />
      <Paragraph mainTextBody="The above sizes take 2 weeks to build. Custom sizes take 3-4 weeks." />
      <AddressForm />
    </PageContainer>
  );
};
