<template>
  <div class="profile">
    <div class="profile-img">
      <img src="../assets/profile.jpg" alt="" />
    </div>
    <div class="profile-info">
      <div class="hobbies">
        <p>Hobbies</p>
        <div>
          <p>Jogos</p>
          <p>Música</p>
        </div>
      </div>
      <div class="interests">
        <p>Interesses</p>
        <div>
          <p>Lógica</p>
          <p>Design</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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

.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.profile-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 260px;
  box-shadow: 0px 0px 3px var(--shadow-color);
  border-radius: 50%;
}

.profile-img img {
  width: 250px;
  border-radius: 50%;
}

.profile-info {
  display: flex;
  justify-content: space-between;
}

.profile-info > div {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
}

.profile-info div div {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem 0;
}

.profile-info div > p {
  color: var(--theme-color);
  font-size: 0.9rem;
  font-weight: bold;
}

.profile-info div div p {
  color: var(--text-color);
  font-size: 1rem;
  font-weight: normal;
}

@media only screen and (max-width: 700px) {
  .profile {
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }

  .profile-info {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  .profile-info div div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .profile-info div div p {
    margin: 0;
  }
}
</style>