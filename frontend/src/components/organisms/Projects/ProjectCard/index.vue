<template>
  <div class="project-card">
    <ProjectCardHeader :title="title" :background-image="backgroundImage" />
    <ProjectCardContent
      :description="description"
      :technologies="technologies"
    />
  </div>
</template>

<script lang="ts">
  import ProjectCardHeader from '../../../molecules/Projects/ProjectCardHeader/index.vue'
  import ProjectCardContent from '../../../molecules/Projects/ProjectCardContent/index.vue'

  export default {
    name: 'ProjectCard',
    components: {
      ProjectCardHeader,
      ProjectCardContent,
    },
    props: {
      title: String,
      description: String,
      backgroundImage: String,
      technologies: Array,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    min-height: 360px;
    min-width: calc((70vw - (2 * 45px) - (2 * 20px) - 40px) / 2);
    max-width: calc((70vw - (2 * 45px) - (2 * 20px) - 40px) / 2);

    background: var(--background-color);

    border-radius: 20px;

    box-shadow: -5px -5px 15px #ffffff, 5px 5px 15px #d9d9d9;

    overflow: hidden;
  }
</style>
