<template>
  <div class="skills-list">
    <SkillCard
      :iconPath="skill.icon"
      :title="skill.name"
      description="Serve para criar sites eficientes de forma simples"
      :details="[]"
      v-for="skill in skills"
    />
  </div>
</template>

<script>
  import SkillCard from '../../../organisms/Skills/SkillCard/index.vue'

  export default {
    name: 'SkillsList',
    components: {
      SkillCard,
    },
    props: {
      skills: Array,
    },
  }
</script>

<style scoped>
  .skills-list {
    display: flex;
    align-items: center;
    gap: 40px;

    width: 100%;
    padding: 20px;
    max-width: 70vw;

    overflow: hidden;
    scroll-behavior: smooth;
  }
</style>
