import React from "react";
import SkillIcon from "../../../atoms/Skills/SkillIcon";
import SkillName from "../../../atoms/Skills/SkillName";

import { SkillContainer } from "./styles";

import { SkillProps } from "./types";

const Skill: React.FC<SkillProps> = ({ skill, index }): JSX.Element => {
  const { technology } = skill;
  const { icon, name } = technology;

  return (
    <SkillContainer style={{ animationDelay: `${index * 300}ms` }}>
      <SkillIcon icon={icon} />
      <SkillName name={name} />
    </SkillContainer>
  );
};

export default Skill;
