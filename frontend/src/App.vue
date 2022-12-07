<template>
  <div class="app">
    <div class="sections">
      <About />
      <Skills />
      <Projects />
    </div>
  </div>
</template>

<script>
  import About from './pages/About/index.vue'
  import Skills from './pages/Skills/index.vue'
  import Projects from './pages/Projects/index.vue'

  export default {
    components: {
      About,
      Skills,
      Projects,
    },
  }
</script>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
