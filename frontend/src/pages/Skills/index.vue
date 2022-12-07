<template>
  <div class="section skills" id="skills">
    <SectionHeader
      title="Olha o que eu sei fazer"
      :iconPath="emojiJugglingIcon"
    />
    <div class="skills-container">
      <SlideButton @slide="slideSkillsListLeft" :slideType="slideType.LEFT" />
      <SkillsList :skills="skills" />
      <SlideButton @slide="slideSkillsListRight" :slideType="slideType.RIGHT" />
    </div>
  </div>
</template>

<script>
  import SectionHeader from '../../components/molecules/Global/SectionHeader/index.vue'
  import SkillsList from '../../components/tissues/Skills/SkillsList/index.vue'

  import emojiJugglingIcon from '../../assets/icons/sectionsTitle/EmojiJuggling.svg'
  import SlideButton from '../../components/molecules/Global/SlideButton/index.vue'
  import SlideType from '../../enums/SlideType'

  import skills from '../../static/skills'

  export default {
    name: 'Skills',
    components: {
      SectionHeader,
      SkillsList,
      SlideButton,
    },
    data() {
      return {
        slideType: SlideType,
        emojiJugglingIcon,
        cardWidth: (window.innerWidth * 0.7 - 2 * 45 - 2 * 20 - 2 * 40) / 3,
        skills,
      }
    },
    methods: {
      slideSkillsListLeft() {
        const skillsList = document.getElementsByClassName('skills-list')[0]

        if (skillsList) {
          if (skillsList.scrollLeft >= this.cardWidth + 40) {
            skillsList.scrollLeft -= this.cardWidth + 40
          } else {
            skillsList.scrollLeft = 0
          }
        }
      },
      slideSkillsListRight() {
        const skillsList = document.getElementsByClassName('skills-list')[0]

        if (skillsList) {
          skillsList.scrollLeft += this.cardWidth + 40
        }
      },
    },
  }
</script>

<style scoped>
  .skills {
    padding: 60px 0;
  }

  .skills-container {
    display: flex;
    align-items: center;

    width: 100%;

    position: relative;
  }
</style>
