<script lang="ts">
	import Project from '../../../tissues/Projects/Project/index.svelte';
	import Presentation from '../../../organelles/Projects/Presentation/index.svelte';
	import SeeMoreOnGitHub from '../../../atoms/Projects/SeeMoreOnGitHub/index.svelte';

	import type { IProject } from '../../../tissues/Projects/Project/types';

	export let projects: IProject[] = [];
</script>

<div class="content">
	<Presentation />
	{#each projects as project}
		<Project {project} />
	{/each}
	<SeeMoreOnGitHub />
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;

		width: 100%;
		height: 100%;
	}

	@media only screen and (min-width: 1100px) {
		:global(.content > .see-more-on-github) {
			display: none;
		}
	}

	@media only screen and (max-width: 1100px) {
		.content {
			grid-template-columns: 1fr;
			place-items: center;
		}
	}
</style>
