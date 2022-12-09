import React from "react";
import AboutContentPresentation from "../../../molecules/About/AboutContentPresentation";
import AboutContentProfile from "../AboutContentProfile";
import { AboutContentContainer } from "./styles";

const AboutContent: React.FC = (): JSX.Element => {
  return (
    <AboutContentContainer>
      <AboutContentPresentation />
      <AboutContentProfile />
    </AboutContentContainer>
  );
};

export default AboutContent;
