<script lang="ts">
	import PresentationPersonalInfo from '../../../molecules/Home/PresentationPersonalInfo/index.svelte';
	import PresentationDescription from '../../../atoms/Home/PresentationDescription/index.svelte';
</script>

<div class="presentation-details-content">
	<PresentationPersonalInfo />
	<PresentationDescription />
</div>

<style>
	.presentation-details-content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	@media only screen and (max-width: 1100px) {
		.presentation-details-content {
			align-items: center;
		}
	}
</style>
