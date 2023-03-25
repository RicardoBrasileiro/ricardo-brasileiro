<script lang="ts">
	import PresentationTitle from '../../../atoms/Projects/PresentationTitle/index.svelte';
	import PresentationDescription from '../../../atoms/Projects/PresentationDescription/index.svelte';
</script>

<div class="presentation-header">
	<PresentationTitle />
	<PresentationDescription />
</div>

<style>
	.presentation-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 400px;
	}

	@media only screen and (max-width: 1100px) {
		.presentation-header {
			width: 100%;
		}
	}
</style>
