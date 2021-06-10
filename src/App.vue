<template>
  <div id="app" class="app">
    <NavBar />
    <article>
      <Home />
      <SectionSplit />
      <Knowledges />
      <SectionSplit />
      <Projects />
    </article>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Knowledges from "./components/Knowledges";
import Projects from "./components/Projects";
import SectionSplit from "./components/SectionSplit";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Knowledges,
    Projects,
    SectionSplit,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

:root {
  --primary-color: #014f86;
  --secondary-color: #01497c;
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Sen", sans-serif;
  box-sizing: border-box;
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
  color: var(--primary-color);
}

@media only screen and (max-width: 700px) {
  .sections-name {
    margin: 0;
    margin-bottom: 2rem;
  }
}
</style>
