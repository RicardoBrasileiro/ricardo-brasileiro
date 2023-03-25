<script lang="ts">
	import ProjectSkills from '../ProjectSkills/index.svelte';

	import type { ISkill } from '../../../molecules/Skills/Skill/types';

	export let skills: ISkill[] = [];
</script>

<div class="project-skills-section">
	<ProjectSkills {skills} />
</div>

<style>
	.project-skills-section {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
