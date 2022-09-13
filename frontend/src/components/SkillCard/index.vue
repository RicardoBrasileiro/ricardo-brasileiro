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

<script src="./script.ts"></script>

<style scoped src="./styles.css"></style>
