<template>
  <div id="app" class="app">
    <NavBar />
    <article>
      <router-view></router-view>
      <Theme />
    </article>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";

export default {
  name: "App",
  components: {
    NavBar,
    Theme,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

/* CSS Model */
/*
 * display
 * size
 * position
 * colors
 * borders
 * shadows
 * index
 * transition
*/

:root {
  --base-color: #1b1b1b;
  --theme-color: #0ead69;
  --text-color: #d3d3d3;
  --shadow-color: #0c0c0c;

  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Sen", sans-serif;
  transition: all 0.2s linear;
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
  min-height: 100vh;
  padding: 5rem 0;
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
