import { IProject } from '../interfaces/IProject';

import virtualContacts from './projectsAssets/virtualContacts.png';
import onEduca from './projectsAssets/onEduca.png';

const projects: IProject[] = [
  {
    title: 'ON EDUCA - Sua plataforma de revisões de conteúdo online',
    description:
      'Plataforma de revisões de conteúdos escolares para o Ensino Médio usando gamificação. O projeto foi desenvolvido utilizando ReactJS e NodeJS.',
    images: [
      {
        path: onEduca,
      },
    ],
    codeLink: '',
    deployLink: 'https://oneduca.netlify.app',
  },
  {
    title: 'Virtual Contacts',
    description:
      'Projeto desenvolvido para a disciplina de Programação para Web II usando VueJS e NodeJS',
    images: [
      {
        path: virtualContacts,
      },
    ],
    codeLink: 'https://github.com/ricardobgx/virtual-contacts',
    deployLink: '',
  },
];

export default projects;
