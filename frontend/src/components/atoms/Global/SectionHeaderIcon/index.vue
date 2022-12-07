<template>
  <img :src="iconPath" class="section-header-icon" />
</template>

<script lang="ts">
  export default {
    name: 'SectionHeaderIcon',
    components: {},
    props: {
      iconPath: String,
    },
  }
</script>

<style scoped></style>
