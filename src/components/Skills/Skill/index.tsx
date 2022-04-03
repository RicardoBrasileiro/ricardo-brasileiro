import React, { useState } from 'react';
import { ISkill } from '../../../interfaces/ISkill';
import {
  SkillBox,
  SkillIcon,
  SkillInfo,
  SkillName,
  SkillPercentage,
} from './styles';

interface ISkillProps {
  skill: ISkill;
}

function Skill(props: ISkillProps): JSX.Element {
  const { skill } = props;
  const { name, icon, color, percentage } = skill;

  const [isHover, setIsHover] = useState(false);

  return (
    <SkillBox
      color={color}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <SkillIcon src={icon} />
      <SkillInfo>
        <SkillName color={color}>{name}</SkillName>
        <SkillPercentage
          color={color}
          style={{
            width: isHover ? `${percentage}%` : '0%',
          }}
        />
      </SkillInfo>
    </SkillBox>
  );
}

export default Skill;
