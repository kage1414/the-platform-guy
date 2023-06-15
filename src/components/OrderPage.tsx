import AddressForm from "./AddressForm";
import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import { PricingList } from "./PricingList";
import { PlatformSizes } from "@/utils/PlatformSizes";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const OrderPage = (): ReactElement => {
  const { t } = useTranslation("order");
  return (
    <PageContainer>
      <Paragraph mainTextBody={t("measurements")} />
      <PricingList items={Object.values(PlatformSizes)} />
      <Paragraph mainTextBody={t("timeline")} />
      <Paragraph mainTextBody={t("shipping")} />
      <AddressForm />
    </PageContainer>
  );
};
