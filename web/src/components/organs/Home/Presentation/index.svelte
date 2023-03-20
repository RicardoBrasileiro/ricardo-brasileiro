<script lang="ts">
	import PresentationDetails from '../../../tissues/Home/PresentationDetails/index.svelte';
	import ProfilePicture from '../../../atoms/Home/ProfilePicture/index.svelte';
</script>

<div class="presentation">
	<PresentationDetails />
	<ProfilePicture />
</div>

<style>
	.presentation {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
	}

	@media only screen and (max-width: 1100px) {
		.presentation {
			flex-wrap: wrap-reverse;
			justify-content: center;
			gap: 40px;
		}
	}
</style>
