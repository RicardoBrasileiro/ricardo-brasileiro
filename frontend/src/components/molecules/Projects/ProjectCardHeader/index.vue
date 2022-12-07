<template>
  <div class="project-card-header">
    <ProjectCardHeaderBackground :background-image="backgroundImage" />
    <ProjectCardHeaderTitle :title="title" />
  </div>
</template>

<script lang="ts">
  import ProjectCardHeaderTitle from '../../../atoms/Projects/ProjectCardHeaderTitle/index.vue'
  import ProjectCardHeaderBackground from '../../../atoms/Projects/ProjectCardHeaderBackground/index.vue'

  export default {
    name: 'ProjectCardHeader',
    components: {
      ProjectCardHeaderTitle,
      ProjectCardHeaderBackground,
    },
    props: {
      title: String,
      backgroundImage: String,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card-header {
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 120px;
    padding: 20px;

    position: relative;
    overflow: hidden;

    z-index: 92;
  }
</style>
