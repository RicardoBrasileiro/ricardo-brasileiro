import React from "react";
import ProjectsList from "../../components/tissues/Projects/ProjectsList";
import SeeMoreProjects from "../../components/molecules/Projects/SeeMoreProjects";
import SectionPresentation from "../../components/organisms/Global/SectionOverview";

import { ProjectsContainer, ProjectsContentContainer } from "./styles";

import projects from "../../static/projects";
import SettingsIcon from "../../assets/icons/sections/Settings.png";

const Projects: React.FC = (): JSX.Element => {
  return (
    <ProjectsContainer>
      <SectionPresentation
        icon={SettingsIcon}
        name="Projects"
        description="See below some projects wich I developed through my career"
      />
      <ProjectsContentContainer>
        <ProjectsList projects={projects} />
        <SeeMoreProjects />
      </ProjectsContentContainer>
    </ProjectsContainer>
  );
};

export default Projects;
