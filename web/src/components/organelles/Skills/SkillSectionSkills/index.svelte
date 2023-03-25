<script lang="ts">
	import Skill from '../../../molecules/Skills/Skill/index.svelte';

	import type { ISkill } from '../../../molecules/Skills/Skill/types';

	export let skills: ISkill[] = [];
</script>

<div class="skill-section-skills">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</div>

<style>
	.skill-section-skills {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px;
	}
</style>
