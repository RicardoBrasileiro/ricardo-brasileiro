import type { ISkill } from '../../../molecules/Skills/Skill/types';

export type IProject = {
	name: string;
	description: string;
	picture: string;
	skills: ISkill[];
	codeUrl?: string;
	deployUrl?: string;
};
