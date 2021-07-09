<template>
  <div id="app" class="app">
    <NavBar />
    <article>
      <Home />
      <Knowledges />
      <Projects />
      <Theme />
    </article>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Knowledges from "./components/Knowledges";
import Projects from "./components/Projects";
import Theme from "./components/Theme";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Knowledges,
    Projects,
    Theme,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

:root {
  --base-color: #ffffff;
  --text-color: #1b1b1b;
  --shadow-color: #bbbbbb;

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
