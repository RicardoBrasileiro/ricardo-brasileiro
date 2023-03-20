<script lang="ts">
	import PersonalInfo from '../../../molecules/Home/PersonalInfo/index.svelte';
	import Description from '../../../atoms/Home/Description/index.svelte';
</script>

<div class="presentation-details-content">
	<PersonalInfo />
	<Description />
</div>

<style>
	.presentation-details-content {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	@media only screen and (max-width: 1100px) {
		.presentation-details-content {
			align-items: center;
		}
	}
</style>
