<template>
  <p class="project-card-content-description">{{ description }}</p>
</template>

<script lang="ts">
  export default {
    name: 'ProjectCardContentDescription',
    components: {},
    props: {
      description: String,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped></style>
