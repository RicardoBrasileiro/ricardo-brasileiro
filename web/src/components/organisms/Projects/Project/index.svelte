<script lang="ts">
	import ProjectContent from '../ProjectContent/index.svelte';
	import ProjectPicture from '../../../atoms/Projects/ProjectPicture/index.svelte';

	import type { IProject } from './types';

	export let project: IProject = {
		name: '',
		description: '',
		picture: '',
		skills: []
	};

	const { name, description, picture, skills } = project;
</script>

<div class="project">
	<ProjectPicture {picture} />
	<ProjectContent {name} {description} {skills} />
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		gap: 24px;

		width: 100%;
	}

	@media only screen and (min-width: 800px) {
		.project {
			position: relative;

			border-radius: 16px;

			overflow: hidden;
		}
	}
</style>
