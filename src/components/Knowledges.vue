<template>
  <div class="knowledges">
    <div
      v-for="knowledge_info in knowledges_info"
      :key="knowledge_info.section"
    >
      <div class="knowledge-section">
        <p class="knowledge-label">{{ knowledge_info.sectionName }}</p>
        <div class="knowledges-box">
          <button
            class="slide-cards"
            v-on:click="slide(knowledge_info.section, 'left')"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="knowledges-cards">
            <div>
              <div
                v-for="knowledge in knowledge_info.knowledges"
                :key="knowledge.name"
              >
                <div class="knowledge-card">
                  <i :class="knowledge.icon"></i>
                  <p>{{ knowledge.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="slide-cards"
            v-on:click="slide(knowledge_info.section, 'right')"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Knowledges",
  data() {
    return {
      knowledges_info: [
        {
          section: 0,
          sectionName: "Linguagens de programação",
          knowledges: [
            { name: "Linguagem C", icon: "fab fa-cuttlefish" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "Java", icon: "fab fa-java" },
            { name: "Python", icon: "fab fa-python" },
          ],
        },
        {
          section: 1,
          sectionName: "Linguagens web",
          knowledges: [
            { name: "HTML", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
          ],
        },
        {
          section: 2,
          sectionName: "Frameworks",
          knowledges: [
            { name: "React JS", icon: "fab fa-react" },
            { name: "React Native", icon: "fab fa-react" },
            { name: "Vue JS", icon: "fab fa-vuejs" },
          ],
        },
        {
          section: 3,
          sectionName: "Bancos de dados",
          knowledges: [
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-database" },
          ],
        },
      ],
    };
  },
  methods: {
    slide: function (section, side) {
      let cards = document.getElementsByClassName("knowledges-cards")[section];

      if (side == "right") {
        cards.scrollLeft += 232;
      } else if (side == "left") {
        cards.scrollLeft -= 232;
      }
    },
  },
};
</script>

<style scoped>
.knowledges {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.knowledge-section {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 1;
}

.knowledge-label {
  color: #7400b8;
  font-weight: bold;
  margin-bottom: 1rem;
}

.knowledges-box {
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

.knowledges-cards {
  width: calc(400px + 4rem);
  overflow: hidden;
  scroll-behavior: smooth;
}

.knowledges-cards > div {
  width: max-content;
  display: flex;
}

.knowledge-card {
  cursor: pointer;
  width: 200px;
  height: 250px;
  border-radius: 0.5rem;
  background: #7400b8;
  box-shadow: 0px 6px 0px #60178b;
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: relative;
  transition: all 0.2s linear;
}

.knowledge-card:hover {
  transform: translateY(-0.5rem);
}

.knowledge-card i {
  font-size: 5rem;
}

.knowledge-card p {
  position: absolute;
  bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

@media only screen and (max-width: 700px) {
  .knowledges {
    justify-content: center;
  }

  .knowledge-section {
    width: 100%;
  }
}
</style>