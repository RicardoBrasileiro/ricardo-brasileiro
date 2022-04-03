import React from 'react';
import PersonalInfo from '../../components/Home/PersonalInfo';
import { HomeBox, TopWave, BottomWave } from './styles';

import topWave from './assets/topWave.svg';
import bottomWave from './assets/bottomWave.svg';

function Home(): JSX.Element {
  return (
    <HomeBox>
      <PersonalInfo />
      <TopWave src={topWave} />
      <BottomWave src={bottomWave} />
    </HomeBox>
  );
}

export default Home;
