import React from 'react';
import { IWork } from '../../../interfaces/IWork';
import {
  WorkBox,
  WorkHeader,
  WorkJob,
  WorkInfo,
  WorkEnterprise,
  WorkDate,
  WorkLeftWave,
  WorkRightWave,
  WorkLeftWavePath,
  WorkRightWavePath,
} from './styles';

interface IWorkProps {
  work: IWork;
  left: string;
  right: string;
  top: string;
  index: number;
  setFocusedWork: (value: number) => void;
}

function Work(props: IWorkProps): JSX.Element {
  const { work, top, left, right, index, setFocusedWork } = props;
  const { enterprise, job, startDate, endDate } = work;

  return (
    <WorkBox
      style={{ top, left, right }}
      onMouseEnter={() => setFocusedWork(index)}
      onMouseLeave={() => setFocusedWork(-1)}
    >
      <WorkHeader>
        <WorkJob>{job}</WorkJob>
      </WorkHeader>
      <WorkInfo>
        <WorkEnterprise>{enterprise}</WorkEnterprise>
        <WorkDate>
          {startDate} - {endDate}
        </WorkDate>
      </WorkInfo>
      <WorkLeftWave
        width="56"
        height="43"
        viewBox="0 0 56 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <WorkLeftWavePath d="M20.5 11C14.962 0.775986 3.66667 0 0 0V43H55.5C47.6667 41.1667 36.3748 33.2393 32 28.5C26 22 27 23 20.5 11Z" />
      </WorkLeftWave>
      <WorkRightWave
        width="83"
        height="77"
        viewBox="0 0 83 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <WorkRightWavePath d="M21.5145 41.9697C5.11454 51.9697 -0.319006 69.4697 0.0143272 76.9697H82.5146V1.28608C82.5146 -2.21387 82.5146 0.469692 61.0146 21.4697C48.9112 33.2916 42.0145 29.4697 21.5145 41.9697Z" />
      </WorkRightWave>
    </WorkBox>
  );
}

export default Work;
