import type { IProject } from '../../components/organisms/Projects/Project/types';
import { nestJS, postgreSQL, react } from '../skills';

export const projects: IProject[] = [
	{
		name: 'ON EDUCA',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsam eligendi illo eum.
		Excepturi eaque illo reiciendis soluta fugiat sit tempora minima suscipit blanditiis aliquam. Et
		in consequatur ullam dignissimos.`,
		picture: '/images/on-educa.png',
		skills: [react, nestJS, postgreSQL]
	},
	{
		name: 'Z3ro',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsam eligendi illo eum.
		Excepturi eaque illo reiciendis soluta fugiat sit tempora minima suscipit blanditiis aliquam. Et
		in consequatur ullam dignissimos.`,
		picture: '/images/on-educa.png',
		skills: [react, nestJS, postgreSQL]
	},
	{
		name: 'Z3ro',
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsam eligendi illo eum.
		Excepturi eaque illo reiciendis soluta fugiat sit tempora minima suscipit blanditiis aliquam. Et
		in consequatur ullam dignissimos.`,
		picture: '/images/on-educa.png',
		skills: [react, nestJS, postgreSQL]
	}
];
