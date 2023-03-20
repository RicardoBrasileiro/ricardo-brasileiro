<script lang="ts">
	import { writable } from 'svelte/store';
	import MaterialIconRounded from '../../../atoms/Global/MaterialIconRounded/index.svelte';

	let isTop = writable<boolean>(true);

	if (typeof window !== 'undefined') {
		window.document.addEventListener('scroll', (e) => {
			if (window.document.documentElement.scrollTop === 0) {
				isTop.set(true);
			} else if ($isTop) {
				isTop.set(false);
			}
		});
	}
</script>

<button
	class={`back-to-top ${!$isTop ? 'active' : ''}`}
	on:click={() => (window.document.documentElement.scrollTop = 0)}
>
	<MaterialIconRounded icon="arrow_upward" />
</button>

<style>
	.back-to-top {
		display: grid;
		place-items: center;

		position: fixed;
		bottom: 80px;
		right: 80px;

		height: 50px;
		width: 50px;

		border-radius: 25px;

		background: #f5f5f5;

		opacity: 0;

		transition: all 400ms ease-in;
	}

	:global(.back-to-top > span) {
		color: #1a1a1a;
	}

	.back-to-top.active {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		.back-to-top {
			bottom: 40px;
			right: 40px;
		}
	}
</style>
