<script lang="ts">
	import SkillSection from '../../../cells/Skills/SkillSection/index.svelte';

	import type { ISkillSection } from '../../../cells/Skills/SkillSection/types';

	export let sections: ISkillSection[] = [];
</script>

<div class="skill-sections">
	{#each sections as section}
		<SkillSection {section} />
	{/each}
</div>

<style>
	.skill-sections {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5rem 2.5rem;

		width: 100%;
	}

	@media only screen and (max-width: 1100px) {
		.skill-sections {
			grid-template-columns: 1fr;
		}
	}
</style>
