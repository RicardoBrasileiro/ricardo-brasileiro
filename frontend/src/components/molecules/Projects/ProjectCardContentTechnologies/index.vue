<template>
  <div class="project-card-content-technologies">
    <ProjectCardContentTechnologiesTitle />
    <TechnologiesList :technologies="technologies" />
  </div>
</template>

<script lang="ts">
  import ProjectCardContentTechnologiesTitle from '../../../atoms/Projects/ProjectCardContentTechnologiesTitle/index.vue'
  import TechnologiesList from '../../../tissues/Global/TechnologiesList/index.vue'

  export default {
    name: 'ProjectCardContentTechnologies',
    components: {
      ProjectCardContentTechnologiesTitle,
      TechnologiesList,
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
  .project-card-content-technologies {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
