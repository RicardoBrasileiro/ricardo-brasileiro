<template>
  <img :src="iconPath" class="social-media-icon" />
</template>

<script lang="ts">
  export default {
    name: 'SocialMediaIcon',
    components: {},
    props: {
      iconPath: String,
    },
  }
</script>

<style>
  .social-media-icon {
    height: 20px;
  }
</style>
