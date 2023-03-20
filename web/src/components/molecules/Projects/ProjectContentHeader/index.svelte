<script lang="ts">
	import ProjectName from '../../../atoms/Projects/ProjectName/index.svelte';
	import ProjectDescription from '../../../atoms/Projects/ProjectDescription/index.svelte';

	export let name: string = '';
	export let description: string = '';
</script>

<div class="project-content-header">
	<ProjectName {name} />
	<ProjectDescription {description} />
</div>

<style>
	.project-content-header {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
