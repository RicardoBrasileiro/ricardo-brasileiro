<script lang="ts">
	import Presentation from '../../components/organs/Home/Presentation/index.svelte';
	import SocialMedias from '../../components/molecules/Home/SocialMedias/index.svelte';
</script>

<div id="home" class="section home">
	<Presentation />
	<SocialMedias />
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;

		position: relative;
	}

	@media only screen and (max-width: 1100px) {
		.home {
			gap: 80px;
		}
	}
</style>
