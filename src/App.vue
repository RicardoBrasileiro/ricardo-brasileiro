<template>
  <div id="app" class="app">
    <NavBar />
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

:root {
  --base-color: #1b1b1b;
  --theme-color: #f48c06;
  --text-color: #d3d3d3;
  --shadow-color: #0c0c0c;

  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Sen", sans-serif;
  box-sizing: border-box;
}

body {
  background: var(--base-color);
}

.app {
  scroll-behavior: smooth;
}

article {
  padding: 0 1rem;
}

.my-section {
  padding: 5rem 0;
  min-height: 100vh;
}

.sections-name {
  margin: 2rem 0;
  color: var(--text-color);
}

.sections-name::after {
  content: "_";
  animation: 0.7s ponteiro cubic-bezier(1, 0, 0, 1) infinite;
}

@keyframes ponteiro {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media only screen and (max-width: 700px) {
  .sections-name {
    margin: 0;
    margin-bottom: 2rem;
  }
}
</style>
