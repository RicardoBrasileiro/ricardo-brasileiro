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

<button class={`project-link ${name.toLowerCase()}`} on:click={() => window.open(url)}>
	<ProjectLinkIcon {icon} />
	<ProjectLinkName {name} />
</button>

<style>
	.project-link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		height: 2.5rem;
		width: max-content;
		padding: 0px 16px;

		border-radius: 1.25rem;

		background: rgba(255, 255, 255, 0.025);
	}

	.project-link.github {
		background: #000000;
	}

	.project-link.deploy {
		background: #0466c8;
	}

	@media only screen and (max-width: 600px) {
		.project-link {
			width: 100%;
		}
	}
</style>
