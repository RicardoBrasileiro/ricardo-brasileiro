import React from 'react';
import themes from '../../../global/styles/themes';
import { IProject } from '../../../pages/Projects';
import { ProjectIndex, ProjectsIndexBox } from './styles';

interface IProjectsIndexProps {
  projects: IProject[];
  selectedProjectIndex: number;
  setSelectedProjectIndex: (value: number) => void;
}

interface IIndexStyles {
  width: string;
  height: string;
  background: string;
}

const ProjectsIndex = (props: IProjectsIndexProps): JSX.Element => {
  const { projects, selectedProjectIndex, setSelectedProjectIndex } = props;
  const selectedIndexStyles: IIndexStyles = {
    width: '15px',
    height: '15px',
    background: themes.similarColors.primaryColor,
  };

  const nextProjectIndexStyles: IIndexStyles = {
    width: '13px',
    height: '13px',
    background: '',
  };

  const noIndexStyles: IIndexStyles = {
    width: '10px',
    height: '10px',
    background: '',
  };

  const handleIndex = (index: number): IIndexStyles => {
    if (index === selectedProjectIndex) {
      return { ...selectedIndexStyles };
    }
    if (
      index === selectedProjectIndex - 1 ||
      index === selectedProjectIndex + 1
    ) {
      return { ...nextProjectIndexStyles };
    }
    return { ...noIndexStyles };
  };

  return (
    <ProjectsIndexBox>
      {projects.map((project, index) => (
        <ProjectIndex
          onClick={() => setSelectedProjectIndex(index)}
          style={{ ...handleIndex(index) }}
        />
      ))}
    </ProjectsIndexBox>
  );
};

export default ProjectsIndex;
