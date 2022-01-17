import React from 'react';
import SkillsType from '../../components/Skills/SkillsType';
import { IRoute } from '../../routes';
import { SkillsBox, SkillsTypeList } from './styles';

export interface ISkill {
  name: string;
  progress: number;
}

export interface ISkillsType {
  name: string;
  skills: ISkill[];
}

const skillsTypes: ISkillsType[] = [
  {
    name: 'Front-end',
    skills: [
      {
        name: 'HTML',
        progress: 75,
      },
      {
        name: 'CSS',
        progress: 60,
      },
      {
        name: 'ReactJS',
        progress: 50,
      },
      {
        name: 'VueJS',
        progress: 25,
      },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      {
        name: 'NodeJS',
        progress: 35,
      },
    ],
  },
  {
    name: 'Bancos de dados',
    skills: [
      {
        name: 'PostgreSQL',
        progress: 50,
      },
      {
        name: 'MongoDB',
        progress: 15,
      },
    ],
  },
];

const Skills = (): JSX.Element => {
  return (
    <SkillsBox>
      <SkillsTypeList>
        {skillsTypes.map((skillsType) => (
          <SkillsType skillsType={skillsType} />
        ))}
      </SkillsTypeList>
    </SkillsBox>
  );
};

export default Skills;
