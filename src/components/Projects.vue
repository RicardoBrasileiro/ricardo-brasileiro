<template>
  <div class="projects my-section" id="projects">
    <div class="section-cards-box">
      <button class="btn-slide" v-on:click="slide('left')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="section-cards project-cards">
        <div>
          <div v-for="project in projects" :key="project.name" class="cards">
            <div class="project-card">
              <div class="section-card-info">
                <p class="section-card-title">{{ project.name }}</p>
                <p class="section-card-desc">{{ project.description }}</p>
              </div>
              <a class="section-card-link" :href="project.clone_url"
                >Acessar repositório</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="slide-buttons">
        <button class="btn-slide" v-on:click="slide('left')">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="btn-slide" v-on:click="slide('right')">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <button class="btn-slide" v-on:click="slide('right')">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  created: function () {
    axios
      .get("https://api.github.com/users/RicardoBrasileiro/repos")
      .then((response) => {
        let repos = response.data;
        repos.map((repo) => {
          axios
            .get(
              "https://api.github.com/repos/RicardoBrasileiro/" +
                repo.name +
                "/commits"
            )
            .then((res) => {
              repo.commits = res.data.length;
              if (repo.name != "RicardoBrasileiro") {
                if (repo.commits > 15 && !repo.fork) {
                  this.projects.push(repo);
                }
              }
            });
        });
      });
  },
  methods: {
    slide: function (side) {
      let cards = document.getElementsByClassName("project-cards")[0];

      let windowWidth = window.innerWidth;

      if (windowWidth > 700) {
        if (side == "right") {
          cards.scrollLeft += 382;
        } else if (side == "left") {
          cards.scrollLeft -= 382;
        }
      } else {
        if (side == "right") {
          cards.scrollLeft += 332;
        } else if (side == "left") {
          cards.scrollLeft -= 332;
        }
      }
    },
  },
};
</script>

<style scoped>
.section-cards-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.section-cards {
  overflow: hidden;
  scroll-behavior: smooth;
  margin: 0 1rem;
}

.section-cards > div {
  width: max-content;
  display: flex;
}

.section-card-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--theme-color);
  text-transform: capitalize;
}

.section-card-link {
  padding: 0.75rem;
  color: var(--theme-color);
  background: var(--base-color);
  border: 2px solid var(--theme-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s linear;
}

.section-card-link:hover {
  color: var(--base-color);
}

.section-card-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: var(--theme-color);
  z-index: -1;
  transition: all 0.3s linear;
}

.section-card-link:hover::before {
  height: 200%;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-card {
  width: 350px;
  height: 300px;
  padding: 1rem;
  margin: 1rem;
  color: var(--text-color);
  background: var(--base-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 4px var(--shadow-color);
  transition: all 0.2s linear;
}

.project-cards {
  width: calc(350px + 12rem);
}

.btn-slide {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: var(--text-color);
  background: var(--second-base-color);
  box-shadow: 0px 0px 4px var(--shadow-color);
  border-radius: 50%;
  border: none;
  transition: all 0.2s linear;
}

.slide-buttons {
  display: none;
}

@media only screen and (min-width: 700px) {
  .cards:first-child {
    margin-left: 5rem;
  }

  .cards:last-child {
    margin-right: 5rem;
  }
}

@media only screen and (max-width: 700px) {
  .projects {
    justify-content: space-evenly;
  }

  .project-card {
    width: 300px;
    height: 300px;
    margin: 1rem;
  }

  .project-cards {
    width: calc(300px + 2rem);
  }

  .section-cards-box {
    width: max-content;
    flex-direction: column;
  }

  .section-cards-box > .btn-slide {
    display: none;
  }

  .slide-buttons {
    display: flex;
    width: 100%;
    padding: 0 2rem;
    justify-content: space-between;
  }

  .slide-buttons .btn-slide {
    color: var(--text-color);
    height: 35px;
    width: 70px;
    border-radius: 0.5rem;
  }
}
</style>