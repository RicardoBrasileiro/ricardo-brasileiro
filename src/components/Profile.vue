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
.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 65vh;
}

.profile-img {
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.profile-img img {
  width: 250px;
  border-radius: 50%;
}

.profile-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-info > div {
  margin-top: 3rem;
}

.profile-info div div {
  margin: 0.5rem 0;
}

.profile-info div p {
  font-weight: bold;
}

.profile-info div > p {
  color: #acacac;
  font-size: 0.9rem;
}

.profile-info div div p {
  margin-left: 1rem;
  color: #7400b8;
  font-size: 1rem;
}

@media only screen and (max-width: 700px) {
  .profile {
    width: 100%;
    align-items: center;
  }

  .profile-info {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>