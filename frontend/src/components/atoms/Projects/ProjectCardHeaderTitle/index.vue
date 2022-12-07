<template>
  <h3 class="project-card-header-title">{{ title }}</h3>
</template>

<script lang="ts">
  export default {
    name: 'ProjectCardHeaderTitle',
    components: {},
    props: {
      title: String,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card-header-title {
    color: #f5f5f5;
  }
</style>
