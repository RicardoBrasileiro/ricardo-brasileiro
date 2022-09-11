<script lang="ts">
import About from "./components/About/index.vue";

export default {
  components: {
    About,
  },
};
</script>

<template>
  <div class="app">
    <About />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
