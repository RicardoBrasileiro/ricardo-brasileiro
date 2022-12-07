<template>
  <div
    class="project-card-header-background"
    :style="`background-image: url('${backgroundImage}')`"
  />
</template>

<script lang="ts">
  export default {
    name: 'ProjectCardHeaderBackground',
    components: {},
    props: {
      backgroundImage: String,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .project-card-header-background {
    display: flex;
    align-items: flex-end;

    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 120px;

    overflow: hidden;

    background-size: 100%;

    z-index: -1;

    filter: blur(1px);
  }
</style>
