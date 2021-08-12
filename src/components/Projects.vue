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
      .get("https://api.github.com/users/ricardobgx/repos")
      .then((response) => {
        let repos = response.data;
        repos.map((repo) => {
          let description = repo.description;
          if (description && description.indexOf("(PP)") != -1) {
            description = description.substr(0, description.indexOf("(PP)"));
            let name = repo.name;
            let nameSplited = name.split("-");
            repo.name = nameSplited.join(" ");
            repo.description = description;
            this.projects.push(repo);
          }
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

.section-cards-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.section-cards {
  margin: 0 1rem;
  overflow: hidden;
  scroll-behavior: smooth;
}

.section-cards > div {
  display: flex;
  width: max-content;
}

.section-card-title {
  margin-bottom: 0.5rem;
  color: var(--theme-color);
  font-weight: bold;
  text-transform: capitalize;
}

.section-card-link {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  position: relative;
  color: var(--theme-color);
  background: var(--base-color);
  border: 2px solid var(--theme-color);
  border-radius: 10px;
  text-align: center;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s linear;
}

.section-card-link:hover {
  color: var(--base-color);
}

.section-card-link::before {
  content: "";
  width: 100%;
  height: 0%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--theme-color);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  z-index: -1;
  transition: all 0.3s linear;
}

.section-card-link:hover::before {
  height: 200%;
}

.projects {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  color: var(--text-color);
  background: var(--base-color);
  border-radius: 10px;
  box-shadow: 0px 0px 4px var(--shadow-color);
  transition: all 0.2s linear;
}

.project-cards {
  width: calc(350px + 12rem);
}

.btn-slide {
  width: 50px;
  height: 50px;
  color: var(--text-color);
  background: var(--second-base-color);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 4px var(--shadow-color);
  cursor: pointer;
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
    flex-direction: column;
    width: max-content;
  }

  .section-cards-box > .btn-slide {
    display: none;
  }

  .slide-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
  }

  .slide-buttons .btn-slide {
    width: 70px;
    height: 35px;
    color: var(--text-color);
    border-radius: 0.5rem;
  }
}
</style>