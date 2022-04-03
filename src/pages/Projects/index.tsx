import React from 'react';
import { ProjectsBox, TopWave, BottomWave } from './styles';
import ProjectsList from '../../components/Projects/ProjectsList';

import topWave from './assets/topWave.svg';
import bottomWave from './assets/bottomWave.svg';

function Projects(): JSX.Element {
  return (
    <ProjectsBox>
      <ProjectsList />
      <TopWave src={topWave} />
      <BottomWave src={bottomWave} />
    </ProjectsBox>
  );
}

export default Projects;
