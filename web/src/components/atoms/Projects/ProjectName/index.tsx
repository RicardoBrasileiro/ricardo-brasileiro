import React from "react";

import { ProjectNameProps } from "./types";

import { ProjectNameLabel } from "./styles";

const ProjectName: React.FC<ProjectNameProps> = ({ name }): JSX.Element => {
  return <ProjectNameLabel>{name}</ProjectNameLabel>;
};

export default ProjectName;
