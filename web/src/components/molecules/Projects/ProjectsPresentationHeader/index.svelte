<script lang="ts">
	import ProjectsPresentationTitle from '../../../atoms/Projects/ProjectsPresentationTitle/index.svelte';
	import ProjectsPresentationDescription from '../../../atoms/Projects/ProjectsPresentationDescription/index.svelte';
</script>

<div class="projects-presentation-header">
	<ProjectsPresentationTitle />
	<ProjectsPresentationDescription />
</div>

<style>
	.projects-presentation-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 400px;
	}

	@media only screen and (max-width: 1100px) {
		.projects-presentation-header {
			width: 100%;
		}
	}
</style>
