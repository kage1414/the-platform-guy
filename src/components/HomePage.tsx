import { PageContainer } from "./PageContainer";
import { Paragraph } from "./Paragraph";
import moment from "moment";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  const years = moment([1994]).fromNow(true);
  return (
    <PageContainer>
      <Paragraph
        headerText="Welcome to The Platform Guy!"
        mainTextBody={`My name is Mark. I have been building
            swim platforms for ${years}, focusing on Correct Craft Boats. I am
            expanding my business to other ski boats. All of my platforms are
            built using Jatoba, West systems epoxy, and stainless steel
            screws.`}
      />
    </PageContainer>
  );
};
