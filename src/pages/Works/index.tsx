import React from 'react';
import { WorksBox, TopWave, BottomWave } from './styles';

import topWave from './assets/topWave.svg';
import bottomWave from './assets/bottomWave.svg';
import WorksList from '../../components/Works/WorksList';

function Works(): JSX.Element {
  return (
    <WorksBox>
      <WorksList />
      <TopWave src={topWave} />
      <BottomWave src={bottomWave} />
    </WorksBox>
  );
}

export default Works;
