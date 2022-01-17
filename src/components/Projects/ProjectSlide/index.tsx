import React from 'react';
import { IProject } from '../../../pages/Projects';
import {
  ProjectSlideBox,
  ProjectInfo,
  ProjectName,
  ProjectDescription,
  ProjectImage,
} from './styles';

interface IProjectSlideProps {
  project: IProject;
}

const ProjectSlide = (props: IProjectSlideProps): JSX.Element => {
  const { project } = props;
  const { name, description, image } = project;

  return (
    <ProjectSlideBox>
      <ProjectInfo>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectInfo>
      <ProjectImage src={image} />
    </ProjectSlideBox>
  );
};

export default ProjectSlide;
