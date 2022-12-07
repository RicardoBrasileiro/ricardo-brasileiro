<template>
  <div class="skill-card">
    <div class="info">
      <div class="icon-container">
        <img :src="iconPath" class="icon" />
      </div>
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <div class="details">
      <div class="detail">
        <h4>Performance</h4>
        <p>Alta</p>
      </div>
      <div class="detail">
        <h4>Tipo de tecnologia</h4>
        <p>Web</p>
      </div>
      <div class="detail">
        <h4>Escalabilidade</h4>
        <p>Alta</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'SkillCard',
    components: {},
    props: {
      iconPath: String,
      title: String,
      description: String,
      details: Array,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    min-width: calc((70vw - (2 * 45px) - (2 * 20px) - (2 * 40px)) / 3);
    padding: 20px;

    background: var(--background-color);
    box-shadow: -5px -5px 15px #ffffff, 5px 5px 15px #d9d9d9;
    border-radius: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
  }

  .icon {
    width: 85px;
    height: 85px;
  }

  .title {
    margin-bottom: 10px;
  }

  .description {
    text-align: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 100%;
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .detail p {
    color: var(--secondary-text-color);
  }
</style>
