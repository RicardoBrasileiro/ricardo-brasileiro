<template>
  <div class="projects">
    <div v-for="project in projects" :key="project.sectionName">
      <div class="project-section">
        <p class="project-label">{{ project.sectionName }}</p>
      </div>
      <div class="projects-box">
        <button class="slide-cards" v-on:click="slide(project.section, 'left')">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="project-cards">
          <div>
            <div v-for="repo in project.repos" :key="repo.name">
              <div class="project-card">
                <div class="project-info">
                  <p class="project-title">{{ repo.name }}</p>
                  <p>{{ repo.description }}</p>
                </div>
                <a class="project-link" :href="repo.clone_url"
                  >Acessar o repositório</a
                >
              </div>
            </div>
          </div>
        </div>
        <button
          class="slide-cards"
          v-on:click="slide(project.section, 'right')"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          section: 0,
          sectionName: "Populares",
          repos: [],
        },
        {
          section: 1,
          sectionName: "Recentes",
          repos: [],
        },
      ],
    };
  },
  created: function () {
    axios
      .get("https://api.github.com/users/RicardoBrasileiro/repos")
      .then((response) => {
        let repos = response.data;
        console.log(repos);
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
                if (repo.commits > 25) {
                  this.projects[0].repos.push(repo);
                } else {
                  let date = repo.updated_at
                    .toString()
                    .split("T")[0]
                    .split("-");
                  let month = Number(date[1]);
                  let year = Number(date[0]);
                  let now = new Date();
                  let monthNow = now.getMonth();
                  let yearNow = now.getFullYear();
                  if (year == yearNow && monthNow - month <= 1) {
                    this.projects[1].repos.push(repo);
                  }
                }
              }
            });
        });
      });
  },
  methods: {
    slide: function (section, side) {
      let cards = document.getElementsByClassName("project-cards")[section];

      if (side == "right") {
        cards.scrollLeft += 432;
      } else if (side == "left") {
        cards.scrollLeft -= 432;
      }
    },
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.project-card {
  width: 400px;
  height: 200px;
  padding: 1rem;
  margin: 1rem;
  color: #ffffff;
  background: #7400b8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 6px 0px #60178b;
}

.project-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-link {
  padding: 0.75rem;
  color: #7400b8;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.project-section {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 1;
}

.project-label {
  color: #7400b8;
  font-weight: bold;
  margin-bottom: 1rem;
}

.projects-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slide-cards {
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

.slide-cards:hover {
  box-shadow: 0px 0px 4px gray;
}

.slide-cards[disabled] {
  background: red;
}

.project-cards {
  width: calc(400px + 2rem);
  overflow: hidden;
  scroll-behavior: smooth;
}

.project-cards > div {
  width: max-content;
  display: flex;
}

@media only screen and (max-width: 700px) {
  .projects {
    justify-content: center;
  }
}
</style>