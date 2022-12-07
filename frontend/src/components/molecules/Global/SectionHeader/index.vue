<template>
  <div class="section-header">
    <SectionHeaderTitle :title="title" />
    <SectionHeaderIcon :icon-path="iconPath" />
  </div>
</template>

<script lang="ts">
  import SectionHeaderTitle from '../../../atoms/Global/SectionHeaderTitle/index.vue'
  import SectionHeaderIcon from '../../../atoms/Global/SectionHeaderIcon/index.vue'

  export default {
    name: 'SectionHeader',
    components: {
      SectionHeaderTitle,
      SectionHeaderIcon,
    },
    props: {
      title: String,
      iconPath: String,
    },
  }
</script>

<style scoped>
  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
