<script lang="ts">
	import ProjectLinks from '../ProjectLinks/index.svelte';
	import ProjectContentHeader from '../../../molecules/Projects/ProjectContentHeader/index.svelte';
	import ProjectSkillsSection from '../ProjectSkillsSection/index.svelte';

	import type { ISkill } from '../../../molecules/Skills/Skill/types';

	export let name: string = '';
	export let description: string = '';
	export let skills: ISkill[] = [];
</script>

<div class="project-content">
	<ProjectContentHeader {name} {description} />
	<ProjectSkillsSection {skills} />

	<ProjectLinks />
</div>

<style>
	.project-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;

		height: 100%;
		width: 100%;
	}

	@media only screen and (min-width: 1100px) {
		.project-content {
			gap: 16px;

			position: absolute;

			padding: 24px;

			background: #1a1a1a;

			opacity: 0;

			transition: all 300ms ease-in;
		}

		.project-content:hover {
			opacity: 1;
		}
	}
</style>
