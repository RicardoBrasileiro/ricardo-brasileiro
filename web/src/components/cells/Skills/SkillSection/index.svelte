<script lang="ts">
	import SkillSectionTitle from '../../../atoms/Skills/SkillSectionTitle/index.svelte';
	import SkillSectionSkills from '../../../organelles/Skills/SkillSectionSkills/index.svelte';

	import type { ISkillSection } from './types';

	export let section: ISkillSection = {
		title: '',
		skills: []
	};

	export const { title, skills } = section;
</script>

<div class="skill-section">
	<SkillSectionTitle {title} />
	<SkillSectionSkills {skills} />
</div>

<style>
	.skill-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
</style>
