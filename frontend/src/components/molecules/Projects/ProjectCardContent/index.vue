<template>
  <div class="project-card-content">
    <ProjectCardContentDescription :description="description" />
    <ProjectCardContentTechnologies :technologies="technologies" />
    <ProjectCardContentActions />
  </div>
</template>

<script lang="ts">
  import ProjectCardContentDescription from '../../../atoms/Projects/ProjectCardContentDescription/index.vue'
  import ProjectCardContentTechnologies from '../ProjectCardContentTechnologies/index.vue'
  import ProjectCardContentActions from '../ProjectCardContentActions/index.vue'

  export default {
    name: 'ProjectCardContent',
    components: {
      ProjectCardContentDescription,
      ProjectCardContentTechnologies,
      ProjectCardContentActions,
    },
    props: {
      description: String,
      technologies: Array,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    height: 100%;
    padding: 20px;
  }
</style>
