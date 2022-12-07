<template>
  <p class="project-card-content-action-title">{{ title }}</p>
</template>

<script lang="ts">
  export default {
    name: 'ProjectCardContentActionTitle',
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
  .project-card-content-action-title {
    color: #f5f5f5;
  }
</style>
