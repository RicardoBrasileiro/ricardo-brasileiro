import React from "react";
import ProjectName from "../../../atoms/Projects/ProjectName";
import ProjectDescription from "../../../atoms/Projects/ProjectDescription";
import ProjectTechnologiesList from "../../../tissues/Projects/ProjectTechnologiesList";

import { ProjectInfoContentProps } from "./types";

import { ProjectInfoContentContainer } from "./styles";

const ProjectInfoContent: React.FC<ProjectInfoContentProps> = ({
  name,
  description,
  technologies,
}): JSX.Element => {
  return (
    <ProjectInfoContentContainer>
      <ProjectName name={name} />
      <ProjectDescription description={description} />
      <ProjectTechnologiesList technologies={technologies} />
    </ProjectInfoContentContainer>
  );
};

export default ProjectInfoContent;
