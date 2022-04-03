import React from 'react';
import { ISkillSection } from '../../../interfaces/ISkillSection';
import Skill from '../Skill';
import { Skills, SkillSectionName, SkillsSectionBox } from './styles';

interface ISkillsSectionProps {
  skillSection: ISkillSection;
}

function SkillsSection(props: ISkillsSectionProps): JSX.Element {
  const { skillSection } = props;
  const { name, skills } = skillSection;

  return (
    <SkillsSectionBox>
      <SkillSectionName>{name}</SkillSectionName>
      <Skills>
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </Skills>
    </SkillsSectionBox>
  );
}

export default SkillsSection;
