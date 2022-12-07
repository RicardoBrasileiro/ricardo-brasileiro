<template>
  <div class="project-card-content-actions">
    <ProjectCardContentAction
      :icon="githubIcon"
      title="Github"
      background-color="#000000"
    />
    <ProjectCardContentAction
      :icon="webIcon"
      title="Deploy"
      background-color="#0466c8"
    />
  </div>
</template>

<script lang="ts">
  import ProjectCardContentAction from '../../../organisms/Projects/ProjectCardContentAction/index.vue'
  import githubIcon from '../../../../assets/icons/socialMedias/GitHub.svg'
  import webIcon from '../../../../assets/icons/utils/Web.svg'

  export default {
    name: 'ProjectCardContentActions',
    components: {
      ProjectCardContentAction,
    },
    data() {
      return {
        githubIcon,
        webIcon,
      }
    },
  }
</script>

<style scoped>
  .project-card-content-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .source-link {
    background: #000000;
  }

  .deploy-link {
    background: #0466c8;
  }
</style>
