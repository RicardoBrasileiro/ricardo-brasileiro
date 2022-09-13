<script lang="ts">
import About from "./pages/About/index.vue";
import Skills from "./pages/Skills/index.vue";

export default {
  components: {
    About,
    Skills,
  },
};
</script>

<template>
  <div class="app">
    <About />
    <Skills />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
