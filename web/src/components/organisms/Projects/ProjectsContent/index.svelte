<script lang="ts">
	import ProjectsPresentation from '../ProjectsPresentation/index.svelte';
	import Project from '../Project/index.svelte';
	import SeeMoreOnGitHub from '../../../atoms/Projects/SeeMoreOnGitHub/index.svelte';

	import type { IProject } from '../Project/types';

	export let projects: IProject[] = [];
</script>

<div class="projects-content">
	<ProjectsPresentation />
	{#each projects as project}
		<Project {project} />
	{/each}
	<SeeMoreOnGitHub />
</div>

<style>
	.projects-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;

		width: 100%;
		height: 100%;
	}

	@media only screen and (min-width: 1100px) {
		:global(.projects-content > .see-more-on-github) {
			display: none;
		}
	}

	@media only screen and (max-width: 1100px) {
		.projects-content {
			grid-template-columns: 1fr;
			gap: 80px;
			place-items: center;
		}
	}
</style>
