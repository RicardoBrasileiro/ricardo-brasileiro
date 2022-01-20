import React from 'react';
import WorksList from '../../components/Works/WorksList';
import { WorksBox } from './styles';

const Works = (): JSX.Element => {
  return (
    <WorksBox>
      <WorksList />
    </WorksBox>
  );
};

export default Works;
