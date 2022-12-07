<template>
  <button class="contact-me">
    <ContactMeLabel />
    <ContactMeIcon />
  </button>
</template>

<script lang="ts">
  import ContactMeLabel from '../../../atoms/About/ContactMeLabel/index.vue'
  import ContactMeIcon from '../../../atoms/About/ContactMeIcon/index.vue'

  export default {
    name: 'ContactMe',
    components: {
      ContactMeLabel,
      ContactMeIcon,
    },
  }
</script>

<style scoped>
  .contact-me {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    height: 50px;
    width: 190px;

    border-radius: 10px;

    background: var(--button-background-color);
  }

  .contact-me h4,
  .contact-me span {
    color: var(--button-text-color);
  }
</style>
