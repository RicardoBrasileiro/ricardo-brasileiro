<script lang="ts">
	export let description: string = '';
</script>

<div class="project-description">
	{description}
</div>

<style>
	.project-description {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@media only screen and (min-width: 1281px) {
		.project-description {
			-webkit-line-clamp: 3;
		}
	}

	@media only screen and (min-width: 1100px) and (max-width: 1280px) {
		.project-description {
			-webkit-line-clamp: 2;
		}
	}
</style>
