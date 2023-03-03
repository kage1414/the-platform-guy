import AddressForm from "./AddressForm";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { PricingList } from "./PricingList";
import { PlatformSizes } from "@/utils/PlatformSizes";
import { ReactElement } from "react";

export const OrderPage = (): ReactElement => {
  return (
    <PageContainer>
      <Paragraph mainTextBody="Our platforms are made to precise measurements into one of 3 pre-defined dimensions or custom measurements." />
      <PricingList items={Object.values(PlatformSizes)} />
      <Paragraph mainTextBody="The above sizes take 2-4 weeks to build." />
      <Paragraph mainTextBody="Platforms are crated and shipped via UPS. We will quote additional shipping charges." />
      <AddressForm />
    </PageContainer>
  );
};
