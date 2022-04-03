import { ISkillSection } from '../interfaces/ISkillSection';

import reactjsLogo from '../assets/skills/reactjs.png';
import reactNativeLogo from '../assets/skills/react-native.png';
import nodejsLogo from '../assets/skills/nodejs.png';

const skillSections: ISkillSection[] = [
  {
    name: 'Front-end',
    skills: [
      {
        name: 'ReactJS',
        icon: reactjsLogo,
        color: '#08C2FD',
        percentage: 60,
      },
      {
        name: 'React Native',
        icon: reactNativeLogo,
        color: '#0466C8',
        percentage: 20,
      },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      {
        name: 'NodeJS',
        icon: nodejsLogo,
        color: '#8CC84B',
        percentage: 40,
      },
    ],
  },
  {
    name: 'Other',
    skills: [],
  },
];

export default skillSections;
