<template>
  <div class="sections">
    <div v-for="project in projects" :key="project.sectionName">
      <div class="section">
        <p class="section-name">{{ project.sectionName }}</p>
      </div>
      <div class="section-cards-box">
        <button class="btn-slide" v-on:click="slide(project.section, 'left')">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="section-cards project-cards">
          <div>
            <div v-for="repo in project.repos" :key="repo.name">
              <div class="section-card project-card">
                <div class="section-card-info">
                  <p class="section-card-title">{{ repo.name }}</p>
                  <p>{{ repo.description }}</p>
                </div>
                <a class="section-card-link" :href="repo.clone_url"
                  >Acessar o repositório</a
                >
              </div>
            </div>
          </div>
        </div>
        <button class="btn-slide" v-on:click="slide(project.section, 'right')">
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
        cards.scrollLeft += 382;
      } else if (side == "left") {
        cards.scrollLeft -= 382;
      }
    },
  },
};
</script>

<style scoped>
.project-card {
  width: 350px;
  height: 200px;
  justify-content: space-between;
}

.project-cards {
  width: calc(350px + 2rem);
}
</style>