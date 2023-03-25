<script lang="ts">
	import PresentationDetails from '../../../cells/Home/PresentationDetails/index.svelte';
	import PresentationProfilePicture from '../../../atoms/Home/PresentationProfilePicture/index.svelte';
</script>

<div class="presentation">
	<PresentationDetails />
	<PresentationProfilePicture />
</div>

<style>
	.presentation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 40px;

		width: 100%;
	}

	@media only screen and (max-width: 1100px) {
		.presentation {
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
