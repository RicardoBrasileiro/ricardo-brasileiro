<template>
  <div class="projects-list">
    <ProjectCard
      :title="project.name"
      :description="project.description"
      :background-image="project.backgroundImage"
      :technologies="project.technologies"
      v-for="project in projects"
    />
  </div>
</template>

<script>
  import ProjectCard from '../../../organisms/Projects/ProjectCard/index.vue'

  export default {
    name: 'ProjectsList',
    components: {
      ProjectCard,
    },
    props: {
      projects: Array,
    },
  }
</script>

<style scoped>
  .projects-list {
    display: flex;
    align-items: center;
    gap: 40px;

    width: 100%;
    padding: 20px;
    max-width: 70vw;

    overflow: hidden;
    scroll-behavior: smooth;
  }
</style>
