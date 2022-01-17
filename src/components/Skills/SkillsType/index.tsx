import React from 'react';
import { ISkillsType } from '../../../pages/Skills';
import Skill from '../Skill';
import { SkillsList, SkillsTypeBox, SkillTypeName, TypeSkills } from './styles';

interface ISkillsTypeProps {
  skillsType: ISkillsType;
}

const SkillsType = (props: ISkillsTypeProps): JSX.Element => {
  const { skillsType } = props;
  const { name, skills } = skillsType;

  return (
    <SkillsTypeBox>
      <TypeSkills>
        <SkillsList>
          {skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </SkillsList>
      </TypeSkills>
      <SkillTypeName>{name}</SkillTypeName>
    </SkillsTypeBox>
  );
};

export default SkillsType;
