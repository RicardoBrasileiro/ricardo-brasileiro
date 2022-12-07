<template>
  <a
    href="#"
    class="project-card-content-action"
    :style="`backgroundColor: ${backgroundColor}`"
  >
    <ProjectCardContentActionIcon :icon="icon" />
    <ProjectCardContentActionTitle :title="title" />
  </a>
</template>

<script lang="ts">
  import ProjectCardContentActionIcon from '../../../atoms/Projects/ProjectCardContentActionIcon/index.vue'
  import ProjectCardContentActionTitle from '../../../atoms/Projects/ProjectCardContentActionTitle/index.vue'

  export default {
    name: 'ProjectCardContentAction',
    components: {
      ProjectCardContentActionIcon,
      ProjectCardContentActionTitle,
    },
    props: {
      icon: String,
      title: String,
      backgroundColor: {
        required: false,
        default: '#000000',
      },
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card-content-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    height: 40px;
    width: 100%;

    border-radius: 10px;
  }
</style>
