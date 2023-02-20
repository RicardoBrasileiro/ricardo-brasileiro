import React from "react";
import Project from "../../../organisms/Projects/Project";

import { ProjectsListProps } from "./types";

import { ProjectsListContainer } from "./styles";

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
}): JSX.Element => {
  return (
    <ProjectsListContainer>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </ProjectsListContainer>
  );
};

export default ProjectsList;
