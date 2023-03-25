<script lang="ts">
	import PresentationName from '../../../atoms/Home/PresentationName/index.svelte';
	import PresentationSlogan from '../../../atoms/Home/PresentationSlogan/index.svelte';
</script>

<div class="presentation-personal-info">
	<PresentationName />
	<PresentationSlogan />
</div>

<style>
	.presentation-personal-info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	@media only screen and (max-width: 1100px) {
		.presentation-personal-info {
			align-items: center;
		}
	}
</style>
