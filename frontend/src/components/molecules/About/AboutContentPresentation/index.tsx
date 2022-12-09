import React from "react";
import AboutContentPresentationDescription from "../../../atoms/About/AboutContentPresentationDescription";
import SectionTitle from "../../../atoms/Global/SectionTitle";
import ContactMeButton from "../../Global/ContactMeButton";
import { AboutContentPresentationContainer } from "./styles";

const AboutContentPresentation: React.FC = (): JSX.Element => {
  return (
    <AboutContentPresentationContainer>
      <SectionTitle title="Quem sou eu?" />
      <AboutContentPresentationDescription />
      <ContactMeButton />
    </AboutContentPresentationContainer>
  );
};

export default AboutContentPresentation;
