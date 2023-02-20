import React from "react";
import ProjectLink from "../../../organisms/Projects/ProjectLink";

import GitHubIcon from "../../../../assets/icons/social-medias/GitHub.svg";
import WebIcon from "../../../../assets/icons/social-medias/Web.svg";

import { ProjectLinksProps } from "./types";

import { ProjectLinksContainer } from "./styles";

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  gitHubUrl,
  deployUrl,
}): JSX.Element => {
  return (
    <ProjectLinksContainer>
      <ProjectLink
        name="GitHub"
        icon={GitHubIcon}
        url={gitHubUrl}
        backgroundColor="#000000"
      />
      <ProjectLink
        name="Deploy"
        icon={WebIcon}
        url={deployUrl}
        backgroundColor="#000000"
      />
    </ProjectLinksContainer>
  );
};

export default ProjectLinks;
