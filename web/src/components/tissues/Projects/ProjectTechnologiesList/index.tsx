import React from "react";
import ProjectTechnology from "../../../molecules/Projects/ProjectTechnology";

import { ProjectTechnologiesListProps } from "./types";

import { ProjectTechnologiesListContainer } from "./styles";

const ProjectTechnologiesList: React.FC<ProjectTechnologiesListProps> = ({
  technologies,
}): JSX.Element => {
  return (
    <ProjectTechnologiesListContainer>
      {technologies.map((technology) => (
        <ProjectTechnology key={technology.name} technology={technology} />
      ))}
    </ProjectTechnologiesListContainer>
  );
};

export default ProjectTechnologiesList;
