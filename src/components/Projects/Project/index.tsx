import React from 'react';
import { IProject } from '../../../interfaces/IProject';
import {
  ProjectBox,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
  ProjectCodeButton,
  ProjectCodeButtonLabel,
  ProjectCodeButtonIcon,
  ProjectDeployButton,
  ProjectDeployButtonLabel,
  ProjectDeployButtonIcon,
  ProjectPreview,
  ProjectImages,
  ProjectImage,
  ProjectImagesIndexes,
  ProjectImagesIndex,
} from './styles';

interface IProjectProps {
  project: IProject;
}

function Project(props: IProjectProps): JSX.Element {
  const { project } = props;
  const { title, description, images, codeLink, deployLink } = project;

  return (
    <ProjectBox>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <ProjectCodeButton
            onClick={() => window.open(codeLink)}
            disabled={!codeLink.trim()}
          >
            <ProjectCodeButtonLabel>Code</ProjectCodeButtonLabel>
            <ProjectCodeButtonIcon className="material-icons-outlined">
              code
            </ProjectCodeButtonIcon>
          </ProjectCodeButton>
          <ProjectDeployButton
            onClick={() => window.open(deployLink)}
            disabled={!deployLink.trim()}
          >
            <ProjectDeployButtonLabel>Deploy</ProjectDeployButtonLabel>
            <ProjectDeployButtonIcon className="material-icons-outlined">
              language
            </ProjectDeployButtonIcon>
          </ProjectDeployButton>
        </ProjectLinks>
      </ProjectInfo>
      <ProjectPreview>
        <ProjectImages>
          {images.map((image) => (
            <ProjectImage src={image.path} />
          ))}
        </ProjectImages>
        <ProjectImagesIndexes>
          <ProjectImagesIndex />
        </ProjectImagesIndexes>
      </ProjectPreview>
    </ProjectBox>
  );
}

export default Project;
