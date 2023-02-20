import React from "react";
import { SkillIconImage } from "./styles";
import { SkillIconProps } from "./types";

const SkillIcon: React.FC<SkillIconProps> = ({ icon }): JSX.Element => {
  return <SkillIconImage src={icon} />;
};

export default SkillIcon;
