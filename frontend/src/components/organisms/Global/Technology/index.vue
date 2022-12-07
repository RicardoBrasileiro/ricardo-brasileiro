<template>
  <div class="technology">
    <img
      :src="technology.icon"
      :alt="technology.name"
      :title="technology.name"
    />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Technology',
    components: {},
    props: {
      technology: Object,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .technology {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: var(--background-color);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  }

  .technology img {
    width: 22px;
    height: 22px;
  }
</style>
