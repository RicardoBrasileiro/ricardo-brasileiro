import React from "react";
import ProjectInfoContent from "../../../molecules/Projects/ProjectInfoContent";

import { ProjectInfoProps } from "./types";

import { ProjectInfoContainer } from "./styles";
import ProjectLinks from "../../../tissues/Projects/ProjectLinks";

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  name,
  description,
  technologies,
  gitHubUrl,
  deployUrl,
}): JSX.Element => {
  return (
    <ProjectInfoContainer>
      <ProjectInfoContent
        name={name}
        description={description}
        technologies={technologies}
      />
      <ProjectLinks gitHubUrl={gitHubUrl} deployUrl={deployUrl} />
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
