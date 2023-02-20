import React from "react";

import { ProjectDescriptionProps } from "./types";

import { ProjectDescriptionLabel } from "./styles";

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}): JSX.Element => {
  return <ProjectDescriptionLabel>{description}</ProjectDescriptionLabel>;
};

export default ProjectDescription;
