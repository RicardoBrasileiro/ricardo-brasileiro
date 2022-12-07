<template>
  <a class="social-media" :style="`background: ${backgroundColor}`" :href="url">
    <SocialMediaIcon :icon-path="iconPath" />
  </a>
</template>

<script lang="ts">
  import SocialMediaIcon from '../../../atoms/About/SocialMediaIcon/index.vue'

  export default {
    name: 'SocialMedia',
    components: {
      SocialMediaIcon,
    },
    props: {
      url: String,
      iconPath: String,
      backgroundColor: String,
    },
  }
</script>

<style>
  .social-media {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;

    border-radius: 10px;
  }
</style>
