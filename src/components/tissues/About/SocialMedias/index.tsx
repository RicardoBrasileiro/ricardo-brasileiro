import React from "react";
import SocialMediaLink from "../../../organisms/About/SocialMediaLink";

import { SocialMediasContainer } from "./styles";

import MailIcon from "../../../../assets/icons/Mail.svg";
import GitHubIcon from "../../../../assets/icons/GitHub.svg";
import LinkedInIcon from "../../../../assets/icons/LinkedIn.svg";

const SocialMedias: React.FC = (): JSX.Element => {
  return (
    <SocialMediasContainer className="social-media-links">
      <SocialMediaLink
        name="LinkedIn"
        icon={LinkedInIcon}
        url="https://www.linkedin.com/in/ricardobgx"
        background="#0077b5"
        openInANewWindow={true}
      />
      <SocialMediaLink
        name="GitHub"
        icon={GitHubIcon}
        url="https://github.com/ricardobgx"
        background="#000000"
        openInANewWindow={true}
      />
      <SocialMediaLink
        name="Email"
        icon={MailIcon}
        url="mailto:contato@ricardobrasileiro.com"
        background="#e59600"
      />
    </SocialMediasContainer>
  );
};

export default SocialMedias;
