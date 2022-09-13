<template>
  <div class="page skills" id="skills">
    <SectionTitle
      title="Olha o que eu sei fazer"
      :iconPath="emojiJugglingIcon"
    />
    <div class="skills-container">
      <div class="skills-list">
        <SkillCard
          :iconPath="vueIcon"
          title="VueJS"
          description="Serve para criar sites eficientes de forma simples"
          :details="[]"
        />
        <SkillCard
          :iconPath="vueIcon"
          title="VueJS"
          description="Serve para criar sites eficientes de forma simples"
          :details="[]"
        />
        <SkillCard
          :iconPath="vueIcon"
          title="VueJS"
          description="Serve para criar sites eficientes de forma simples"
          :details="[]"
        />
        <SkillCard
          :iconPath="vueIcon"
          title="VueJS"
          description="Serve para criar sites eficientes de forma simples"
          :details="[]"
        />
        <SkillCard
          :iconPath="vueIcon"
          title="VueJS"
          description="Serve para criar sites eficientes de forma simples"
          :details="[]"
        />
      </div>
    </div>
  </div>
</template>

<script src="./script.ts"></script>

<style src="./styles.css"></style>
