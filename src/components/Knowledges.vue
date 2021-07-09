<template>
  <div class="knowledges my-section" id="knowledges">
    <div class="all-knowledges">
      <div
        v-for="knowledge_section in knowledges"
        :key="knowledge_section.name"
      >
        <div class="knowledge-section">
          <p class="knowledge-section-name">
            {{ knowledge_section.sectionName }}
          </p>
          <div
            v-for="knowledge in knowledge_section.knowledges"
            :key="knowledge.name"
          >
            <div class="knowledge">
              <i
                :class="'knowledge-icon' + ' ' + knowledge.icon"
                :title="knowledge.name"
              ></i>
              <p class="knowledge-name">{{ knowledge.name }}</p>
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
      knowledges: data.knowledges_typed,
    };
  },
};
</script>

<style scoped>
.knowledges {
  display: flex;
  justify-content: center;
  align-items: center;
}

.all-knowledges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.knowledge-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.knowledge-section:hover > .knowledge-section-name::before {
  animation: animatedBar 1.5s linear infinite;
  display: unset;
}

.knowledge-section-name {
  color: var(--text-color);
  font-weight: 700;
  padding-bottom: 0.5rem;
  margin: 1rem 0 0.5rem 0;
  position: relative;
  overflow: hidden;
  z-index: 95;
}

.knowledge-section-name::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--text-color);
  width: 0.5rem;
  height: 0.25rem;
  border-radius: 0.15rem;
  display: none;
}

@keyframes animatedBar {
  0% {
    left: 0%;
    width: 25%;
  }
  25% {
    left: calc(50% - 25%);
    width: 50%;
  }
  50% {
    left: calc(100% - 25%);
    width: 25%;
  }
  75% {
    left: calc(50% - 25%);
    width: 50%;
  }
  100% {
    left: 0%;
    width: 25%;
  }
}

.knowledge {
  color: var(--text-color);
  display: flex;
  position: relative;
  align-items: center;
  width: 15rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 2px solid var(--text-color);
  box-shadow: 0px 0px 4px var(--shadow-color);
  border-radius: 0.5rem;
  transition: all 0.2s linear;
}

.knowledge:hover {
  color: var(--theme-color);
  border: 2px solid var(--theme-color);
}

.knowledge-icon {
  margin-right: 1rem;
  font-size: 2.5rem;
}
</style>