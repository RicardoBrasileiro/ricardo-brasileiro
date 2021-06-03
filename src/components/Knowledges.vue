<template>
  <div class="sections">
    <div
      v-for="knowledge_info in knowledges_info"
      :key="knowledge_info.section"
    >
      <div class="section">
        <p class="section-name">{{ knowledge_info.sectionName }}</p>
        <div class="section-cards-box">
          <button
            class="btn-slide"
            v-on:click="slide(knowledge_info.section, 'left')"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="section-cards knowledges-cards">
            <div>
              <div
                v-for="knowledge in knowledge_info.knowledges"
                :key="knowledge.name"
              >
                <div class="section-card knowledge-card">
                  <i :class="'section-card-icon' + ' ' + knowledge.icon"></i>
                  <p class="section-card-name">{{ knowledge.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn-slide"
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
import data from "../data/index.json";

export default {
  name: "Knowledges",
  data() {
    return {
      knowledges_info: data.knowledges_info,
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
.knowledges-cards {
  width: calc(400px + 4rem);
}

.knowledge-card {
  width: 200px;
  height: 250px;
  position: relative;
  justify-content: center;
  align-items: center;
}

.knowledge-card:hover {
  transform: translateY(-0.5rem);
}

@media only screen and (max-width: 700px) {
  .knowledges-cards {
    width: calc(200px + 2rem);
  }
}
</style>