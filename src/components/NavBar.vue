<template>
  <div class="nav-bar">
    <router-link class="logo" to="/">
      <div>
        <p class="initial">R</p>
        <p class="full-name">icardo</p>
        <p class="initial">&#32;B</p>
        <p class="full-name">rasileiro</p>
      </div>
    </router-link>

    <input type="checkbox" name="" id="toggle-actions" class="toggle-actions" />

    <div class="nav-bar-actions">
      <div>
        <router-link to="/knowledges">Conhecimentos</router-link>
      </div>
      <div>
        <router-link to="/">Início</router-link>
      </div>
      <div>
        <router-link to="/projects">Projetos</router-link>
      </div>
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
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #7400b8;
  z-index: 97;
  box-shadow: 0px 0px 6px #58008b;
}

.nav-bar a {
  color: #ffffff;
}

.logo {
  display: flex;
  width: max-content;
}

.nav-bar-actions {
  position: absolute;
  width: 25rem;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s linear;
}

.nav-bar-actions div {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 0.15rem;
}

.nav-bar-actions a {
  position: relative;
  padding-bottom: 0.5rem;
}

.page-selected::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 2px;
  background: white;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 95;
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
  background: rgba(255, 255, 255, 0.2);
}

.toggle-bar {
  width: 1.5rem;
  height: 2px;
  position: absolute;
  background: #ffffff;
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
  .full-name {
    animation: none;
    width: 4.5rem;
  }

  .nav-bar-actions {
    position: fixed;
    top: 0%;
    right: -100%;
    left: unset;
    transform: none;
    width: 15rem;
    height: 100vh;
    background: #7400b8;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 0px 4px #58008b;
    z-index: 96;
  }

  .label-toggle-actions {
    display: unset;
  }
}
</style>