<template>
  <div class="technologies-list">
    <Technology v-for="technology in technologies" :technology="technology" />
  </div>
</template>

<script lang="ts">
  import Technology from '../../../organisms/Global/Technology/index.vue'

  export default {
    name: 'TechnologiesList',
    components: {
      Technology,
    },
    props: {
      technologies: Array,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .technologies-list {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
