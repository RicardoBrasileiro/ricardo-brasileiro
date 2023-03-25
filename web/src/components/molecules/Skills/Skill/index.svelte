<script lang="ts">
	import SkillIcon from '../../../atoms/Skills/SkillIcon/index.svelte';

	import type { ISkill } from './types';

	export let skill: ISkill = {
		name: '',
		icon: '',
		website: ''
	};

	const { name, icon, website } = skill;
</script>

<button class="skill" on:click={() => window.open(website)} title={name}>
	<SkillIcon {icon} />
</button>

<style>
	.skill {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 90px;
		width: 90px;

		border-radius: 16px;

		background: #1a1a1a;

		transition: all 150ms ease-in;
	}

	.skill:hover {
		transform: translateY(-7%);
	}
</style>
