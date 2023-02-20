import React from "react";

import { ProjectLinkNameProps } from "./types";

import { ProjectLinkNameLabel } from "./styles";

const ProjectLinkName: React.FC<ProjectLinkNameProps> = ({
  name,
}): JSX.Element => {
  return <ProjectLinkNameLabel>{name}</ProjectLinkNameLabel>;
};

export default ProjectLinkName;
