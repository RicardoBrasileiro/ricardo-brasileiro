<script lang="ts">
	import ProjectSkillIcon from '../../../atoms/Projects/ProjectSkillIcon/index.svelte';

	import type { ISkill } from '../../Skills/Skill/types';

	export let skill: ISkill = {
		name: '',
		icon: '',
		website: ''
	};

	const { name, icon, website } = skill;
</script>

<button class="project-skill" on:click={() => window.open(website)} title={name}>
	<ProjectSkillIcon {icon} />
</button>

<style>
	.project-skill {
		display: grid;
		place-items: center;

		height: 2.5rem;
		width: 2.5rem;

		border-radius: 50%;

		background: rgba(255, 255, 255, 0.04);
	}
</style>
