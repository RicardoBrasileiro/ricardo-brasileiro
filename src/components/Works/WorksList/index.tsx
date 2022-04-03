import React, { useState } from 'react';
import theme from '../../../global/themes';
import works from '../../../static/works';
import Work from '../Work';
import { WorksListBox, Works, TimeLine, WorkBall } from './styles';

function WorksList(): JSX.Element {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [focusedWork, setFocusedWork] = useState(-1);

  window.onresize = () => {
    setDeviceWidth(window.innerWidth);
  };

  return (
    <WorksListBox>
      <Works>
        {works.map((work, index) => (
          <Work
            work={work}
            left={index % 2 === 0 && deviceWidth > 900 ? '10%' : 'unset'}
            right={index % 2 === 1 && deviceWidth > 900 ? '10%' : 'unset'}
            top={`${index * 200}px`}
            index={index}
            setFocusedWork={setFocusedWork}
          />
        ))}
      </Works>
      <TimeLine
        style={{
          height: `${works.length * 200 - 190}px`,
          background: `${focusedWork !== -1 ? theme.colors.third : ''}`,
        }}
      >
        {works.map((work, index) => (
          <WorkBall
            style={{
              top: `${index * 200}px`,
              background: `${focusedWork === index ? theme.colors.third : ''}`,
            }}
          />
        ))}
      </TimeLine>
    </WorksListBox>
  );
}

export default WorksList;
