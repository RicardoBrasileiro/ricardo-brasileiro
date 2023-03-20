<script lang="ts">
	import ProjectsPresentationHeader from '../../../molecules/Projects/ProjectsPresentationHeader/index.svelte';
	import SeeMoreOnGitHub from '../../../atoms/Projects/SeeMoreOnGitHub/index.svelte';
</script>

<div class="projects-presentation">
	<ProjectsPresentationHeader />
	<SeeMoreOnGitHub />
</div>

<style>
	.projects-presentation {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;

		height: max-content;
	}

	@media only screen and (max-width: 1100px) {
		.projects-presentation {
			align-items: center;
		}

		:global(.projects-presentation .see-more-on-github) {
			display: none;
		}
	}
</style>
