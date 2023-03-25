<script lang="ts">
	import PresentationHeader from '../../../molecules/Projects/PresentationHeader/index.svelte';
	import SeeMoreOnGitHub from '../../../atoms/Projects/SeeMoreOnGitHub/index.svelte';
</script>

<div class="presentation">
	<PresentationHeader />
	<SeeMoreOnGitHub />
</div>

<style>
	.presentation {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;

		height: max-content;
		max-width: 400px;
	}

	@media only screen and (max-width: 1100px) {
		.presentation {
			align-items: center;

			margin-bottom: 1.25rem;
		}

		:global(.presentation .see-more-on-github) {
			display: none;
		}
	}
</style>
