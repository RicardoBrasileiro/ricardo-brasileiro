<template>
  <div class="split">
    <div></div>
    <i class="fas fa-laptop"></i>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "SectionSplit",
};
</script>
<style scoped>
.split {
  display: flex;
  align-items: center;
}

.split div {
  height: 2px;
  width: 100%;
  background: var(--primary-color);
}

.split i {
  color: var(--primary-color);
  margin: 0 1rem;
}
</style>