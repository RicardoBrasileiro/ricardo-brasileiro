import React from "react";
import AboutSocialMedias from "../../components/organisms/About/AboutSocialMedias";
import AboutContent from "../../components/organisms/About/AboutContent";
import { AboutContainer } from "./styles";

const About: React.FC = (): JSX.Element => {
  return (
    <AboutContainer id="about">
      <AboutContent />
      <AboutSocialMedias />
    </AboutContainer>
  );
};

export default About;
