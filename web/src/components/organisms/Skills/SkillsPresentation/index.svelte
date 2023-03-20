<script lang="ts">
	import SkillsPresentationTitle from '../../../atoms/Skills/SkillsPresentationTitle/index.svelte';
	import SkillsPresentationDescription from '../../../atoms/Skills/SkillsPresentationDescription/index.svelte';
</script>

<div class="skills-presentation">
	<SkillsPresentationTitle />
	<SkillsPresentationDescription />
</div>

<style>
	.skills-presentation {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		width: 400px;
	}

	@media only screen and (max-width: 480px) {
		.skills-presentation {
			width: 100%;
		}
	}
</style>
