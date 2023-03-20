<script lang="ts">
	import SkillsContent from '../../components/organs/Skills/SkillsContent/index.svelte';

	import { skillSections } from '../../static/skills';
</script>

<div id="skills" class="section skills">
	<SkillsContent {skillSections} />
</div>

<style>
	.skills {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

		width: 100%;
	}
</style>
