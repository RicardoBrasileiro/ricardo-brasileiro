<script lang="ts">
	import Content from '../../components/organs/Skills/Content/index.svelte';

	import { skillSections } from '../../static/skills';
</script>

<div id="skills" class="section skills">
	<Content {skillSections} />
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
