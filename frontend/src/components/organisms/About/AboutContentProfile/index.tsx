import React from "react";
import AboutContentProfileInfo from "../../../molecules/About/AboutContentProfileInfo";
import {
  AboutContentProfileContainer,
  AboutContentProfileImage,
} from "./styles";

import profileImage from "../../../../assets/images/profile.jpg";

const AboutContentProfile: React.FC = (): JSX.Element => {
  return (
    <AboutContentProfileContainer>
      <AboutContentProfileImage src={profileImage} />
      <AboutContentProfileInfo />
    </AboutContentProfileContainer>
  );
};

export default AboutContentProfile;
