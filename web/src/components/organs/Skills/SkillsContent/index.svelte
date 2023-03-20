<script lang="ts">
	import SkillsPresentation from '../../../organisms/Skills/SkillsPresentation/index.svelte';
	import SkillSections from '../../../tissues/Skills/SkillSections/index.svelte';

	import type { ISkillSection } from '../../../organisms/Skills/SkillSection/types';

	export let skillSections: ISkillSection[] = [];
</script>

<div class="skills-content">
	<SkillsPresentation />
	<SkillSections sections={skillSections} />
</div>

<style>
	.skills-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7.5rem;
	}

	@media only screen and (max-width: 768px) {
		.skills-content {
			gap: 5rem;
		}
	}
</style>
