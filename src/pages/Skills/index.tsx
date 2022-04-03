import React from 'react';
import { SkillsBox, TopWave, BottomWave, SkillSections } from './styles';

import topWave from './assets/topWave.svg';
import bottomWave from './assets/bottomWave.svg';
import skillSections from '../../static/skillSections';
import SkillsSection from '../../components/Skills/SkillsSection';

function Skills(): JSX.Element {
  return (
    <SkillsBox>
      <TopWave src={topWave} />
      <BottomWave src={bottomWave} />
      <SkillSections>
        {skillSections.map((skillSection) => (
          <SkillsSection key={skillSection.name} skillSection={skillSection} />
        ))}
      </SkillSections>
    </SkillsBox>
  );
}

export default Skills;
