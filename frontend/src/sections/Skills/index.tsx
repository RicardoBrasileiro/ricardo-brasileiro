import React from "react";
import AboutSocialMedias from "../../components/organisms/About/AboutSocialMedias";
import AboutContent from "../../components/organisms/About/AboutContent";
import { SkillsContainer } from "./styles";

const Skills: React.FC = (): JSX.Element => {
  return (
    <SkillsContainer id="skills">
      <AboutContent />
      <AboutSocialMedias />
    </SkillsContainer>
  );
};

export default Skills;
