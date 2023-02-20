import React from "react";
import PersonalInfo from "../../components/molecules/About/PersonalInfo";
import SocialMedias from "../../components/tissues/About/SocialMedias";
import ProfilePictureWrapper from "../../components/organisms/About/ProfilePictureWrapper";

import { AboutContainer } from "./styles";

const About: React.FC = (): JSX.Element => {
  return (
    <AboutContainer>
      <ProfilePictureWrapper />
      <PersonalInfo />
      <SocialMedias />
    </AboutContainer>
  );
};

export default About;
