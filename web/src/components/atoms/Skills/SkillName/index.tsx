import React from "react";
import { SkillNameLabel } from "./styles";
import { SkillNameProps } from "./types";

const SkillName: React.FC<SkillNameProps> = ({ name }): JSX.Element => {
  return <SkillNameLabel>{name}</SkillNameLabel>;
};

export default SkillName;
