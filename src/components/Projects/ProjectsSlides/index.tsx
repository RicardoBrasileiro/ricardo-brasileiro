import React from 'react';
import { IProject } from '../../../pages/Projects';
import ProjectSlide from '../ProjectSlide';
import {
  ProjectsSlideList,
  ProjectsSlidesActions,
  ProjectsSlidesBox,
  SlideButton,
  SlideIcon,
} from './styles';

interface IProjectsSlidesProps {
  projects: IProject[];
  selectedProjectIndex: number;
  setSelectedProjectIndex: (value: number) => void;
}

const ProjectsSlides = (props: IProjectsSlidesProps): JSX.Element => {
  const { projects, selectedProjectIndex, setSelectedProjectIndex } = props;

  const projectsSlidesBox = document.getElementById('projects-slides-list');
  const windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    if (projectsSlidesBox) {
      projectsSlidesBox.scrollLeft = selectedProjectIndex * (windowWidth * 0.7);
    }
  } else if (projectsSlidesBox) {
    projectsSlidesBox.scrollLeft = selectedProjectIndex * (windowWidth - 100);
  }

  return (
    <ProjectsSlidesBox>
      <ProjectsSlideList id="projects-slides-list">
        {projects.map((project) => (
          <ProjectSlide project={project} />
        ))}
      </ProjectsSlideList>
      <ProjectsSlidesActions>
        <SlideButton
          style={{
            opacity: selectedProjectIndex > 0 ? 1 : 0.4,
            pointerEvents: selectedProjectIndex > 0 ? 'unset' : 'none',
          }}
          onClick={() => {
            if (selectedProjectIndex > 0) {
              setSelectedProjectIndex(selectedProjectIndex - 1);
            }
          }}
        >
          <SlideIcon className="fas fa-arrow-left" />
        </SlideButton>
        <SlideButton
          style={{
            opacity: selectedProjectIndex < projects.length - 1 ? 1 : 0.4,
            pointerEvents:
              selectedProjectIndex < projects.length - 1 ? 'unset' : 'none',
          }}
          onClick={() => {
            if (selectedProjectIndex < projects.length - 1) {
              setSelectedProjectIndex(selectedProjectIndex + 1);
            }
          }}
        >
          <SlideIcon className="fas fa-arrow-right" />
        </SlideButton>
      </ProjectsSlidesActions>
    </ProjectsSlidesBox>
  );
};

export default ProjectsSlides;
