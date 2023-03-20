<script lang="ts">
	import ProjectsContent from '../../components/organisms/Projects/ProjectsContent/index.svelte';

	import { projects } from '../../static/projects';
</script>

<div id="projects" class="section projects">
	<ProjectsContent {projects} />
</div>

<style>
	.projects {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

		width: 100%;
	}
</style>
