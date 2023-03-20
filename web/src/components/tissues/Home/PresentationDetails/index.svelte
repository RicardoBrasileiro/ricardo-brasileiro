<script lang="ts">
	import PresentationDetailsContent from '../../../organisms/Home/PresentationDetailsContent/index.svelte';
	import WorkWithMe from '../../../atoms/Home/WorkWithMe/index.svelte';
</script>

<div class="presentation-details">
	<PresentationDetailsContent />
	<WorkWithMe />
</div>

<style>
	.presentation-details {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	@media only screen and (max-width: 1100px) {
		.presentation-details {
			align-items: center;
		}
	}
</style>
