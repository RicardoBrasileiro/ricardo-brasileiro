<template>
  <div id="app" class="app">
    <NavBar />
    <article>
      <Home />
      <Knowledges />
      <Projects />
    </article>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Knowledges from "./components/Knowledges";
import Projects from "./components/Projects";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Knowledges,
    Projects,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

:root {
  --base-color: #000000;
  --theme-color: #0077b6;
  --second-base-color: #0c0c0c;
  --text-color: #d1d1d1;
  --shadow-color: #3d3d3d;

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
  color: var(--theme-color);
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
