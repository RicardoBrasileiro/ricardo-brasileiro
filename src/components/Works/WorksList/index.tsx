import React from 'react';
import themes from '../../../global/styles/themes';
import { works } from '../../../static/works';
import Work from '../Work';
import { WorksLine, WorksListBox } from './styles';

const WorksList = (): JSX.Element => {
  return (
    <WorksListBox>
      <WorksLine />
      {works.map((work, index) => {
        return (
          <Work
            work={work}
            top="0"
            left={`${index % 2 === 0 ? 55 : 15}%`}
            background={
              index % 2 === 0
                ? themes.colors.boxColor
                : themes.similarColors.primaryColor
            }
            color={
              index % 2 === 1
                ? themes.colors.boxColor
                : themes.similarColors.primaryColor
            }
          />
        );
      })}
    </WorksListBox>
  );
};

export default WorksList;
