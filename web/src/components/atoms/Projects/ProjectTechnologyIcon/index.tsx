import React from "react";

import { ProjectTechnologyIconProps } from "./types";

import { ProjectTechnologyIconImage } from "./styles";

const ProjectTechnologyIcon: React.FC<ProjectTechnologyIconProps> = ({
  icon,
}): JSX.Element => {
  return <ProjectTechnologyIconImage src={icon} />;
};

export default ProjectTechnologyIcon;
