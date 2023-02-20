import React from "react";
import ProjectTechnologyIcon from "../../../atoms/Projects/ProjectTechnologyIcon";

import { ProjectTechnologyProps } from "./types";

import { ProjectTechnologyContainer } from "./styles";

const ProjectTechnology: React.FC<ProjectTechnologyProps> = ({
  technology,
}): JSX.Element => {
  const { icon, name } = technology;

  return (
    <ProjectTechnologyContainer title={name}>
      <ProjectTechnologyIcon icon={icon} />
    </ProjectTechnologyContainer>
  );
};

export default ProjectTechnology;
