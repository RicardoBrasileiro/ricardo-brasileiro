<script lang="ts">
	import ProjectContent from '../../../cells/Projects/ProjectContent/index.svelte';
	import ProjectPicture from '../../../atoms/Projects/ProjectPicture/index.svelte';

	import type { IProject } from './types';

	export let project: IProject = {
		name: '',
		description: '',
		picture: '',
		skills: [],
		codeUrl: '',
		deployUrl: ''
	};

	const { name, description, picture, skills, codeUrl, deployUrl } = project;
</script>

<div class="project">
	<ProjectPicture {picture} />
	<ProjectContent {name} {description} {skills} {codeUrl} {deployUrl} />
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		gap: 24px;

		width: 100%;

		background: #1a1a1a;

		border-radius: 24px;
	}

	@media only screen and (max-width: 1100px) {
		.project {
			padding: 24px;
		}
	}

	@media only screen and (min-width: 800px) {
		.project {
			position: relative;

			overflow: hidden;
		}
	}
</style>
