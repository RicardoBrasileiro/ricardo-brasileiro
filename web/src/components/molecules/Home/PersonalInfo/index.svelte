<script lang="ts">
	import Name from '../../../atoms/Home/Name/index.svelte';
	import Slogan from '../../../atoms/Home/Slogan/index.svelte';
</script>

<div class="personal-info">
	<Name />
	<Slogan />
</div>

<style>
	.personal-info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	@media only screen and (max-width: 1100px) {
		.personal-info {
			align-items: center;
		}
	}
</style>
