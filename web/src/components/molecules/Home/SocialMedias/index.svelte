<script lang="ts">
	import SocialMedia from '../../../atoms/Home/SocialMedia/index.svelte';
	import type { ISocialMedia } from '../../../atoms/Home/SocialMedia/types';

	const socialMedias: ISocialMedia[] = [
		{
			icon: '/icons/social-medias/LinkedIn.png',
			url: 'https://www.linkedin.com/in/ricardobgx'
		},
		{
			icon: '/icons/social-medias/GitHub.png',
			url: 'https://github.com/ricardobgx'
		},
		{
			icon: '/icons/social-medias/Mail.png',
			url: 'mailto:contato@ricardobrasileiro.com'
		}
	];
</script>

<div class="social-medias">
	{#each socialMedias as socialMedia}
		<SocialMedia bind:socialMedia />
	{/each}
</div>

<style>
	.social-medias {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	@media only screen and (min-width: 1100px) {
		.social-medias {
			position: absolute;

			bottom: 80px;
		}
	}
</style>
