<script lang="ts">
	import type { ISocialMedia } from './types';

	export let socialMedia: ISocialMedia = {
		icon: '',
		url: ''
	};
</script>

<button class="social-media" on:click={() => window.open(socialMedia.url)}>
	<img class="social-media-icon" src={socialMedia.icon} alt="" />
</button>

<style>
	.social-media {
		height: 2.5rem;
		width: 2.5rem;
	}
</style>
