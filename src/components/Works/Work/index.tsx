import React from 'react';
import { IWork } from '../../../interfaces/IWork';
import { WorkBox, WorkCompany, WorkJob, WorkSeason } from './styles';

interface IWorkProps {
  work: IWork;
  top: string;
  left: string;
  background: string;
  color: string;
}

const Work = (props: IWorkProps): JSX.Element => {
  const { work, top, left, background, color } = props;
  const { company, startYear, finishYear, job } = work;

  return (
    <WorkBox style={{ top, left, background, color }}>
      <WorkCompany>{company}</WorkCompany>
      <WorkSeason>
        Período: {startYear} - {finishYear}
      </WorkSeason>
      <WorkJob>{job}</WorkJob>
    </WorkBox>
  );
};

export default Work;
