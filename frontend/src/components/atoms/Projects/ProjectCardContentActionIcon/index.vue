<template>
  <img class="project-card-content-action-icon" :src="icon" />
</template>

<script lang="ts">
  export default {
    name: 'ProjectCardContentActionIcon',
    components: {},
    props: {
      icon: String,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped></style>
