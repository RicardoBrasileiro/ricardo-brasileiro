<template>
  <div class="Theme">
    <button v-on:click="verifyTheme()">
      <i :class="'fas fa-' + icon"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Theme",
  data() {
    return {
      icon: "moon",
      theme: "light",
      lightColors: [
        { property: "--base-color", value: "#ffffff" },
        { property: "--shadow-color", value: "#bbbbbb" },
        { property: "--text-color", value: "#1b1b1b" },
      ],
      darkColors: [
        { property: "--base-color", value: "#1b1b1b" },
        { property: "--shadow-color", value: "#0c0c0c" },
        { property: "--text-color", value: "#d3d3d3" },
      ],
    };
  },
  methods: {
    setTheme: function (theme) {
      theme.map((color) => {
        document.documentElement.style.setProperty(color.property, color.value);
      });
    },
    verifyTheme: function () {
      console.log(this.theme);
      if (this.theme == "light") {
        this.setTheme(this.darkColors);
        this.theme = "dark";
        this.icon = "sun";
      } else {
        this.setTheme(this.lightColors);
        this.theme = "light";
        this.icon = "moon";
      }
    },
  },
};
</script>
<style scoped>
.Theme {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 97;
}

.Theme button {
  cursor: pointer;
  color: var(--base-color);
  background: var(--text-color);
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0px 0px 4px var(--shadow-color);
  border: none;
  transition: all 0.2s linear;
}

.Theme button:hover > i {
  animation: 0.3s rotateIcon linear;
}

.Theme i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  font-size: 1.3rem;
}

@keyframes rotateIcon {
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(40deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-40deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>