<script lang="ts">
	import ProjectSkill from '../../../molecules/Projects/ProjectSkill/index.svelte';

	import type { ISkill } from '../../../molecules/Skills/Skill/types';

	export let skills: ISkill[] = [];
</script>

<div class="project-skills">
	{#each skills as skill}
		<ProjectSkill {skill} />
	{/each}
</div>

<style>
	.project-skills {
		display: flex;
		align-items: center;
		gap: 8px;
	}
</style>
