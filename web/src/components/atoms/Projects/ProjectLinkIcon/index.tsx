import React from "react";

import { ProjectLinkIconProps } from "./types";

import { ProjectLinkIconImage } from "./styles";

const ProjectLinkIcon: React.FC<ProjectLinkIconProps> = ({
  icon,
}): JSX.Element => {
  return <ProjectLinkIconImage src={icon} />;
};

export default ProjectLinkIcon;
