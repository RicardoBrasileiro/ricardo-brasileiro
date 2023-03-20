<script lang="ts">
	export let picture: string = '';
</script>

<img class="project-picture" src={picture} alt="" />

<style>
	.project-picture {
		width: 100%;

		border-radius: 16px;
	}
</style>
