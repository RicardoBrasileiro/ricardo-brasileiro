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
      console.log(pageRoute);
      this.page = pageRoute;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--base-color);
  z-index: 97;
  box-shadow: 0px 0px 8px var(--shadow-color);
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
  position: absolute;
  width: 25rem;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s linear;
}

.nav-bar-actions a {
  text-align: center;
  margin: 0 0.15rem;
  position: relative;
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
  font-weight: normal;
  position: relative;
  width: 0px;
  animation: 3s name linear normal;
  overflow: hidden;
}

.toggle-actions {
  display: none;
}

.toggle-actions:checked ~ .nav-bar-actions {
  right: 0;
}

.label-toggle-actions {
  display: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  z-index: 96;
  transition: all 0.2s linear;
}

.label-toggle-actions > div {
  width: 1.5rem;
  height: 1rem;
  overflow: hidden;
  position: relative;
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
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
}

.toggle-bar:nth-child(2) {
  bottom: 0%;
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(3) {
  transform: rotateZ(45deg);
  top: 45%;
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(1) {
  right: -100%;
}

.toggle-actions:checked ~ .label-toggle-actions .toggle-bar:nth-child(2) {
  transform: rotateZ(-45deg);
  bottom: 45%;
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
    position: fixed;
    top: 0%;
    right: -100%;
    left: unset;
    transform: none;
    width: 15rem;
    height: 100vh;
    background: var(--base-color);
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 0px 4px var(--shadow-color);
    z-index: 96;
  }

  .label-toggle-actions {
    display: unset;
  }
}
</style>