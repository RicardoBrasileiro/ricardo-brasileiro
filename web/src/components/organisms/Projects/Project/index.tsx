import React from "react";
import ProjectInfo from "../ProjectInfo";
import ProjectPicture from "../../../atoms/Projects/ProjectPicture";

import { ProjectProps } from "./types";

import { ProjectContainer } from "./styles";

const Project: React.FC<ProjectProps> = ({ project }): JSX.Element => {
  const { previewPicture, ...projectInfo } = project;

  return (
    <ProjectContainer>
      <ProjectInfo {...projectInfo} />
      <ProjectPicture picture={previewPicture} />
    </ProjectContainer>
  );
};

export default Project;
