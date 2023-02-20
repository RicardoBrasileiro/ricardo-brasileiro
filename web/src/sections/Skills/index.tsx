import React from "react";
import SectionPresentation from "../../components/organisms/Global/SectionOverview";

import { SkillsContainer } from "./styles";

import SkillsIcon from "../../assets/icons/sections/Skills.png";
import SkillSections from "../../components/tissues/Skills/SkillSections";
import { skillSections } from "../../static/skills";

const Skills: React.FC = (): JSX.Element => {
  return (
    <SkillsContainer>
      <SectionPresentation
        icon={SkillsIcon}
        name="Skills"
        description="The skills wich I had used in my projects and more"
      />
      <SkillSections sections={skillSections} />
    </SkillsContainer>
  );
};

export default Skills;
