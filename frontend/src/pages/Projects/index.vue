<template>
  <div class="section projects" id="projects">
    <SectionHeader title="Meus projetos" :iconPath="emojiBuildingIcon" />
    <div class="projects-container">
      <SlideButton @slide="slideProjectsListLeft" :slideType="slideType.LEFT" />
      <ProjectsList :projects="projects" />
      <SlideButton
        @slide="slideProjectsListRight"
        :slideType="slideType.RIGHT"
      />
    </div>
  </div>
</template>

<script>
  import SectionHeader from '../../components/molecules/Global/SectionHeader/index.vue'
  import ProjectsList from '../../components/tissues/Projects/ProjectsList/index.vue'

  import emojiBuildingIcon from '../../assets/icons/sectionsTitle/EmojiBuilding.svg'
  import SlideButton from '../../components/molecules/Global/SlideButton/index.vue'
  import SlideType from '../../enums/SlideType'

  import projects from '../../static/projects'

  export default {
    name: 'Projects',
    components: {
      SectionHeader,
      ProjectsList,
      SlideButton,
    },
    data() {
      return {
        slideType: SlideType,
        emojiBuildingIcon,
        cardWidth: (window.innerWidth * 0.7 - 2 * 45 - 2 * 20 - 40) / 2,
        projects,
      }
    },
    methods: {
      slideProjectsListLeft() {
        const ProjectsList = document.getElementsByClassName('projects-list')[0]

        if (ProjectsList) {
          if (ProjectsList.scrollLeft >= this.cardWidth + 40) {
            ProjectsList.scrollLeft -= this.cardWidth + 40
          } else {
            ProjectsList.scrollLeft = 0
          }
        }
      },
      slideProjectsListRight() {
        const ProjectsList = document.getElementsByClassName('projects-list')[0]

        if (ProjectsList) {
          ProjectsList.scrollLeft += this.cardWidth + 40
        }
      },
    },
  }
</script>

<style scoped>
  .projects {
    padding: 60px 0;
  }

  .projects-container {
    display: flex;
    align-items: center;

    width: 100%;

    position: relative;
  }
</style>
