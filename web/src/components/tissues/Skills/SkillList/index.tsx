import React from "react";
import Skill from "../../../organisms/Skills/Skill";

import { SkillListContainer } from "./styles";

import { SkillListProps } from "./types";

const SkillList: React.FC<SkillListProps> = ({
  skills,
  isPaginated,
}): JSX.Element => {
  return (
    <SkillListContainer className={`${isPaginated ? "paginated" : ""}`}>
      {skills.map((skill, index) => (
        <Skill key={skill.technology.name} skill={skill} index={index} />
      ))}
    </SkillListContainer>
  );
};

export default SkillList;
