import React, { useState } from 'react';
import ProjectsIndex from '../../components/Projects/ProjectsIndex';
import ProjectsSlides from '../../components/Projects/ProjectsSlides';
import { ProjectsBox } from './styles';

export interface IProject {
  name: string;
  description: string;
  image: string;
}

const projects: IProject[] = [
  {
    name: 'PROJETO 1 - DESCRIÇÃO DO PROJETO',
    description:
      'IpsumIpsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum lorum',
    image: 'https://www.affdu.com/uploads/article/12720/AKctxfE3EJib16XC.png',
  },
  {
    name: 'PROJETO 2 - DESCRIÇÃO DO PROJETO',
    description:
      'IpsumIpsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum lorum',
    image:
      'https://s.tmimgcdn.com/scr/800x500/172900/amin-creative-personal-portfolio-website-template_172971-2-original.png',
  },
  {
    name: 'PROJETO 3 - DESCRIÇÃO DO PROJETO',
    description:
      'IpsumIpsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum lorum',
    image:
      'https://cdn2.hubspot.net/hub/53/file-2364769971-png/Website-Homepage-Design-2015-1.png?width=669&name=Website-Homepage-Design-2015-1.png',
  },
];

const Projects = (): JSX.Element => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <ProjectsBox>
      <ProjectsSlides
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
      <ProjectsIndex
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
    </ProjectsBox>
  );
};

export default Projects;
