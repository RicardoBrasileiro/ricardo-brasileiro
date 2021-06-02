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

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Sen", sans-serif;
  box-sizing: border-box;
}

article {
  padding: 0 1rem;
  padding-top: 7rem;
}
</style>
