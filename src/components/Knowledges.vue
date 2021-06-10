<template>
  <div class="knowledges my-section" id="knowledges">
    <h2 class="sections-name">Conhecimentos</h2>
    <div class="sections">
      <div
        v-for="knowledge_info in knowledges_info"
        :key="knowledge_info.section"
      >
        <div class="section">
          <p class="section-name">{{ knowledge_info.sectionName }}</p>
          <div class="knowledges-box">
            <div
              v-for="knowledge in knowledge_info.knowledges"
              :key="knowledge.name"
            >
              <i
                :class="'knowledge' + ' ' + knowledge.icon"
                :title="knowledge.name"
              ></i>
            </div>
          </div>
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
};
</script>

<style scoped>
.knowledges {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.sections {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 35vw;
  margin: 3rem 0;
  margin-bottom: 1rem;
  z-index: 1;
}

.section-name {
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 3rem;
}

.knowledges-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.knowledge {
  width: 100%;
  font-size: 2.5rem;
  margin: 0 1rem;
  color: var(--primary-color);
}

@media only screen and (max-width: 700px) {
  .sections {
    flex-direction: column;
  }

  .section {
    width: 100%;
  }
}
</style>