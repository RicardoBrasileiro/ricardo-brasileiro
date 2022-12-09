import React from "react";
import {
  AboutContentProfileInfoContainer,
  AboutContentProfileInfoJob,
  AboutContentProfileInfoName,
} from "./styles";

const AboutContentProfileInfo: React.FC = (): JSX.Element => {
  return (
    <AboutContentProfileInfoContainer>
      <AboutContentProfileInfoName>
        Ricardo Brasileiro
      </AboutContentProfileInfoName>
      <AboutContentProfileInfoJob>
        Desenvolvedor Full Stack
      </AboutContentProfileInfoJob>
    </AboutContentProfileInfoContainer>
  );
};

export default AboutContentProfileInfo;
