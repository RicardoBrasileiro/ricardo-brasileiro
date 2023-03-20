import type { ISkill } from '../../components/molecules/Skills/Skill/types';
import type { ISkillSection } from '../../components/organisms/Skills/SkillSection/types';

export const react: ISkill = {
	name: 'ReactJS',
	icon: '/icons/technologies/React.png',
	website: 'https://pt-br.reactjs.org/'
};

export const vue: ISkill = {
	name: 'Vue.js',
	icon: '/icons/technologies/Vue.png',
	website: 'https://vuejs.org/'
};

export const svelte: ISkill = {
	name: 'Svelte',
	icon: '/icons/technologies/Svelte.png',
	website: 'https://svelte.dev/'
};

export const express: ISkill = {
	name: 'Express',
	icon: '/icons/technologies/Express.png',
	website: 'https://expressjs.com/pt-br/'
};

export const nestJS: ISkill = {
	name: 'NestJS',
	icon: '/icons/technologies/NestJS.png',
	website: 'https://nestjs.com/'
};

export const spring: ISkill = {
	name: 'Spring',
	icon: '/icons/technologies/Spring.png',
	website: 'https://spring.io/'
};

export const graphQL: ISkill = {
	name: 'GraphQL',
	icon: '/icons/technologies/GraphQL.png',
	website: 'https://graphql.org/'
};

export const postgreSQL: ISkill = {
	name: 'PostgreSQL',
	icon: '/icons/technologies/PostgreSQL.png',
	website: 'https://www.postgresql.org/'
};

export const git: ISkill = {
	name: 'Git',
	icon: '/icons/technologies/Git.png',
	website: 'https://git-scm.com/'
};

export const docker: ISkill = {
	name: 'Docker',
	icon: '/icons/technologies/Docker.png',
	website: 'https://www.docker.com/'
};

export const figma: ISkill = {
	name: 'Figma',
	icon: '/icons/technologies/Figma.png',
	website: 'https://www.figma.com/'
};

export const skillSections: ISkillSection[] = [
	{
		title: 'Front-end',
		skills: [react, vue, svelte]
	},
	{
		title: 'Back-end',
		skills: [nestJS, express, spring, graphQL]
	},
	{
		title: 'Databases',
		skills: [postgreSQL]
	},
	{
		title: 'Version Control',
		skills: [git]
	},
	{
		title: 'DevOps',
		skills: [docker]
	},
	{
		title: 'UI/UX',
		skills: [figma]
	}
];
