import React from "react";
import { FooterContainer } from "./styles";

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterSectionName>Credits</FooterSectionName>
        <a
          href="https://www.flaticon.com/free-icons/skills"
          title="skills icons"
        >
          Skills icons created by Freepik - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons">
          Email icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/settings"
          title="settings icons"
        >
          Settings icons created by Gregor Cresnar Premium - Flaticon
        </a>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
