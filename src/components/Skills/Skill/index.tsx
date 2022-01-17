import React from 'react';
import { ISkill } from '../../../pages/Skills';
import {
  Progress,
  SkillBar,
  SkillBox,
  SkillName,
  SkillProgress,
} from './styles';

interface ISkillProps {
  skill: ISkill;
}

const Skill = (props: ISkillProps): JSX.Element => {
  const { skill } = props;
  const { name, progress } = skill;

  return (
    <SkillBox>
      <SkillName>{name}</SkillName>
      <SkillProgress>
        <SkillBar style={{ width: `${progress}%` }} />
      </SkillProgress>
    </SkillBox>
  );
};

export default Skill;
