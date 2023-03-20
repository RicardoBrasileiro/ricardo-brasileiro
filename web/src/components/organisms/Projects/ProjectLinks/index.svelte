<script lang="ts">
	import ProjectLink from '../../../molecules/Projects/ProjectLink/index.svelte';
</script>

<div class="project-links">
	<ProjectLink link={{ name: 'GitHub', icon: '/icons/social-medias/GitHub.png', url: '' }} />
	<ProjectLink link={{ name: 'Deploy', icon: '/icons/Deploy.png', url: '' }} />
</div>

<style>
	.project-links {
		display: flex;
		align-items: center;
		gap: 8px;

		margin-top: 8px;
	}
</style>
