<template>
  <div class="nav-bar">
    <a class="logo" href="/">
      <div>
        <p class="initial">R</p>
        <p class="full-name">icardo</p>
        <p class="initial">&#32;B</p>
        <p class="full-name">rasileiro</p>
      </div>
    </a>

    <input type="checkbox" name="" id="toggle-actions" class="toggle-actions" />

    <div class="nav-bar-actions" v-on:click="checkRoute()">
      <router-link :class="this.page + '-home'" to="/home">Início</router-link>
      <router-link :class="this.page + '-knowledges'" to="/knowledges"
        >Conhecimentos</router-link
      >
      <router-link :class="this.page + '-projects'" to="/projects"
        >Projetos</router-link
      >
    </div>
    <label class="label-toggle-actions" for="toggle-actions">
      <div>
        <div class="toggle-bar"></div>
        <div class="toggle-bar"></div>
        <div class="toggle-bar"></div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      page: "home",
    };
  },
  beforeMount() {
    this.checkRoute();
  },
  methods: {
    checkRoute: function () {
      let local = window.location.hash;
      let pageRoute = local.substr(2, local.length);
      this.page = pageRoute;
    },
  },
};
</script>

<style scoped>
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

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  position: fixed;
  background: var(--base-color);
  box-shadow: 0px 0px 8px var(--shadow-color);
  z-index: 97;
}

.nav-bar a {
  color: var(--text-color);
}

.logo {
  display: flex;
  width: max-content;
  color: var(--text-color);
}

.nav-bar-actions {
  display: flex;
  justify-content: space-between;
  width: 25rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s linear;
}

.nav-bar-actions a {
  margin: 0 0.15rem;
  padding: 1rem 0.5rem;
  position: relative;
  text-align: center;
  transition: all 0.2s linear;
}

.home-home,
.knowledges-knowledges,
.projects-projects {
  color: var(--theme-color) !important;
}

.logo div {
  display: flex;
  width: max-content;
}

.logo div p {
  font-size: 1.2rem;
}

.initial {
  font-weight: bold;
}

.full-name {
  width: 0px;
  position: relative;
  font-weight: normal;
  overflow: hidden;
  animation: 3s name linear normal;
}

.toggle-actions {
  display: none;
}

.toggle-actions:checked ~ .nav-bar-actions {
  right: 0;
}

.label-toggle-actions {
  display: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  z-index: 96;
  transition: all 0.2s linear;
}

.label-toggle-actions > div {
  width: 1.5rem;
  height: 1rem;
  position: relative;
  overflow: hidden;
}

.label-toggle-actions:hover {
  background: var(--shadow-color);
}

.toggle-bar {
  width: 1.5rem;
  height: 2px;
  position: absolute;
  background: var(--text-color);
  transition: all 0.4s linear;
}

.toggle-bar:nth-child(3) {
  top: 0%;
}

.toggle-bar:nth-child(1) {
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
}

.toggle-bar:nth-child(2) {
  bottom: 0%;
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(3) {
  top: 45%;
  transform: rotateZ(45deg);
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(1) {
  right: -100%;
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(2) {
  bottom: 45%;
  transform: rotateZ(-45deg);
}

@keyframes name {
  0% {
    width: 0px;
  }
  25% {
    width: 4.5rem;
  }
  50% {
    width: 4.5rem;
  }
  75% {
    width: 4.5rem;
  }
  100% {
    width: 0px;
  }
}

@media only screen and (max-width: 700px) {
  .nav-bar-actions {
    flex-direction: column;
    justify-content: space-around;
    width: 15rem;
    height: 100vh;
    position: fixed;
    top: 0%;
    left: unset;
    right: -100%;
    background: var(--base-color);
    box-shadow: 0px 0px 4px var(--shadow-color);
    transform: none;
    z-index: 96;
  }

  .label-toggle-actions {
    display: unset;
  }
}
</style>