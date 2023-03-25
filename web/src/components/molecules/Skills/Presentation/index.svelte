<script lang="ts">
	import PresentationTitle from '../../../atoms/Skills/PresentationTitle/index.svelte';
	import PresentationDescription from '../../../atoms/Skills/PresentationDescription/index.svelte';
</script>

<div class="presentation">
	<PresentationTitle />
	<PresentationDescription />
</div>

<style>
	.presentation {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		max-width: 400px;
	}
</style>
