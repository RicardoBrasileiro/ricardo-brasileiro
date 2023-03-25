<script lang="ts">
	import Presentation from '../../../molecules/Skills/Presentation/index.svelte';
	import SkillSections from '../../../tissues/Skills/SkillSections/index.svelte';

	import type { ISkillSection } from '../../../cells/Skills/SkillSection/types';

	export let skillSections: ISkillSection[] = [];
</script>

<div class="content">
	<Presentation />
	<SkillSections sections={skillSections} />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7.5rem;
	}

	@media only screen and (max-width: 768px) {
		.content {
			gap: 5rem;
		}
	}
</style>
