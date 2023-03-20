<script lang="ts">
	import Home from '../sections/Home/index.svelte';
	import Projects from '../sections/Projects/index.svelte';
	import Skills from '../sections/Skills/index.svelte';
</script>

<div class="sections">
	<Home />
	<Projects />
	<Skills />
</div>

<style>
	.sections {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		.sections {
			gap: 40px;
		}
	}
</style>
