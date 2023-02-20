import React from "react";
import { SkillSectionNameLabel } from "./styles";
import { SkillSectionNameProps } from "./types";

const SkillSectionName: React.FC<SkillSectionNameProps> = ({
  name,
}): JSX.Element => {
  return <SkillSectionNameLabel>{name}</SkillSectionNameLabel>;
};

export default SkillSectionName;
