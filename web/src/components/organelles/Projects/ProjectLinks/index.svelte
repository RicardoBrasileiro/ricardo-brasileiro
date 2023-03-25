<script lang="ts">
	import ProjectLink from '../../../molecules/Projects/ProjectLink/index.svelte';

	export let codeUrl: string = '';
	export let deployUrl: string = '';
</script>

<div class="project-links">
	{#if !!codeUrl}
		<ProjectLink link={{ name: 'GitHub', icon: '/icons/social-medias/GitHub.png', url: codeUrl }} />
	{/if}
	{#if !!deployUrl}
		<ProjectLink link={{ name: 'Deploy', icon: '/icons/Deploy.png', url: deployUrl }} />
	{/if}
</div>

<style>
	.project-links {
		display: flex;
		align-items: center;
		gap: 8px;

		margin-top: 8px;
	}
</style>
