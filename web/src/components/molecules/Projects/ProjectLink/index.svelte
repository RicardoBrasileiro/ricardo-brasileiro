<script lang="ts">
	import ProjectLinkName from '../../../atoms/Projects/ProjectLinkName/index.svelte';
	import ProjectLinkIcon from '../../../atoms/Projects/ProjectLinkIcon/index.svelte';

	import type { IProjectLink } from './types';

	export let link: IProjectLink = {
		name: '',
		icon: '',
		url: ''
	};

	const { name, icon, url } = link;
</script>

<a class="project-link" href={url}>
	<ProjectLinkIcon {icon} />
	<ProjectLinkName {name} />
</a>

<style>
	.project-link {
		display: flex;
		align-items: center;
		gap: 8px;

		height: 2.5rem;
		width: max-content;
		padding: 0px 16px;

		border: 0.5px solid #cccccc;
		border-radius: 1.25rem;

		background: rgba(255, 255, 255, 0.025);
	}
</style>
