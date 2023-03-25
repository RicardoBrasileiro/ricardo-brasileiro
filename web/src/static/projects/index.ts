import type { IProject } from '../../components/tissues/Projects/Project/types';
import { express, postgreSQL, react } from '../skills';

export const projects: IProject[] = [
	{
		name: 'ON EDUCA',
		description: `Plataforma de revisão de conteúdos escolares para estudantes do ensino Médio e Fundamental. A aplicação utiliza conceitos de jogos para engajar mais o aluno no aprendizado (gamificação).`,
		picture: '/images/on-educa.png',
		skills: [react, express, postgreSQL],
		codeUrl: 'https://github.com/ricardobgx/on-educa',
		deployUrl: 'https://oneduca.netlify.app'
	}
];
