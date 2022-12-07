<template>
  <button @click="$emit('slide')" class="slide-button">
    <MaterialIconRounded :icon="icon" />
  </button>
</template>

<script>
  import SlideType from '../../../../enums/SlideType'
  import MaterialIconRounded from '../../../atoms/Global/Icons/MaterialIcon/MaterialIconRounded/index.vue'

  export default {
    name: 'SlideButton',
    props: {
      slideType: {
        required: true,
        type: Number,
      },
    },
    components: { MaterialIconRounded },
    data() {
      return {
        icon: '',
      }
    },
    mounted() {
      if (this.slideType === SlideType.LEFT) this.icon = 'chevron_left'
      else this.icon = 'chevron_right'
    },
  }
</script>

<style scoped>
  .slide-button {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 45px;
    min-height: 45px;

    border-radius: 50%;

    background: var(--button-background-color);

    box-shadow: 0px 0px 8px #00000025;
  }

  .slide-button span {
    font-size: 28px;
    color: var(--button-text-color);
  }
</style>
