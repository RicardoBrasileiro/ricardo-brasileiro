<template>
  <div class="home">
    <Profile />
    <Presentation />
  </div>
</template>

<script>
import Profile from "./Profile";
import Presentation from "./Presentation";

export default {
  name: "Home",
  components: {
    Profile,
    Presentation,
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.sections {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 1;
}

.section-name {
  color: #7400b8;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-cards-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-cards {
  overflow: hidden;
  scroll-behavior: smooth;
}

.section-cards > div {
  width: max-content;
  display: flex;
}

.section-card {
  padding: 1rem;
  margin: 1rem;
  color: #ffffff;
  background: #7400b8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 0px #60178b;
}

.section-card-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.section-card-link {
  padding: 0.75rem;
  color: #7400b8;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.section-card-icon {
  font-size: 5rem;
}

.section-card-name {
  position: absolute;
  bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.btn-slide {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #7400b8;
  background: #ffffff;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 2px gray;
  transition: all 0.2s linear;
}

.btn-slide:hover {
  box-shadow: 0px 0px 4px gray;
}

@media only screen and (max-width: 700px) {
  .home {
    justify-content: center;
  }

  .sections {
    justify-content: center;
  }
}
</style>