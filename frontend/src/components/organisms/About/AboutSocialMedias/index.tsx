import React from "react";
import { light } from "../../../../global/styles/themes";
import SocialMediaLink from "../../../../components/molecules/Global/SocialMediaLink";
import { AboutSocialMediasContainer } from "./styles";

import GitHub from "../../../../components/atoms/Global/Icons/SVG/GitHub";
import LinkedIn from "src/components/atoms/Global/Icons/SVG/LinkedIn";
import Instagram from "src/components/atoms/Global/Icons/SVG/Instagram";
import Twitter from "src/components/atoms/Global/Icons/SVG/Twitter";

const AboutSocialMedias: React.FC = (): JSX.Element => {
  return (
    <AboutSocialMediasContainer>
      <SocialMediaLink
        link="https://www.google.com"
        icon={LinkedIn}
        color={light.colors.socialMedias.linkedin.color}
        backgroundColor={light.colors.socialMedias.linkedin.backgroundColor}
      />
      <SocialMediaLink
        link="https://www.google.com"
        icon={GitHub}
        color={light.colors.socialMedias.github.color}
        backgroundColor={light.colors.socialMedias.github.backgroundColor}
      />
      <SocialMediaLink
        link="https://www.google.com"
        icon={Instagram}
        color={light.colors.socialMedias.instagram.color}
        backgroundColor={light.colors.socialMedias.instagram.backgroundColor}
      />
      <SocialMediaLink
        link="https://www.google.com"
        icon={Twitter}
        color={light.colors.socialMedias.twitter.color}
        backgroundColor={light.colors.socialMedias.twitter.backgroundColor}
      />
    </AboutSocialMediasContainer>
  );
};

export default AboutSocialMedias;
