import React, { useState } from 'react';
import projects from '../../../static/projects';
import Project from '../Project';
import {
  ProjectsListBox,
  ProjectsListContainer,
  SlideProjectButton,
  SlideProjectButtonIcon,
} from './styles';

function ProjectsList(): JSX.Element {
  const [projectIndex, setProjectIndex] = useState(0);

  const slideProject = (slideNumber: number): void => {
    const projectsList = document.getElementById('projects-list');

    if (projectsList) {
      if (
        (projectIndex < 1 && slideNumber < 0) ||
        (projectIndex === projects.length - 1 && slideNumber > 0)
      ) {
        return;
      }

      setProjectIndex(projectIndex + slideNumber);

      projectsList.scrollLeft =
        (window.innerWidth * 0.7 + 20) * (projectIndex + slideNumber);
    }
  };

  return (
    <ProjectsListBox>
      <SlideProjectButton
        disabled={projectIndex === 0}
        onClick={() => slideProject(-1)}
      >
        <SlideProjectButtonIcon className="fas fa-chevron-left" />
      </SlideProjectButton>
      <ProjectsListContainer id="projects-list">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </ProjectsListContainer>
      <SlideProjectButton
        disabled={projectIndex === projects.length - 1}
        onClick={() => slideProject(1)}
      >
        <SlideProjectButtonIcon className="fas fa-chevron-right" />
      </SlideProjectButton>
    </ProjectsListBox>
  );
}

export default ProjectsList;
