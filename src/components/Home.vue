<template>
  <div class="home my-section" id="home">
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
#home {
  padding-top: 5rem;
}

.home {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media only screen and (max-width: 700px) {
  .home {
    justify-content: center;
  }
}
</style>