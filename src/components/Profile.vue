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
  justify-content: space-around;
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
  display: flex;
  justify-content: space-between;
}

.profile-info > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

.profile-info div div {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: var(--primary-color);
  font-size: 1rem;
}

@media only screen and (max-width: 700px) {
  .profile {
    width: 100%;
    align-items: center;
    margin: 2rem 0;
  }

  .profile-info {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  .profile-info div div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-info div div p {
    margin: 0;
  }
}
</style>