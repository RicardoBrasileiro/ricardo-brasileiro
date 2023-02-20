import React from "react";
import ProjectLinkIcon from "../../../atoms/Projects/ProjectLinkIcon";
import ProjectLinkName from "../../../atoms/Projects/ProjectLinkName";

import { ProjectLinkProps } from "./types";

import { ProjectLinkContainer } from "./styles";

const ProjectLink: React.FC<ProjectLinkProps> = ({
  icon,
  name,
  url,
}): JSX.Element => {
  return (
    <ProjectLinkContainer onClick={() => window.open(url)}>
      <ProjectLinkIcon icon={icon} />
      <ProjectLinkName name={name} />
    </ProjectLinkContainer>
  );
};

export default ProjectLink;
